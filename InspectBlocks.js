const Web3 = require('web3');
const rpcURL ="https://ropsten.infura.io/v3/ea5eca6e1a3f4128b92b5b0fc5441ed8";
const web3 = new Web3(rpcURL);
const getBlockNumber=async()=>{
    try{
        const BlockNumber=await web3.eth.getBlockNumber();
        console.log('latest Block Number:',BlockNumber);
    }catch(e){
        console.log('Error:',e);
    }

}
const getBlocks=async()=>{
    try{
        const Block=await web3.eth.getBlock('latest');
        console.log('latest Block Number:',Block);
    }catch(e){
        console.log('Error:',e);
    }

}
const getTenBlocks=async()=>{
    try{
        const Blocks=await web3.eth.getBlockNumber();
        for (let i = 0; i < 5; i++){
            const block=await web3.eth.getBlock(Blocks - i);
            console.log(block);
        }
    }catch(e){
        console.log('Error:',e);
    }

}
//getBlockNumber();
//getBlocks();
getTenBlocks();