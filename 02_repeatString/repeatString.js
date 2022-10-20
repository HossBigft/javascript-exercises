const repeatString = function(string, num) {
let returnString=string;
if(num<0){
    return 'ERROR';
}
if(string==''|num===0){
    return ''
}
let counter =0;
while (counter<num-1){
    returnString=returnString.concat(string);
    counter++;
};
return returnString;
};

// Do not edit below this line
module.exports = repeatString;
