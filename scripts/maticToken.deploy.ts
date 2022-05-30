import { ethers } from "hardhat"

async function main() {
    console.log('Deploying...')
    const tokenOnMaticContractFactory = await ethers.getContractFactory("MaticERC20");
    const tokenOnMaticContract = await tokenOnMaticContractFactory.deploy("Ak ShitCoin", "AX8", 100000);
    await tokenOnMaticContract.deployed();

    console.log("Matic Token Address: ", tokenOnMaticContract.address);
}

main().then(() => process.exit(0)).catch((err) => { console.error(err); process.exit(1) })