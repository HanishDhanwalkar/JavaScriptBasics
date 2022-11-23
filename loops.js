let names = ["Hanish", "Dhiraj", "Ayush", "IITB"];

for (index in names) {
  console.log(names[index]);
}

console.log(names.filter((word) => word.length === 5));
console.log(names.map((word2) => word2.length === 4));
console.log(names);
