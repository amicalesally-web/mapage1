import fs from 'fs';

const htmlPath = 'dist/index.html';
const html = fs.readFileSync(htmlPath, 'utf8');

// Find the module script
const scriptStartTag = '<script type="module">';
const startScript = html.indexOf(scriptStartTag);
if (startScript === -1) {
  console.log('No <script type="module"> found');
  process.exit(0);
}

const endScript = html.indexOf('</script>', startScript) + 9;
const scriptCode = html.substring(startScript + scriptStartTag.length, endScript - 9);

// Remove the script from head
let cleanHtml = html.substring(0, startScript) + html.substring(endScript);

// Place plain script right before </body>, ensuring #root is already parsed in DOM
const scriptTag = `<script>\n${scriptCode}\n</script>`;
cleanHtml = cleanHtml.replace('</body>', `${scriptTag}\n</body>`);

fs.writeFileSync('dist/index.html', cleanHtml, 'utf8');
fs.writeFileSync('preview.html', cleanHtml, 'utf8');
console.log('Successfully produced standalone HTML with inline script placed at bottom of body!');
