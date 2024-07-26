import "@openzeppelin/hardhat-upgrades";
import { upgrades, ethers } from "hardhat";
import { keccak256, toUtf8Bytes, zeroPadValue } from "ethers";

async function main() {
  const TokenUseProxy = await ethers.getContractFactory("TokenUseProxy");
  const deploy = await upgrades.deployProxy(TokenUseProxy);
  const contract = await deploy.waitForDeployment();

  console.log(`Swisstronik contract deployed to proxy: ${contract.target}`);

  const implementationSlot = zeroPadValue(
    ethers.toBeHex(
      BigInt(keccak256(toUtf8Bytes("eip1967.proxy.implementation"))) - 1n
    ),
    32
  );

  const contractAddress = await ethers.provider.getStorage(
    contract.target,
    implementationSlot
  );

  console.log("Contract Address:", contractAddress);

  // await run("verify:verify", {
  //   address: contract.target,
  //   constructorArguments: [],
  // });
}

// DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
