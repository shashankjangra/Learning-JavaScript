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
var arr = userInput[1].split(" ")
var sum_left = 0
var sum_right = 0
for(let i = 0; i<3; i++){
    sum_left += parseInt(arr[i])
}

for (let j = n-3; j<n; j++){
    sum_right += parseInt(arr[j])
}

if(sum_right == sum_left) console.log("1")
else console.log("0")

    

//end-here
});
