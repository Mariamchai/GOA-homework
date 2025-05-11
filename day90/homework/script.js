let weight = Number(prompt("enter your weight"))
let height= Number(prompt("enter your height"))
height = height/100
let bmi = weight / (height * height)
if (bmi < 18,5){
    console.log("underweight")
}
else if(18.5<=bmi>24,9){
    console.log("normal")
}
else if(25<=bmi>29,9){
    console.log("overweight")
}
else if(30 <= bmi >34,9){
    console.log("obese")
}
else if(bmi>35){
console.log("extremely obese")
}