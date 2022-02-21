//Construct Merkle Trees and verify proofs in JavaScript
const { MerkleTree } = require('merkletreejs'); 
const SHA256 = require('crypto-js/sha256');

const leaves = ['a',  'b', 'c'].map(x => SHA256(x));
const tree = new MerkleTree(leaves, SHA256);
//returns the root of the tree 
const root = tree.getRoot().toString('hex');
const leaf = SHA256('a');
const proof = tree.getProof(leaf);
//Array of proof objects that should connect target node to Merkle root.
console.log(tree.verify(proof, leaf, root)); //true

//proof to decide upon whether 
//(01) if the data belongs in the merkle tree
//(02) prove the validity of data being part of a dataset without sorting the whole dataset
//(03) To ensure the validity of a certain data set being inclusive in a larger
// -data set without revealing either the complete data set or its subset.


//map() creates a new array from calling a function for every array element.
//map() calls a function once for each element in an array.
const badLeaves = ['a', 'x', 'c'].map(x => SHA256(x));
const badTree = new MerkleTree(badLeaves, SHA256);
const badLeaf = SHA256('x');
const badProof = tree.getProof(badLeaf);

console.log(tree.verify(badProof, leaf, root)); //false


//print tree to console
console.log(tree.toString());
console.log(badTree.toString());