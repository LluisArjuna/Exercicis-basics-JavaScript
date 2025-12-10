/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 1   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const potConduir = (edat) => {
    return edat >= 18 ? 'Pots conduir' : 'No pots conduir';
};

console.log(potConduir(5));
console.log(potConduir(22));


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 2   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const numMesGran = (a, b) => {
   return a > b ? 'num1 és més gran' : 'num2 és més gran';
}

console.log(numMesGran(3,98));
console.log(numMesGran(24,6));


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 3   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const signeNum = (num) => {
    return num > 0 ? 'Es positiu' : num < 0 ? 'Es negatiu' : 'Es zero';  
}

console.log(signeNum(3));
console.log(signeNum(0));
console.log(signeNum(-2));


const trobarMaxim = (a, b, c) => {
    return a > b ? `${a} és el valor màxim` : b > c ? `${b} és el valor màxim` : `${c} és el valor màxim`;  
}

console.log(trobarMaxim(3, 2, 1));
console.log(trobarMaxim(3, 4, 2));
console.log(trobarMaxim(3, 4, 5));


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 4   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const parOlmpar = (arrayNum) => {
    arrayNum.forEach(element => {
        var tipus = element % 2 === 0 ? `${element} és parell` : `${element} és imparell`; 
        console.log(tipus);
    });
} 

var llista = [4, 5, 3, 98, 0, 23, 9];

parOlmpar(llista);