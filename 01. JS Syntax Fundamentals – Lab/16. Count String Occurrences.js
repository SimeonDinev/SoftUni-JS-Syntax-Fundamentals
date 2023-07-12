function solve(text, word) {
  let textArray = text.split(" ");
  let counter = 0;

  for (let index = 0; index < textArray.length; index++) {
    if (textArray[index] == word) {
      counter += 1;
    }
  }

  console.log(counter);
}

solve("This is a word and it also is a sentence", "is");
solve(
  "softuni is great place for learning new programming languages",
  "softuni"
);
