const fs = require('fs');
const path = 'js/script.js';
let content = fs.readFileSync(path, 'utf8');
content = content.replace('weeks?secure', 'weeks—secure');
fs.writeFileSync(path, content, 'utf8');
