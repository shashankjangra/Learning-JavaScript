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
var names_arr = []
var salary_arr = []
var salary_arr_sorted = []

for(let i =0; i<n*2; i++) {
    if(i%2 === 0) names_arr.push(arr[i])
    else salary_arr.push(arr[i])
}
//console.log(names_arr, salary_arr, salary_arr_sorted)
salary_arr_sorted = [...salary_arr]
salary_arr_sorted.sort()

//console.log(names_arr, salary_arr, salary_arr_sorted)

for(let j = 0; j<n; j++) {
    for(let k = 0; k<n; k++) {
        if(salary_arr_sorted[j] == salary_arr[k]) {
            console.log(names_arr[k])
        }
    }
}


//end-here
});
