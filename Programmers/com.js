let input = [1,2,3,4,5,6];

for(let i = 1; i<=input.length; i++){
    console.log(com(input,i));
}


function com( array, index ) {
    if(index==1) return array.map(e=>[e]);
    let result = [];
    
}