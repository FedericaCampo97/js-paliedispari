/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5)
per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma
dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.*/

//prompt x2
//mathn random + function
//let somma
//function confronto
//console

//Chiedo all'utente di scegliere pari o dispari
const userChoose = prompt ('scegli pari o dispari');

//Chiedo all'utente di inserire un numero da 1 a 5
const userNumber = prompt ('Scegli un numero da 1 a 5');

function randomNumber () {
    let number = Math.floor(Math.random() * 5) + 1;
    return number
}
let randomNumber = randomNumber()