import hre, { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  console.log("Deployer:", owner.address);

  const contract = await hre.ethers.deployContract("Swisstronik", [
    // "Hello Swisstronik!!",
  ]);

  await contract.waitForDeployment();

  console.log(
    `Swisstronik contract deployed to: "${contract.target}" <- copy that for "the deployed contract address"`
  );
}

// DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
