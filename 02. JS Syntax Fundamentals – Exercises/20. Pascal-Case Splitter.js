function solve(input) {
  let words = [];
  let currentWord = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === char.toUpperCase()) {
      // Start of a new word
      if (currentWord !== "") {
        words.push(currentWord);
        currentWord = "";
      }
    }

    currentWord += char;
  }

  if (currentWord !== "") {
    // Add the last word
    words.push(currentWord);
  }

  // Join the words with comma and space
  const result = words.join(", ");

  console.log(result);
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
solve("HoldTheDoor");
solve("ThisIsSoAnnoyingToDo");
