function solve(number) {
  let stringNum = number.toString();
  let sum = 0;

  for (let index = 0; index < stringNum.length; index++) {
    sum += Number(stringNum[index]);
  }
  console.log(sum);
}
solve(245678);
solve(97561);
solve(543);
