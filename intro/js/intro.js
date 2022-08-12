function sum(a, b) {
  return a + b;
}

let res = sum(1, 2);
console.log("res", res);

// funcion de primer order, puede guardar otras funciones y ejecutarlas
const FSum = sum;
res = FSum(7, 9);
console.log("res", res);

// función de primer nivel
function operation(fn, a, b) {
  console.log("se hace algo ");
  console.log(fn(a, b));
}

operation(sum, 30, 67);

// arrow funtion, funciones anonimas

let fA = () => {
  console.log("algo");
};

fA();

operation((a, b) => a * b, 5, 7);

/// foreach
const names = ["Yeison", "Jenis", "Juan", "Anna"];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toLocaleUpperCase()));
console.log("names ", names);
names.sort(); // este es mutable
console.log("names sorted ", names);

// map
const namesUpper = names.map((name) => name.toLocaleUpperCase());
console.log("namesUpper ", namesUpper);

// reduce
const numbers = [5, 4, 7, 1, 10];
const total = numbers.reduce((ac, number) => {
  console.log("ac", ac);
  return ac + number * 2;
}, 0); // el valor despues de la coma es el valor inicial del acumulado
console.log("total", total);
