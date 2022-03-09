console.log("Hello Wolrd");
 //if (operator === "+") {
    //   console.log(firstValue + secondValue);
    //} else {
    //   console.log(firstValue - secondValue);
    //}
//   const firstValue = parseInt(window.prompt("Votre premier chiffre"));
//    const operator = window.prompt("Votre operateur");
//    const secondValue = parseInt(window.prompt("Votre second chiffre"));
//
//    switch (operator) {
//        case "+":
//            console.log(firstValue + secondValue);
//            break;
//        case "-":
//            console.log(firstValue - secondValue);
//            break;
//        case "*":
//            console.log(firstValue * secondValue);
//            break;
//        case "/":
//            console.log(firstValue / secondValue);
//            break;              
//        default:
//            console.log("Invalid Operator");
//            break;
//    }
//}
//calcul();

const nom = prompt("Quel est votre prénom?")
const number = Math.floor(Math.random() * 100) + 1;
//console.log(number);
let userValue = parseInt(prompt("Choisis un nombre"));

while (userValue !== number) {
    console.log(userValue)
    if (userValue > number) {
        console.log("c'est moins")
    } else {
        console.log("c'est plus")
    }
    userValue = parseInt(prompt("Choisis un nombre")); // force l'arret de la boucle
}
//console.log(nom + "wins")
console.log(`${nom} wins`)