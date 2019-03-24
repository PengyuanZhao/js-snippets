const fs = require('fs');
const filename = process.argv.slice(2)[0];

function hexdump(filename) {
  const buffer = fs.readFileSync(filename);
  const lines = [];

  for (let i = 0; i < buffer.length; i += 16) {
    const address = i.toString(16).padStart(8, '0');
    const block = buffer.slice(i, i + 16);
    const hexArray = [];
    const asciiArray = [];
    let padding = '';

    for (let value of block) {
      hexArray.push(value.toString(16).padStart(2, '0'));
      asciiArray.push(value >= 0x20 && value < 0x7f ? String.fromCharCode(value) : '.');
    }

    if (hexArray.length < 16) {
      const space = 16 - hexArray.length;
      padding = ' '.repeat(space * 2 + space + (hexArray.length < 9 ? 1 : 0));
    }

    const hexString =
      hexArray.length > 8
        ? hexArray.slice(0, 8).join(' ') + ' ' + hexArray.slice(8).join(' ')
        : hexArray.join(' ');
    const asciiString = asciiArray.join('');
    const line = `${address} ${hexString} ${padding}|${asciiString}|`;

    lines.push(line);
  }

  return lines.join('\n');
}

console.log(hexdump(filename));
