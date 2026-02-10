const number=[1,2,3,4]
for(num of number){
    console.log(num*3)
}
const numbers = [1, 2, 3, 4];

const squared = numbers.map(num => num * num);
console.log(squared);

const num = [1, 2, 3, 4, 5, 6];

const evens = num.filter(num => num % 2 === 0);
console.log(evens);