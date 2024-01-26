//prezzo a km 0.21 euro
// minorenni sconto del 20%
// over 65 sconto del 40%
// output in due decimali


const busRate=0.21;

const age=Number( prompt("inserisci la tua età") );
const travel=Number( prompt("inserisci la distanza in chilometri del tragitto") );

let price= busRate * travel;
let totalPrice=0;


if(age>=65){
    const discount =  price * 40 / 100;
    totalPrice= price - discount;
    document.getElementById("result").innerHTML += totalPrice.toFixed(2) + "€";

}else if (age <18) {
    
    const discount =  price * 20 / 100;
    totalPrice= price - discount;
    document.getElementById("result").innerHTML += totalPrice.toFixed(2) + "€";

} else {

    document.getElementById("result").innerHTML += price.toFixed(2) + "€";
}

