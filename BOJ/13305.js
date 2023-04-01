//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = `4
1000000000 1000000000 1000000000
1000000000 1000000000 1000000000 1000000000`.split("\n");

let N = Number(input[0]);
let distance = input[1].split(" ").map(BigInt);
let perAmt = input[2].split(" ").map(BigInt);

for (let i = 0; i < 99996; i++) {
  distance.push(BigInt(1000000000));
  perAmt.push(BigInt(1000000000));
}

//합계 sum, 리터당 주유비 최소인 주유소 p
let sum = 0n;
let p = 0n;

for (let i = 0; i < perAmt.length - 1; i++) {
  if (p == 0 || p > perAmt[i]) p = perAmt[i];
  sum += p * distance[i];
}

console.log(sum.toString());
