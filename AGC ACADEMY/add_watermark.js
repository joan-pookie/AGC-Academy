const fs=require('fs');
const path='css/style.css';
let text=fs.readFileSync(path,'utf8');
const oldBlock=".page::before {\n  content: '';\n  position: absolute;\n  inset: 10% auto auto 50%;\n  width: 480px;\n  height: 480px;\n  background-image: url('../images/agc logo.jpeg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.08;\n  transform: translateX(-50%) rotate(-8deg);\n  pointer-events: none;\n  z-index: 0;\n}\n";
const newBlock=".page::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background-image: url('../images/agc logo.jpeg');\n  background-size: 900px;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.09;\n  mix-blend-mode: screen;\n  filter: saturate(0.6);\n  transform: translate3d(0, 0, 0);\n  pointer-events: none;\n  z-index: 0;\n}\n";
if(!text.includes(oldBlock)) throw new Error('no hero block');
text=text.replace(oldBlock,newBlock);
fs.writeFileSync(path,text,'utf8');
