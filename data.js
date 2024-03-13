https://cloud.google.com/vertex-ai/docs/generative-ai/model-reference/gemini?hl=fr
var athletes = {
    // Europe
    "France": ["Renaud Lavillenie", "Danis Civil","Teddy Riner"],
    "Allemagne": ["Alexander Zverev","Lisa Unruh","Florian Wellbrock"],
    "Arménie": ["Artur Davtyan", "Elmira Karapetyan","Arman Darchinyan"],
    "Autriche": ["Lemawork Ketema", "Dominik Distelberger", "Beate Schrott"],
    "Azerbaidjan": ["Rafael Agayev", "Iryna Zaretska","Haci Aliyev"],
    "Belgique": ["Nafissatou Thiam", "Nina Derwael" ,"Wout van Aert"],
    "Bosnie-Herzégovine": ["Larisa Ceric", "Nedžad Husic", "Tatjana Ðekanovic"],
    "Bulgarie": ["Ivet Goranova", "Stoyka Krasteva", "Simona Dyankova"],
    "Croatie": ["Matea Jelic", "Valent Sinkovic", "Donna Vekic"],
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
    "Australie": ["Ariarne Titmus", "Ash Barty", "Patty Mills"],
    "Fidji": ["Josua Tuisova", "Adi Bakaniceva", "Swen Nater"],
    "Nouvelle-Zélande": ["Rieko Ioane", "Beauden Barrett", "Ian Ferguson"],
  
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
    "État-Unis": ["Michael Phelps", "Simone Biles", ""],
    "Argentine": ["Santiago Lange", "Paula Pareto", "Lionel Messi"],
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
    
  
                //Europe
        
        //france
        "Renaud Lavillenie": "Renaud Lavillenie est un célèbre athlète français spécialisé dans le saut à la perche. Il est né le 18 septembre 1986 à Barbezieux-Saint-Hilaire, en France. Lavillenie est notamment connu pour avoir remporté la médaille d'or aux Jeux olympiques de Londres en 2012 et détient le record du monde en salle avec un saut de 6,16 mètres.",
        "Teddy Riner": "Teddy Riner est un judoka français, né le 7 avril 1989 à Pointe-à-Pitre, en Guadeloupe. Il est considéré comme l'un des plus grands judokas de tous les temps, avec dix titres mondiaux et deux titres olympiques dans la catégorie des plus de 100 kilogrammes. ",
        "Danis Civil": "Danis Civil, alias Dany Dann, est un pratiquant français de breakdance. Il a commencé à pratiquer le breakdance à l’âge de 15 ans à Saint-Laurent-du-Maroni, en Guyane. En 2022, il a été sacré champion de France de breakdance à Bordeaux. Il a également remporté la médaille d’or des Championnats d’Europe à Manchester. En 2023, il a remporté la médaille d’or des Jeux européens, ce qui lui a valu une qualification directe pour les Jeux olympiques de 2024 à Paris",
  
        //allemagne
  
        "Alexander Zverev":" Alexander Zverev est un Joueur de tennis allemand, il est connu pour son puissant service et son jeu de fond de court. Zverev a remporté plusieurs titres ATP et est considéré comme l’un des espoirs du tennis mondial", 
        "Lisa Unruh":"",
        "Florian Wellbrock":"",
  
        // azerbadjan
  
        "Rafael Agayev":"Rafael Agayev est un karatéka azéri né le 4 mars 1985 à Sumqayit. Il est l'athlète de karaté le plus titré de l'histoire avec 5 titres de champion du monde et 11 titres de champion d'Europe. Il a également remporté la médaille d'argent aux Jeux olympiques de Tokyo 2020 en kumite -75kg.",
        "Iryna Zaretska":"Née le 4 mars 1996 à Odessa en Ukraine, Iryna Zaretska est une karatéka accomplie qui a remporté de nombreuses médailles au cours de sa carrière. Elle a notamment décroché l'argent aux Jeux olympiques de Tokyo 2020 dans la catégorie kumite +61kg, et a également remporté trois titres de championne du monde en kumite 68kg (2018, 2021 et 2023).",
        "Haci aliyev":"Haci ?liyev est un lutteur azerbaïdjanais né le 21 avril 1991 à Naxçivan. Spécialiste de la lutte libre, il évolue dans la catégorie des 65 kg. Son palmarès est impressionnant : il est triple champion du monde (2014, 2015 et 2017), champion d'Europe à quatre reprises (2014, 2018, 2019 et 2022), vice-champion olympique en 2020 et médaillé de bronze en 2016. Il a également remporté de nombreuses autres médailles dans des compétitions internationales.",
  
        //Belgique
  
        "Nafissatou Thiam" : "Nafissatou Thiam est une athlète belge née en 1994, spécialiste des épreuves combinées. Surnommée 'Nafi', elle est double championne olympique d'heptathlon (2016 et 2021) et championne du monde en 2017 et 2022. Elle a également remporté l'heptathlon des Championnats d'Europe en 2016 et 2022, et compte à son palmarès un total de 12 médailles d'or internationales.",
        "Nina Derwael" : "Née en 2000 à Saint-Trond, Nina Derwael est une gymnaste belge spécialiste des barres asymétriques. Dès son entrée chez les seniors en 2016, elle accumule les titres : championne d'Europe en 2017 et 2018, championne du monde en 2018 et 2019, et enfin championne olympique aux Jeux de Tokyo en 2020. Véritable star de la gymnastique belge, elle est considérée comme l'une des meilleures gymnastes du monde à son agrès.",
        "*Wout van Aert" : "Wout van Aert est un coureur cycliste belge né le 15 septembre 1994. Spécialisé en cyclo-cross et sur route, il est triple champion du monde de cyclo-cross (2016, 2017 et 2018) et a remporté de nombreuses courses sur route, dont Milan-San Remo (2020), la Strade Bianche (2021) et le Tour des Flandres (2022). Il est considéré comme l'un des meilleurs cyclistes du monde.",
              
        //bosnie-herzegovine
  
        "Larisa Ceric" : "Née le 26 janvier 1991 à Travnik en Bosnie-Herzégovine, Larisa Ceric est une judokate évoluant dans la catégorie des plus de 78 kg. Son palmarès est riche de plusieurs médailles internationales, dont une en bronze aux Championnats du monde 2018 et trois médailles d'argent aux Championnats d'Europe (2014, 2018 et 2019). Elle a également remporté l'or aux Jeux méditerranéens de 2013 et compte à son actif de nombreux titres de championne de Bosnie-Herzégovine.",
        "Nedžad Husic" : "Né le 15 septembre 2001 à Sarajevo, Nedžad Husic est un taekwondoïste bosnien. Il s'est illustré sur la scène internationale en remportant une médaille d'argent aux Championnats d'Europe 2021 dans la catégorie des 74 kg.Husic a également marqué l'histoire de son pays en atteignant la 5ème place aux Jeux olympiques de Tokyo 2020, signant le meilleur résultat olympique de la Bosnie-Herzégovine tous sports confondus. Son palmarès riche et prometteur fait de lui l'un des athlètes les plus talentueux de sa génération et un véritable espoir pour le taekwondo bosnien.",
        "Tatjana Ðekanovic" : "Née le 25 février 1997 à Banja Luka en Bosnie-Herzégovine, Tatjana Ðekanovic est une tireuse sportive accomplie. Elle a notamment participé aux Jeux olympiques d'été de 2016 et 2020 dans l'épreuve du tir à la carabine à air comprimé 10m. Son palmarès inclut également le titre de championne de Bosnie-Herzégovine en 2015 et 2016, ainsi que plusieurs médailles aux championnats nationaux et internationaux.",
  
        //Bulgarie
  
        "*Ivet Goranova" : "Née le 6 mars 2000 à Dolna Mitropoliya en Bulgarie, Ivet Goranova est une karatéka spécialiste de la catégorie kumite poids légers (-55 kg). Dès 2018, elle s'illustre sur la scène internationale en décrochant le bronze aux Championnats du monde. Sa carrière prend un tournant majeur en 2021 lorsqu'elle remporte la médaille d'or aux Jeux olympiques de Tokyo, devenant la première karatéka bulgare championne olympique. Son palmarès riche et varié compte également une médaille d'or aux Jeux européens de 2019, deux médailles de bronze aux Championnats d'Europe (2019 et 2022) et une médaille de bronze aux Championnats du monde (2021).",
        "*Stoyka Krasteva" : "Stoyka Krasteva, née Petrova le 18 septembre 1985 à Dobritch en Bulgarie, est une boxeuse bulgare. Elle a remporté deux médailles d'or aux Championnats d'Europe de boxe amateur, une première en 2018 dans la catégorie poids coqs et une seconde en 2019 dans la catégorie poids mouches. Son palmarès est couronné par une médaille d'or olympique dans la catégorie des poids mouches (-51 kg) aux Jeux olympiques d'été de 2020 à Tokyo, battant la Turque Buse Çakiroglu en finale.",
        "Simona Dyankova" : "Née le 7 décembre 1994 à Varna, Simona Dyankova est une gymnaste rythmique bulgare retraitée. Surnommée 'la fée de la gymnastique' par ses fans, elle a marqué l'histoire de son sport en remportant l'or olympique par équipe aux Jeux de Tokyo 2020, après avoir glané deux titres de championne du monde en 2018 (cerceaux et 5 ballons) et une multitude de médailles continentales et internationales.",
  
        //Croatie
  
        "Matea Jelic" : "Née le 23 décembre 1997 à Knin en Croatie, Matea Jelic est une athlète de taekwondo accomplie. Sacrée championne olympique en moins de 67 kg aux Jeux olympiques d'été de 2020 à Tokyo, elle compte également à son palmarès une médaille d'or aux Jeux méditerranéens de 2018 et deux médailles de bronze aux Championnats d'Europe (2016 et 2019).",
        "Valent Sinkovic" :  "Né en 1988 à Zagreb, Valent Sinkovic est un rameur croate au palmarès exceptionnel. Double champion olympique en deux sans barreur (2016 et 2020) avec son frère Martin, il a également remporté deux titres mondiaux dans la même discipline (2014 et 2015) et une médaille d'argent en 2013. Sinkovic est également médaillé d'argent aux Jeux olympiques de 2012 en quatre de couple.",
        "Donna Vekic" : "Née le 28 juin 1996 à Osijek en Croatie, Donna Vekic est une joueuse de tennis professionnelle depuis 2012. Comptant 4 titres WTA en simple à son palmarès, elle a atteint la 19ème place mondiale en 2019 et a notamment réalisé des quarts de finale à l'US Open 2019 et à Wimbledon 2021.",
  
        //danemark
  
        "Anne-Marie Rindom" : "Anne-Marie Rindom est une skipper danoise née le 14 juin 1991. Elle a remporté la médaille de bronze en Laser Radial aux Jeux olympiques de Rio en 2016 avant de décrocher l'or à Tokyo en 2020. Son palmarès inclut également deux titres de championne du monde (2015 et 2019) et le titre de World Sailor of the Year en 2019.",
        "Viktor Axelsen" : "Viktor Axelsen, né en 1994, est un joueur de badminton danois. Il est le n°1 mondial en simple hommes et a remporté deux titres de champion du monde (2017 et 2022), une médaille d'or olympique (2020) et cinq titres de champion d'Europe (2016, 2017, 2018, 2021 et 2022). Son palmarès exceptionnel fait de lui l'un des plus grands joueurs de badminton de tous les temps.",
        "Julie Leth" : "Julie Leth, née le 13 juillet 1992 à Aarhus, est une coureuse cycliste danoise. Spécialiste de la piste et de la route, elle compte à son palmarès un titre de championne du monde de poursuite par équipes (2012), deux titres de championne d'Europe de la course aux points (2011 et 2013) et une victoire sur le Tour de Drenthe (2017).",
  
        //Espagne
  
        "Fátima Gálvez" : "Née le 19 janvier 1987 à Baena en Espagne, Fátima Gálvez est une tireuse sportive spécialiste de la fosse olympique. Championne du monde en 2015 et médaillée d'or aux Jeux olympiques de Tokyo 2020 en trap mixte, elle compte également à son palmarès deux médailles d'argent et une médaille de bronze aux Championnats d'Europe.",
        "Alberto Ginés López" : "Née le 19 janvier 1987 à Baena en Espagne, Fátima Gálvez est une tireuse sportive spécialiste de la fosse olympique. Championne du monde en 2015 et médaillée d'or aux Jeux olympiques de Tokyo 2020 en trap mixte, elle compte également à son palmarès deux médailles d'argent et une médaille de bronze aux Championnats d'Europe.",
        "Sandra Sánchez" : "Née en 1981 à Talavera de la Reina en Espagne, Sandra Sánchez est une karatéka spécialiste du kata. Considérée comme l'une des plus grandes compétitrices de l'histoire de son sport, elle a remporté une médaille d'or aux Jeux olympiques de Tokyo 2020, six titres de championne d'Europe et un titre de championne du monde.",
  
        //Estonie
  
        "Julia Beljajeva" : "Julia Beljajeva, née le 21 juillet 1992 à Tartu en Estonie, est une escrimeuse spécialiste de l'épée. Double championne d'Europe par équipes (2013 et 2014), championne du monde par équipes en 2017 et championne du monde individuelle en 2013, elle est également médaillée d'or olympique par équipes aux Jeux de Tokyo en 2021.",
        "Erika Kirpu" : "Erika Kirpu, née le 22 juin 1992 à Tartu en Estonie, est une escrimeuse spécialiste de l'épée. Elle est double championne d'Europe par équipes (2013 et 2018) et championne du monde par équipes en 2017. Consacrée championne olympique par équipes aux Jeux de Tokyo en 2021, elle est également médaillée d'argent mondiale en individuel en 2019.",
        "Katrina Lehis" : "Katrina Lehis est une escrimeuse estonienne née le 19 décembre 1994 à Haapsalu. Spécialiste de l'épée, elle est championne olympique par équipes en 2020 et médaillée de bronze individuelle la même année. Son palmarès compte également un titre de championne d'Europe individuel en 2018 et deux médailles d'argent aux championnats du monde par équipes (2017 et 2019).",
  
        //Finlande

        "Viivi Lehikoinen" : "Viivi Lehikoinen, née le 27 août 1999 à Helsinki, est une athlète finlandaise spécialiste du 400 mètres haies. Elle détient les records nationaux du 300 mètres haies et du 400 mètres haies. Son palmarès inclut une médaille d'or aux Championnats d'Europe d'athlétisme espoirs 2017, une médaille de bronze aux Championnats d'Europe d'athlétisme par équipes 2019 et une place de finaliste aux Jeux olympiques d'été de 2020.",
        "Satu Mäkelä-Nummela" : "Satu Mäkelä-Nummela est une tireuse sportive finlandaise née le 26 octobre 1970 à Orimattila. Elle est spécialiste du trap et a remporté la médaille d'or aux Jeux olympiques d'été de 2008 à Pékin. Elle est également double médaillée de bronze aux Championnats du monde de tir ISSF, en 1995 et 2009." ,
        "Mira Potkonen" : "Mira Potkonen, née le 17 novembre 1980, est une boxeuse finlandaise. Elle est médaillée de bronze aux Jeux olympiques de 2016 et 2020 dans la catégorie des poids légers. Son palmarès compte également deux titres de championne d'Europe (2016 et 2018) et une médaille d'argent aux championnats du monde (2016).",

        //Géorgie
        "Vazha Margvelashvili" : "Né le 3 octobre 1993 à Gori en Géorgie, Vazha Margvelashvili est un judoka évoluant dans la catégorie des moins de 66 kg. Son palmarès est impressionnant : il a notamment remporté la médaille d'or aux Championnats d'Europe 2016, l'argent aux Jeux olympiques de 2020 et plusieurs médailles aux Championnats du monde et aux Masters. Il est considéré comme l'un des meilleurs judokas de sa génération.",
        "Lasha Bekauri" : "Né le 26 juillet 2000, Lasha Bekauri est un judoka géorgien évoluant dans la catégorie des -90kg. Champion olympique en 2020 à Tokyo, il a également remporté l'or aux Championnats d'Europe en 2021 et aux Championnats du monde en 2023. Bekauri est l'un des judokas les plus dominants de sa génération.",
        "Lasha Talakhadze" : "Lasha Talakhadze, né le 2 octobre 1993, est un haltérophile géorgien évoluant dans la catégorie des +109 kg. Il est double champion olympique (2016 & 2020) et détient tous les records du monde en vigueur (arraché, épaulé-jeté et total). Son palmarès exceptionnel fait de lui l'un des plus grands haltérophiles de tous les temps.",

        //UK 
        "Hannah Mills" : "Hannah Mills, née le 29 février 1988 à Cardiff, est une skipper britannique. Double championne olympique en 470 (2016 et 2020), elle est également championne du monde en 2012 et vice-championne du monde en 2011.  Elle est considérée comme l'une des meilleures navigatrices de l'histoire de son pays.",
        "Keely Hodgkinson" : "Keely Hodgkinson, née le 3 mars 2002 à Wigan, est une athlète britannique spécialiste du demi-fond. Vice-championne olympique du 800m en 2021, elle est également championne d'Europe en 2022 et double championne d'Europe en salle en 2021 et 2023. Son palmarès impressionnant fait d'elle l'une des étoiles montantes de l'athlétisme mondial.",
        "Lauren Price" : "Née en 1994 au Pays de Galles, Lauren Price est une boxeuse poids moyen et super-lourds. Championne olympique à Tokyo en 2020, elle est également championne du monde amateur 2019 et championne d'Europe 2018 et 2019. Son palmarès exceptionnel fait d'elle l'une des boxeuses les plus décorées de l'histoire.",

        //Grèce
        "Elefthérios Petroúnias" : "Elefthérios Petroúnias, gymnaste grec né en 1990 à Athènes, est spécialiste des anneaux. Double champion olympique (2016 & 2020) et triple champion d'Europe (2015, 2017 & 2019), il est considéré comme l'un des meilleurs gymnastes de l'histoire de sa discipline.",
        "Rafaéla Spanoudáki-Chatziríga" : "Née le 7 juin 1994 à Rhodes, Rafaéla Spanoudáki-Chatziríga est une sprinteuse grecque. Spécialiste du 200m, elle a remporté le titre de championne d'Europe en 2021 à Munich avec un temps de 22"82, établissant un nouveau record national. Elle a également participé aux Jeux olympiques de Tokyo en 2021, où elle a atteint les demi-finales.",
        "Antigóni Drisbióti" : "Antigóni Drisbióti, née le 21 mars 1984 à Kardítsa en Grèce, est une athlète spécialiste de la marche. Double championne d'Europe du 20 km et du 35 km à Munich en 2022, elle compte également à son palmarès une médaille de bronze aux Jeux méditerranéens de 2013 et une place de finaliste (8e) aux Jeux olympiques de Tokyo en 2021.",

        //
        "" : "",
        "" : "",
        "" : "",

        //
        "" : "",
        "" : "",
        "" : "",

        //
        "" : "",
        "" : "",
        "" : "",

        //
        "" : "",
        "" : "",
        "" : "",

        //
        "" : "",
        "" : "",
        "" : "",

        //
        "" : "",
        "" : "",
        "" : "",

        //
        "" : "",
        "" : "",
        "" : "",

        //
        "" : "",
        "" : "",
        "" : "",

        //
        "" : "",
        "" : "",
        "" : "",
      
        //
        "" : "",
        "" : "",
        "" : "",
 POST https://{REGION}-aiplatform.googleapis.com/v1/projects/{PROJECT_ID}/locations/{REGION}/publishers/google/models/gemini-1.0-pro:streamGenerateContent

    
              //océanie
  
  
        //nouvelle-zélande
  
        "Beauden Barrett": "Beauden Barrett est un joueur de rugby à XV néo-zélandais né le 27 mai 1991. Il évolue au poste d'ouvreur avec les Blues et l'équipe nationale de Nouvelle-Zélande. Considéré comme l'un des meilleurs joueurs du monde, il est connu pour ses qualités de buteur, d'organisateur et de coureur.",   
        "Ian Ferguson" : "Ian Ferguson est un kayakiste néo-zélandais né le 20 juillet 1952. Il est quadruple champion olympique et champion du monde de course en ligne. Considéré comme l'un des plus grands kayakistes de l'histoire, il a marqué son sport par ses performances exceptionnelles et sa longévité.",
        "Rieko Ioane" : "Rieko Ioane est un joueur de rugby à XV néo-zélandais né le 6 mars 1997. Il évolue au poste d'ailier avec les Blues et l'équipe nationale de Nouvelle-Zélande. Remarqué pour sa vitesse et ses qualités offensives, il est l'un des joueurs les plus prometteurs de sa génération.",
  
        //fidji
  
        "Josua Tuivsova":"Josua Tuisova est un joueur de rugby à 7 fidjien né le 4 février 1994. Il évolue au poste d'ailier avec l'équipe des Fidji. Champion olympique en 2016 et 2020, il est considéré comme l'un des meilleurs joueurs du monde à 7.",
        "Adi Bakaniceva" :"Adi Bakaniceva est une joueuse de rugby à 7 fidjienne née le 14 novembre 1998. Elle évolue au poste de demi d'ouverture avec l'équipe des Fidji. Capitaine de l'équipe, elle a remporté la médaille de bronze aux JO 2020.",
        "Swen Nater":"Swen Nater est un athlète fidjien né le 29 décembre 1990. Spécialiste du lancer du javelot, il a participé aux JO 2016 et 2020. Son record personnel, réalisé en 2023, le place comme un athlète à suivre pour les JO 2024.",
  
        //australie
  
        "Patty Mills":"Patty Mills est Né le 11 août 1988, Patty Mills est un joueur de basket-ball australien évoluant au poste de meneur. Champion NBA avec les San Antonio Spurs en 2014, il a également remporté la médaille de bronze avec l'équipe d'Australie aux Jeux olympiques de Tokyo en 2020.",
        "Ash Barty":"Ash Barty est Née le 24 avril 1996, Ash Barty est une joueuse de tennis australienne. N°1 mondiale en simple et actuelle championne de Wimbledon, elle a annoncé son intention de faire son retour à la compétition en 2024, avec pour objectif les Jeux olympiques de Paris.",
        "Ariarne Titmus":"Ariarne Titmus est Née le 7 septembre 2000, Ariarne Titmus est une nageuse australienne spécialiste des épreuves de demi-fond. Déjà double championne olympique à Tokyo en 2020 sur 200 m et 400 m libre, elle sera l'une des favorites à Paris en 2024.",
  
              //amérique
  
        //État-Unis
        "Caeleb Dressel": "Caeleb Dressel est Né le 16 août 1996, Caeleb Dressel est un nageur américain spécialiste des épreuves de sprint. Déjà septuple champion olympique à Tokyo en 2020, il visera à battre le record de 8 médailles d'or en natation lors des Jeux olympiques de Paris 2024.",
        "Simone Biles": "Simone Biles est Née le 14 mars 1997, Simone Biles est une gymnaste américaine. Déjà quadruple championne olympique à Rio en 2016 et quintuple médaillée d'or à Tokyo en 2020, elle a annoncé son intention de faire son retour à la compétition en 2024, avec pour objectif les Jeux olympiques de Paris.",
        "LeBron James": "LeBron James, né le 30 décembre 1984 à Akron (Ohio), est un joueur de basket-ball américain évoluant au sein des Lakers de Los Angeles. Considéré comme l'un des meilleurs joueurs de tous les temps, il a remporté quatre titres de champion NBA, quatre titres de MVP des finales et deux médailles d'or olympiques avec l'équipe des États-Unis.",
  
        //argentine
        "Paula Pareto":"Paula Pareto est Née le 17 janvier 1986, Paula Pareto est une judokate argentine. Déjà médaillée d'or aux Jeux olympiques de Rio en 2016, elle sera l'une des favorites à Paris en 2024. Pareto est également la première femme argentine à avoir remporté une médaille d'or aux Jeux olympiques.",
        "Santiago Lange":"Santiago Lange est Né le 20 septembre 1961, Santiago Lange est un skipper argentin. Déjà médaillé d'or aux Jeux olympiques de Rio en 2016, il sera l'un des favoris à Paris en 2024. Lange est également un survivant du cancer, ce qui fait de lui une source d'inspiration pour beaucoup de gens.",
        "Facundo Campazzo":"Facundo Campazzo est né le 23 mars 1991, Facundo Campazzo est un joueur de basket-ball argentin évoluant au poste de meneur. Après avoir évolué en Argentine, en Espagne et en NBA, il a récemment signé avec l'équipe française de l'ASVEL. Campazzo est un joueur talentueux et expérimenté qui a remporté plusieurs titres avec l'équipe nationale d'Argentine, notamment la médaille d'or aux Jeux olympiques de Tokyo en 2020.", 
        // ici ya bcp travaille!!! YES my negro
  
  
  };
