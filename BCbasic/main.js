//import library sha256 to calculate hash value
//used for cryptographic security
const SHA256 = require('crypto-js/sha256');

class Transaction{
    constructor (fromAddress, toAddress, amount){
            this.fromAddress = fromAddress;
            this.toAddress = toAddress;
            this.amount = amount;
    }
    
}

class Block{
    /*
    constructor - contains the properties of the  block
    index - optional & tells where the block sits on the  chain
    timpestamp - when the block is created
    data - any type of data that needed to associated with the block
    previousHash - is a string contains the hash of the previous block
    hash - contains the hash of our block
    */
    constructor(timestamp, data, previousHash= ''){ 
        //initiate
        //this.index =  index;
        this.timestamp = timestamp;
        this.transaction = this.transaction;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }  

    // create a method to calculate the hash of the block
    // install library to calculate hash function - crypto-js
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    //mining 
    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){    //???
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined :" +this.hash);
    }
}



//new class for BLOCK CHAIN
class BlockChain{
    constructor(){
        // array which contains the Genesis block
        this.chain = [this.createGenesisBlock()] ;
        this.difficulty = 2; 
        this.pendingTransactions = [];
        //how much coins, miners can get as a reward
        this.miningReward = 100;
    }

    //create the first block, manually
    createGenesisBlock(){
        //as the first block, we can assign any value for previous block or 0
        return new Block("01/01/2022", "GenesisBlock" , "0")

    }

    //return the latest block in the  chain
    getlatestBlock(){
        return this.chain[this.chain.length-1];
    }

    //mining method
    minePendingTransactions(miningRewardAddress){
        //allow to create a new block for all the transactions
        //in real example miners will choose the transactions to create a new block 
        let block = new Block(Date.now(), this.pendingTransactions);
        //mine block
        block.mineBlock(this.difficulty);

        console.log('Block successfully mined');
        //add block to the chain
        this.chain.push(block);

        //reset the pending transactions
        this.pendingTransactions = [
            //can define array with one new element
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }


    //add this to the pending transaction
    createTransaction(transaction){
        this.pendingTransactions.push.apply(transaction);
    }

    //check the balance of an address
    getBalanceOfAddress(address){
        let balance = 0;

        for(const block of this.chain){ //loop over block
            for(const trans of block.transaction){ //loop over transactions of one block
                if(trans.fromAddress == address){ //sender
                    balance -= trans.amount;
                }
                if(trans.toAddress == address){ //receiver
                    balance += trans.amount;
                }
            }
        }
        
        return balance;
    }


/*
    //add new block to the chain
    addBlock(newBlock){
        //set the previous hash (the last block of the chain)
        newBlock.previousHash = this.getlatestBlock().hash;

        //when we make change, we should recalculate the hash value
        //newBlock.hash = newBlock.calculateHash();

        newBlock.mineBlock(this.difficulty);

        //push the newblock into the chain
        this.chain.push(newBlock);
    }
*/


    //check the validation 
    ischainValid(){
        //start with i=1 coz, the i=0 is Genesis block
       for (let i=1; i<this.chain.length; i++){
            //get current block & previous block
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return "false, The actual  hash value doesn't match with the current hash value";
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return "false, The previous hash value of the current block doesn't match  with the actual hash value of the previous block";
            }
       }

       return true;
    }
}


//TEST
//create new variable sample block chain as 
let sampleBlockChain = new BlockChain();

//create transactions 
sampleBlockChain.createTransaction(new Transaction('address1', 'address2', 100));
sampleBlockChain.createTransaction(new Transaction('address2', 'address1', 50));
// here, address 1 & address 2 would be the public key of someones wallet


console.log('\n starting the miner...');
sampleBlockChain.minePendingTransactions(sampleaddress1);
//sample address 1 - fake address to send the mining reawrds
console.log('\n Balance of sampleaddress1 is', sampleBlockChain.getBalanceOfAddress('sampleaddress1'));
//console.log('\n Balance of address1 is', sampleBlockChain.getBalanceOfAddress('address1'));


console.log('\n starting the miner again...');
sampleBlockChain.minePendingTransactions(sampleaddress1);
console.log('\n Balance of sampleaddress1 is', sampleBlockChain.getBalanceOfAddress('sampleaddress1'));

/*
//add new blocks
console.log('mining block 1 ...');
sampleBlockChain.addBlock(new Block(1, "02/01/2022", { amount: 4}));

console.log('mining block 2 ...')
sampleBlockChain.addBlock(new Block(2, "07/01/2022", { amount: 10}));


//view , 4 spaces, ?null
//console.log(JSON.stringify(sampleBlockChain, null, 4));

//check the validation
console.log('is Block chain valid?' +  sampleBlockChain.ischainValid());

//take the first block and overwrites it's data
sampleBlockChain.chain[1].data = { amount: 100};
//check the validation
console.log('is Block chain valid?' +  sampleBlockChain.ischainValid());

//recalculate the hash of block 1
sampleBlockChain.chain[1].hash =  sampleBlockChain.chain[1].calculateHash();
//check the validation
console.log('is Block chain valid?' +  sampleBlockChain.ischainValid());

*/
