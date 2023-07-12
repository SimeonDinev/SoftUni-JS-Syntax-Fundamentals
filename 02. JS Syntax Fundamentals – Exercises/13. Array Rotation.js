function arrRotation(array, rotatingTimes) {
  //   let currentArray = array;
  for (let index = 0; index < rotatingTimes; index++) {
    let firstElement = array.shift();
    array.push(firstElement);
  }
  console.log(array.join(" "));
}

arrRotation([51, 47, 32, 61, 21], 2);
arrRotation([32, 21, 61, 1], 4);
arrRotation([2, 4, 15, 31], 5);
