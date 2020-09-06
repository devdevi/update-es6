function newFunction(name, age, country) {
    var name = name || '';
    var age = age || ''
    var country =  country || ''

    console.log(name, age, country)
}

/* es6 */
function newFunction2(name = "visaka", age="28", country="CH") {
    console.log(name, age, country)
}

newFunction2()
newFunction2('azul', 23, "colombia")
/* Install c0de runner en las extensiones */

/* Template literal */
let dia = 1
let texto = 'Septiembre 2020'
console.log(`${dia} ${texto}`)

/* Multilineal */

let lorem = `El niño trató de acertar el hechizo, y probó con abracadabra,
tan-ta-ta-chán, y muchas otras, pero nada.
Rendido, se tiró suplicante, diciendo: '¡¡por favor, arbolito!!',
y entonces, se abrió una gran puerta en el árbol.`
console.log(lorem)

/* Destructuring */
let person = {
    'name': 'Visaka',
    'edad': 30,
    'country': 'Un país bonito'
}
const {name, edad, country} = person

console.log(`Ella se llama ${name} y tiene ${edad} y vive en ${country}`)

let team1= [ "oscar",  "julian", "carlos"]
let team2= [ "Valeria",  "Yesica", "Camila"]

/* Operador de propagacion */
let equipo = ['Visaka', ...team1, ...team2]

console.log('_______________________________')
console.log(equipo)

const names = [
    {name: 'User1', age: 23},
    {name: 'User2', age: 32}
]
let listOfNames = names.map(item => item.name)
console.log(listOfNames)

/* Promesas */
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('NICE')
        }
        reject('BAD')
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(err => console.error(err))

/* Clases */
class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB) {
        this.valueA = valueA,
        this.valueB = valueB
        return  this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2, 3));

/* Modulos */
/* import { Hello } from './module.js' */

const Hello = require("./module");
Hello('Visaka')

/* Generadores */
function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){
      var actual = fn2;
      fn2 = fn1;
      fn1 = fn1 + actual;
      var reset = yield actual;
      if (reset){
          fn1 = 1;
          fn2 = 1;
      }
    }
  }

  var secuencia = fibonacci();
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next(true).value); // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3