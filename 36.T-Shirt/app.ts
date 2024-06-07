let shirt_size: string[] = [`small`, `medium`, `large`];
let shirt1 = `this shirt is for casual wearing`;
let shirt2 = `this shirt is for formalwearing`;
let shirt3 = `this shirt is for party wearing`;

function make_shirt() {
  let simpleFunction = `this is a ${shirt_size[0]} shirt, and ${shirt1}`;
  console.log(simpleFunction);
  return simpleFunction;
}

let response = make_shirt();
console.log(response);
