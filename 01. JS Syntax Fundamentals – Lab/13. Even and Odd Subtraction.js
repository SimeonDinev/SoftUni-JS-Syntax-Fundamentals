function solve(inputArray) {
  let evenNumsSum = 0;
  let oddNumsSum = 0;

  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] % 2 == 0) {
      evenNumsSum += inputArray[index];
    } else {
      oddNumsSum += inputArray[index];
    }
  }

  console.log(Math.abs(evenNumsSum - oddNumsSum));
  console.log(evenNumsSum - oddNumsSum);
}

solve([3, 5, 7, 9]);
