const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('index.html has openPort button and console', () => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  assert.match(html, /id="openPort"/);
  assert.match(html, /id="console"/);
});

test('index.html includes port toggle messages', () => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  assert.match(html, /Port opened\./);
  assert.match(html, /Port closed\./);
});
