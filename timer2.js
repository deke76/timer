const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
const strNumInput = '123456789'

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (strNumInput.includes(key)) {
    process.stdout.write(`Setting the timer to ${key} seconds \n`);
    setTimeout(function() {
      process.stdout.write('\x07');
    }, key * 1000);
  } else if (key.toLowerCase() === 'b') {
    process.stdout.write('\x07');
  } else process.stdout.write('.');
});