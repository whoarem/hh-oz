const { ethers, upgrades } = require('hardhat')

async function main() {
  //   const BoxV2 = await ethers.getContractFactory('BoxV2')
  const BoxV3 = await ethers.getContractFactory('BoxV3')
  console.log('Upgrading Box...')
  await upgrades.upgradeProxy(
    '0x1Cb809B8d0fA78DcBEE843349fc0518C98B6e647',
    BoxV3
  )
  console.log('Box upgraded')
}

main()
