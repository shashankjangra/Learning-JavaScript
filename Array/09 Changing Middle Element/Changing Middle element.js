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

var s = userInput[0]

//console.log(s.length)
var new_s = ""

if(s.length%2===0){
    let k=s.length/2 -1
    //console.log("k = " + k)
    let l = k+1
    //console.log("l = " + l)
    for(let i=0; i<s.length; i++){
        if(i==k || i==l){
            new_s = new_s + "*"
        }
        else {
            new_s = new_s + s.charAt(i)
        }
    }
} else {
    let k = parseInt(s.length/2)
    //console.log("entry")
    //console.log(k)
    for(let i=0; i<s.length; i++){
        if(i==k){
            new_s = new_s + "*"
        }
        else {
            new_s = new_s + s.charAt(i)
        }
    }
    
}

console.log(new_s)
    

//end-here
});
