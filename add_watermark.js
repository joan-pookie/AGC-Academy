const fs = require('fs');

const path = 'css/style.css';

// read the css file
let text = fs.readFileSync(path, 'utf8');

// old watermark block
const oldBlock = `.page::before {
  content: '';
  position: absolute;
  inset: 10% auto auto 50%;
  width: 480px;
  height: 480px;
  background-image: url('../images/agc logo.jpeg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.08;
  transform: translateX(-50%) rotate(-8deg);
  pointer-events: none;
  z-index: 0;
}
`;

// new large watermark block
const newBlock = `.page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('../images/agc logo.jpeg');
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.06;
  filter: grayscale(100%);
  transform: rotate(-10deg);
  pointer-events: none;
  z-index: 0;
}
`;

// replace css block
if (!text.includes(oldBlock)) {
  throw new Error('Old watermark block not found');
}

text = text.replace(oldBlock, newBlock);

// write updated css
fs.writeFileSync(path, text, 'utf8');

console.log("Watermark updated successfully.");