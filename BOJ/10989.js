let [num,...nums]  = `10
5
2
3
1
4
2
3
5
1
7`.split('\n').map(Number);
let count=new Array(num).fill(0);
nums.map(e=>count[e]++);
count.map((e,i)=>{
    for(let j=0;j<e;j++){
        console.log(i)
    }
});