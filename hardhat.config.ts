import "@nomiclabs/hardhat-waffle"
import dotenv from "dotenv"

import { HardhatUserConfig } from "hardhat/config"

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_API_KEY,
      accounts: [process.env.PRIVATE_KEY || ""]
    }
  }
};

export default config;