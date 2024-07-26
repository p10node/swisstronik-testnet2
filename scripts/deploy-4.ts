import { ethers, network } from "hardhat";
import { encryptDataField } from "@swisstronik/utils";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { Addressable } from "ethers";

const sendShieldedTransaction = async (
  signer: HardhatEthersSigner,
  destination: string | Addressable,
  data: string,
  value: number
) => {
  // Get the RPC link from the network configuration
  const rpcLink = (network.config as any).url;

  // Encrypt transaction data
  const [encryptedData] = await encryptDataField(rpcLink, data);

  // Construct and sign transaction with encrypted data
  return await signer.sendTransaction({
    from: signer.address,
    to: destination,
    data: encryptedData,
    value,
  });
};

async function main() {
  const [owner] = await ethers.getSigners();

  // deploy
  const perc20 = await ethers.deployContract("PERC20Sample");
  await perc20.waitForDeployment();

  console.log(`PERC20Sample was deployed to: ${perc20.target}`);

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
    `Transfer Response: https://explorer-evm.testnet.swisstronik.com/tx/${transfer.hash}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
