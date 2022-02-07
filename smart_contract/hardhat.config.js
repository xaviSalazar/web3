// https://eth-ropsten.alchemyapi.io/v2/Z6UzdeSlTpLVhBYh-S1eiJbEzq7JlqUr

require ('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Z6UzdeSlTpLVhBYh-S1eiJbEzq7JlqUr',
      accounts: ['132aecaf3e601ecf74eca27b0c827b6324f275e71b627c3532ae11d3cf37a972']
    }
  }
}