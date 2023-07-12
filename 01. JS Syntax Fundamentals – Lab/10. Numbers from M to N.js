function printFromMtoN(m, n) {
  if (m >= n) {
    for (let index = m; index >= n; index--) {
      console.log(index);
    }
  } else {
    let print = "";
    for (let index = n; index >= m; index--) {
      print += index + " ";
    }
    console.log(print);
  }
}

printFromMtoN(5, 1);
printFromMtoN(1, 5);
