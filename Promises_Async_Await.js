/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 1   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 

const salutacio = new Promise ((resolve) =>{
    setTimeout(() => {
        resolve("Hola, món");

    }, 2000);
});


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 2   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 

salutacio.then(missatge => {
  console.log(missatge);
});


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 3   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 

function saludar(input) {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            if (input === "Hola"){
                resolve("Hola, món");
            } else {
                reject("Adeu món");
            }
        }, 2000);
    });
}

saludar("Hola")
.then(missatge => console.log(missatge))
.catch(error => console.log(error));
saludar("Holi")
.then(missatge => console.log(missatge))
.catch(error => console.log(error));


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 4   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

async function esperarSalutacio() {
    const result = await salutacio;
    console.log(result);
}

esperarSalutacio();


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 5   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

async function esperarSalutacio2() {
    try{
        const result = await salutacio;
        console.log(result);
    } catch (error) {
        console.error(error);  
    }
}

esperarSalutacio2();


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * *   EXERCICI 6   * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const promesa1 = new Promise ((resolve) =>{
    setTimeout(() => {
        resolve("Hola en 2 segons!");
    }, 2000);
});

const promesa2 = new Promise ((resolve) =>{
    setTimeout(() => {
        resolve("Hola en 3 segons!");
    }, 3000);
});

Promise.all([promesa1, promesa2]).then((missatges) => {
  console.log(missatges);
});
