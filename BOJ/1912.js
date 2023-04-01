//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = '10 -4 3 1 5 6 -35 -15 12 21 -1'.split(' ').map(Number);
let sums = [];
let sum=0;

for(let i=0; i<arr.length;i++){
    sums[i]=arr[i];
    if(sums[i-1]<0) continue;
    if(sums[i-1]+sums[i]>sums[i]) sums[i]=sums[i-1]+sums[i];
}

console.log(sums);