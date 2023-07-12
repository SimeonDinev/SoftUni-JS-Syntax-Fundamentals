function gradeQualification(grade) {
  if (grade >= 5.5 && grade <= 6) {
    console.log("Excellent");
  } else if (grade > 6) {
    console.log("This grade is not in scale!");
  } else {
    console.log("Not excellent");
  }
}

gradeQualification(6);
