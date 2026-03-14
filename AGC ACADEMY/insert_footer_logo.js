const fs = require('fs');

const filePath = 'index.html';
let text = fs.readFileSync(filePath, 'utf8');

const marker = '  <p class="footer__legal">© 2026 AGC Academy. All rights reserved.</p>';
const additionLine = '      <img src="images/agc logo.jpeg" alt="AGC Academy logo" class="footer__logo footer__logo--mark" />';
const addition = additionLine + '\n';

if (!text.includes(marker)) throw new Error('marker not found');

if (text.includes(additionLine)) {
  console.log('Footer logo already present; no changes made.');
  process.exit(0);
}

text = text.replace(marker, addition + marker);
fs.writeFileSync(filePath, text, 'utf8');
console.log('Inserted footer logo.');