// https://www.hackerrank.com/challenges/grading

function solve(grades) {
  return grades.map(grade => {
    if (grade >= 38) {
      if (grade % 5 === 3) {
        grade += 2;
      } else if (grade % 5 === 4) {
        grade += 1;
      }
    }
    return grade;
  });
}

function main() {
  var n = parseInt(readLine());
  var grades = [];
  for (var grades_i = 0; grades_i < n; grades_i++) {
    grades[grades_i] = parseInt(readLine());
  }
  var result = solve(grades);
  console.log(result.join("\n"));



}
