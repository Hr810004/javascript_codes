//IIFE : immediately invoked function expressions 
//to avoid global scope usage in the code pollution
(function harsh() { // named IIFE
    console.log(`DB connected 1`);
})(); // to end the function we need to add a semicolon at the end of the function definition.


(() => { // Unamed IIFE
    console.log(`DB connected 2`);
})();

((name) => {
    console.log(`DB connected to ${name}`);
})('harsh')
