function solve(number1, operator, number2) {
  let a = 0;
  if (operator == "+") {
    a = number1 + number2;
  } else if (operator == "-") {
    a = number1 - number2;
  } else if (operator == "/") {
    a = number1 / number2;
  } else if (operator == "*") {
    a = number1 * number2;
  }
  console.log(a.toFixed(2));
}

solve(5, "+", 10);
solve(25.5, "-", 3);
