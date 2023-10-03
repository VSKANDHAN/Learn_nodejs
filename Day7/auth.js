const fs=require('fs')
const crypto=require('crypto')
const { log } = require('console')
let hash=crypto.createHash('sha512')
let fileData=fs.createReadStream('./password.txt')
let hashFileData=fs.readFileSync('./hashPassword.txt').toString()
fileData.on('data',(data)=>{
    hash.update(data)
})

fileData.on('end',()=>{
   let readHash=hash.digest('hex')
if(readHash===hashFileData){
    console.log('Welcome back brooo');
}
else{
    console.log('I think you forgotten your password broo,please try with someother one');
}
})
