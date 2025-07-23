function printNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

const names = ["mari","gio","nino"]
for (let i=0;i<names.length;i++) {
    console.log(names[i])
}

function square(array){
    for (let i=0; i < array.length;i++){
        console.log(array[i]*2)
    }
}


function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
}