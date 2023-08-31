/*Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/

//prompt
//array

//Chiedo all'utente di inserire una parola
const userWord = prompt ('inserisci una parola')

//Divido la parola in un array 
let array = userWord.split('')


//Inverto l'array 
array = array.reverse()


//Trasformo di nuovo l'array invertito in stringa
const revertedWord = array.join('')

//Comparo la parola inserita 
if (userWord == revertedWord) {
    console.log('la parola è palindroma')
} else {
    console.log(userWord)
}