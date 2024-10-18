const listeMots = [
  "bonjour",
  "bien",
  "présentation",
  "accueil",
  "élite",
  "lithopedion",
  "assassin",
  "aspirateur",
  "lieutenant",
  "dimanche",
  "apitoyer",
  "canapé",
  "ordinateur",
  "bonnet",
  "éponge",
  "lunettes",
  "écouteurs",
  "stylo",
  "dentier",
  "pantalon",
  "usine",
  "aisselle",
  "laboratoire",
  "cachalot",
  "petunia",
  "serviette"
];

const form = document.querySelector('#form')
const affichageMot = document.querySelector('#affichageMot');
const score = document.querySelector('#score');
const word = document.querySelector('#word');
const resultat = document.querySelector('#resultat');
let motDonne = listeMots[Math.floor(Math.random() * listeMots.length)];
affichageMot.innerText = motDonne;
let scoreNumerique = 0;
score.innerText = scoreNumerique;
// resultat.innerText = "";
console.log(scoreNumerique);

function reponse(motEntreF, motDonneF){
  if (motEntreF.toLowerCase() === motDonneF.toLowerCase()){
    reussite(motEntreF, motDonneF);
  }else{
    echec(motEntreF, motDonneF);
  }
  motDonne = listeMots[Math.floor(Math.random() * listeMots.length)];
  affichageMot.innerText = motDonne;
}
function reussite(){
  scoreNumerique++;
  score.innerText = scoreNumerique;
  resultat.innerText = 'Bravo !';
  console.log('Points : ' + scoreNumerique);
  if(scoreNumerique==3){
    victoire()
  }
}
function echec(){
  resultat.innerText = 'Essaye encore !';
}
function victoire(){
  resultat.innerText = 'Vous avez réussi brillament ! N\'hésitez pas à rééssayer un niveau plus complexe.';
  location.reload();
}
form.addEventListener('submit', (e) => {
  e.preventDefault()
  let motEntre = word.value
  reponse(motEntre, motDonne, scoreNumerique);
  word.value = "";
});