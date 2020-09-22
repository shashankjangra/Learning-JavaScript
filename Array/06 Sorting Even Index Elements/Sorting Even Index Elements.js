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
var even_arr = []
var odd_arr = []
output = []


for(let i =0; i<n; i++) {
    if(i%2 === 0) even_arr.push(arr[i])
    else odd_arr.push(arr[i])
}


even_arr = even_arr.sort()


var j = 0
var even_i = 0
var odd_i =0
while (j<n) {
    if(j%2 === 0){
        output.push(even_arr[even_i]) 
        even_i++
    } else{
        output.push(odd_arr[odd_i])
        odd_i++
    }
    j++
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

console.log(space(output))

//end-here
});
