/**
 * BOJ 7568
 */

//let input = require('fs').readFileSync('/dev/stdin').toString();

let input = `55 185
58 183
88 186
60 175
46 155`;

let arr = input.trim().split('\n').map(e=>e.split(" ").map(Number));
let answer ='';
arr.map((e,i,ar)=>{
    let k = ar.filter(f=>f[0]>e[0] && f[1]>e[1]).length+1;
    answer += k+' ';
})

console.log(answer.trim())