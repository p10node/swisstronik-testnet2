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
  const contract = await ethers.deployContract("MyERC721Token");
  await contract.waitForDeployment();
  console.log(`Deployed to: ${contract.target}`);

  // mint
  const safeMint = await sendShieldedTransaction(
    owner,
    contract.target,
    contract.interface.encodeFunctionData("safeMint", [owner.address]),
    0
  );

  await safeMint.wait();
  console.log(
    `Mint Response: https://explorer-evm.testnet.swisstronik.com/tx/${safeMint.hash}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
