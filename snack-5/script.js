const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

console.log(nums);

const even_numbers = nums.filter((num) => num % 2 === 0);

console.log(even_numbers);
