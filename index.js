// const {sum,mul,div,sin,tan} =require("./test")
// console.log(sum(4,2))
// console.log(mul(5,8))
// console.log(div(8,8))
// console.log(sin(5,8))
// console.log(tan(55,48))
// const readline= require('readline')
// const reader=readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,

// })
 

// const prompt = require('prompt-sync')({sigint: true});


// const numberToGuess = Math.floor(Math.random() * 10) + 1;

// let foundCorrectNumber = false;

// while (!foundCorrectNumber) {
 
//   let guess = prompt('Guess a number from 1 to 10: ');

//   guess = Number(guess);

  
//   if (guess === numberToGuess) {
//     console.log('Congrats, you got it!');
//     foundCorrectNumber = true;
//   } else {
//     console.log('Sorry, guess again!');
//   }
// }

const fs=require("fs")
const create=fs.appendFile("text.txt",'data',(err)=>{
    console.log("done")
   })
const data=fs.createWriteStream("text.txt")
data.write('hello world')
const result=fs.readFileSync("./text.txt",{encoding:"utf-8"})
console.log(result)
const rename=fs.rename("text.txt","new.txt",(err)=>{
    console.log("Rename complete")
})
const d =fs.unlink("./new.txt",(err)=>{
    console.log("delete")
})

