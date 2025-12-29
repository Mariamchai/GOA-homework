function greet() {
  console.log("Hello!");
}

const greet = function() {
  console.log("Hello!");
};

const greet = () => {
  console.log("Hello!");
};

function sum(a, b) {
  return a + b;
}


function sum(a, b) {
  return a + b;
}

sum(5, 7);


function doSomething(func) {
  func();
}

function greet() {
  console.log("Hi!");
}

doSomething(greet);


function add(a, b) {
  return a + b; 
}


let count = 0;

function increase() {
  count++;       
  return count;
}