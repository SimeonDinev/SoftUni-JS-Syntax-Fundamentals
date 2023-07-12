function solve(group, typeOfGroup, day) {
  let totalPrice;

  if (typeOfGroup === "Students") {
    if (day === "Friday") {
      totalPrice = group * 8.45;
    } else if (day === "Saturday") {
      totalPrice = group * 9.8;
    } else if (day === "Sunday") {
      totalPrice = group * 10.46;
    }

    if (group >= 30) {
      totalPrice -= totalPrice * 0.15;
    }
  } else if (typeOfGroup === "Business") {
    if (group >= 100) {
      group = group - 10;
    }

    if (day === "Friday") {
      totalPrice = group * 10.9;
    } else if (day === "Saturday") {
      totalPrice = group * 15.6;
    } else if (day === "Sunday") {
      totalPrice = group * 16;
    }
  } else if (typeOfGroup === "Regular") {
    if (day === "Friday") {
      totalPrice = group * 15;
    } else if (day === "Saturday") {
      totalPrice = group * 20;
    } else if (day === "Sunday") {
      totalPrice = group * 22.5;
    }

    if (group >= 10 && group <= 20) {
      totalPrice -= totalPrice * 0.05;
    }
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(100, "Business", "Saturday");
solve(40, "Regular", "Saturday");
