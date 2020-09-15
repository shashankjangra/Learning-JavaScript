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

let N = parseInt(userInput[0])

if (N === 0) {
    console.log("NULL")
} else {
    var table = []
    for(let i = 1; i<=N; i++) {
        table[i] = 9 * i
    }
}

final = ""
for(i = 1; i<=N; i++){
    if(i<N){
        final = final + table[i] + " "
    } else {
        final = final + table[i]
    }
}
console.log(final)



//end-here
});