function rechercherPays() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('pays');
  filter = input.value.toUpperCase();
  ul = document.getElementById("listePays");
  li = ul.getElementsByTagName('li');

  if (input ==='') {
    return;
  }

  if (filter !== '') {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }

  var athletesList = ""; // Initialiser la liste des athlètes
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
  
    // Recherche par pays
    if (txtValue.toUpperCase().startsWith(filter) || li[i].dataset.continent.toUpperCase() === filter) {
      li[i].style.display = "";
    } 
    // Recherche par athlète
    else {
      var athletesOfCountry = athletes[txtValue];
      if (athletesOfCountry) {
        athletesOfCountry.forEach(function(athlete) {
          if (athlete.toUpperCase().startsWith(filter)) {
            // Si l'athlète correspond à la recherche
            athletesList += "<li><a href='#' onclick='afficherBio(\"" + athlete + "\")'>" + athlete + " (" + txtValue + ")" + "</li>";
          }
        });
      }
      li[i].style.display = "none";
    }
  }
  
  if (athletesList !== "") {
    document.getElementById("athletes").innerHTML = athletesList;  
    var athletesElement = document.getElementById("athletes");
    athletesElement.innerHTML = athletesList;
    athletesElement.classList.remove("tilt-in-fwd-tr");
    void athletesElement.offsetWidth;
    athletesElement.classList.add("tilt-in-fwd-tr");
  }

}

document.addEventListener('DOMContentLoaded', function() {
  var listePays = document.getElementById('listePays');
  var paysItems = listePays.getElementsByTagName('a');
  for (var i = 0; i < paysItems.length; i++) {
    paysItems[i].addEventListener('click', function() {
      var pays = this.innerText;
      afficherAthletes(pays);
    });
  }
});
  
  function afficherAthletes(pays) {

var athletesList;
if (athletes[pays]) {
  athletesList = "<h2>Athlètes ";

  const premiereLettre = pays.charAt(0).toLowerCase();
  let nomFormate;
  // filtrer les première L pour pas de faute
  if (["a", "e", "h", "i", "u", "é", "o"].includes(premiereLettre)) {
    nomFormate = "de l'" + pays;
  } else if (["v"].includes(premiereLettre)) {
    nomFormate = "du" + pays;
  } else if (["japon"].includes(premiereLettre)) {
    nomFormate = 'du';
  }
  else {
    nomFormate = "de " + pays;
  }

  athletesList += nomFormate + "</h2><ul>";
  // lister les atl
  athletes[pays].forEach(function(athlete) {
    athletesList += "<li><a href='#' onclick='afficherBio(\"" + athlete + "\")'>" + athlete + "</a></li>";
  });
  athletesList += "</ul>";
}
document.getElementById("athletes").innerHTML = athletesList;

// bascule entré text atl
var athletesElement = document.getElementById("athletes");
athletesElement.innerHTML = athletesList;
athletesElement.classList.remove("tilt-in-fwd-tr");
void athletesElement.offsetWidth;
athletesElement.classList.add("tilt-in-fwd-tr");
}
  
  // biographie 
  function afficherBio(athlete) {

    var popupTitle = document.getElementById("popupTitle");
    var popupBio = document.getElementById("popupBio");
    var popup = document.getElementById("popup");
  
    // définie toutes les bio de ces con
    popupTitle.textContent = athlete;
    popupBio.textContent = athletes[athlete];
  
    popup.style.display = "block";
    popup.style.fontFamily = "";
  }
  
  function fermerPopup() {
    document.getElementById("popup").style.display = "none";
  }
  //chargement logo
  function chargement() {
    document.querySelector('.container').classList.remove('animate');
    document.querySelector('.container').classList.remove('animate_in');
  
    setTimeout(rechercherPays, 4000); 
  
    setTimeout(function() {
        document.querySelector('.container').classList.add('animate');
        
        setTimeout(function() {
            document.querySelector('.container').classList.remove('animate');
            document.querySelector('.container').classList.add('animate_in');
        }, 500);
    }, 500);
}

  // chargement text

  document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("pays");

    //pas touche ::: si entree toucher => recherche 
    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        chargement();
      }
    });
  
    // ne surtout pas toucher le temps que sa marche
    input.addEventListener("input", function() {
      const searchTerm = input.value.trim().toLowerCase();
      const listePays = document.getElementById("listePays").getElementsByTagName("a");
      Array.from(listePays).forEach(function(pays) {
        if (pays.textContent.toLowerCase().indexOf(searchTerm) !== -1) {
          pays.classList.add("tracking-in-contract-bck");
        } else {
          pays.classList.remove("tracking-in-contract-bck");
        }
      });
    });
  });
