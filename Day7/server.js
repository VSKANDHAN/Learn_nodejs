const crypto=require('crypto')
const fs=require('fs')
let hash=crypto.createHash('sha512')
// let data=hash.update('HELLO iam VSK','utf-8')
// let res=data.digest('hex')
// console.log((res));
let fileData=fs.createReadStream('./password.txt')
fileData.on('data',(data)=>{
    hash.update(data)
    
})
fileData.on('end',()=>{
   let genHash= hash.digest('hex')
   console.log(genHash);
   fs.writeFileSync('./hashPassword.txt',genHash)
})