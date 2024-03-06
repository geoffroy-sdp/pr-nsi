function rechercherPays() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('pays');
  filter = input.value.toUpperCase();
  ul = document.getElementById("listePays");
  li = ul.getElementsByTagName('li');
  
  var athletes = {
    // Europe
    "France": ["Renaud Lavillenie", "Teddy Riner","Danis Civil","Tituan Castryck","Alpha Djalo","Maja-Li Lafrate Danielsson"],
    "Allemagne": ["Alexander Zverev", "Emmanuel Eseme","Lisa Unruh","Malaika Mihambo","Florian Wellbrock"],
    "Arménie": ["Artur Davtyan", "Elmira Karapetyan","Simon Martirosyan","Artur Aleksanyan","Arman Darchinyan"],
    "Autriche": ["Lemawork Ketema", "Verena Myer" ,"Nadine Gonska", "Dominik Distelberger", "Beate Schrott"],
    "Azerbaidjan": ["Rasul Sheydaev"]
  };

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
    var athletes = {
      // Europe
      "France": ["Renaud Lavillenie", "Danis Civil","Teddy Riner"],
      "Allemagne": ["Alexander Zverev","Lisa Unruh","Florian Wellbrock"],
      "Arménie": ["Artur Davtyan", "Elmira Karapetyan","Arman Darchinyan"],
      "Autriche": ["Lemawork Ketema", "Dominik Distelberger", "Beate Schrott"],
      "Azerbaidjan": ["Rasul Sheydaev", ""],
      "Belgique": ["", ""],
      "Bosnie-Herzégovine": ["", ""],
      "Bulgarie": ["", ""],
      "Croatie": ["", ""],
      "Danemark": ["", ""],
      "Espagne": ["", ""],
      "Estonie": ["", ""],
      "Finland": ["", ""],
      "Géorgie": ["", ""],
      "Grande-Bretagne": ["", ""],
      "Grèce": ["", ""],
      "Hongrie": ["", ""],
      "Irlande": ["", ""],
      "Italie": ["", ""],
      "Lituanie": ["", ""],
      "Moldavie": ["", ""],
      "Norvège": ["", ""],
      "Pays-Bas": ["", ""],
      "Pologne": ["", ""],
      "Portugale": ["", ""],
      "Roumanie": ["", ""],
      "Serbie": ["", ""],
      "Slovaquie": ["", ""],
      "Slovénie": ["", ""],
      "Suède": ["", ""],
      "Suisse": ["", ""],
      "Tchéquie": ["", ""],
      "Turquie": ["", ""],
      "Ukraine": ["", ""],
  
      // Océanie
      "Australie": ["", ""],
      "Fidji": ["", ""],
      "Nouvelle-Zélande": ["", ""],
  
      //Afrique
      "Afrique du Sud": ["", ""],
      "Algérie": ["", ""],
      "Burkina Faso": ["", ""],
      "Cameroun": ["", ""],
      "Djibouti": ["", ""],
      "Égypte": ["", ""],
      "Érythrée": ["", ""],
      "Éthiopie": ["", ""],
      "Gambie": ["", ""],
      "Kenya": ["", ""],
      "Maroc": ["", ""],
      "Nigeria": ["", ""],
      "Ouganda": ["", ""],
      "Sénégale": ["", ""],
      "Tanzanie": ["", ""],
      "Tunisie": ["", ""],
      "Zimbabwe": ["", ""],
      
      // Amérique
      "État-Unis": ["Michael Phelps", "Simone Biles"],
      "Argentine": ["", ""],
      "Bolivie": ["", ""],
      "Brésile": ["", ""],
      "Canada": ["", ""],
      "Colombie": ["", ""],
      "Costa Rica": ["", ""],
      "Cuba": ["", ""],
      "Équateur": ["", ""],
      "Guatemala": ["", ""],
      "Jamaique": ["", ""],
      "Mexique": ["", ""],
      "Pérou": ["", ""],
      "Porto Rico": ["", ""],
      "République dominicaine": ["", ""],
      "Suriname": ["", ""],
      "Trinité-et-Tobago": ["", ""],
      "Uruguay": ["", ""],
  
      //Asie
      "Arabie Saoudite": ["", ""],
      "Bahrein": ["", ""],
      "Chine": ["", ""],
      "Corée du Sud": ["", ""],
      "Émirat arabes Unis": ["", ""],
      "Inde": ["", ""],
      "Iran": ["", ""],
      "Israel": ["", ""],
      "Japon": ["", ""],
      "Kazakhstan": ["", ""],
      "Libam": ["", ""],
      "Pakistan": ["", ""],
      "Philipines": ["", ""],
      "Qatar": ["", ""],
      "Singapour": ["", "",""],
      "Viet Nam": ["", "", ""],
      "Taipei Chinois": ["", "", ""],
      
    };

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
    var athletes = {
      //france
      "Renaud Lavillenie": "Renaud Lavillenie est un célèbre athlète français spécialisé dans le saut à la perche. Il est né le 18 septembre 1986 à Barbezieux-Saint-Hilaire, en France. Lavillenie est notamment connu pour avoir remporté la médaille d'or aux Jeux olympiques de Londres en 2012 et détient le record du monde en salle avec un saut de 6,16 mètres.",
      "Teddy Riner": "Teddy Riner est un judoka français, né le 7 avril 1989 à Pointe-à-Pitre, en Guadeloupe. Il est considéré comme l'un des plus grands judokas de tous les temps, avec dix titres mondiaux et deux titres olympiques dans la catégorie des plus de 100 kilogrammes. ",
      "Danis Civil": "Danis Civil, alias Dany Dann, est un pratiquant français de breakdance. Il a commencé à pratiquer le breakdance à l’âge de 15 ans à Saint-Laurent-du-Maroni, en Guyane. En 2022, il a été sacré champion de France de breakdance à Bordeaux. Il a également remporté la médaille d’or des Championnats d’Europe à Manchester. En 2023, il a remporté la médaille d’or des Jeux européens, ce qui lui a valu une qualification directe pour les Jeux olympiques de 2024 à Paris",
      "Tituan Castryck":"Titouan Castryck, kayakiste français, médaillé de bronze en K1 par équipes aux Championnats du monde de slalom 2022 à Augsbourg. Il a également remporté une médaille de bronze aux Championnats d'Europe de slalom de canoë-kayak 2023. Vainqueur de sa première Coupe du Monde en kayak slalom à Vaires-sur-Marne en 2023, il est qualifié pour les Jeux Olympiques de Paris 2024.",

      //allemagne
      "Alexander Zverev":" Alexander Zverev est un Joueur de tennis allemand, il est connu pour son puissant service et son jeu de fond de court. Zverev a remporté plusieurs titres ATP et est considéré comme l’un des espoirs du tennis mondial", 
      "Lisa Unruh":"",
      "Florian Wellbrock":"",

      //amérique
      "Michael Phelps": "Micheal Phelps est né en 1985 à Baltimore, Michael Phelps est l'athlète olympique le plus décoré de l'histoire. Nageur d'exception, il a dominé les bassins entre 2004 et 2016, amassant 28 médailles, dont 23 d'or. Son exploit aux Jeux de Pékin en 2008, où il remporta 8 titres olympiques, reste inégalé.",
      "Simone Biles": "Simone Biles est Née en 1997 à Columbus, Simone Biles est une gymnaste américaine considérée comme l'une des plus grandes athlètes de tous les temps. Sa carrière est jalonnée de records et de titres : 32 médailles aux Championnats du monde, dont 25 d'or, 5 titres olympiques, et 4 médailles d'or à Rio en 2016",
      "Elmira Karapetyan": "",

      // ici ya bcp travaille!!!!

      
    };

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
