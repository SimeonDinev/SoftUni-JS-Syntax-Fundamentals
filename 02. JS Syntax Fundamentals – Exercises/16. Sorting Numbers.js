function solve(array) {
  let resultArray = [];
  let sortedArray = array.sort((a, b) => a - b);

  // check while loop !!!
  while (sortedArray.length !== 0) {
    resultArray.push(sortedArray.shift());
    resultArray.push(sortedArray.pop());
  }
  console.log(resultArray.join(" "));
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
