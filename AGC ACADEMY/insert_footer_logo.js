const fs=require('fs');
const path='index.html';
let text=fs.readFileSync(path,'utf8');
const marker='      <p>� 2026 AGC Academy. Holistic Christian education for the next generation.</p>';
const addition='      <img src="images/agc agc logo.jpeg" alt="AGC Academy logo" class="footer__logo footer__logo--large" aria-hidden="true" />\n';
if(!text.includes(marker)) throw new Error('marker not found');
text=text.replace(marker,addition+marker);
fs.writeFileSync(path,text,'utf8');
