const fs=require('fs');
const path='index.html';
let text=fs.readFileSync(path,'utf8');
const target='      <div class="footer__brand">';
const insertion='      <img src="images/agc logo.jpeg" alt="AGC Academy logo" class="footer__logo footer__logo--medium" aria-hidden="true" />\n';
const marker='      <p>© 2026 AGC Academy. Holistic Christian education for the next generation.</p>';
if(!text.includes(marker)) throw new Error('footer marker not found');
text=text.replace(marker,insertion+marker);
fs.writeFileSync(path,text,'utf8');
