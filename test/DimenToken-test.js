const { expect } = require("chai");
const { BigNumber, utils } = require("ethers");
const { ethers, deployments } = require("hardhat");

describe ("Dimas NFT", async function () {
    let owner, user1, user2, user3;

    beforeEach ("Deploy the contract", async function () {
        [owner, user1, user2, user3] = await ethers.getSigners();

        DimenToken = await ethers.getContractFactory("DimenToken");
        dimenToken = await DimenToken.deploy();
        await dimenToken.deployed();

        expect(await dimenToken.balanceOf(owner.address)).to.equal(0);
        expect(await dimenToken.balanceOf(user1.address)).to.equal(0);
        expect(await dimenToken.balanceOf(user2.address)).to.equal(0);
        expect(await dimenToken.balanceOf(user3.address)).to.equal(0);
    });

    describe("Mint", async function () {        
        it("Incorrect and correct mint", async function () {
            await expect(dimenToken.connect(user1).mint(101)).to.be.revertedWith("Purchase would exceed max supply");
            expect(await dimenToken.balanceOf(user1.address)).to.equal(0);

            expect(await dimenToken.connect(user1).mint(100));
            expect(await dimenToken.balanceOf(user1.address)).to.equal(100);
        });

    });
});
