// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`.split("\n");

let [N, K] = input[0].split(" ").map(Number);

let c = 0;
for (let i = N; i >= 1; i--) {
  let num = Number(input[i]);
  if (K >= num) {
    while (K >= num) {
      c++;
      K -= num;
    }
  }
  if (K == 0) break;
}

console.log(c);
