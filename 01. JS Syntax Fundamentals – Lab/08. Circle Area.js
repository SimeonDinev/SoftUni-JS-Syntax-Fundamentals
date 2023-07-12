function circleArea(num) {
  let result;
  if (typeof num !== "number") {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof num}.`
    );
  } else {
    result = Math.PI * num ** 2;
    console.log(result.toFixed(2));
  }
}
circleArea(5);
circleArea("name");
