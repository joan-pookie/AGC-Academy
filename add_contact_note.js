const fs=require('fs');
const path='index.html';
let text=fs.readFileSync(path,'utf8');
const marker='          <div class="contact__socials">\n            <p class="contact__social-label">Connect with us</p>\n            <a href="https://www.facebook.com/groups/1464309964624216/" target="_blank" rel="noopener" aria-label="AGC Academy Facebook community">\n              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22V13.5h2.75l.4-2.75H13.5V8.3c0-.8.2-1.35 1.35-1.35h1.45V4.1a20.3 20.3 0 0 0-2.25-.1c-2.23 0-3.75 1.35-3.75 3.8v2.12H8.7v2.75h1.8V22h3z"/></svg>\n            </a>\n          </div>\n';
const addition='          <div class="contact__cta-note">Message us on Facebook for admissions & tours.</div>\n';
if(!text.includes(marker)) throw new Error('marker missing');
text=text.replace(marker,marker+addition);
fs.writeFileSync(path,text,'utf8');
