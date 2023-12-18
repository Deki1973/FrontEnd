class Osoba {
  constructor(ime, prezime, godine) {
    // u konstruktoru navodimo svojstva koja ce imati
    // objekat te klase i dodeljujemo mu inicijalne vrednosti:

    this.ime = ime;
    this.prezime = prezime;
    this.godine = godine;
  }

  predstaviSe() {
    console.log(`Zovem se ${this.ime} ${this.prezime}, imam ${this.godine} godina.`);
  }

  // staticke metode
  // bondovane su direktno na klasu, nije potrebno instanciranje objekta
  // koriste
  static addNumbers(a, b) {
    return a + b;
  }
}

const osoba1 = new Osoba("Ivan", "Ivanovic", 30);
const osoba2 = new Osoba("Petar", "Petrovic", 40);
const osoba3 = new Osoba("Milan", "Mladenovic", 36);
console.log(osoba1);
console.log(osoba1.predstaviSe());
console.log(osoba2.predstaviSe());
console.log(osoba3.predstaviSe());

console.log(Osoba.addNumbers(2, 3));

class Calculator {
  static add(a, b) {
    return a + b;
  }
  static subract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

console.log(Calculator.add(5, 10));
