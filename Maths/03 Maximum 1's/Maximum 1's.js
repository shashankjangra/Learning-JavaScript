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
var input = userInput[0]
var arr = []
var count = 0
for (let i=0; i<input.length ; i++) {
    if (input.charAt(i) == "1") {
        count++
        if(i == input.length-1) arr.push(count)
    } else {
        arr.push(count)
        count = 0
    }
}

function largest(arr) {
    let large = arr[0]
    for (let i=0; i<arr.length;i++) {
        if (parseInt(arr[i])>=large){
            large = parseInt(arr[i])
        }
    }
    return large
}

if (count === 0) console.log("-1")
else console.log(largest(arr))


//end-here
});
