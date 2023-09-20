const fs=require('fs')
const http=require('http')
let port=3000
const server=http.createServer((req,res)=>{
    res.write('Helloo welcome to my day 2 of learning nodejs')


    // for writing the file
//    fs.writeFile('hello.txt','hello world',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//     console.log('file is written');


//     }
// //    })

// for appending the file
fs.appendFile('hello.txt','this is the text appended',(err)=>{
    if(err){
        throw err
    }
    console.log('appended the text');
})

// fs.unlink('hello.txt',(err)=>{
//     if(err){
//         throw err
//     }
// console.log('deleted the file');
// })
res.end()

})
server.listen(port,()=>{
    console.log('server started at port',port);
    
})

