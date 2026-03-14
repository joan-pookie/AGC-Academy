const fs=require('fs');
const text=fs.readFileSync('index.html','utf8');
const snippet='2026 AGC Academy. Holistic Christian education for the next generation.';
console.log(text.includes(snippet));
console.log(text.indexOf(snippet));
