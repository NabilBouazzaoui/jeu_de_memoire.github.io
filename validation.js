/*const validationFormulaire = document.getElementById("formulaire")
validationFormulaire.addEventListener('submit', valider)

function valider(e){
    const nombreDeCartes = document.getElementById("nombreDeBouton").value 
    const nom = document.getElementById("nom").value
     const messages = []
    if ( nom == ""){
       messages.push ('Champ vide ou invalide')
    }
    if ( nombreDeCartes > 10 || nombreDeCartes < 2 || nomberDeCartes == ""){
      messages.push("Rentrez un nombre entre 2 et 10")
    } if (messages.length > 0){
      e.preventDefault()
      const ul = document.getElementById("messagesErreurs")
      for(let i = 0; i > messages.length; i++){
        const li = document.createElement('li')
        const text = document.createTextNode(maessages[i])
        li.appendChild(text)
        ul.appendChild(li)
    }
    }

  }*/