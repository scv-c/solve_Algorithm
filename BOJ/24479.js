//let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let input = `5 5 1
1 4
1 2
2 3
2 4
3 4`;

let arr = input.split('\n');
let [V, E, R] = arr[0].split(' ').map(Number);
let graph = Array.from(new Array(V),()=>[]);
let Varr=[];
let visited=[];

const dfs = (v, e, r) => {
    visited[r]=true;
    v.push(r)
    if(e[r].length==0) return v.push(0);
    for(let n of e[r])
        if(!visited[n]) dfs(v,e,n)

}

for(let i=1; i<arr.length;i++){
    let [v,e] = arr[i].split(' ').map(Number);
    graph[v].push(e);
}

graph.map(e=>e.sort((a,b)=>a-b));


dfs(Varr,graph,R);

console.log(Varr);
