// //prezzo km e età

// const prezzoPerKm = 0.21
// const etaUtente = prompt("Insterisci la tua età")
// let kmTotali = prompt("Inserisci i Km") * prezzoPerKm

// //sconto

// const anni18 = 20 / 100
// const anni65 = 40 / 100

// //approssimazione

// kmTotali = Math.floor(kmTotali)

// //nosconto

// if(etaUtente < 19){
//     let pagamento = kmTotali * anni18

//     console.log('Il prezzo da pagare è ' + pagamento )
// }   else if(etaUtente > 64){
//     let pagamento = kmTotali * anni65

//     console.log('Il prezzo da pagare è ' + pagamento)
// }   else {
//     console.log(kmTotali)
// }


//da inserisci km, da eta chiedere fascia eta

const prezzoPerKm = 0.21
const inputEtaElement = document.getElementById("eta")
const inputKmElement = document.getElementById("km")
const SubmitElement = document.getElementById("submit")

//sconti

const scontoOver = 0.4
const scontoMinorenne = 0.2



let eta, km = ''
let prezzoTotale = 0
//mandare le risposte con bottone in console

SubmitElement.addEventListener('click', function(){
    //console.log('click sul bottone')

    km = inputKmElement.value    //string
    eta = inputEtaElement.value    //string

    prezzoTotale = km * prezzoPerKm //number

    if(eta = 'Minorenne'){
        prezzoTotale = prezzoTotale - scontoMinorenne
    } else if(eta = 'Maggiorenne'){
        prezzoTotale = prezzoTotale - scontoOver
    }
    else{
        prezzoTotale
    }
    

    console.log(km, eta, prezzoTotale)
})






