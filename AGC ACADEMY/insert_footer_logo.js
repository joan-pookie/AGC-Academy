const fs = require('fs');

const filePath = 'index.html';
let text = fs.readFileSync(filePath, 'utf8');

const marker = '      <p>© 2026 AGC Academy. Holistic Christian education for the next generation.</p>';
const additionLine = '      <img src="images/agc logo.jpeg" alt="" class="footer__logo footer__logo--medium" aria-hidden="true" />';
const addition = additionLine + '\n';

if (!text.includes(marker)) throw new Error('marker not found');

if (text.includes(additionLine)) {
  console.log('Footer logo already present; no changes made.');
  process.exit(0);
}

text = text.replace(marker, addition + marker);
fs.writeFileSync(filePath, text, 'utf8');
console.log('Inserted footer logo.');
