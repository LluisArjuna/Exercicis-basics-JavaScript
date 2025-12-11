/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 1   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const processar = (nombre, callback) => {
    callback(nombre);
}

processar(10, (num) => console.log(`Número: ${num}`));


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 2   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const calculadora = (a, b, callback) => {
    return callback(a, b);
}

const suma = (a, b) => a + b;

console.log(calculadora(5, 3, suma));


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 3   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const esperarISaludar = (nom, callback) => {
    setTimeout(() => {
        callback(nom);
    }, 2000);
}

esperarISaludar("Lluis", (nom) => console.log(`Nom: ${nom}`));


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 4   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
const processarElements = (llista, callback) => {
    llista.forEach(element => {
        callback(element);
    });
}

var llista = [4, 5, -3, 98, 0, 23, 9];

processarElements(llista, (num) => console.log(`Número: ${num}`));


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 5   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const processarCadena = (cadena, callback) => {
    callback(cadena.toUpperCase());
}

var cadena = "bon dia com va tot!";

processarCadena(cadena, (cad) => console.log(cad));