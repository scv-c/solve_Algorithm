/**
 * BOJ 1018
 */

//let input = require('fs').readFileSync('/dev/stdin').toString();

let input = `BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBW`;


let board = input.split('\n');
let answer = [];
/*선택할시 board가 될수있는 케이스 모두 탐색*/
for(let i=0; i<board.length-7;i++){    
    for(let j=0;j<board[i].length-7;j++){
        
        let myBoard = board.slice(i,i+8).map(e=>e.slice(j,j+8).split(""));
        let Bcount = 0;
        let Wcount = 0;
        let currentColor = myBoard[0][0]=="B" ? ["B","W"] : ["W","B"]; /*(0,0)의 색상이 왓다갓다*/
        myBoard.map((p,pInd)=>{
            let pColor = [currentColor[pInd%2],currentColor[(pInd+1)%2]];
            
            p.map((q,qInd)=>{
                if(q!=pColor[qInd%2]) Bcount++;
                else Wcount++;
            })
        })
                
        answer.push(Math.min(Bcount,Wcount));
    }
}

console.log(Math.min(...answer))