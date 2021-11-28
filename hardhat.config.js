/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-ethers')
require('@openzeppelin/hardhat-upgrades')

const { alchemyApiKey, mnemonic } = require('./secrets.json')

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },
}
