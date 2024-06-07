let size: string[] = [`medium`, `large`];

let defaultmessage = `i love typescript.`;
let mediumshirt = `size of shirt is ${size[0]}, and it has written ${defaultmessage} `;
let largeshirt = `size of shirt is ${size[1]}, and it has written ${defaultmessage} `;
let smallshirt = `size of shirt is small shirt , and it has written : I Love Painting`;
let extralargeshirt = `size of shirt is small shirt , and it has written : I Love walking`;

function make_shirt() {
  let simplefunction = largeshirt;
  console.log(simplefunction);
  return simplefunction;
}

let response = make_shirt();
console.log(response);
