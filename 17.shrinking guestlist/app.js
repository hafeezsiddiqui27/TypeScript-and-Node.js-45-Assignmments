var guestlist = ["affan", "saim", "ahmed", "musa"];
// for(let i=0; i<guestlist.length; i++){
//     console.log(`dear ` + guestlist[i] + `\n\n you are invited for a dinner tomorrow. \n\n thank you.`);
// }
var not_coming = "musa";
var new_guest = "mustafa";
guestlist[3] = new_guest;
// for(let i=0; i<guestlist.length; i++){
//     console.log(`dear ` + guestlist[i] + `\n\n you are invited for a dinner tomorrow. \n\n thank you.`);
// }
//console.log(`Mr. ${not_coming} is not comming tomorrow.`);
guestlist.unshift("malik zeeshan ahmed awan");
guestlist.splice(guestlist.length / 2, 2, "messi");
guestlist.push("babar azam");
// for(let i=0; i<guestlist.length; i++){
//     console.log(`dear ` + guestlist[i] + `\n\n you are invited for a dinner tomorrow. \n\n thank you.`);
// }
// console.log(`we have found a bigger table so we are inviting more guests.` )
console.log("\n\n unfortunately we are out of space, so we have space for only 2 guests \n\n");
while (guestlist.length > 2) {
    var removed_guest = guestlist.pop();
    console.log("sorry, Dear ".concat(removed_guest, ",you are not invited for dinner tomorrow."));
}
for (var i = 0; i < guestlist.length; i++) {
    console.log("dear " + guestlist[i] + "\n\n you are still invited for a dinner tomorrow. \n\n thank you.");
}
guestlist.splice(0, 2);
console.log(guestlist);
