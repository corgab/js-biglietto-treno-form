//da inserisci km, da eta chiedere fascia eta

const prezzoPerKm = 0.21; // float
const inputEtaElement = document.getElementById("eta")
const inputKmElement = document.getElementById("km")
const SubmitElement = document.getElementById("submit")

//sconti

const scontoOver = 0.40
const scontoMinorenne = 0.20



let age, km = ''
let prezzoTotale = 0

//mandare le risposte

SubmitElement.addEventListener('click', function(){

    km = parseFloat(inputKmElement.value)    //float
    age= inputEtaElement.value   //string


    prezzoTotale = km * prezzoPerKm //number

    if(age == 'minorenne'){
        prezzoTotale = prezzoTotale * scontoMinorenne
        document.getElementById('prezzoTotale').innerHTML = prezzoTotale.toFixed(2)
        document.getElementById('etapasseggero').innerHTML = "Biglietto Minorenne"


    } else if(age == 'maggiorenne'){
        prezzoTotale = prezzoTotale - scontoOver
        document.getElementById('prezzoTotale').innerHTML = prezzoTotale.toFixed(2)
        document.getElementById('etapasseggero').innerHTML = "Biglietto Maggiorenne"

    }
    else{
        document.getElementById('prezzoTotale').innerHTML = prezzoTotale.toFixed(2)
    }
})







