const { ethers, upgrades } = require('hardhat')

async function main() {
  //   const BoxV2 = await ethers.getContractFactory('BoxV2')
  const BoxV3 = await ethers.getContractFactory('BoxV3')
  console.log('Upgrading Box...')
  await upgrades.upgradeProxy(
    '0xB5643e636B38C5614A7f1C819a4AfC0dd4a32fbC',
    BoxV3
  )
  console.log('Box upgraded')
}

main()
