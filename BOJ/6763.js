/**
 * BOJ 6763
 */

//let input = require('fs').readFileSync('/dev/stdin').toString();
let input = "40\n39";

const speed = (mySpeed,saveSpeed) =>{
    let dif = Number(mySpeed) - Number(saveSpeed);
    if(dif <= 0) return `Congratulations, you are within the speed limit!`;
    else if (1<=dif || dif<=20) return `You are speeding and your fine is $100.`;
    else if (21<=dif || dif<=30) return `You are speeding and your fine is $270.`;
    else return `You are speeding and your fine is $500.`;
}

let [save, my] = input.split('\n');
console.log(speed(my,save));