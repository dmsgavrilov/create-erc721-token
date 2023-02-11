const hre = require("hardhat");
const { BigNumber, utils } = require("ethers");
const hardhat = require("hardhat");

async function main() {

  const DimenToken = await ethers.getContractFactory("DimenToken");
  const dimenToken = await DimenToken.deploy();
  await dimenToken.deployed();

  console.log("DimenToken deployed to:", dimenToken.address);

  console.log("Waiting for 5 confirmations")
  await dimenToken.deployTransaction.wait(5)
  console.log("Confirmed!")

  console.log("Verifying...")
  await hardhat.run("verify:verify", {
    address: dimenToken.address,
    constructorArguments: [],
  })
  console.log("VERIFICATION COMPLETE")
}

main() 
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

