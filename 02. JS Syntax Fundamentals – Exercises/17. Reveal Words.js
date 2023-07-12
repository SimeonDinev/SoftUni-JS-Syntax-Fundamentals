function solve(string, template) {
  let stringArray = string.split(", ");
  for (let index = 0; index < stringArray.length; index++) {
    let searchedItem = "*".repeat(stringArray[index].length);
    template = template.replace(searchedItem, stringArray[index]);
  }
  console.log(template);
}

solve("great", "softuni is ***** place for learning new programming languages");
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
