export {};
//Classes
class Person {
  firstname: 'Etao';
  lastname: string;
  show() {
    console.log(`I am ${this.firstname}!`);
  }
}

let name: string = 'Etao';
let description: string = 'Sexy';
let person: [string, number, number] = ['Etao', 200, 200];
let personyee = new Person();
let secondperson = {
  positionx: 200,
  positiony: 200,
  name: 'Etao',
  description: 'Sexy'
};

let message: string = `My namd is ${person[0]}, and I am currently located at X:${person[1]}, and Y:${person[2]}`;
let message2: string = `My name is ${secondperson.name}, and I am ${secondperson.description}. Also! I am currently located at X:${secondperson.positionx}, and Y:${secondperson.positiony}`;

// console.log(message);

personyee.show();
console.log(message2);
