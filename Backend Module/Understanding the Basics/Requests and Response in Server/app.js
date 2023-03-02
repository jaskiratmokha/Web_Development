const http= require('http')
const { type } = require('os')
// creating a node server
const server=http.createServer((req,res)=>{
    console.log(req.headers,req.url,req.method)
    // process.exit()
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
        res.write('<title>my first webpage</title>')
        res.write('<body><h1>Hello from my newly created node.js server</h1></body>')
        res.write('</html>')
        res.end()
})
server.listen(3000)
