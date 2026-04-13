const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\jason\\Desktop\\酒\\you-si-website\\assets\\js\\products.data.js';
const content = fs.readFileSync(filePath, 'utf8');

const originalSize = Buffer.byteLength(content, 'utf8');

// Simple regex to remove single line comments
// Note: This is not perfect (could hit URLs), but for estimation it's fine
const withoutComments = content.replace(/\/\/.*$/gm, '');

const newSize = Buffer.byteLength(withoutComments, 'utf8');

console.log(`Original: ${originalSize} bytes`);
console.log(`Without comments: ${newSize} bytes`);
console.log(`Savings: ${originalSize - newSize} bytes (${((1 - newSize / originalSize) * 100).toFixed(2)}%)`);
