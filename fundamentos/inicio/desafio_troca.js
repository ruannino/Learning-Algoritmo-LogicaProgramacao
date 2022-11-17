let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

// a troca também pode usar a fórmula [a, b] = [b, a];
// depois da troca a = 94 e b = 7
console.log(a);
console.log(b);