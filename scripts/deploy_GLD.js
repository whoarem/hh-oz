async function main() {
  // We get the contract to deploy
  console.log(ethers)
  const GLDToken = await ethers.getContractFactory('GLDToken')
  console.log('Deploying GLDToken...')
  const gld = await GLDToken.deploy(10000)
  await gld.deployed()
  console.log('Box deployed to:', gld.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
