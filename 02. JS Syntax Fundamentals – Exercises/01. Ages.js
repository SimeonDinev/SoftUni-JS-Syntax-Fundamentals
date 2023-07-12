function solve(age) {
  if (age < 0) {
    console.log("out of bounds");
  } else if (age >= 0 && age <= 2) {
    console.log("baby");
  } else if (age >= 3 && age <= 13) {
    console.log("child");
  } else if (age >= 14 && age <= 19) {
    console.log("teenager");
  } else if (age >= 20 && age <= 65) {
    console.log("adult");
  } else {
    console.log("elder");
  }
}

solve(22);

// with terrynary operator

// function example(age) {
//   return age < 0
//     ? console.log("a")
//     : age > 0
//     ? console.log("value2")
//     : console.log("value4");
// }

// example(0);
// example(-1);
// example(33);
