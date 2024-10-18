const listeDeListes = [
  { 
    nom : "ListeMotsFaciles",
    valeurs :
      [
        "Bonjour",
        "Bien",
        "Accueil",
        "Assassin",
        "Aspirateur",
        "Lieutenant",
        "Dimanche",
        "Ordinateur",
        "Bonnet",
        "Lunettes",
        "Stylo",
        "Dentier",
        "Pantalon",
        "Usine",
        "Aisselle",
        "Laboratoire",
        "Cachalot",
        "Petunia",
        "Serviette"
    ]
  },
  { 
    nom : "listeMotsDifficiles",
    valeurs :
      [
        "Présentation",
        "Élite",
        "Lithopedion",
        "Apitoyer",
        "Éponge",
        "Écouteurs",
        "Représenteraient",
        "Usurpation",
        "Xylophone",
        "Ipséité",
        "Cocaïnomane",
        "Phéromones"
    ]
  },
  { 
    nom : "ListePhrasesFaciles",
    valeurs :
      [
        "Merci pour tout le poisson",
        "Bons baisers de Russie", 
        "Que la force soit avec toi",
        "Les tarés s'occupent des tarés", 
        "Je suis fatigué patron",
        "Ça ne pouvait être que de l'amour",
        "Je suis inéluctable",
        "Il suffit d'un petit coup de poignet",

    ]
  },
];
let listeMots = listeDeListes[0];

// const difficulte = document.querySelector('#difficulte');
difficulte.addEventListener('change', function(){
  if(difficulte.value == 'facile'){
    listeMots = listeDeListes[0]
  }else if(difficulte.value == 'normal'){
    listeMots = listeDeListes[1]
  }else if(difficulte.value == 'difficile'){
    listeMots = listeDeListes[2]
  }
  start();
})




// let listeMots = listeMotsssss[i]
// let j = Math.floor(Math.random() * listeMots.valeurs.length);
// console.log(listeMots.valeurs[j])
