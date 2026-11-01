//IIFE = Immediately Invoked Function Expression

(function () {
    console.log("Hello World");
})();

( () => {
    console.log("Hello from Arrow function")
}
)();

( (name) => {
    console.log(`Hello from ${name}`)
}
)("Hitesh")

