function solve(speed, area) {
  const speedArea = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };
  let speeding = speed - speedArea[area];
  let status;

  if (speeding < 0) {
    console.log(`Driving ${speed} km/h in a ${speedArea[area]} zone`);
  } else if (speeding > 40) {
    console.log(
      `The speed is ${speeding} km/h faster than the allowed speed of ${speedArea[area]} - excessive speeding`
    );
  } else if (speeding > 20) {
    console.log(
      `The speed is ${speeding} km/h faster than the allowed speed of ${speedArea[area]} - speeding`
    );
  } else {
    console.log(
      `The speed is ${speeding} km/h faster than the allowed speed of ${speedArea[area]} - reckless driving`
    );
  }
}

solve(40, "city");
solve(21, "residential");
solve(120, "interstate");
solve(200, "motorway");
