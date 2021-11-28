async function main() {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)

  const address = '0x90E6e79f635b40e6B2335D61F013e7e8E547012c'
  const NFT = await ethers.getContractFactory('NFT')
  const nft = NFT.attach(address)

  await nft.awardItem(accounts[0], 'aaa')
  // console.log(item)
  // console.log(item.value.toString())
  // console.log(await nft.ownerOf(2))
  // console.log(await nft.tokenURI(2))
  const items = await nft.balanceOf(accounts[0])
  console.log(items.toString())
  console.log(await nft.tokenURI(items - 1))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
