const removeFromArray = function(array, item) {
 let args = Array.from(arguments);
args.forEach(item=>{
    let index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
       }

    });
return array;
};
let arr = [1,2,3,5];
arr=removeFromArray(arr, 3);
// Do not edit below this line
module.exports = removeFromArray;
