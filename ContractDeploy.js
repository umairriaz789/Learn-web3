const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;
const rpcURL ="https://ropsten.infura.io/v3/ea5eca6e1a3f4128b92b5b0fc5441ed8";
const web3 = new Web3(rpcURL);
const account="0xd89C1DbebB244061e1199050886cB4A43E327B93";
const private_key="bc7d058358f9161a9e2cfba2eaca3957ec9ba5371a7ba152eb1ff12a07c6786c";
const bytecode="608060405234801561001057600080fd5b5061016d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636e424d5a1461003b578063b3f2e4711461006b575b600080fd5b610055600480360381019061005091906100ba565b610089565b60405161006291906100f6565b60405180910390f35b61007361009c565b60405161008091906100f6565b60405180910390f35b6000816000819055506000549050919050565b60008054905090565b6000813590506100b481610120565b92915050565b6000602082840312156100d0576100cf61011b565b5b60006100de848285016100a5565b91505092915050565b6100f081610111565b82525050565b600060208201905061010b60008301846100e7565b92915050565b6000819050919050565b600080fd5b61012981610111565b811461013457600080fd5b5056fea2646970667358221220fa1b7b631837d3bbfc90c81cc8f87e04c49c26f6b1eb962a8025a19297f3db7e64736f6c63430008070033";
const bytecodeBuffer=Buffer.from(bytecode,'hex');
const private_key_Buffer=Buffer.from(private_key,'hex');
const ContractDeploy = async() =>{
    try{
        const txNonce=await web3.eth.getTransactionCount(account);
        const txObj={
            nonce: web3.utils.toHex(txNonce),
            data: bytecodeBuffer,
            gasLimit: web3.utils.toHex(1000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei("10","gwei"))
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
ContractDeploy();