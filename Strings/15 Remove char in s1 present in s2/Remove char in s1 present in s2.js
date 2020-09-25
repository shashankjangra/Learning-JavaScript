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
var s1 = input[0]
var s2 = input[1]

//s1 = s1.replace(s1[0], '')
//console.log(s1)

if(s1 == s2) console.log("-1") 
else{
    for(let i=0; i<s1.length; i++) {
        for (let j=0; j<s2.length; j++) {
            if(s1[i] == s2[i]){
                //console.log(s1[i])
                s1 = s1.replace(s1[i], '')
            }
        }
    }
    console.log(s1)
}


//end-here
});