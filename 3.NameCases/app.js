//lowercase
var personName = "Karachi";
console.log("lowercase", personName.toLowerCase());
//uppercase
console.log("uppercase", personName.toLocaleUpperCase());
//TITLECASE
console.log("titlecase", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));