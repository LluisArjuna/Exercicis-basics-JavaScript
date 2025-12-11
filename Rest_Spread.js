/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 1   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];

var array3 = [...array1, ...array2];

console.log(array3);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 2   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const suma = (...theArgs) => {
    var total = 0;
    for (const element of theArgs) {
        total += element; 
    };
    return total;
};

console.log(suma(1, 2, 3));


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 3   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const objecte1 = { 
    nom: "ratoli",
    clase: "animal"
 };

const objecte2 = {...objecte1};

objecte2.nom = "gat";

console.log(objecte1);
console.log(objecte2);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 4   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var llista = ["a", 32, -3, "gat", "gos", 342];

var [a, b, ...resta] = llista;
console.log(a);
console.log(b);
console.log(resta);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 4   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const spreadFunc = (a, b, c) => {
    return a+b+c;
};

var array = [23, 6, 12];
console.log(spreadFunc(...array));


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 5   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const gat = {
    raza : "persa"
};

const taula = {
    familia : "mueble"
};

const nouObj = {...gat, ...taula};

console.log(nouObj);