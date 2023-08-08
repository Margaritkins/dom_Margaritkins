//function closure//
// function createCounter(start = 0) {
//   let count = start;
//   return function counter() {
//     count++;
//     return count;
//   };
// }

//the same//
// function createCounter(start = 0) {
//   let count = start;
//   return () => ++count;
// }

//the same//
// function createCounter(start=0){
//   return ()=> ++start;
// }

//the same//
const createCounter =
  (start = 0) =>
  () =>
    ++start;

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

//Написати функцію createAdder(start), яка повертає іншу функцію.
// Повертаєма функція повинна додавати аргумент, який вона приймає, до суми, яку вона повертає.

// const adder = createAdder(10);
// adder(13)    // 23
// adder(20)    // 43
// adder(100)  // 143

// const adder2 = createAdder(100);
// adder2(13)    // 113
// adder2(100)  // 213

// function createAdder(start = 10) {
//   return function summa(arg = 13) {
//     return (start = start + arg);
//   };
// }

// function createAdder(start = 10) {
//   return (arg = 13) => {
//     return start = start + arg
//   };
// }

const createAdder = (start) => (arg) => (start = start+arg);

const adder = createAdder(10);
console.log(adder(13));
console.log(adder(20));
console.log(adder(100));
