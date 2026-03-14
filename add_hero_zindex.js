const fs=require('fs');
const path='css/style.css';
let text=fs.readFileSync(path,'utf8');
const search='  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n';
const replace='  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  z-index: 1;\n';
if(!text.includes(search)) throw new Error('search block missing');
text=text.replace(search,replace);
fs.writeFileSync(path,text,'utf8');
