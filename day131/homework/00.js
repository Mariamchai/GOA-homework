console.log(Math.random())                  
console.log(Math.random() * 10)           
console.log(Math.random() * 100)

console.log(Math.floor(4.7))
console.log(Math.floor(Math.random() * 10))
console.log(Math.floor(-3.2))

let age = 20
console.log(age >= 18 ? "Adult" : "Minor") 
let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd")
let score = 45;
let status = score >= 50 ? "Passed" : "Failed"
console.log(status);

for (let i = 1; i <= 5; i++) {
  console.log(i)
}


let sum = 0
for (let i = 1; i <= 10; i++) {
  sum += i
}
console.log("Sum:", sum)


let word = "hello";
for (let i = 0; i < word.length; i++) {
  console.log(word[i])
}