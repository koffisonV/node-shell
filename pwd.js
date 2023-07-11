import {cwd} from 'node:process';
export function pwdFunction(cmd){
    if(cmd === 'pwd' || cmd === 'cwd'){
        process.stdout.write(`\n${cwd()}`);
    }
}
// exports = function(){
    // Output a prompt
    // process.stdout.write('prompt > ');

    // // The stdin 'data' event fires after a user types in a line
    // process.stdin.on('data', (data) =>{
    // const cmd = data.toString().trim(); // remove the newLine
    // if(cmd === 'pwd' || cmd === 'cwd'){
    //     process.stdout.write(`${cwd()}`);
    // }
    // process.stdout.write('\nprompt > ');
    // });
// }