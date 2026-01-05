console.log("JavaScript Homework Handling User Input, Data Types, and Arrays");

// Function get user info

function getUserInfo() {
  const name = prompt("Please enter student name:");
  const age = prompt("Please enter student age:");
  const attendance = confirm(
    "Are student present today? Click OK for Yes, Cancel for No."
  );

  return { name, age, attendance };
}

// Create an array to hold students data

let students = [];
const numOfStudents = Number(
  prompt("Enter the number of students to register:")
);

for (let i = 0; i < numOfStudents; i++) {
  const student = getUserInfo();
  students.push(student);
}
