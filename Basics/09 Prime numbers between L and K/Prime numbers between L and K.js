const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 

let input = userInput[0].split(" ")
var L = parseFloat(input[0])
var R = parseFloat(input[1])

function check_prime(i) {
    let multiples = 0
    for (let j=1; j<=i; j++) {
        if (i%j === 0) {
            multiples++
        }
    }
    if (multiples == 2){
        return true
    } else {
        return false
    }
}
prime = 0
for (var i=L; i<=R; i++) {
    if (check_prime(i)){
        prime++
    }
}
console.log(prime)

//end-here
});