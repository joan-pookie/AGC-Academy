const fs = require('fs');
const path = 'css/style.css';
let content = fs.readFileSync(path, 'utf8');
const marker = '@keyframes float {\r\n  0% {\r\n    transform: translateY(0) scale(1);\r\n  }\r\n  50% {\r\n    transform: translateY(-20px) scale(1.05);\r\n  }\r\n  100% {\r\n    transform: translateY(0) scale(1);\r\n  }\r\n}\r\n\r\n';
const addition = `@keyframes crest-pop {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate(-20px, 20px) scale(0.5);\r\n  }\r\n  70% {\r\n    opacity: 1;\r\n    transform: translate(0, 0) scale(1.05);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translate(0, 0) scale(1);\r\n  }\r\n}\r\n\r\n`;
if (!content.includes(marker)) throw new Error('float keyframes missing');
content = content.replace(marker, marker + addition);
fs.writeFileSync(path, content, 'utf8');
