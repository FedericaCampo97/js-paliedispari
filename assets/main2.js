/*Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/

//prompt
//array

//Chiedo all'utente di inserire una parola
const userWord = prompt ('inserisci una parola')

//Divido la parola in un array 
let array = userWord.split('')
console.log(array)

//Inverto l'array 
array = array.reverse()
console.log(array)