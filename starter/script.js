'use strict';

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//! Default Parameters...
/////////////////////////////////////////
const booking = [];
console.log(typeof booking); //_ Why is typeof 'booking' an OBJECT instead of an ARRAY ?? => Console.log is showing "object.."

const flightBooking = function (
    flightNumber,
    numberOfPassengers = 5,
    ticketPrice = 199.99 * numberOfPassengers
) {
    //_ Default Parameters BEFORE ES6(ES5)....
    // numberOfPassengers = numberOfPassengers || 1; //? Defaults to 1 if 'numberOfPassengers' is not assigned(undefined)....Because 'undefined' is a FALSY VALUE...
    // ticketPrice = ticketPrice || 199.99;

    console.log(typeof numberOfPassengers); //? Checking to see if "DEFAULT PARAMETER" strictly(===) determines type for Specific Arg. or  variable...(fALSE!!!)

    console.log(typeof ticketPrice); //? was checking if the type will return as a FLOAT or a DOUBLE...

    const bookings = {
        flightNumber, //? (flightNumber) as used in this Object (bookings) is an Example of  ENHANCED OBJECT LITERAL SYNTAX!!!
        numberOfPassengers,
        ticketPrice,
    };

    console.log(bookings);
    booking.push(bookings);
};

flightBooking('LH123');

// console.log(typeof numberOfPassengers); //? 'undefined' maybe because of SCOPING(Outside its Code Block)?? *thinking emoji*

//_ Ofcourse, You can Overide the Set Defaults...
flightBooking('LH123', 'ABC', 'BCD');

flightBooking('LH1234', 'DCC');

// const flightBooking = function (flightNumber, numberOfPassengers = 5, ticketPrice = 199.99 + numberOfPassengers) {};
//?But I discovered that adding a math operator(*) to the "DEFAULT PARAMETER" (not sure if strictly) defines its type(PARAMETER/VARIABLE)...

//? From the Function call above (lightBooking('LH1234', 'DCC')), ticketPrice is now set to => (ticketPrice = 199.99 * 'DCC') which will result to (NaN)
//? which is still retains 'TYPEOF' number...

//_ If I want to Skip a 'PARAMETER'...
flightBooking('LH12345', undefined, 780); //? 'undefined' which was used to SKIP a PARAMETER(numberOfPassengers) here will now switch back to its set 'DEFAULT PARAMETER' (5)...

//? The PARAMETER (ticketPrice = 780) even though its Set Value(DEFAULT PARAMETER) is Determined from "numberOfPassengers" => (ticketPrice = 199.99 * numberOfPassengers),

//? The Value of (ticketPrice) was not affected when (numberOfPassengers) was skipped by setting it to "undefined" even though its "DEFAULT PARAMETER" is '5',

//? Because A VALUE(780) was now SET to (ticketPrice), therefore Overiding  its Set DEFAULT PARAMETER (ticketPrice = 199.99 * numberOfPassengers)...
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//! How Passing Args. Works: Value X Reference...(Primitive Types X Reference Types)
////////////////////////////////////////////////////////////////////////
const flight = 'LH12345'; //? Example of a Primitive Type...

//? Reference Type..
const jonas = {
    name: 'Jonas',
    passport: 6789876567876,
};

const checkIn = function (flightNumber, passengerInfoObject) {
    flightNumber = 'LH445';
    passengerInfoObject.name = `Mr ${passengerInfoObject.name}`;

    if (passengerInfoObject.passport === 6789876567876) {
        alert('Checked In');
    } else {
        alert('Passport Not Found');
    }
};

//_ Substituting the function's Argument PlaceHolders...(flightNumber = flight)
// checkIn(flight, jonas);
//?  When We pass a Reference Type(jonas) into a Function(checkIn), what is copied is actually just the Reference to the Required Object in the Memory Heap...

//? Same as Doing...
// const flightNumber = flight;
// const passengerInfoObject = jonas;

// console.log(flight);
// console.log(jonas);

