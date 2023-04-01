//let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let input = `00009-00009`;
let toggleMinus = false;

let nums = input.split(/([\+\-])/);
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == "-") {
    toggleMinus = true;
    continue;
  }

  if (nums[i] == "+") {
    if (toggleMinus) nums[i] = "-";
    continue;
  }

  nums[i] = Number(nums[i]);
}

console.log(eval(nums.join("")));
