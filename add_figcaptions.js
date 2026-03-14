const fs=require('fs');
const path='index.html';
let text=fs.readFileSync(path,'utf8');
text=text.replace('<figure>\r\n                <img src="images/school.jpeg" alt="Students lined up at AGC Academy" loading="lazy" />\r\n              </figure>','<figure>\r\n                <img src="images/school.jpeg" alt="Students lined up at AGC Academy" loading="lazy" />\r\n                <figcaption>Morning lineup</figcaption>\r\n              </figure>');
text=text.replace('<figure>\r\n                <img src="images/students.jpeg" alt="Classroom community" loading="lazy" />\r\n              </figure>','<figure>\r\n                <img src="images/students.jpeg" alt="Classroom community" loading="lazy" />\r\n                <figcaption>Community devotion</figcaption>\r\n              </figure>');
text=text.replace('<figure>\r\n                <img src="images/student leaders.jpeg" alt="Student leaders" loading="lazy" />\r\n              </figure>','<figure>\r\n                <img src="images/student leaders.jpeg" alt="Student leaders" loading="lazy" />\r\n                <figcaption>Leadership assembly</figcaption>\r\n              </figure>');
fs.writeFileSync(path,text,'utf8');
