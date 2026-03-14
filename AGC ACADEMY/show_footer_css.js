const fs=require('fs');
const lines=fs.readFileSync('css/style.css','utf8').split(/\r?\n/);
lines.slice(830,870).forEach((line,i)=>console.log(`${830+i}: ${line}`));
