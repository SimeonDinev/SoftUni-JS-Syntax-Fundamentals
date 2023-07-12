function solve(number) {
  let numToString = number.toString();
  let sum = 0;
  let trueOrFalse = true;
  let currIndex = Number(numToString[0]);

  for (let index = 0; index < numToString.length; index++) {
    if (currIndex === Number(numToString[index])) {
      trueOrFalse = true;
    } else {
      trueOrFalse = false;
    }
    sum += Number(numToString[index]);
  }

  console.log(trueOrFalse);
  console.log(sum);
}

solve(2222222);
solve(1234);
