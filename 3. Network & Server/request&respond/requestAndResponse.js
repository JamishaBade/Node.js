const moduleHttp= require("http");
const server =moduleHttp.createServer((req,res)=>{
console.log(req.url, req.method, req.headers);
process.exit();

});
const port=3001;
server.listen(port, ()=>{console.log(`https://localhost:${port}`)})