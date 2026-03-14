const fs=require('fs');
const lines=fs.readFileSync('index.html','utf8').split(/\r?\n/);
lines.slice(-80).forEach((line,idx)=>console.log(`${lines.length-80+idx+1}: ${line}`));
