/**
 * BOJ 6763
 */

//let input = require('fs').readFileSync('/dev/stdin').toString();

let input = '219';
const splitSum = num=> num.split("").map(Number).reduce((acc,cur)=>acc+cur);

let i = 0;
let num = Number(input);
while(true){
    i++;    
    if(i + splitSum(i+"") == num) break;
    if(i - splitSum(i+"") > num) {
        i=0;
        break;
    };
}

console.log(i);