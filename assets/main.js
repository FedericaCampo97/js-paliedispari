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
let userNumber = prompt ('Scegli un numero da 1 a 5');

//Trasformo numero una stringa 
userNumber = parseInt(userNumber)

//creo una funzione per generare un numero random
function randomNumberPC() {
    let number = Math.floor(Math.random() * 5) + 1;
    console.log('numero del computer ' + number)
    return number
    
}
let numberPC = randomNumberPC()

//sommo i due numeri
let somma = userNumber + numberPC
console.log('somma dei due numeri ' + somma)

//stabilisco se la somma dei numeri è pari o dispari
function comparison(somma) {
    if (somma % 2) {
        return true
    } 
    return false
}
let resultComparison = comparison()

//Dichiaro chi vince 
let divisibile = somma % 2

if (userChoose == 'pari' && divisibile == 0) {
    console.log('hai vinto')
} else if (userChoose == 'dispari' && divisibile == 1) {
    console.log('hai vinto')
} else {
    console.log('hai perso')
}




