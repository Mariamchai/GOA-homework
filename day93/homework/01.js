for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}


for (let i = 1; i <= 50; i++) {
  console.log(i);
}


const names = ['ana', 'ben', 'carl', 'dana', 'eva'];
for (let i = 0; i < names.length; i++) {
  console.log(`გამარჯობა, ${names[i]}!`);
}


for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}


const numbers = [3, 6, 2, 9, 4, 7, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}
console.log("ლუწი რიცხვების ჯამი:", sum);