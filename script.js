/*const colors = ['yellow', 'green','white','black','blue','purple'];
const h1 = ['white', 'red','blue','white','green','yellow'];

 let currentCodeCouleur = 0;
 let currentTextCouleur = 0;

const changeCouleurs = () => {
    const bloc =document.querySelectorAll('.BlocItem');
    const titres =document.querySelectorAll('.titre_bloc');
    bloc.forEach((element) => {
        element.style.backgroundColor = colors[currentCodeCouleur];
    });
    titres.forEach((element)=> {
        element.style.color = h1[currentTextCouleur];
    })
     currentCodeCouleur = (currentCodeCouleur + 1) % colors.length;
     currentTextCouleur = (currentTextCouleur + 1) % h1.length;
};*/
// Déclaration d'un tableau d'objets contenant les couleurs pour les blocs et les titres
const table_couleurs = [
    {
        colors_bloc : 'yellow', // Couleur de fond pour les blocs
        colors_titre : 'white', // Couleur du texte pour les titres
    },

    {
        colors_bloc : 'red',
        colors_titre : 'blue',
    },
    {
        colors_bloc : 'black',
        colors_titre : 'purple',
    },
    {
        colors_bloc : 'blue',
        colors_titre : 'red',
    },
    {
        colors_bloc : 'white',
        colors_titre : 'yellow',
    }
    
];
// Variable pour suivre l'index actuel des couleurs dans le tableau
let currentColor = 0;
// Fonction pour changer les couleurs des blocs et des titres
const changeCouleurs = () => {
    // Sélectionne tous les éléments avec la classe 'BlocItem' et les convertit en tableau
    const bloc = Array.from(document.querySelectorAll('.BlocItem'));
    // Sélectionne tous les éléments avec la classe 'titre_bloc' et les convertit en tableau
    const titres = Array.from(document.querySelectorAll('.titre_bloc'));
    // Parcourt chaque élément avec la classe 'BlocItem'
    bloc.forEach((element) => {
        element.style.backgroundColor = table_couleurs[currentColor].colors_bloc;
    });
    titres.forEach((element )=> {
         element.style.color = table_couleurs[currentColor].colors_titre;
    });
     // Met à jour `currentColor` pour la prochaine itération
// Incrémente `currentColor` et utilise le modulo pour s'assurer qu'il reste dans les limites du tableau
// Cela permet de faire défiler les couleurs à travers les indices du tableau `table_couleurs`
    currentColor = (currentColor + 1) % table_couleurs.length;
}
// Configure l'appel automatique de la fonction `changeCouleurs` toutes les 2000 millisecondes (2 secondes)
// Cela permet de changer les couleurs automatiquement à intervalles réguliers
setInterval(changeCouleurs, 2000);
