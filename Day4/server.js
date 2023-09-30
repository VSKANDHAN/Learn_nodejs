const { Console } = require('console')
const fs=require('fs')
const http=require('http')
http.createServer((req,res)=>{
    let success=fs.createWriteStream('./success.log')
    let err=fs.createWriteStream('./err.log')
    print=new Console(success,err)
    print.log('helloo this successfull message is stored in the file ')
    print.error('this is error message is also stroed or logged into the file');
}).listen(3000,(err)=>{
    console.log('Server started broo');

})