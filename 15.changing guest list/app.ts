let guestlist: string[] = [`affan`, `saim`, `ahmed`, `musa`];
let not_coming: string = `musa`;
let new_guest: string = `mustafa`;
guestlist[3] = new_guest;
for (let i = 0; i < guestlist.length; i++) {
  console.log(
    `dear ` +
      guestlist[i] +
      `\n\n you are invited for a dinner tomorrow. \n\n thank you.`
  );
}

console.log(`Mr. ${not_coming} is not comming tomorrow.`);
