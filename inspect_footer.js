const fs=require('fs');
const lines=fs.readFileSync('index.html','utf8').split(/\r?\n/);
lines.slice(360,380).forEach((line,i)=>console.log(`${360+i}: ${line}`));
