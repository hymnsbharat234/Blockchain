const HDWalletProvider= require('@truffle/hdwallet-provider');

const Web3 =require('web3');
const {interface,bytecode}=require('./compile');

const provider = new HDWalletProvider(

 'opinion detect salmon link liar payment enrich over fragile mention jewel chef',
 'https://rinkeby.infura.io/v3/6012828e524b4cfab04b296af3aad782'  
)
const web3 =new Web3(provider)

const deploy =async () => {
    const accounts=await web3.eth.getAccounts();

    console.log('Attempting to deploy accounts',accounts[0]);
   const result= await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments: ['Hi there!']})
    .send({
        gas:'1000000',
        from:accounts[0]
    })
    console.log('Contract deployed to',result.options.address);
    provider.engine.stop();
}
deploy();