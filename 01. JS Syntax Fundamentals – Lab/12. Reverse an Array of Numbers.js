function solve(n, inputArr) {
  let newArray = [];
  for (let index = 0; index < n; index++) {
    newArray[index] = inputArr[index];
  }
  console.log(newArray.reverse());
}
solve(3, [10, 20, 30, 40, 50]);
