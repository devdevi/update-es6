/* Junio 2019 */
//--------------method flat---------------/
//devolver una matriz con una submatriz aplanada,
//recibe como argumento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

const edades2 = [8, 10, 9, 20, [13, 18, 12, [20, 9, 25, 9]]];
console.log(edades2.flat().flat());

// [8, 10, 9, 20, 13, 18, 12, 20, 9, 25, 9]

const edades = [8, 10, 9, 20, [13, 18, 12, [20, 9, 25, 9]]];
edades.flat(Infinity);

// [8, 10, 9, 20, 13, 18, 12, 20, 9, 25, 9]

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

let array1 = [1,2,3,4,5];

console.log(array1.flatMap(value => [value, value * 2]));

//----------------trim---------------------------/
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello2 = 'hello world                  ';
console.log(hello2);
console.log(hello2.trimEnd()); // final

let hello3 = '                 hello world                  ';
console.log(hello3);
console.log(hello3.trim()); // final


//-------------optional catch biding-------------/

try {

} catch/*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar", "que paso"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);