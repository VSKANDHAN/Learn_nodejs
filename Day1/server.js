let http=require('http')
let fs=require('fs')
let host='127.0.0.2'
let port=3000
let server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write(`welcome our new server this is running at the port ${port}`)
    res.write('this is the second response from the server')
    // let page=fs.readFileSync('./index.html')
    fs.readFile('./index.html',(err,data)=>{
        if(err){
            throw err
        }
        console.log('the data from the html is fetched successfully');
        res.end(data)
    })
    // res.end(page)
    res.write('this after the readfile')
    res.write('this is just the sample text')
})
server.listen(port,host,()=>{
    console.log('Server started at the port',port);
})