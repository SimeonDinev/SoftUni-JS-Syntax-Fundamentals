// '+', '-', '*', '/', '%', '**'
function solve(num1, num2, digit) {
  let currency;
  switch (digit) {
    case "+":
      currency = num1 + num2;
      break;
    case "-":
      currency = num1 - num2;

      break;
    case "*":
      currency = num1 * num2;
      break;
    case "/":
      currency = num1 / num2;
      break;
    case "%":
      currency = num1 % num2;
      break;
    case "**":
      currency = num1 ** num2;
      break;
    default:
      console.log("Error!");
      break;
  }
  console.log(currency);
}
solve(2, 4, "*");
