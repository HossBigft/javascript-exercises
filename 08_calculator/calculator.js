const add = function(first, second) {
  return  first + second;
};

const subtract = function(first, second) {
	return first-second;
};

const sum = function(numbers) {
  let sum = 0;
	for(let i =0;i<numbers.length; i++){
    sum+=numbers[i];
  }
  return sum;
};

const multiply = function(number) {
  let multiplication = 1;
	for(let i =0;i<number.length; i++){
    multiplication*=number[i];
  }
  return multiplication;
};

const power = function(number, power) {
	let result = 1;
  for (let i = 0;i<power;i++){
    result*=number;
  }
  return result;
};

const factorial = function(number) {
  let factorial = 1;
	for(let i = 1;i<=number;i++){
    factorial*=i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
