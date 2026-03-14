const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const marker = '      </section>\r\n\r\n      <section class="programs"';
console.log(content.includes(marker));
console.log(content.slice(content.indexOf(marker)-200, content.indexOf(marker)+40));
