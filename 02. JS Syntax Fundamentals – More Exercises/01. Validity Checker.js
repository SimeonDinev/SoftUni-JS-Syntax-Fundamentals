function solve(x1, y1, x2, y2) {
  distanceValidation(x1, y1, 0, 0);
  distanceValidation(x2, y2, 0, 0);
  distanceValidation(x1, y1, x2, y2);
}

function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function distanceValidation(x1, y1, x2, y2) {
  const calculation = calculateDistance(x1, y1, x2, y2);

  if (Number.isInteger(calculation)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);
