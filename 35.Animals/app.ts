let pet_animals: string[] = [`cat`, `dog`, `rabbit`];

console.log(`pet animal name \n`);

for (let i = 0; i < pet_animals.length; i++) {
  console.log(`${pet_animals[i]}`);
}
console.log(`\n statements \n`);
for (let i = 0; i < pet_animals.length; i++) {
  console.log(
    `${pet_animals[i].toLowerCase()} would be a great choice for pet_animals.`
  );
}
console.log(`\n any of these animals would be a great choice`);
