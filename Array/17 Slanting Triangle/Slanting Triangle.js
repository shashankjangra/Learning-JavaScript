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
var print = ""
for(var i=1; i<=n; i++) {
    for( var j=1; j<=i; j++) {
        print = print + j
    }
    console.log(print)
    print=""
}

for(var k=n-1; k>=0; k--) {
    for( var l=1; l<=k; l++) {
        print = print + l
    }
    console.log(print)
    print=""
}


//end-here
});
