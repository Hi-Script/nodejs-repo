const http = require("http")
const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end('welcome to our homepage')

    }
    if(req.url === '/about'){
        res.end('here is our history')
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>We couldnt find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    
})

server.listen(4000)