function solve(fruit, weight, money) {
  weight /= 1000;
  console.log(
    `I need $${(weight * money).toFixed(2)} to buy ${weight.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

solve("orange", 2500, 1.8);
solve("apple", 1563, 2.35);