//_ Lets try Something Different...
const newPassport = function (personObject) {
    personObject.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
//? This function call will affect the Outcome of the next function call (checkIn(flight,jonas)) as it will manipulate a Property
//? inside the Object(jonas) which both functions referenced...

checkIn(flight, jonas);

// Passing(Parsing) by Value...
// Passing(Parsing) by Reference... (NOT AVAILABLE IN  JAVASCRIPT)...simply a value that contains a Memory Access

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

//! First-Class and Higher-Order Functions...
//////////////////////////////////////////////////////////

/*
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//! Functions Accepting Call-Back Functions...
//////////////////////////////////////////////////////////////////////
const oneWord = function (str) {
    return str.replace(/ /g, '000').toLowerCase();
    //? Regular Expression => (/ /g, ''), No-Space Between Quotes... g = (g flag)....
    //? str.replace(/ /g, ==> replaces the Empty Spaces within a Given String,
    //? Then '000') ==> defines what Exactly Replaces the Empty Strings,
    //? (No-Space Between Quotes ('') will Only removes All Empty Spaces with Any Given String...
};

const uppercaseFirstWord = function (str) {
    const [first, ...others] = str.split(' '); //? Exactly ONE SPACE BETWEEN braces, ('One-Space')..Extra Spaces will CAP all other words...
    return [first.toUpperCase(), ...others].join(' ');
    //? join('000') ==> Defines What Happens to the Space between each word in any Given String...Use(' ') or Something else('000')
};

//_ Higher-Order Functions...
const transformer = function (anyString, callBackFunction) {
    console.log(`Original String: ${anyString}`);
    console.log(`Transformed string: ${callBackFunction(anyString)}`);

    console.log(`Transformed by: ${callBackFunction.name}`); //? '.name' is a Built-In Property of any Function in JavaScript...
};

transformer('Javascript Get with the Program!!', uppercaseFirstWord);
//? Notice we are just passing-in the function value(uppercaseFirstWord), And NOT CALLING THE FUNCTION "uppercaseFirstWord()"...

//? This is So Because the Function is Passed into Another Function(HIGHER-ORDER FUNCTION) as a Value/Arguement...
//? Making it a CALL-BACK FUNCTION,

//? The HIGHER-ORDER FUNCTION is Responsible for Initializing the CALL-BACK FUNCTION which is included in ITS ARGUEMENT
//? The CALL-BACK FUNCTION is Sometimes Refered to As the EVENT-HANDLER...

//? CALL-BACK FUNCTIONS generally Works in JAVASCRIPT for ==> Spliting Up Codes(Enhances Reusability and Readability) and ABSTRACTION(V. Important)...

transformer('JavaScript!! Get with the Program!!!', oneWord);

const high5 = function () {
    console.log('waves!!!');
};

//? Was Observing The Pop-Up Message When You Hover on 'document', '.body', '.addEventListener', '.forEach'
// document.body.addEventListener('click', high5);
// ['James', 'John', 'Jonas'].forEach(high5)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//! Functions Returning Functions...
/////////////////////////////////////////////////////////////////////
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}`);
    };
};

const greeter = greet('Hey');
//? What this Means ==> (Below Code is Just for Description...)

// const greeter ==> const greet = function('Hey') {
//     return function(name) {
//         console.log(`${'Hey'}, ${name}.`);
//     };
// };

//? Notice That 'function(name)', (name) is just the Function's Arguement Placeholder and has not be replaced with any Real Value...
//? Since the Function depends the value of (name) to work, Nothing Happened when I tried Calling the function (greet('Hello')) with just one value inserted ==> ('Hello')...
greet('Helloo');

//_ From ==> const greeter = greet('Hey');
greeter('James');
greeter('Johns');
//? The Above Code works because ==>
// const greeter ==> const greet = function('Hey') {
//     return function('James') {
//         console.log(`${'Hey'}, ${'James'}.`);
//     };
// };
//? Both Functions PlaceHolders Has Been assigned a Value When the Function was called, So Whole Function will work Now...

//? NOTE that That calling the BiGGER/OUTSIDE FUNCTION will also intialize all Functions INSIDE the BIGGER FUNCTION('function scope/block scope'))
//? Especially When there is a "return" Statement!! **** REMEMBER NOT ALL FUNCTIONS NEED THE "return" STATEMENT!! *****

//_ Rewriting The Function Using ARROW FUNCTIONS...
const greetArr = greeting => name => console.log(`${greeting}, ${name}`);

const greeterArr = greetArr('Hi');
greeterArr('Pete');
greeterArr('Paul');

greetArr('Hello')('Phil');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

//! The 'call' and 'apply' Methods...
///////////////////////////////////////////////////////////
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    //_Adding a 'Method' Using the (Enhanced Object Literal Syntax)..
    // book: function() {}, //# Old Way Of Adding Method...

    book(flightNumber, passengerName) {
        console.log(
            `${passengerName} booked a First Class Seat on ${this.airline} Flight ${this.iataCode}${flightNumber}`
        );
        this.bookings.push({
            flight: `${this.iataCode}${flightNumber}`,
            passengerName,
        });
    },
};
//_ Remember to check if the 'passengerName' from the above code is a Full Name(if There is Any Space between the First Name and the Last Name)
//_ **********
//_ **********
//_ **********

lufthansa.book(421, 'Micheal M.');
lufthansa.book(742, 'Mary Jane');
console.log(lufthansa);

const euroWings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: [],

    // book: lufthansa.book, //? Copying A Method from Another Object(lufthansa) and Then Adding it to the New Object(euroWings)...
    //? This Essentially Adds the refered Property/Method==>(lufthansa.book) as a Member of the Object(euroWings) where it was Referenced ==>(book: lufthansa.book)
};

// console.log(euroWings);

//_ Won't Work When You disable 'book: lufthansa.book' from the Object "euroWings"...
// euroWings.book(635, 'James J.'); //# James J. booked a First Class Seat on EuroWings Flight EW635
// euroWings.book(447, 'Peter. T'); //# Peter. T booked a First Class Seat on EuroWings Flight EW447

//_ Applying The 'call' Method to a Function
//////////////////////////////////////////////////////////////
const book = lufthansa.book; //# ==> Possible because JavaScript has FIRST CLASS FUNCTIONS!!!
//? The Variable 'book' is Now a Function because 'lufthansa.book' points to a Function(method) inside the Object 'lufthansa...
//? Since It is Now a function, Function Methods like ==> 'call', 'apply', 'bind' can Now be applied to it...

// book(23, 'Sarah Williams'); //# WON'T WORK!!!
//? The 'book' function here is Now just a Regular Function call...
//? which means ==> Its 'this' keyword now points to "UNDEFINED" and not the Required Object(lufthansa/euroWings) ***Atleast in JavaScript Strict Mode***
//_ ********************************
//_ ********************************
//_ PLEASE NOTE THAT The 'this' Keyword depends on How the Function is called...
//# HOW DO YOU CALL A FUNCTION AND HOW DOES METHOD OF FUNCTION CALL AFFECT WHERE ITS 'this' KEYWORD POINT TO ??

//? Difference Between FUNCTIONS and METHODS in JavaScript ???....
//? ********************************
//? ********************************

// ? So How Do We fix the Above code not Working??.....***** BY SETTING THE 'this' KEYWORD MANUALLY*****

//_ Using the 'call' Method...
//////////////////////////////////////////
//# Dummy Guidline Code....
// book.call(thisKeyword_Position, functionArg_1, functionArg_2, functionArg_n);
// book.call(nameOfObject, functionArg_1, functionArg_2, functionArg_n);
// book.call(nameOfFunction, functionArg_1, functionArg_2, functionArg_n);

book.call(euroWings, 447, 'Jay. J');
console.log(euroWings);

book.call(lufthansa, 424, 'Jane. J');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air LInes',
    iataCode: 'LX',
    bookings: [],
};

//_ Using the 'apply' Method...*** NOT ALWAYS USED ***
///////////////////////////////////////////////
//# Dummy Guidline Code....
// const arrayDataSource = [1, 2, '3', n...]; //? Stage01...
// book.apply(positionOfThe_this_keyword, arrayDataSource) //? Stage02...

const flightData = [334, 'S. Stephens'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); //? Modern JavaScript...
