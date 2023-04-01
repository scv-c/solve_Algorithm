

//let input = require('fs').readFileSync('/dev/stdin').toString();

let [num, ...arr] = `8
71 39 44
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
60 66 19`.split('\n');

let dp = Array.from(new Array(arr.length),()=>[]);
dp[0]=arr[0].split(" ").map(Number);

for(let i=1; i<arr.length; i++){
    let [R,G,B]=arr[i].split(' ').map(Number);
    dp[i][0] = Math.min(dp[i-1][1],dp[i-1][2])+R;
    dp[i][1] = Math.min(dp[i-1][0],dp[i-1][2])+G;
    dp[i][2] = Math.min(dp[i-1][0],dp[i-1][1])+B;
}

console.log(Math.min(...dp[dp.length-1]));