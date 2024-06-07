var current_users = ["saim", "abduulah", "affan", "noor"];
var new_user = ["Saim"];
new_user.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will have to enter new name"));
    }
    else {
        console.log("".concat(new_user, " is available"));
    }
});
