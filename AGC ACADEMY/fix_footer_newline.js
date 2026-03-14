const fs=require('fs');
const path='index.html';
let text=fs.readFileSync(path,'utf8');
text=text.replace('</div>      <img src="images/agc logo.jpeg" alt="AGC Academy logo" class="footer__logo footer__logo--medium" aria-hidden="true" />','</div>\r\n      <img src="images/agc logo.jpeg" alt="AGC Academy logo" class="footer__logo footer__logo--medium" aria-hidden="true" />');
fs.writeFileSync(path,text,'utf8');
