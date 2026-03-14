const fs=require('fs');
const lines=fs.readFileSync('index.html','utf8').split(/\r?\n/);
const start=lines.findIndex(l=>l.includes('about__gallery'))-2;
for(let i=start;i<start+20;i++)console.log(`${i+1}: ${lines[i]}`);
