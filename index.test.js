const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('index.html has connect and disconnect buttons', () => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  assert.match(html, /id="btnConnect"/);
  assert.match(html, /id="btnDisconnect"/);
});

test('index.html includes port toggle messages', () => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  assert.match(html, /Port opened\./);
  assert.match(html, /Port closed\./);
});
