"use strict";
exports.__esModule = true;
//Classes
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.show = function () {
        console.log("I am " + this.firstname + "!");
    };
    return Person;
}());
var name = 'Etao';
var description = 'Sexy';
var person = ['Etao', 200, 200];
var personyee = new Person();
var secondperson = {
    positionx: 200,
    positiony: 200,
    name: 'Etao',
    description: 'Sexy'
};
var message = "My namd is " + person[0] + ", and I am currently located at X:" + person[1] + ", and Y:" + person[2];
var message2 = "My name is " + secondperson.name + ", and I am " + secondperson.description + ". Also! I am currently located at X:" + secondperson.positionx + ", and Y:" + secondperson.positiony;
// console.log(message);
personyee.show();
console.log(message2);
