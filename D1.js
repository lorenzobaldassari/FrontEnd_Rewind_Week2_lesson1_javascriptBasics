/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
console.log("esercizio 2")
const name= "lorenzo";
console.log("il mio nome e' "+name)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
const sum1=12+20;
const twenty=20;
const twelve=12;
const sum2=twelve+twenty;

const sum3= ()=>{
  return twelve+twenty;
}
const sum4=(num1,num2)=>{
  return num1+num2;
}
console.log("esercizio 2")
console.log(sum1)
console.log(sum2)
console.log(sum3())
console.log(sum4(twenty,twelve))



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

console.log("esercizio 3")
const x=12;
console.log(x)


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


// name="baldassari";


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


const sum5=4-x;
console.log(sum5)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/


const name1="john";
const name2="John";

if(name1===name2){
  console.log("sono uguali")
}else{
  console.log("sono diversi")
}
if(name1.toLowerCase===name2.toLowerCase){
  console.log("sono uguali")
}else{
  console.log("sono diversi")
}



