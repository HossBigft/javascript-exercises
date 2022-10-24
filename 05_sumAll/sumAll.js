const sumAll = function(start, end) {
let sum=0;
if(start<0||end<0||typeof(start)!='number'||typeof(end)!='number'){
    return "ERROR"
}
let currentIndex=start;
let endIndex=end;
if(currentIndex>endIndex){
    currentIndex=end;
    endIndex=start;
}
for(currentIndex;currentIndex<=endIndex;currentIndex++){
    sum+=currentIndex;
}
return sum;
};

sumAll(1,4);
// Do not edit below this line
module.exports = sumAll;
