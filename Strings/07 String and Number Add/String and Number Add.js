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
var sum =0
var output = ""
for(let i=0; i<n.length; i++){
    //console.log(n[i])
    if(!isNaN(n[i])){
        //console.log("______")
        sum+=parseInt(n[i])
    }else output+=n[i]
    //console.log(sum)
}

output += sum.toString()
console.log(output)
 
//end-here
});
