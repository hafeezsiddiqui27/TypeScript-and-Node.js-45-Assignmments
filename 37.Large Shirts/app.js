var size = ["medium", "large"];
var defaultmessage = ("i love typescript.");
var mediumshirt = ("size of shirt is ".concat(size[0], ", and it has written ").concat(defaultmessage, " "));
var largeshirt = ("size of shirt is ".concat(size[1], ", and it has written ").concat(defaultmessage, " "));
var smallshirt = ("size of shirt is small shirt , and it has written : I Love Painting");
var extralargeshirt = ("size of shirt is small shirt , and it has written : I Love walking");
function make_shirt() {
    var simplefunction = (largeshirt);
    console.log(simplefunction);
    return simplefunction;
}
var response = make_shirt();
console.log(response);
