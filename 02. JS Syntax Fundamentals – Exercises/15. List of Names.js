function solve(array) {
  const newArray = array.sort((a, b) => {
    return a.localeCompare(b, undefined, { sensitivity: "base" });
  });

  for (let index = 0; index < newArray.length; index++) {
    console.log(`${index + 1}.${newArray[index]}`);
  }
}

solve(["John", "Bob", "Christina", "Ema"]);
