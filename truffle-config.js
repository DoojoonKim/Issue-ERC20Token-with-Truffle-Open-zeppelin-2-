// require('dotenv').config();
// const Web3 = require("web3");
// const web3 = new Web3();
// const WalletProvider = require("truffle-wallet-provider");
// const Wallet = require('ethereumjs-wallet');

// var mainNetPrivateKey = new Buffer(process.env["MAINNET_PRIVATE_KEY"], "hex") //private key
// var mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
// var mainNetProvider = new WalletProvider(mainNetWallet, "hhttps://mainnet.infura.io/v3/ca2127b051f34411bd26bf68a17a71f7");

// var ropstenPrivateKey = new Buffer(process.env["ROPSTEN_PRIVATE_KEY"], "hex")
// var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
// var ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/v3/ca2127b051f34411bd26bf68a17a71f7");
// module.exports = {
//   /**
//    * Networks define how you connect to your ethereum client and let you set the
//    * defaults web3 uses to send transactions. If you don't specify one truffle
//    * will spin up a development blockchain for you on port 9545 when you
//    * run `develop` or `test`. You can ask a truffle command to use a specific
//    * network from the command line, e.g
//    *
//    * $ truffle test --network <network-name>
//    */

//   networks: {
//     // Useful for testing. The `development` name is special - truffle uses it by default
//     // if it's defined here and no other network is specified at the command line.
//     // You should run a client (like ganache-cli, geth or parity) in a separate terminal
//     // tab if you use this network and you must also set the `host`, `port` and `network_id`
//     // options below to some value.
//     //
//     development: {
//      host: "127.0.0.1",     // Localhost (default: none)
//      port: ":7545",            // Standard Ethereum port (default: none)
//      network_id: 5777,       // Any network (default: none)
//     },

//     // Another network with more advanced options...
//     // advanced: {
//       // port: 8777,             // Custom port
//       // network_id: 1342,       // Custom network
//       // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
//       // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
//       // from: <address>,        // Account to send txs from (default: accounts[0])
//       // websockets: true        // Enable EventEmitter interface for web3 (default: false)
//     // },

//     // Useful for deploying to a public network.
//     // NB: It's important to wrap the provider as a function.
//     ropsten: {
//       provider: ropstenProvider,
//       gas: 46000,
//       gasPrice: web3.toWei("20", "gwei"),
//       network_id: "3" // Ropsten has a lower block limit than mainnet
//       // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
//       // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
//       // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
//     },
//     mainnet: {
//       provider: mainNetProvider,
//       gas: 46000,
//       gasPrice: web3.toWei("20", "gwei"),
//       network_id: "1",
//     // Useful for private networks
//     // private: {
//       // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
//       // network_id: 2111,   // This network is yours, in the cloud.
//       // production: true    // Treats this network as if it was a public net. (default: false)
//     // }
//   },

//   // Set default mocha options here, use special reporters etc.
//   mocha: {
//     // timeout: 100000
//   },

//   // Configure your compilers
//   compilers: {
//     solc: {
//       // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
//       // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
//       // settings: {          // See the solidity docs for advice about optimization and evmVersion
//        optimizer: {
//          enabled: true,
//          runs: 200
//        }
//       //  evmVersion: "byzantium"
//       }
//     }
//   }
// };
// require('dotenv').config();
// const Web3 = require("web3");
// const web3 = new Web3();
// const WalletProvider = require("truffle-wallet-provider");
// const Wallet = require('ethereumjs-wallet');

// var mainNetPrivateKey = new Buffer(process.env["MAINNET_PRIVATE_KEY"], "hex") //private key
// var mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
// var mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/v3/ca2127b051f34411bd26bf68a17a71f7");

// var ropstenPrivateKey = new Buffer(process.env["ROPSTEN_PRIVATE_KEY"], "hex")
// var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
// var ropstenProvider = new WalletProvider(ropstenWallet, "https://mainnet.infura.io/v3/ca2127b051f34411bd26bf68a17a71f7");


// module.exports = {
//   networks: {
//     development: {
//       host: "localhost",
//       port: 8545,
//       network_id: "*" // Match any network id
//     },
//     ropsten: {
//       provider: function() {
//         return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/");
//       },
//       network_id: '3',
//       gas: 4600000,
//       gasPrice: web3.toWei("20", "gwei"),
//       network_id: "3",
//     },
//     mainnet: {
//       provider: mainNetProvider,
//       gas: 4600000,
//       gasPrice: web3.toWei("20", "gwei"),
//       network_id: "1",
//     }
//   }
// };
const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "eb0fd0e272554a26aef821c7e297d09e";

const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: ":7545",
      network_id: 5777
    },
    ganache: {
      host: "localhost",
      port: ":8545",
      network_id: "*"
    },
    ropsten: {
          // provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/${infuraKey}"),
          // gas: 460000,
          gasPrice: 4600000000,
          network_id: 3, // Ropsten has a lower block limit than mainnet
          // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
          timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
          skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  }
  
};
