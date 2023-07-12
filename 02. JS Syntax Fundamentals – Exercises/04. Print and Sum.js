function solve(a, b) {
  let result = [];
  let sum = 0;
  for (let index = a; index <= b; index++) {
    result.push(index);
    sum += index;
  }

  console.log(result.join(" "));
  console.log(`Sum: ${sum}`);
}
solve(5, 10);
solve(0, 26);
solve(50, 60);
