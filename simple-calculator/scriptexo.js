let firstValue = prompt("Entrez la valeur pour 'firstValue' : ");
let operator = prompt("Entrez la valeur pour 'operator' : ");
let secondValue = prompt("Entrez la valeur pour 'secondValue' : ");

firstValue = parseInt(firstValue);
secondValue = parseInt(secondValue);



function calcul(chiffre1, chiffre2, operateur) {
    switch (operateur) {

        case "+" :
            console.log(chiffre1 + chiffre2);
            break;
    
        case "-" :
            console.log(chiffre1 - chiffre2);
            break;
    
        case "*" :
            console.log(chiffre1 * chiffre2);
            break;
    
        case "/" :
            console.log(chiffre1 / chiffre2);
            break; 
    
        default:
            window.alert("please fill in the prompts");
            break;
    }    
}

// DEBUT DU PROGRAMME
//console.log(eval('2 + 2')); :)
calcul(firstValue, secondValue, operator);
