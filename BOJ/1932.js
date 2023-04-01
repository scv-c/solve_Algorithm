//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [num,...arr] = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`.split('\n');

let dp = Array.from(new Array(arr.length),()=>[]);
dp[0][0]=Number(arr[0]);
for(let i=1; i<arr.length; i++){
    let nums = arr[i].split(' ').map(Number);
    for(let j=0; j<nums.length; j++){
        if(j==0) dp[i][j]=(dp[i-1][0]+nums[j]);
        else if(j==nums.length-1) dp[i][j]=(dp[i-1][j-1]+nums[j]); // 이번줄의 가장 마지막 인덱스 : j, 이전줄 : -1
        else dp[i][j]=(Math.max(dp[i-1][j-1]+nums[j],dp[i-1][j]+nums[j]));
    }
}

console.log(Math.max(...dp[dp.length-1]));