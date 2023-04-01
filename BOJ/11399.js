//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = `5
3 1 4 3 2`.split("\n");

let nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < Number(input[0]); i++) {
  nums[i] = sum + nums[i];
  sum = nums[i];
}

console.log(nums.reduce((acc, cur) => acc + cur));
