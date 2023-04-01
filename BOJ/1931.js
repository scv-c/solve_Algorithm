// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 7
12 14`.split("\n");
let N = Number(input[0]);
const makeNode = (s, e) => {
  return { start: s, end: e };
};

let schedule = [];
for (let i = 1; i <= N; i++) {
  schedule.push(makeNode(...input[i].split(" ").map(Number)));
}

// 정렬 1순위. 종료시간이 빠른거부터, 정렬2순위. 시작시간이 빠른거부터
schedule.sort((a, b) => {
  if (a.end > b.end) return 1;
  if (a.end < b.end) return -1;
  return a.start - b.start;
});

console.log(schedule);

let lastTime = -1;
let c = 0;
for (let s of schedule) {
  if (lastTime > s.start) continue;
  lastTime = s.end;
  c++;
}

console.log(c);
