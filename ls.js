// import * as fs from 'node:fs/readdir';
import { readdir } from 'node:fs';

// files will be an array of filenames, like ['bash.js', 'pwd.js']
export function lsFunction(cmd){
    if(cmd === 'ls'){
        readdir('./', 'utf8', (err, files) => {
            if (err) {
              throw err;
            } else {
              process.stdout.write(files.join('\n'));
              process.stdout.write('prompt > ');
            }
        });
    }
}