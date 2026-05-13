function add(a,b) {
	return a + b;
};

function subtract(a,b) {
	return a - b;
};

function sum(array = []) {
	let sum = 0;
  for (let i = 0; i < array.length ; i++) {
    sum += array[i];
  }
  return sum;
};

function multiply(array = []) {
  let product = 1;
  for (let i = 0; i < array.length ; i++) {
    product *= array[i];
  }
  return product;
};

function power(b,e) {
	return b ** e;
};

function factorial(a) {
	fact = 1;
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
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
