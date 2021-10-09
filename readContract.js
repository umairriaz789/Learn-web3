const Web3 = require('web3');
const rpcURL ="https://ropsten.infura.io/v3/ea5eca6e1a3f4128b92b5b0fc5441ed8";
const web3 = new Web3(rpcURL);
const ABI=[
	{
		"inputs": [],
		"name": "retrieve",
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
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const contractAddress="0x757d88235AE09476CE9D481091395Ed595d4241d";
const contract = new web3.eth.Contract(ABI, contractAddress);
contract.methods.retrieve().call((err,result)=>{
    if(!err){
        console.log('result from contract', result);
    }
})