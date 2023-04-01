class Node {
    constructor(value) {
        this.value = value
        this.children = [];
    }
}

class Tree {
    constructor(Node) {
        this.root = Node;
    }

    dfs() {

    }
}

const dfs = (graph, start) => {
    let visited = []; // 이미 방문한 노드 저장 
    let needVisit = [];  // 앞으로 탐색해야 하는 노드 저장 (stack으로 구현해야함)
    
    needVisit.push(start);  // 시작노드부터 탐색 시작
    
    // 탐색해야 하는 노드가 아직 남아있다면
    while(needVisit.length !== 0){
      let node = needVisit.pop();  // stack이므로 뒤에서부터 선출
      if(!visited.includes(node)){
        visited.push(node);
        needVisit = [...needVisit, ...graph[node]];
      }
    }
    return visited;
}

let input = `1 4
1 2
2 3
2 4
3 4`.split('\n');
let graph = [];
for (let i = 0; i < input.length; i++) {
    let [v, e] = input[i].split(' ').map(Number);
    if (!graph[v]) graph[v] = [];
    graph[v+""].push(e);
}
graph.map(e=>e.sort((a,b)=>a-b));
console.log(dfs(graph, 1))