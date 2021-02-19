
const tableauCartesMelangees = []
let tableauCartes = []
let cartesTrouvees = []
let pairesTrouvees = 0 
let paireATrouvees
let nomberDeCartes


const boutonValider = document.getElementById('boutonValider')
boutonValider.addEventListener('click', validationGenererBoutons )


/**
 * fonction permet de retourner un objet 
 *
 * @return {*} le nom et le nombreDeCartes
 */
function obtenirParametres(){
  let nombreDeCartes = parseInt(document.getElementById('nombreDeBouton').value)     
    let nom = document.getElementById("nom").value
    console.log(nom)
    return { nombreDeCartes : nombreDeCartes, nom : nom}
  }

/**
 * fonction permet de valider le formulaire en premier temps 
 * Puis générer les le jeux une fois le formulaire est valide 
 *
 * @param {*} e
 */
function validationGenererBoutons(e){

    const paramettres = obtenirParametres()
    const messages = []
    let nomInvalide  = paramettres.nom
    let nomberdeJeux = paramettres.nombreDeCartes
    let re = /^[a-z0-9 ]+$/i 

  if ( !re.test(nomInvalide) || nomInvalide.length == 0 ){
   messages.push ('Champ vide ou invalide')
  }
 
 if (nomberdeJeux < 2 || nomberdeJeux > 10 || isNaN(nomberdeJeux)){
  messages.push("Rentrez un nombre entre 2 et 10")
  } 
  if (messages.length > 0){
      e.preventDefault()
      const ul = document.getElementById("messagesErreurs")
      ul.innerHTML = ""
      for(let i = 0; i < messages.length; i++){
        const li = document.createElement('li')
        const text = document.createTextNode(messages[i])
        li.appendChild(text)
        ul.appendChild(li)
  } 
} else{
    const ul = document.getElementById("messagesErreurs")
    ul.textContent = ""
  
        nomberDeCartes = document.getElementById('nombreDeBouton').value
          for (let i = 0; i < nomberDeCartes; i++) {
            tableauCartes.push(i)
            tableauCartes.push(i)
        }
          while(tableauCartes.length > 0) {
            const index = Math.floor(Math.random() * tableauCartes.length)
            tableauCartesMelangees.push(tableauCartes[index])
            tableauCartes.splice(index, 1)
        } 
          document.getElementById('formulaire').style.display = "none" 
        
            const placeJeu = document.getElementById('jeu');
          for ( let i = 0; i < tableauCartesMelangees.length; i++){ 
              var boutton = document.createElement('button');
              boutton.style.height = '100px';
              boutton.style.width = '100px';
              boutton.classList.add('btn');
              boutton.classList.add('btn-light');
              placeJeu.appendChild(boutton);
              boutton.setAttribute("afficherCarte", tableauCartesMelangees[i] + 1 )
              afficherTimer()
              boutton.addEventListener('click', clicBouton)
          } 

    }  
  }

      /**
       * fonctione permet de verifier et valider le nombres de pares 
       * selon si les cartes sont pareils ou pas
       * si il sont pareils elle désactive les bouttons sinon elle les fait disparaître au bout de 1000 ms
       * @param {*} e
       */
      function clicBouton(e){
              const bouttonOnClick = e.target 
              let carte = bouttonOnClick.getAttribute('afficherCarte');
              let text = document.createTextNode(carte)
              bouttonOnClick.appendChild(text)
              cartesTrouvees.push(e.target)
            if (cartesTrouvees.length === 2 ){
              for (let i = 0; i <  2; i++){
                    const premierBoutton = cartesTrouvees[0]
                    let attribueDeBouttonPremierBoutton = premierBoutton.getAttribute('afficherCarte')
                    const deuxiemeBoutton = cartesTrouvees[1]
                    let attribueDeBouttonDeuxiemeBoutton = deuxiemeBoutton.getAttribute('afficherCarte')
              if (attribueDeBouttonPremierBoutton === attribueDeBouttonDeuxiemeBoutton){
                    premierBoutton.disabled = true
                    deuxiemeBoutton.disabled = true
                    pairesTrouvees = pairesTrouvees + 1
                    console.log(pairesTrouvees)
                    console.log(nomberDeCartes)
                if (pairesTrouvees == nomberDeCartes){
                      afficheModal()
                  
                } 
                cartesTrouvees = []
              } else if(attribueDeBouttonPremierBoutton != attribueDeBouttonDeuxiemeBoutton){
                  setTimeout( function(){
                    premierBoutton.innerHTML = ""
                    deuxiemeBoutton.innerHTML = ""
                },1000)
                cartesTrouvees = []
              }
            }
          }
        }


 /**
  * permet d'afficher le timer et faire jouer le timer
  * le jouer à 5 min pour finaliser le jeu
  *
  * @param {*} duration
  * @param {*} display
  */
 function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        const massagetimer = document.getElementById('messageTemps')
        massagetimer.textContent = "Vous avez 5 min pour jouer : "
        display.text( minutes + ":" + seconds)
        const contenueTimer = document.getElementById('time')
        contenueTimer.style.backgroundColor = "yellowgreen"
        contenueTimer.style.padding = "10px"
        contenueTimer.style.borderRadius = "10px"
        if (--timer < 0) {
            timer = duration;
            
        }
        if (minutes == "00" && seconds == "00"){
          afficheModal()
          const stop = document.getElementById('time')
          stop.style.display = "none"
          
        }
    }, 1000);
}

/**
 * Permet d'afficher le timer le temps est compté à partir de 5 min 
 *
 */
function afficherTimer(){
  jQuery(function ($) {
  var fiveMinutes = 60*5
      display = $('#time');
  startTimer(fiveMinutes, display);
});
}


/**
 *fonction permet d'afficher un modal lorsque le jeu est finis 
 * soit parce  que le joueur à trouver tout les cartes ou le temps du jeu est finis
 */
function afficheModal() {
                      const modal = document.getElementById('myModal')
                      modal.style.display = "block"
                      const fermerModal = document.getElementById('closeModal')
                      const femerModalaussi = document.getElementById('closeModalAussi')
                      const afficherformulaire = document.getElementById('formulaire');
                      const jeuerEncore = document.getElementById("jeuerEncore")
                      const affichenom = document.getElementById('nom').value
                      const contenueTimer = document.getElementById('time').textContent;
                      console.log(contenueTimer)
                      if ( contenueTimer == "00:00"){
                        const message = document.getElementById('contenueMessage')
                       message.textContent = "Le temps est finis :("
                      }else {
                      const message = document.getElementById('contenueMessage')
                      message.textContent = "Vous avez gagner ^^"

                      }
                      const nomDujoueur = document.getElementById('affichenom')
                      nomDujoueur.innerHTML = affichenom
                      fermerModal.addEventListener('click', function(){
                      window.location.reload(true);
                      modal.style.display = "none"
                      afficherformulaire.style.display = "inline"
                  })
                      jeuerEncore.addEventListener('click', function(){
                      window.location.reload();
                      modal.style.display = "none"
                      afficherformulaire.style.display = "inline"
                      femerModalaussi.style.display = "inline"
                  })
                      femerModalaussi.addEventListener('click', function(){
                      window.location.reload(true);
                      modal.style.display = "none"
                      afficherformulaire.style.display = "inline"
                      femerModalaussi.style.display = "inline"
                  })

}
                  