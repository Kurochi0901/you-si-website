const fs = require('fs');
const path = require('path');

const targetFile = 'c:\\Users\\jason\\Desktop\\酒\\you-si-website\\assets\\js\\products.data.js';

if (!fs.existsSync(targetFile)) {
    console.error('File not found:', targetFile);
    process.exit(1);
}

let content = fs.readFileSync(targetFile, 'utf8');
const originalSize = Buffer.byteLength(content, 'utf8');

// 1. Remove single-line comments // ... but NOT inside URLs or strings
// A better way is to use a regex that handles common cases
// This regex looks for // and matches until end of line, but tries to avoid URLs if they are preceded by :
// Actually, for this specific file structure, removing // after a space or at start of line is quite safe.
content = content.replace(/(^|\s)\/\/.*/g, '');

// 2. Remove empty lines (or lines with only whitespace)
content = content.replace(/^\s*[\r\n]/gm, '');

// 3. Trim trailing whitespace from each line
content = content.split('\n').map(line => line.trimEnd()).join('\n');

const newSize = Buffer.byteLength(content, 'utf8');

fs.writeFileSync(targetFile, content, 'utf8');

console.log(`Success! Fixed products.data.js`);
console.log(`Original Size: ${(originalSize / 1024).toFixed(2)} KB`);
console.log(`New Size: ${(newSize / 1024).toFixed(2)} KB`);
console.log(`Saved: ${((originalSize - newSize) / 1024).toFixed(2)} KB (${((1 - newSize / originalSize) * 100).toFixed(2)}%)`);
