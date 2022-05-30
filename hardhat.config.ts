import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import dotenv from "dotenv"
import "solidity-coverage";

import { HardhatUserConfig } from "hardhat/config"

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_API_KEY,
      accounts: [process.env.PRIVATE_KEY as string]
    },
    matic: {
      url: process.env.MATIC_API_KEY,
      accounts: [process.env.PRIVATE_KEY as string]
    }
  },
  etherscan: {
    apiKey: {
      ropsten: process.env.ROPSTEN_EXPLORER_KEY as string,
      polygonMumbai: process.env.MATIC_API_KEY as string
    },
  }
};

export default config;