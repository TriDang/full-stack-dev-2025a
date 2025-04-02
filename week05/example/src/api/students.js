// This script simulates all data processing tasks
const students = [
  { id: 1, name: "Alice", major: "IT", GPA: 3.0 },
  { id: 2, name: "Bob", major: "SE", GPA: 2.8 },
  { id: 3, name: "Carol", major: "CS", GPA: 3.3 },
  { id: 4, name: "David", major: "CS", GPA: 3.2 },
  { id: 5, name: "Emma", major: "IT", GPA: 2.9 },
  { id: 6, name: "Flora", major: "SE", GPA: 3.6 },
];

// get all students
export async function getStudents() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(students), 1000);
  });
}

// get a specific student
export async function getStudent(id) {
  return new Promise((resolve) => {
    let student = {};
    setTimeout(() => {
      for (let std of students) {
        if (std.id === id) {
          resolve(std);
          return;
        }
      }
      resolve(student);
    }, 1000);
  });
}

// update a student
export async function updateStudent(id, updatedData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newData = { ...updatedData, id: id };
      for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
          students.splice(i, 1, newData);
          resolve(newData);
          return;
        }
      }
      resolve(null);
    }, 1000);
  });
}
