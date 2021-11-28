async function main() {
  // We get the contract to deploy
  console.log(ethers)
  const NFT = await ethers.getContractFactory('NFT')
  console.log('Deploying NFT...')
  const nft = await NFT.deploy()
  await nft.deployed()
  console.log('Box deployed to:', nft.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
