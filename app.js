//da inserisci km, da eta chiedere fascia eta

const prezzoPerKm = 0.21; // float
const inputEtaElement = document.getElementById("eta")
const inputKmElement = document.getElementById("km")
const SubmitElement = document.getElementById("submit")

//sconti

const scontoOver = 0.4
const scontoMinorenne = 0.2



let age, km = ''
let prezzoTotale = 0

//mandare le risposte con bottone in console

SubmitElement.addEventListener('click', function(){

    km = parseFloat(inputKmElement.value)    //float
    age = inputEtaElement.value    //string

    prezzoTotale = km * prezzoPerKm //number

    if(age == 'minorenne'){
    //    console.log('scelta minorenne')
        prezzoTotale = prezzoTotale - scontoMinorenne
        console.log(prezzoTotale)

    } else if(age == 'maggiorenne'){
        prezzoTotale = prezzoTotale - scontoOver
        console.log(prezzoTotale)

    }
    else{
        console.log(prezzoTotale)
    }
    
})






