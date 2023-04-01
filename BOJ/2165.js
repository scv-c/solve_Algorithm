let [num,...arr] = `6
1000
1000
1
1
1000
1000`.trim().split('\n').map(Number);

let dp = Array.from(new Array(num),()=>[]);

dp[0]=arr[0];
dp[1]=Math.max(arr[0]+arr[1],arr[1]);
dp[2]=Math.max(arr[0]+arr[2],arr[1]+arr[2],dp[1]);

for(let i=3; i<arr.length; i++){
    dp[i]=Math.max(dp[i-2]+arr[i],dp[i-3]+arr[i-1]+arr[i]);
    dp[i]=Math.max(dp[i],dp[i-1]);    
}

console.log(Math.max(...dp));