//import library sha256 to calculate hash value
//used for cryptographic security
const SHA256 = require('crypto-js/sha256');


class Block{
    /*
    constructor - contains the properties of the  block
    index - optional & tells where the block sits on the  chain
    timpestamp - when the block is created
    data - any type of data that needed to associated with the block
    previousHash - is a string contains the hash of the previous block
    hash - contains the hash of our block
    */
    constructor(index, timestamp, data, previousHash= ''){ 
        //initiate
        this.index =  index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }  

    // create a method to calculate the hash of the block
    // install library to calculate hash function - crypto-js
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }

}



//new class for BLOCK CHAIN
class BlockChain{
    constructor(){
        // array which contains the Genesis block
        this.chain = [this.createGenesisBlock()] ; 
    }

    //create the first block, manually
    createGenesisBlock(){
        //as the first block, we can assign any value for previous block or 0
        return new Block(0, "01/01/2022", "GenesisBlock" , "0")

    }

    //return the latest block in the  chain
    getlatestBlock(){
        return this.chain[this.chain.length-1];
    }

    //add new block to the chain
    addBlock(newBlock){
        //set the previous hash (the last block of the chain)
        newBlock.previousHash = this.getlatestBlock().hash;
        //when we make change, we should recalculate the hash value
        newBlock.hash = newBlock.calculateHash();
        //push the newblock into the chain
        this.chain.push(newBlock);
    }

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
//add new blocks
sampleBlockChain.addBlock(new Block(1, "02/01/2022", { amount: 4}));
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
