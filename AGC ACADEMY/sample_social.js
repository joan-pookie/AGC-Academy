const fs=require('fs');
const text=fs.readFileSync('index.html','utf8');
const block=text.split('          <div class="contact__socials">')[1];
console.log(block.split('\n').slice(0,5).join('\n'));
