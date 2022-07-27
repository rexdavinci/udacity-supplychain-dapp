const HDWalletProvider = require('@truffle/hdwallet-provider')
const privateKey = 'private-key'
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, 'https://rinkeby.infura.io/v3/project-id'),
      network_id: 4
    }
  }
};

