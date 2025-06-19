const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

console.log(people);

people.forEach((element) => {
  console.log(element.name);
});

// con il ciclo for

for (let i = 0; i < people.length; i++) {
  const element = people[i].name;
  console.log(element);
}
