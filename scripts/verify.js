import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');
const title = html.match(/<title>(.*?)<\/title>/)?.[1];
const scriptTagCount = (html.match(/<script>/g) || []).length;
const moduleScriptCount = (html.match(/<script type="module">/g) || []).length;
const rootPos = html.indexOf('id="root"');
const scriptPos = html.indexOf('<script>');
const bodyClosePos = html.indexOf('</body>');

console.log('Title:', title);
console.log('Plain script count:', scriptTagCount);
console.log('Module script count:', moduleScriptCount);
console.log('DOM order check:', rootPos !== -1 && rootPos < scriptPos && scriptPos < bodyClosePos);
console.log('Korean text check:', html.includes('구조적 엄밀함과 전략적 통찰'));
console.log('No mojibake check:', !html.includes('?뀸') && !html.includes('?꾨'));
