const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;
const rpcURL ="https://ropsten.infura.io/v3/ea5eca6e1a3f4128b92b5b0fc5441ed8";
const web3 = new Web3(rpcURL);
const senderaccount="0x7989bF358AB022aCd668d9BEaa666d3c997f6ED8";
//const reciveraccount_private=Buffer.from('c36ec40a3c5c163bd97202c33f8441d7769b6d53151f0daa4a7e36c09fb4682a', 'hex');
const senderaccount_private=Buffer.from('c36ec40a3c5c163bd97202c33f8441d7769b6d53151f0daa4a7e36c09fb4682a','hex');
const reciveraccount="0xd89C1DbebB244061e1199050886cB4A43E327B93";
web3.eth.getTransactionCount(senderaccount, (err, txCount) => {
    console.log('nonce view:', txCount);
    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      to:       reciveraccount,
      value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
      gasLimit: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }
    const tx = new Tx(txObject,{'chain': 'ropsten'});
    tx.sign(senderaccount_private);
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');
    web3.eth.sendSignedTransaction(raw, (err, txHash)=>{
        if(!err){
            console.log('transection successfully:', txHash);
        }else{
            console.log(err);
        }
      });
  })