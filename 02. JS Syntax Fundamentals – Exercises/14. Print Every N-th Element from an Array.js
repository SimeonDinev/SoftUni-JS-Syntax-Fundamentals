function solve(array, num) {
  let output = [];
  for (let index = 0; index < array.length; index += num) {
    const element = array[index];
    output.push(element);
  }
  console.log(output.join(", "));
}

solve(["5", "20", "31", "4", "20"], 2);
solve(["dsa", "asd", "test", "tset"], 2);
solve(["1", "2", "3", "4", "5"], 6);
