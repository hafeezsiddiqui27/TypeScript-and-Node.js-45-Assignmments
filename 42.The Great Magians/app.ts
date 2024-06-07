let magicianNames = ["Ayaz", "Fahad", "Tariq", "Chris"];

function show_magicians(greet: string) {
  for (let item of magicianNames) {
    console.log(greet, item);
  }
}

show_magicians("The Great");
