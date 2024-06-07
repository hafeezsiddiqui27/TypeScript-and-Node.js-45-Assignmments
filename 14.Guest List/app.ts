let guestlist: string[] = [`affan`, `saim`, `ahmed`, `musa`];
for (let i = 0; i < guestlist.length; i++) {
  console.log(
    `dear ` +
      guestlist[i] +
      `\n\n you are invited for a dinner tomorrow. \n\n thank you.`
  );
}

export { guestlist };
