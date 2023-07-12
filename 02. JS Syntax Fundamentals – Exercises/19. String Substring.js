function solve(word, template) {
  let templateArray = template.split(" ");

  for (let index = 0; index < templateArray.length; index++) {
    const element = templateArray[index];
    let lowercaseFirstWord = word.toLowerCase();
    let lowercaseSecondWord = element.toLowerCase();

    if (lowercaseFirstWord === lowercaseSecondWord) {
      return console.log(lowercaseFirstWord);
    }
  }
  console.log(`${word} not found!`);
}

solve("javascript", "JavaScript is the best programming language");
solve("python", "JavaScript is the best programming language");
