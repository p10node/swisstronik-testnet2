import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import { env } from "process";
import * as dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = env.PRIVATE_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    swisstronikTestnet: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "",
    customChains: [
      {
        network: "swisstronikTestnet",
        chainId: 1291,
        urls: {
          apiURL: "https://explorer-evm.testnet.swisstronik.com/api",
          browserURL: "https://explorer-evm.testnet.swisstronik.com",
        },
      },
    ],
  },
};

export default config;
