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