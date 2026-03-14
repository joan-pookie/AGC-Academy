const fs=require('fs');
const lines=fs.readFileSync('css/style.css','utf8').split(/\r?\n/);
lines.slice(820,880).forEach((l,i)=>console.log(`${820+i}: ${l}`));
