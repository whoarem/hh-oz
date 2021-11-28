async function main() {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)

  // Set up an ethers contract, representing our deployed Box instance
  const address = '0x1Cb809B8d0fA78DcBEE843349fc0518C98B6e647' // local
  //   const address = '0xa42120a992461C072adDa847fdc62696Ae8C985F' // ropsten
  const Box = await ethers.getContractFactory('Box')
  const box = await Box.attach(address)

  //   Call the retrieve() function of the deployed Box contract
  const value = await box.retrieve()
  console.log('Box value is', value.toString())

  //   Send a transaction to store() a new value in the Box
  await box.store(23)

  //   Call the retrieve() function of the deployed Box contract
  const value2 = await box.retrieve()
  console.log('Box value is', value2.toString())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
