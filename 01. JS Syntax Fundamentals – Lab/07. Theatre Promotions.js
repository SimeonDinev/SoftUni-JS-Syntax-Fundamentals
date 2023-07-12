function ticketOrder(day, age) {
  outerSwitch: switch (day) {
    case "Weekday":
      console.log(ticketPriceByAge());
      break;
    case "Weekend":
      console.log(ticketPriceByAge());
      break;
    case "Holiday":
      console.log(ticketPriceByAge());
      break;
    default:
      console.log("Invalid day!");
  }

  function ticketPriceByAge() {
    let ticketPrice;
    if (age >= 0 && age <= 18) {
      return (ticketPrice = 12);
    } else if (age >= 18 && age <= 64) {
      return (ticketPrice = 18);
    } else if (age >= 64 && age <= 122) {
      return (ticketPrice = 12);
    } else {
      return "Invalid age!";
    }
  }
}

ticketOrder("Weekday", 11);
