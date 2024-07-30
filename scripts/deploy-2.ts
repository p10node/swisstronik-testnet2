import { ethers } from "hardhat";
import { sendShieldedTransaction } from "../utils/swisstronik";

async function main() {
  const [owner] = await ethers.getSigners();
  console.log("Deployer:", owner.address);

  // deploy
  const contract = await ethers.deployContract("TestToken");
  await contract.waitForDeployment();
  console.log(
    `Deployed to: ${contract.target} <- copy that for "the deployed contract address"`
  );

  // mint
  const mint100TokensTx = await sendShieldedTransaction(
    owner,
    contract.target,
    contract.interface.encodeFunctionData("mint100tokens"),
    0
  );

  await mint100TokensTx.wait();
  console.log("Mint Response:", mint100TokensTx.hash);

  // transfer
  const transfer = await sendShieldedTransaction(
    owner,
    contract.target,
    contract.interface.encodeFunctionData("transfer", [
      "0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1",
      ethers.parseEther("1").toString(),
    ]),
    0
  );
  await transfer.wait();
  console.log(
    `Transfer Response: https://explorer-evm.testnet.swisstronik.com/tx/${transfer.hash} <- copy that for "the token transaction link"`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
