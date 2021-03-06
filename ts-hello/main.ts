import { RoundPoint } from "./RoundPoint";  // e.g. importing from another module

/** Lesson 1: Typescript is just a superset of JS */

let log = message => {
    // all JS code can be run using the TS compiler
    console.log(message);
}

log("Hello World!");

/** Lesson 2: Variables */

function doSomethingWithVar() {
    for (var i = 0; i < 3; i ++) {
        console.log(i);
    }
    console.log("What is i now? ", i);
}

var a = 6; // the "var" keyword is scoped to the nearest function

let b = 7; // the "let" keyword makes variables scoped within the nearest block (more like other strongly-typed)

/** Lesson 3: Types */

// types are implict at initalization
let count = 5;
// so if you try to switch to another type, the compiler throws an error
// count = "Hello";  

// BUT, if you declare a var w/o initializing it (maybe bc you don't know ahead of time), 
// then you can still receive errors by using TYPE ANNOTATIONS
let anotherCount: number;
// anotherCount = 'Helllo';  // error 
anotherCount = 7;  // no error

// the enum type: allows us to collect constants w/ related meanning in one obj
// better to also init the constants to the value they store,
// but the enum type can also assign zero-indexed values implictly based on order
enum Color {
    RED = 0,
    GREEN = 1,
    BLUE = 2
};

/** Lesson 4: Type Assertions: a way to explictly tell TS the type of a variable */

let msg; // currently an "any" type

msg = "abc";

// let endsWithC = msg.endsWith("c");  // here, msg type is ambiguous (i.e. you don't get IntelliSense)

let endsWithC = (<string>msg).endsWith("c");  // here, the compiler knows msg is a str
// let lessPopularWay = (msg as string).endsWith("c");  

/** Lesson 5: Interfaces */

interface Point {
    // this construct is not a class - i.e. 
    // we don't use it to instantiate objs, 
    // BUT this allows us to give custom type annotations to 
    // different objects we may pass around between functions/classes/etc. in our code
    // -- allowing us to communicate effectively! 
    // ++ it is also reusable, which helps make code DRY
    x: number,
    y: number
}

// example:
let drawPoint = (point: Point) => {
    // some drawing func goes here...
}