let [num,...nums] = `5
1
3
8
-2
2`.split('\n').map(Number);

let count=[];

//산술평균
console.log(nums.reduce((acc,cur)=>acc+cur)/num);
//중앙값
console.log(nums.sort((a,b)=>a-b)[nums.length/2]);
//최빈값
nums.map(e=>count[e]=count[e]?count[e]+1:1);
for(let c in count) {
    console.log(c)
}