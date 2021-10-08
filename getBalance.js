require('dotenv').config();
const Web3 = require('web3');
const rpcURL =process.env.INF_URL;
const web3 = new Web3(rpcURL);
