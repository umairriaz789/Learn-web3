const Web3 = require('web3');
const rpcURL ="https://ropsten.infura.io/v3/ea5eca6e1a3f4128b92b5b0fc5441ed8";
const web3 = new Web3(rpcURL);
const account ="0x4B74b1f52781686e8Df4AF4E25D391732060C527";
web3.eth.getBalance(account, (err, wei) => {
  if (!err){
    balance = web3.utils.fromWei(wei, 'ether');
    console.log(balance);
  }else {
    console.log('Error:', err);
  }
})