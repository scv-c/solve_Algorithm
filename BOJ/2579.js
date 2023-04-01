//let input = require('fs').readFileSync('/dev/stdin').toString();

let [num, ...arr] = `6
10
20
15
25
10
20`.trim().split('\n').map(Number);

/**
 * 연속된 3개의 수가 불가능하니,  3번째 계단까지 올수있는 경우의수를 구하여 dp[0]~dp[2]에 할당.
 * dp[3]부턴 계산을 들어가는데, dp[3]을 선택할수있는 경우의 수를 구함.
 * dp[i-3]+arr[i-1]+arr[i] : arr[i]선택시, arr[i-1]선택, 그리고 arr[i-3]선택 가능 -> arr[i-3]선택시 최대값:dp[i-3]
 */
let dp = [arr[0]];
dp[1]=Math.max(arr[0]+arr[1], arr[1]);
dp[2]=Math.max(arr[1]+arr[2],arr[0]+arr[2]);


for(let i=3;i<arr.length;i++){
    dp[i]=Math.max(dp[i-2]+arr[i],dp[i-3]+arr[i-1]+arr[i]);
}

console.log(dp)