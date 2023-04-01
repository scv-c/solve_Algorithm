
//let input = require('fs').readFileSync('/dev/stdin').toString();


let num =  1000000;

let dp=[];
dp[0]=[num];
let count =0;

while(!dp[count].find(e=>e==1)){
    count++;
    dp[count]=[];
    for(let j=0;j<dp[count-1].length;j++){
        if(dp[count-1][j]%3==0) dp[count].push(dp[count-1][j]/3);
        if(dp[count-1][j]%2==0) dp[count].push(dp[count-1][j]/2);
        dp[count].push(dp[count-1][j]-1);
    }    
}


console.log(count)