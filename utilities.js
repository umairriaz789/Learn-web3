const _ = require('Underscore');
const Web3 = require('web3');
const rpcURL ="https://ropsten.infura.io/v3/ea5eca6e1a3f4128b92b5b0fc5441ed8";
const web3 = new Web3(rpcURL);
const getaverageGasPrice=async()=>{
    try {
        const GasPrice=await web3.eth.getGasPrice();
        console.log(GasPrice);        
    } catch (error) {
        console.log('Error:',error);
    }
}
const Hash=(stringtoEncode)=>{
    try {
        console.log('sha3:',web3.utils.sha3('stringtoEncode'));
        console.log('keccak256:',web3.utils.keccak256('stringtoEncode'));  
    } catch (error) {
        console.log('Error:',error);
        
    }
}
const RandomNumber=(bytes)=>{
    try {
        console.log('Number is:',web3.utils.randomHex(bytes));
    } catch (error) {
        console.log('Error:',error);
        
    }
}
const underscorelib=()=>{
    try {
        console.log('contains?',_.contains([1,2,3], 4));
    } catch (error) {
        console.log('Error:',error);
        
    }
}

//getaverageGasPrice();
//Hash('UET');
//RandomNumber(2);
underscorelib();