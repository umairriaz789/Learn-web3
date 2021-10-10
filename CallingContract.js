const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;
const rpcURL ="https://ropsten.infura.io/v3/ea5eca6e1a3f4128b92b5b0fc5441ed8";
const web3 = new Web3(rpcURL);
const account="0xd89C1DbebB244061e1199050886cB4A43E327B93";
const private_key="bc7d058358f9161a9e2cfba2eaca3957ec9ba5371a7ba152eb1ff12a07c6786c";
//const account_Buffer=Buffer.from(account,'hex');
const private_key_Buffer=Buffer.from(private_key,'hex');
const ABI=[
	{
		"inputs": [],
		"name": "getage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const contractAddress="0xd4f641e80a4050f835523f96bbb98557af7d2223";
const contract = new web3.eth.Contract(ABI, contractAddress);
const calldata=contract.methods.getage().encodeABI();
//const calldata=contract.methods.setage(3).encodeABI();
const CallingContract = async() =>{
    try{
        const txNonce=await web3.eth.getTransactionCount(account);
        const txObj={
            nonce: web3.utils.toHex(txNonce),
            to: contractAddress,
            gasLimit: web3.utils.toHex(1000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei("10","gwei")),
            data: calldata
        }
        const tx = new Tx(txObj,{'chain': 'ropsten'});
        tx.sign(private_key_Buffer);
        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');
        const response= await web3.eth.sendSignedTransaction(raw);
        console.log('Hash', response.transactionHash);

    }catch(e){
        console.log('Error:',e);

    }
}


const Getage=async()=>{
    try{
        const response= await contract.methods.getage().call();
        console.log('value:', response);
        
    }catch(e){
        console.log('Error:',e);
    }
}
CallingContract();
//Getage();

