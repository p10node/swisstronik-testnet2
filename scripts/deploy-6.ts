import "@openzeppelin/hardhat-upgrades";
import { ethers, upgrades } from "hardhat";
import { sendShieldedTransaction } from "../utils/swisstronik";

async function main() {
  const [owner] = await ethers.getSigners();
  console.log("Deployer:", owner.address);

  // contract 1
  const Swisstronik = await ethers.getContractFactory("Swisstronik");
  const swisstronik = await Swisstronik.deploy();
  await swisstronik.waitForDeployment();
  console.log("Contract address 1 deployed to:", swisstronik.target);

  // proxy admin
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdmin = await ProxyAdmin.deploy(owner.address);
  await proxyAdmin.waitForDeployment();
  console.log("ProxyAdmin address deployed to:", proxyAdmin.target);

  // proxy
  const TransparentUpgradeableProxy = await ethers.getContractFactory(
    "TransparentUpgradeableProxy"
  );
  const proxy = await TransparentUpgradeableProxy.deploy(
    swisstronik.target,
    proxyAdmin.target,
    Uint8Array.from([])
  );

  console.log(
    `Proxy contract address: ${proxy.target} <- copy that for "the deployed proxy contract address"`
  );

  // contract 2
  const Swisstronik2 = await ethers.getContractFactory("Swisstronik2");
  const swisstronik2 = await Swisstronik2.deploy();
  await swisstronik2.waitForDeployment();
  console.log(`Contract address 2 deployed to: ${swisstronik2.target}`);

  // upgrade
  const upgrade = await sendShieldedTransaction(
    owner,
    proxyAdmin.target,
    proxyAdmin.interface.encodeFunctionData("upgradeAndCall", [
      proxy.target,
      swisstronik2.target,
      Uint8Array.from([]),
    ]),
    0
  );
  await upgrade.wait();

  console.log(
    `Response: https://explorer-evm.testnet.swisstronik.com/tx/${upgrade.hash} <- copy that for "the link to the contract implementation replacement transaction"`
  );

  // await run("verify:verify", {
  //   address: contract.target,
  //   constructorArguments: [],
  // });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
