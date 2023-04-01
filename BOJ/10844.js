

let num = 2;
let dp = Array.from(new Array(num), () => []);
dp[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i - 1].length; j++) {
        if (dp[i - 1][j] == 9)
            dp[i].push(dp[i - 1][j] - 1);
        else if (dp[i - 1][j] == 0)
            dp[i].push(dp[i - 1][j] + 1);
        else
            dp[i].push(dp[i - 1][j] + 1, dp[i - 1][j] - 1);
    }
}

console.log(dp[num - 1].length);