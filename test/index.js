const { expect } = require('chai')
const { ethers, upgrades } = require('hardhat')

describe('Box', function () {
  it('works', async () => {
    const Box = await ethers.getContractFactory('Box')
    const BoxV3 = await ethers.getContractFactory('BoxV3')

    const instance = await upgrades.deployProxy(Box, [42])
    const upgraded = await upgrades.upgradeProxy(instance.address, BoxV3)

    const value = await upgraded.retrieve()
    expect(value.toString()).to.equal('42')
  })
})
