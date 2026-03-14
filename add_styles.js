const fs = require('fs');
const path = 'css/style.css';
let content = fs.readFileSync(path, 'utf8');
const marker = '.btn:hover {\r\n  transform: translateY(-2px);\r\n}\r\n';
const block = `.motto-bar {\r\n  margin: 1rem 0 0.5rem;\r\n  padding: 0.65rem 1.25rem;\r\n  border: 1px solid rgba(15, 23, 42, 0.15);\r\n  border-radius: 999px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(15, 23, 42, 0.05));\r\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1);\r\n}\r\n\r\n.motto-bar__crest span {\r\n  font-weight: 600;\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\n.motto-bar__crest small {\r\n  display: block;\r\n  font-size: 0.7rem;\r\n  letter-spacing: 0.25em;\r\n  text-transform: uppercase;\r\n  color: var(--muted);\r\n}\r\n\r\n.motto-bar__text {\r\n  margin: 0;\r\n  font-weight: 700;\r\n  letter-spacing: 0.4em;\r\n  text-transform: uppercase;\r\n  color: var(--accent-2);\r\n}\r\n\r\n.hero__trust {\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 0.5rem;\r\n  font-size: 0.85rem;\r\n  letter-spacing: 0.1em;\r\n  color: var(--muted);\r\n}
.hero__trust span {\r\n  padding: 0.35rem 0.85rem;\r\n  border-radius: 999px;\r\n  border: 1px solid rgba(92, 108, 245, 0.2);\r\n  background: rgba(92, 108, 245, 0.07);\r\n}\r\n\r\n.hero__crest {\r\n  position: absolute;\r\n  inset: 8% auto 12% 60%;\r\n  width: 220px;\r\n  height: 220px;\r\n  border-radius: 50%;\r\n  border: 2px solid rgba(255, 255, 255, 0.55);\r\n  display: grid;\r\n  place-items: center;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transform: translate(-20px, 10px) scale(0.8);\r\n  background: radial-gradient(circle, rgba(92, 108, 245, 0.35), transparent 65%);\r\n}
.hero__crest--visible {\r\n  animation: crest-pop 1s ease forwards;\r\n}
.hero__crest-shell {\r\n  text-align: center;\r\n  font-size: 0.8rem;\r\n  letter-spacing: 0.25em;\r\n  color: rgba(255, 255, 255, 0.9);\r\n}
.hero__crest-shell strong {\r\n  display: block;\r\n  font-size: 1rem;\r\n  letter-spacing: 0.3em;\r\n}
.hero__info {\r\n  margin-top: 1.75rem;\r\n  border-radius: 1.5rem;\r\n  padding: 1.25rem;\r\n  background: rgba(255, 255, 255, 0.6);\r\n  border: 1px solid var(--border);\r\n  box-shadow: var(--shadow);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}
.hero__stats {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\r\n  gap: 1rem;\r\n}
.hero__stats article {\r\n  text-align: center;\r\n  padding: 0.75rem 0.5rem;\r\n  border-radius: 1rem;\r\n  background: rgba(15, 23, 42, 0.04);\r\n}
.hero__stat-number {\r\n  display: block;\r\n  font-size: 1.65rem;\r\n  font-weight: 700;\r\n  color: var(--accent);\r\n}
.hero__secondary {\r\n  display: flex;\r\n  gap: 0.75rem;\r\n  flex-wrap: wrap;\r\n}
.hero__news {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-top: 0.3rem;\r\n  font-size: 0.95rem;\r\n  color: var(--muted);\r\n  border-top: 1px solid rgba(92, 108, 245, 0.25);\r\n}
.hero__news-label {\r\n  font-weight: 600;\r\n  letter-spacing: 0.4em;\r\n  text-transform: uppercase;\r\n}
.hero__news-text {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}
.experience-card-icon {\r\n  width: 48px;\r\n  height: 48px;\r\n  border-radius: 50%;\r\n  border: 1px solid rgba(92, 108, 245, 0.3);\r\n  display: grid;\r\n  place-items: center;\r\n  margin-bottom: 0.75rem;\r\n  color: var(--accent);\r\n}
.experience-card-icon svg {\r\n  width: 28px;\r\n  height: 28px;\r\n}
`;
if (!content.includes(marker)) throw new Error('marker missing hero css');
content = content.replace(marker, marker + block);
fs.writeFileSync(path, content, 'utf8');
