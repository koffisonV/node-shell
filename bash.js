import { pwdFunction } from './pwd.js';
import { lsFunction } from './ls.js';
// Output a prompt
process.stdout.write('prompt > ');

// const pwd = require('./pwd.js');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newLine
  process.stdout.write('You typed: ' + cmd);
  pwdFunction(cmd); // pwd function
  lsFunction(cmd); // ls function
  process.stdout.write('\nprompt > ');
});