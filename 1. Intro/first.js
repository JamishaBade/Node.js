const fs=require("fs");
let x=10;
let y=20;
let sum=x+y;
let product=x*y;

let data=`Sum ${sum}\nProduct: ${product}`;
console.log(data);

fs.writeFile('output.txt', data, (err)=>{
  if(err) throw err;
  console.log("data written to file");
})