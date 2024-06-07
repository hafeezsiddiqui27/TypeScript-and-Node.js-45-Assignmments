function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Please Bring me a sandwitch with: ".concat(items.join(', '), "."));
}
sandwich("beef", "cheese", "sauce");
sandwich("capsicum", "lettuce", "tomato");
sandwich("avocado", "chicken", "mayo");
