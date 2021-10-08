require('dotenv').config();
const Web3 = require('web3');
const rpcURL =process.env.INF_URL;
const web3 = new Web3(rpcURL);
const account ="0x00000000219ab540356cBB839Cbe05303d7705Fa";
web3.eth.getBalance(account, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
    console.log(account);
  })