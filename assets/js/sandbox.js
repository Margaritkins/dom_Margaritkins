//function closure
function createCounter(start = 0) {
  let count = start;
  return function counter() {
    count++;
    return count;
  };
}

//the same
function createCounter(start = 0) {
  let count = start;
  return () => ++count;
}

//the same
function createCounter(start=0){
  return ()=> ++start;
}

//the same
const createCounter = (start = 0) =>  () =>  ++start;

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
