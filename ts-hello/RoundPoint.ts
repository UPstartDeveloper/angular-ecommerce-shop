/** Lesson 6: Classes */
// w/ classes, we are able to widen our level of abstraction, by also
// including methods alongs w/ properties as members 
// this can be also be a better way to produce code that is COHESIVE
export class RoundPoint {
    // x: number; // accessible using "this" keyword
    // y: number;

    // can only have ONE constructor for a class;
    // the default constructor for a class takes in no params; 
    // and it leaves all props uninit'ed;
        // but we can change that...
    constructor(public x: number, private _y?: number) {  
        // the "?" makes a param optional
    }

    draw() {
        // ...
    }

    // example of a "getter" method
    get y() {
        return this._y;
    }

}