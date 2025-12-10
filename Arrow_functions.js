/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 1   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*function add(a, b) {
    return a+b;
}*/

const add = (a, b) => a+b;

var num = add(2,3);

console.log(num);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 2   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const randomNumber = () => Math.floor(Math.random() * 101);

var random_num = randomNumber();

console.log(random_num);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 3   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
class person {
    constructor(name) {
       this.name = name;
    }

    greet = () =>{
        console.log(`Hola, ${this.name}`);
    }
}

var personeta = new person("lluis");

personeta.greet();


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 4   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const printNumbers = (numArray) => {
    for (let i = 0; i < numArray.length; i++) {
        const print = () => console.log(numArray[i]);
        print()
    }
}

var llista = [4, 5 -3, 98, 0, 23, 9];

printNumbers(llista);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 5   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const myTimeout = setTimeout(espera3s, 3000);

const espera3s = () => console.log("Bom dia!!!");


