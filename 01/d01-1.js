var fs = require('fs');

var data = fs.readFileSync('01-2.txt', 'utf8');

let count = 0;
data.toString().split("\n").map(d=>+d).forEach((d,i,a)=>{
    if(i==0) return;
    if(d>a[i-1]) count++;
});
console.log(count)