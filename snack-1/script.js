const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

console.log(names);

names.forEach((name) => {
  console.log(name);
});

// con il ciclo for

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  console.log(name);
}
