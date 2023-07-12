function solve(text) {
  const textArray = text
    .split(/[\W]/)
    .filter((w) => w.length > 1)
    .map((x) => x.toUpperCase())
    .join(", ");

  console.log(textArray);
}

solve("Hi, how are you?");
solve("Alex");
