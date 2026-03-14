const fs=require('fs');
const text=fs.readFileSync('index.html','utf8');
const snippet='          <div class="footer__brand">';
const idx=text.indexOf(snippet);
console.log(text.substring(idx-20,idx+200));
