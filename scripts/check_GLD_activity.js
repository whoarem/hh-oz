async function main() {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)

  const address = '0x4116C7388d26d8AC9180d4312D330369e51f7f72'
  const GLDToken = await ethers.getContractFactory('GLDToken')
  const gld = GLDToken.attach(address)
  console.log((await gld.balanceOf(accounts[0])).toString())
  console.log((await gld.balanceOf(accounts[1])).toString())

  await gld.transfer(accounts[1], 500)

  console.log((await gld.balanceOf(accounts[0])).toString())
  console.log((await gld.balanceOf(accounts[1])).toString())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
