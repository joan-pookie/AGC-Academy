const fs=require('fs');
const path='index.html';
let text=fs.readFileSync(path,'utf8');
const old='      <div class="footer__brand">\r\n        <img src="images/logo.svg" alt="AGC Academy logo" class="footer__logo" />\r\n        <div>\r\n          <p class="footer__title">AGC ACADEMY</p>\r\n          <p class="footer__motto">In God We Rise</p>\r\n        </div>\r\n      </div>      <img src="images/agc logo.jpeg" alt="AGC Academy logo" class="footer__logo footer__logo--medium" aria-hidden="true" />\r\n';
const replacement='      <div class="footer__brand">\r\n        <img src="images/logo.svg" alt="AGC Academy logo" class="footer__logo" />\r\n        <div>\r\n          <p class="footer__title">AGC ACADEMY</p>\r\n          <p class="footer__motto">In God We Rise</p>\r\n        </div>\r\n      </div>\r\n      <img src="images/agc logo.jpeg" alt="AGC Academy logo" class="footer__logo footer__logo--medium" aria-hidden="true" />\r\n';
if(!text.includes(old)) throw new Error('old block missing');
text=text.replace(old,replacement);
fs.writeFileSync(path,text,'utf8');
