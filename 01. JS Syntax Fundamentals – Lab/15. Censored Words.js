function solve(text, word) {
  let repeatTimes = word.length;
  let result = text.replace(word, "*".repeat(repeatTimes));
  console.log(result);
}

solve("A small sentence with some words", "small");
solve("Find the hidden word", "hidden");
