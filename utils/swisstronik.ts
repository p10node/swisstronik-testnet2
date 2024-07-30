import { network } from "hardhat";
import { encryptDataField } from "@swisstronik/utils";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { Addressable } from "ethers";

export const sendShieldedTransaction = async (
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
