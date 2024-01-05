const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    dashboard: {},
    loc_development_development: {
      network_id: "*",
      port: 8545,
      host: "127.0.0.1"
    },
    "inf_truffle-2_sepolia": {
      network_id: 11155111,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\Nwodoh\\Documents\\codes\\truffle-2\\mnemonic.env', 'utf-8'), "https://sepolia.infura.io/v3/3a358f47050c46669ac22257c4d28886")
    }
  },
  compilers: {
    solc: {
      version: "0.8.13"
    }
  },
  db: {
    enabled: false,
    host: "127.0.0.1"
  }
};
