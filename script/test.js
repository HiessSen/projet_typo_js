const form = document.querySelector('#form');
const affichageMot = document.querySelector('#affichageMot');
const score = document.querySelector('#score');
const word = document.querySelector('#word');
const resultat = document.querySelector('#resultat');
let scoreNumerique = 0;
let motDonne = listeMots.valeurs[Math.floor(Math.random() * listeMots.valeurs.length)];
score.innerText = scoreNumerique;
affichageMot.innerText = motDonne;

function start(){
  motDonne = listeMots.valeurs[Math.floor(Math.random() * listeMots.valeurs.length)];
  scoreNumerique = 0;
  score.innerText = scoreNumerique;
  affichageMot.innerText = motDonne;
}

function reponse(motEntreF, motDonneF){
  if (motEntreF.toLowerCase() === motDonneF.toLowerCase()){
    reussite(motEntreF, motDonneF);
  }else{
    echec(motEntreF, motDonneF);
  }
  motDonne = listeMots.valeurs[Math.floor(Math.random() * listeMots.valeurs.length)];
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
