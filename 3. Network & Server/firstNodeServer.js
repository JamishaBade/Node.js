const http =require('http'); //loads the node's built-in module

//Creates the actual server 
const server= http.createServer((req, res)=>{
  console.log(req); // this is runned everytime the user visits the server
});
const port=3000; //port number
server.listen(port, ()=>{console.log(`Server running on http://localhouse:${port} , the server starts here`)}); // the console.log is runned once when the server starts. 