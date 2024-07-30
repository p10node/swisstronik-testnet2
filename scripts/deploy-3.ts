import { ethers } from "hardhat";
import { sendShieldedTransaction } from "../utils/swisstronik";

async function main() {
  const [owner] = await ethers.getSigners();
  console.log("Deployer:", owner.address);

  // deploy
  const contract = await ethers.deployContract("MyERC721Token");
  await contract.waitForDeployment();
  console.log(
    `Deployed to: ${contract.target} <- copy that for "the deployed contract address"`
  );

  // mint
  const safeMint = await sendShieldedTransaction(
    owner,
    contract.target,
    contract.interface.encodeFunctionData("safeMint", [owner.address]),
    0
  );

  await safeMint.wait();
  console.log(
    `Mint Response: https://explorer-evm.testnet.swisstronik.com/tx/${safeMint.hash} <- copy that for URL`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
