let output = "";
for (let i = 1; i <= 10; i++) {
  output += i;
  if (i < 10) {
    output += ",";
  }
}
console.log(output);

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
