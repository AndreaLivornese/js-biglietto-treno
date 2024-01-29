

//funzione che converte i gradi celsius in fahrenheit

// (°C * 1.8) + 32 = °F
function toFahrenheit(){

    let celsius = Number(document.getElementById("celsius").value);
    
    const fahrenheit= (celsius * 1.8) + 32;
    
    document.getElementById("fahrenheit").innerHTML = fahrenheit.toFixed(1) + "°F";
    
}
    
    
// funzione che calcola la media tra tre numeri
function media(){
    let n1= Number(document.getElementById("n1").value);
    let n2= Number(document.getElementById("n2").value);
    let n3= Number(document.getElementById("n3").value);

    const media = (n1 + n2 + n3) / 3;

    document.getElementById("media").innerHTML = media.toFixed(2);
}



function playSCF(){
    //0 sasso
    //1 carta
    //2 forbici


    let choice= document.getElementById("scelta-utente").value;

    const cpuChoiceN = Math.floor(Math.random() * 3);//veine generato un numero casuale da 0 a 2 che deciderà la scelta della cpu
    let cpuChoice;

    // convertito il numero generato randomicamente 
    if(cpuChoiceN == 0){
        cpuChoice="sasso";
    }else if(cpuChoiceN == 1){
        cpuChoice="carta";
    }else{
        cpuChoice="forbici";
    }

    document.getElementById("gioco").innerHTML="l'avversario ha scelto " + cpuChoice + "<br>";

    //caso l'utente scelga sasso
    if(choice == cpuChoice){
        document.getElementById("result").innerHTML="E' un pareggio."
    }else if(choice == "sasso" && cpuChoice =="carta"){
        document.getElementById("result").innerHTML="Hai perso."
    }else if(choice == "sasso" && cpuChoice =="forbici"){
        document.getElementById("result").innerHTML="Hai vinto."
    }

    //caso l'utente scelga carta
    if(choice == "carta" && cpuChoice =="forbici"){
        document.getElementById("result").innerHTML="Hai perso."
    }else if(choice == "carta" && cpuChoice =="sasso"){
        document.getElementById("result").innerHTML="Hai vinto."
    }

    //caso l'utente scelga forbici
    if(choice == "forbici" && cpuChoice =="sasso"){
        document.getElementById("result").innerHTML="Hai perso."
    }else if(choice == "forbici" && cpuChoice =="carta"){
        document.getElementById("result").innerHTML="Hai vinto."
    }
}



    