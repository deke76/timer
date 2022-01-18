const process = require('process');
let nextInterval = process.argv.slice(2);

const beep = (callback, arrayBeep) => {
  if (arrayBeep.length === 0) return;
  setTimeout(() => {
    nextInterval = Math.abs(arrayBeep.shift());
    if (!isNaN(nextInterval)) {
      process.stdout.write(`${nextInterval} seconds \x07`);
    }
    callback(beep, arrayBeep);
  }, nextInterval);
};
beep(beep, nextInterval);