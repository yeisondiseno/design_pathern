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
