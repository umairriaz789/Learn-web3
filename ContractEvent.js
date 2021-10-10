const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;
const rpcURL ="https://ropsten.infura.io/v3/ea5eca6e1a3f4128b92b5b0fc5441ed8";
const web3 = new Web3(rpcURL);
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
const getEvent=async()=>{
    try{
        const events=await contract.getPastEvents('AllEvents',{'fromBlock':0,'toBlock': 'latest'});
        console.log('EventsCount:',events);

    }catch(e){
        console.log('Error:',e);

    }

}
getEvent();