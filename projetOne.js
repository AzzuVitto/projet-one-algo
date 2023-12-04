// const prompt = require('prompt-sync')()
// console.log("Il est nuit, il pleut et il fait froid: tu rentres chez toi après une journée epuisante mais tu as perdu tes clés. Tu dois choisir entre demander de l'ospitalité à ton voisin ou partir à la recherche de tes clés")
// let answer = prompt("Choisis entre l'option 'voisin' ou 'je cherche les clés'")
// while (answer != 'voisin' && answer != 'je cherche les cles') {
//     answer = prompt("Choisis entre l'option 'voisin' ou 'je cherche les clés'")
// }
// if (answer == "voisin") {
//     console.log("Tu tapes à la porte de ton voisin mais c'est un cambrioleur qui t'ouvre: il te dit que si tu l'aideras à forcer le coffre, il partagera avec toi la moitié des bijoux précieux à l'interieur du coffre")
//     let choice = prompt("Tu l'aides?")
//     while (choice != "oui" && choice != "non") {
//         choice = prompt("Tu l'aides ?")
//     }
//     if (choice == "oui") {
//         console.log("Le voisin debarque entre temps, le cambrioleur arrive à s'enfuir. Le voisin te frappe avec un trousseau de clés retrouvés en bas, les tiennes")
//         console.log("Tu es tombé dans les pommes mais à ton reveil le voisin te propose de ne pas alerter la police et te rendre les clés seulement si tu reponds correctement à cette question")
//         answer = parseInt(prompt("Combien de bijoux y-a-t-il dans mon coffre, moins ou plus que 100?"))
//         if (answer == "moins") {
//             console.log("Tu as perdu, le voisin appelle la police")
//         }
//         else {
//             console.log("C'est gagné, le voisin te rends tes clés et n'appelle pas la police. Tu vas enfin pouvoir rentrer chez toi")
//         }
//     }
//     else {
//         console.log("Le cambrioleur te frappe avec un trousseau de clés retrouvés en bas, les tiennes. Avec tes cles il pourra cambrioler ton appartement aussi. Tu as perdu")
//     }
// }
// if (answer == "je cherche les cles") {

//     console.log("Tu as decidé de partir à la recherche de tes cles mais il pleut fort et tu n'as pas de parapluie")
//     let option = prompt("Tu as trois options: 'tramway', 'marcher sous la pluie', 'taxi'")
//     while (option != 'tramway' && option != 'marcher sous la pluie' && option != 'taxi') {
//         option = prompt(" Option invalide! Tu as trois options: 'tramway', 'marcher sous la pluie', 'taxi'")
//     }
//     switch (option) {
//         case 'tramway':
//             console.log("Le tramway est en panne, pas de chance, tu as perdu")
//             break
//         case 'marcher sous la pluie':
//             console.log("Bon choix, tu croises ton voisin qui vient de retrouver un trousseau de clés qui sont les tiennes. Tu vas enfin pouvoir rentrer chez toi")
//             break
//         case 'taxi':
//             console.log("Le chauffeur est ivre, tu dois donc choisir entre poursuivre à pied ou monter quand même")
//             option = prompt("Saisie ton choix entre 'je marche' ou 'je monte dans le taxi'")
//             while (option != 'je marche' && option != 'je monte dans le taxi') {
//                 option = prompt("Option invalide! Saisie ton choix entre 'je marche' ou 'je monte dans le taxi'")
//             }
//             if (option == 'je marche') {
//                 console.log("Bon choix, tu croises ton voisin qui vient de retrouver un trousseau de clés qui sont les tiennes. Tu vas pouvoir enfin rentrer chez toi")
//             }
//             else {
//                 console.log("Le chauffeur est tellement ivre qu'il s'est trompé de chemin, tu n'as pas pu retrouver tes clés, perdu ")
//             }
//             break
//     }
// }
