import { ethers } from "hardhat";
import { sendShieldedTransaction } from "../utils/swisstronik";

async function main() {
  const [owner] = await ethers.getSigners();
  console.log("Deployer:", owner.address);

  // deploy
  const perc20 = await ethers.deployContract("PERC20Sample");
  await perc20.waitForDeployment();

  console.log(
    `PERC20Sample was deployed to: ${perc20.target} <- copy that for "the deployed contract address"`
  );

  // Wraps SWTR to PSWTR
  const tx = await owner.sendTransaction({
    from: owner.address,
    to: perc20.target,
    value: ethers.parseEther("0.001").toString(),
  });
  await tx.wait();

  // transfer
  const transfer = await sendShieldedTransaction(
    owner,
    perc20.target,
    perc20.interface.encodeFunctionData("transfer", [
      "0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1",
      ethers.parseEther("0.001").toString(),
    ]),
    0
  );
  await transfer.wait();
  console.log(
    `Transfer Response: https://explorer-evm.testnet.swisstronik.com/tx/${transfer.hash} <- copy that for URL`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
