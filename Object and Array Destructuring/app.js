/*
const person = {
  ime: "Dusan",
  prezime: "Smiljanovic",
};
*/
/*
// stari nacin:
const ime = person.ime;
const prezime = person.prezime;

*/
// novi naci, objec destructuring:
//const { ime2, prezime2 } = person; // napravili smo dve varijable, 'ime' i 'prezime' tako sto smo ih 'izvukli' iz objekta

//console.log("prezime: " + prezime2);
/*

// primer 1

const fetchUser = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  } catch (error) {}
};

const main = async () => {
  const { userId, id, title, completed } = await fetchUser();
};

//console.log("User Id:" + userId);
console.log("id: " + id);
console.log("title: " + title);
console.log("completed: " + completed);
*/

// primer 2
const niz = ["Azra", "El. Org.", "Pekinska patka","Riblja Corba","Partibrejkersi"];
// stai nacin
/*
const prvaVrednost = niz[0];
const drugaVrednost = niz[1];
*/
// novi nacin - array destructing

const [prvaVrednost, drugaVrednost, trecaVrednost, cetvrtaVrednost, petaVrednost] = niz;

console.log(prvaVrednost+" | "+drugaVrednost+" | "+petaVrednost);

// primer 3
// kada imamo ugnjezdenje objekata
const osoba={
    ime:'John',
    godine: 30,
    adresa: {
ulica: "Petra Jakonica",
broj: 13,
grad: "Beograd",
    }
}


const {ime, godine, adresa:{ulica, broj, grad}}=osoba;

console.log(ime, godine, grad);
