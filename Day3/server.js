const { count } = require('console')
const { readFileSync } = require('fs')
const http=require('http')
http.createServer((req,res)=>{
    let txt=readFileSync('./hello.txt').toLocaleString()
   let pattern=/html/
    let count=txt.match(pattern)
    console.log(txt.substring(164,169));
}).listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Server started brooo');
    }
})