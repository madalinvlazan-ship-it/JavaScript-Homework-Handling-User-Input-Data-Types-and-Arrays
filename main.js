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

// Create showAttendancePercentage function

function showAttendancePercentage(studentsArray) {
  let presentStudents = 0;

  for (let i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].attendance === true) {
      presentStudents++;
    }
  }

  const percentage = (presentStudents / studentsArray.length) * 100;
  alert(`Attendance percentage: ${percentage}%`);
}
showAttendancePercentage(students);

// Function createTeams

const numberOfTeams = Number(
  prompt("Enter the number of teams you want to create :")
);

function PresentStudentsList(studentsArray) {
  let presentStudents = [];

  for (let i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].attendance === true) {
      presentStudents.push(studentsArray[i].name);
    }
  }
  return presentStudents;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createTeams(studentsArray, numberOfTeams) {
  const presentStudents = PresentStudentsList(students);
  shuffleArray(presentStudents);

  const teams = [];

  for (let i = 0; i < numberOfTeams; i++) {
    teams.push([]);
  }

  for (let i = 0; i < presentStudents.length; i++) {
    const teamIndex = i % numberOfTeams;
    teams[teamIndex].push(presentStudents[i]);
  }

  for (let i = 0; i < teams.length; i++) {
    console.log(`Team` + (i + 1));
    for (let j = 0; j < teams[i].length; j++) {
      console.log(teams[i][j]);
    }
  }
  return teams;
}
createTeams(students, numberOfTeams);
