function solve(number, ...array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element === "chop") {
      number = number / 2;
    } else if (element === "dice") {
      number = Math.sqrt(number);
    } else if (element === "spice") {
      number = number + 1;
    } else if (element === "bake") {
      number = number * 3;
    } else if (element === "fillet") {
      number -= number * 0.2;
    }
    console.log(number);
  }
}
//solve("32", "chop", "chop", "chop", "chop", "chop");
solve("9", "dice", "spice", "chop", "bake", "fillet");
