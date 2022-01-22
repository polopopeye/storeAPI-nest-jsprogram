const myName = 'Nicolas';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 23);

class Persona {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name} , and ${this.age}`;
  }
}

const nicolas = new Persona(15, 'nicolas');

nicolas.getSummary();
