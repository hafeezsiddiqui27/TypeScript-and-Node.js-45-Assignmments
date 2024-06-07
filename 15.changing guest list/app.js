var guestlist = ["affan", "saim", "ahmed", "musa"];
var not_coming = "musa";
var new_guest = "mustafa";
guestlist[3] = new_guest;
for (var i = 0; i < guestlist.length; i++) {
    console.log("dear " + guestlist[i] + "\n\n you are invited for a dinner tomorrow. \n\n thank you.");
}
console.log("Mr. ".concat(not_coming, " is not comming tomorrow."));
