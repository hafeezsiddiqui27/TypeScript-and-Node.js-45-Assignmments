var shirt_size = ["small", "medium", "large"];
var shirt1 = "this shirt is for casual wearing";
var shirt2 = "this shirt is for formalwearing";
var shirt3 = "this shirt is for party wearing";
function make_shirt() {
    var simpleFunction = "this is a ".concat(shirt_size[0], " shirt, and ").concat(shirt1);
    console.log(simpleFunction);
    return simpleFunction;
}
var response = make_shirt();
console.log(response);
