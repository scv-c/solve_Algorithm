/**
 * BOJ 2798
 * 더 나은 속도를 위해, sort 한 후 일정 값 이상 크다면 for문 종료.
 */

//let input = require('fs').readFileSync('/dev/stdin').toString();

let input = '500\n 93 181 245 214 315 36 185 138 216 295';
let arr = input.split("\n");
let max = arr[0];
let numbers = arr[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
let answer = 0;
for(let i=0;i<numbers.length-2;i++){
    if(numbers[i]>max) break;
    for(let j=i+1;j<numbers.length-1;j++){
        if(numbers[i]+numbers[j]>max) break;
        for(let q=j+1;q<numbers.length;q++){
            let sum = numbers[i]+numbers[j]+numbers[q];
            if(sum>max) break;
            if(sum==max) answer=sum;
            else if(sum>answer) answer=sum;
        }
    }
    if(answer==max) break;
}

console.log(answer);