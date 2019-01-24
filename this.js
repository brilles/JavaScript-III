/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: The value of "this" will be the window Object when in global scope.

* 2. Implicit Binding / Automatic binding:  When a method is declared, whatever function is being called needs to use "this" before the dot to implicitly bind it to the object in which the method(and function) reside(s).

* 3. Explicit Binding: When a function is created outside of an object, it is not a method and therefore needs access, explicitly, to the variables outside the function. In order to control the binding, "this" is used to explicitly bind the variables. It is now possible to override what the constuctor's objects are bound to. This is done with .call and apply. 

* 4. New Binding / Conscructor function: When a constructor function is used with the "new" keyword, the function has "this" in it, which refers to that instance of the object. This object is instantiated with the "new" keyword / that line of code. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// const human = {
//   name: "Bob",
//   age: 33,
//   about: function() {
//     console.log(`${name}'s age is ${age}.`);
//   }
// };
// //with this window binding, age is not defined.
// human.about();

// Principle 2

// code example for Implicit Binding
// const human = {
//   name: "Bob",
//   age: 33,
//   about: function() {
//     console.log(`${this.name}'s age is ${this.age}.`);
//   }
// };
// human.about();

// Principle 3

// code example for Explicit Binding
// const fruit = {
//   name: "Apple"
// };

// const pie = {
//   name: "Blueberry"
// };

// const taste = ["fruity", "earthy", "sweet"];

// function menu(taste1, taste2, taste3) {
//   console.log(`A ${taste1}, ${taste3} ${this.name} pie`);
// }

// const pieLater = menu.bind(pie, ...taste);
// pieLater();

// Principle 4

// code example for New Binding

// function CoolHuman(name) {
//   this.person = name;
//   this.talk = "Hello there";
//   this.say = function() {
//     console.log(`${this.talk}, ${this.person}`);
//   };
// }

// const mike = new CoolHuman("bob");
// const bob = new CoolHuman("mike");
// mike.say();
// bob.say();
