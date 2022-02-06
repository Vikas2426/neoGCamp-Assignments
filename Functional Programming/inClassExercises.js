// Immutability

const obj = {
  mother: "Sadhna",
  age: 25,
};

const obj2 = {
  ...obj,
  age: obj.age - 2,
};

const colors = ["red", "orange", "blue", "green", "yellow"];
const moreColors = [...colors, "pink", "white"];

const birthday = ({ name, age }) => ({ name, age: age + 1 });

console.log(birthday({ name: "vikas", age: 24 }));

// Pure Functions

const isLessThan10 = (num) => num < 10;
const nums = [0, 2, 4, 5, 7, 10, 12, 13];
console.log(nums.filter(isLessThan10));

const add2 = (num) => num + 2;
console.log(nums.map(add2));

const isMoreThan10 = (num) => num > 10;
console.log(nums.filter(isMoreThan10));

const adder = (obj, num) =>
  num % 2 === 0
    ? { ...obj, even: obj.even + num }
    : { ...obj, odd: obj.odd + num };
const oddEvenSum = nums.reduce(adder, { even: 0, odd: 0 });
console.log(oddEvenSum);

// Currying
const logName = (name) => (msg) => `${name} says, ${msg}`;
const logMsg = logName("Vikas");
console.log(logMsg("hi!"));

// Composition : output of 1 func is input to another func

// the One

const compose =
  (...rest) =>
  (arg) =>
    rest.reduce((acc, func) => func(acc), arg);

const increment = (num) => num + 1;
const square = (num) => 2 * num;

const incrementThenSquare = compose(increment, square);
console.log(incrementThenSquare(5)); //12
const squareThenIncrement = compose(square, increment);
console.log(squareThenIncrement(5)); // 11
