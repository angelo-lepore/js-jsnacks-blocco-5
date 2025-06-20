const students = [
  { id: 1, name: "Marco Lanci", age: 32, class: "3C" },
  { id: 2, name: "Mario Banfi", age: 34, class: "4A" },
  { id: 3, name: "Luigi Banzi", age: 33, class: "5B" },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

console.log(students);

const student = "Marco Lanci";

let class_student = null;

students.forEach((element) => {
  if (element.name === student) {
    class_student = element.class;
  }
});

console.log(class_student);

// con il ciclo for

let classStudent = null;

for (let i = 0; i < students.length; i++) {
  if (students[i].name === student) {
    classStudent = students[i].class;
    break;
  }
}

console.log(classStudent);
