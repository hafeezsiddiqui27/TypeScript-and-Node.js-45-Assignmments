let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number = 2;
let ordinal: string;

{
  if (number === 1) {
    ordinal = number + `st`;
  } else if (number === 2) {
    ordinal = number + `nd`;
  } else if (number === 3) {
    ordinal = number + `rd`;
  } else {
    ordinal = number + `th`;
  }
  console.log(ordinal);
}
