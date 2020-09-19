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
var input = userInput[0].split(" ")
var N = parseInt(input[0])
var M = parseInt(input[1])

function largest(N,M) {
    if (N>M) {
        return N
    } else return M
}

var large = largest(N,M)
var gcd
for (var i=1; i<=large; i++) {
    if (N%i === 0 && M%i === 0) {
        gcd = i
    }
}

if (N === 0 || M === 0){
    gcd = -1
}
console.log(gcd)

//end-here
});
