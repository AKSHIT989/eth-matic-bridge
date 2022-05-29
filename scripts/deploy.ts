import { ethers } from "hardhat"

async function main() {
    console.log('Deploy')
    const tokenOnEthContractFactory = await ethers.getContractFactory("EthERC20");
    const tokenOnEthContract = await tokenOnEthContractFactory.deploy("Ak ShitCoin", "AX8", 100000);
    await tokenOnEthContract.deployed();

    console.log("Eth Token Deployed at ", tokenOnEthContract.address);
}

main().then(() => process.exit(0)).catch((err) => { console.error(err); process.exit(1) })