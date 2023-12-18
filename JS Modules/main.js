// kako pozvati funkciju iz drugog js fajla
import { greet } from "./helpers/helpers.js";
import { hour, second, minute } from "./helpers/time.js";
// nije obavezno navesti extenziju.
// kada importujemo funkciju koja vraca neke podatke
import  fetchData from "./helpers/fetchData.js";
console.log(greet("Johnny"));

console.log(hour, second, minute);

console.log(fetchData());
