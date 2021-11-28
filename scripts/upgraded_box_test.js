async function main() {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)

  // Set up an ethers contract, representing our deployed Box instance
  // const address = '0xb365a4C27284927414CFDfFdD1F9054380497b29' // local
  const address = '0xB5643e636B38C5614A7f1C819a4AfC0dd4a32fbC' // ropsten
  const BoxV3 = await ethers.getContractFactory('BoxV3')
  const box = await BoxV3.attach(address)

  //   Call the retrieve() function of the deployed Box contract
  const value = await box.retrieve()
  console.log('Box value is', value.toString())

  //   Send a transaction to store() a new value in the Box
  await box.increment()

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
