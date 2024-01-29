

//funzione che converte i gradi celsius in fahrenheit

// (°C * 1.8) + 32 = °F
function toFahrenheit(){

    let celsius = Number(document.getElementById("celsius").value);
    
    const fahrenheit= (celsius * 1.8) + 32;
    
    document.getElementById("fahrenheit").innerHTML = fahrenheit.toFixed(1) + "°F";
    
}
    
    
// funzione che calcola la media tra tre numeri
function media(){
    let n1,n2,n3; //input

    const media = (n1 + n2 + n3) / 3;

    // output
}



function playSCF(){
    //0 sasso
    //1 carta
    //2 forbici


    let choice; //input

    const cpuChoiceN = Math.floor(Math.random() * max);//veine generato un numero casuale da 0 a 2 che deciderà la scelta della cpu
    let cpuChoise;

    // convertito il numero generato randomicamente 
    if(cpuChoiceN == 0){
        cpuChoise="sasso";
    }else if(cpuChoiceN == 1){
        cpuChoise="carta";
    }else{
        cpuChoise="forbici";
    }

    //caso l'utente scelga sasso
    if(choice == cpuChoise){
        // pareggio
    }else if(choise == "sasso" && cpuChoise =="carta"){
        // perdita
    }else if(choise == "sasso" && cpuChoise =="forbici"){
        // vincita
    }

    //caso l'utente scelga carta
    if(choise == "carta" && cpuChoise =="forbici"){
        // perdita
    }else if(choise == "carta" && cpuChoise =="sasso"){
        // vincita
    }

    //caso l'utente scelga forbici
    if(choise == "forbici" && cpuChoise =="sasso"){
        // perdita
    }else if(choise == "forbici" && cpuChoise =="carta"){
        // vincita
    }
}



    