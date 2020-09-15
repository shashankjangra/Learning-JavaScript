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
var n = parseInt(userInput[0])
if(n<=0 || n >12){
    console.log("Error")
} else if (n == 2){
    console.log("28")
} else if( n == 4 || n == 6 || n==9 || n==11) {
    console.log("30")
} else {
    console.log("31")
}
//end-here
});
