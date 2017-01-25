let hello = "Hello World";

// create anonymous function to primt value
let sayHello = function() {
    console.log(hello);
}

// if we want to make this function as publick  -> so other files could use it we need something from NodeJS as JS doesn't have it.
// we can use "exports". We will make this function publick by using expoerts keyword

exports.sayHello = function() {
    console.log(hello);
}