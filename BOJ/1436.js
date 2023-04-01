/**
 * BOJ 1436
 */

//let input = require('fs').readFileSync('/dev/stdin').toString();


let num = '500';
let count = 0;
let i = 666;
let reg = /666/;

while(true){
    if(reg.test(i)) count++;
    if(num==count) break;
    i++;
}

console.log(i);