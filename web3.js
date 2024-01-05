const  {Web3} = require("web3");
const blockchainAbi = require('./build/contracts/HelloBlockchain.json').abi;
const provider = new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/3a358f47050c46669ac22257c4d28886")
const web3 = new Web3(provider)
const abi = blockchainAbi
const contractInstance = new web3.eth.Contract(abi, " 0xAa4997710630ae184BFb425B6Dca570E32dd5ac8")
export default contractInstance