var Web3 = require('web3');
varcoinbase = "0xade35dd8a31207f3e1ae026ed89e32fce86a4858";
var destination = "0xade35dd8a31207f3e1ae026ed89e32fce86a4858";
if (typeof web3 !== 'undefined'){
    web3 = new Web3(web3.currentProvider);}
else{
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}
// web3.eth.personal
// .unlockAccount(coinbase,"123",600)
// .then(() => {
//     console.log('Successfully')
// })
// .catch(err => {
//     console.error(err)
// })

for (i=1;i<=2;i++){
    var char = "0x0";
    var str = i.toString();
    char = char + str;
    sendTx = web3.eth
        .sendTransaction({from:coinbase,to:destination,data:char})
        .then(() => {
            console.log('Successfully')
        })
        .catch(err => {
            console.error(err)
        })
    console.log("TX number "+i+" has sent");
}
console.log("Done!!")


    

