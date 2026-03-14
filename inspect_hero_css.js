const fs=require('fs');
const lines=fs.readFileSync('css/style.css','utf8').split(/\r?\n/);
const start=lines.findIndex(line=>line.trim()===`.hero {`);
for(let i=start;i<start+30;i++)console.log(`${i+1}: ${lines[i]}`);
