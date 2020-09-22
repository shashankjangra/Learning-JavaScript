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

var n = userInput[0]
var output = ""
var print = ""
for(var i=0; i<n.length; i++) {
    if (n[i]%2!==0) output = output +n[i]
}

function space(output){
    let print = ""
    for(let q=0; q<output.length; q++){
        if (q == output.length-1){
            print = print + output[q]
        } else {
            print = print + output[q] + " "
        }
    }
    return print
}
if(output === "") console.log("-1")
else console.log(space(output))

//end-here
});
