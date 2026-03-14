const fs=require('fs');
const lines=fs.readFileSync('css/style.css','utf8').split(/\r?\n/);
lines.slice(40,80).forEach((line,i)=>console.log(`${40+i}: ${line}`));
