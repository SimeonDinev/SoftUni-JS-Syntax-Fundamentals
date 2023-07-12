function solve(template) {
  let wordsArray = template.split(" ");
  let result = [];

  for (let index = 0; index < wordsArray.length; index++) {
    if (wordsArray[index].startsWith("#") && wordsArray[index].length > 1) {
      result.push(wordsArray[index]);
    }
  }

  // print output
  for (let index = 0; index < result.length; index++) {
    let resultWord = result[index].slice(1);
    console.log(resultWord);
  }
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
solve(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
