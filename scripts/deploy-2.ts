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
  const contract = await ethers.deployContract("TestToken");
  await contract.waitForDeployment();
  console.log(`Deployed to: ${contract.target}`);

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
    `Transfer Response: https://explorer-evm.testnet.swisstronik.com/tx/${transfer.hash}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
