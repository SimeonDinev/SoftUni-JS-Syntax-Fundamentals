function printNumbersOnSameLine() {
  let a = "";
  for (let index = 1; index <= 5; index++) {
    a += index + " ";
  }
  console.log(a);
}
printNumbersOnSameLine();

function printNumbersOnNewLine() {
  for (let index = 1; index <= 5; index++) {
    console.log(index);
  }
}
printNumbersOnNewLine();
