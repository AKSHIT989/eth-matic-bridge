import { ethers, run } from "hardhat"

async function main() {
    console.log('Deploying...')
    const tokenOnEthContractFactory = await ethers.getContractFactory("EthERC20");
    const tokenOnEthContract = await tokenOnEthContractFactory.deploy("Ak ShitCoin", "AX8", 100000);
    await tokenOnEthContract.deployed();

    console.log('Eth Token Address: ', tokenOnEthContract.address)

    try {
        console.log("Verifying...")
        await run("verify:verify", {
            address: tokenOnEthContract.address,
            contract: "contracts/ERC20_ETH.sol:EthERC20",
            constructorArguments: ["Ak ShitCoin", "AX8", 100000],
        })
    } catch (error: any) {
        console.error("Error while verifying", error.message)
    }
}

main().then(() => process.exit(0)).catch((err) => { console.error(err); process.exit(1) })