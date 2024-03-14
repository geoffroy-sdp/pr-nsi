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
    "Bolivie": ["Karen Torrez", "Hugo Dellien", "Jhonathan Cahuana"],
    "Brésile": ["Neymar Jr", "Alison dos Santos", "Beatriz Haddad Maia"],
    "Canada": ["Alphonso Davies", "Penny Oleksiak", "Andre De Grasse"],
    "Colombie": ["Egan Bernal", "Mariana Pajón", "Yuberjen Martínez"],
    "Costa Rica": ["Andrea Vargas", "Kenneth Tencio", "Andrey Amador"],
    "Cuba": ["Mijaín López", "Yarisley Silva", "Roniel Iglesias"],
    "Équateur": [" Neisi Dajomes", "Richard Carapute", "Alfredo Borrero"],
    "Guatemala": ["Mirna Ortiz", "Juan Ignacio Maegli", "Kevin Cordón"],
    "Jamaique": ["Elaine Thompson-Herah", "Shelly-Ann Fraser-Pryce", "Yohan Blake"],
    "Mexique": ["Alejandra Valencia", "Aremi Fuentes", "Daniel Corral"],
    "Pérou": ["Kimberly García", "Gladys Tejeda", "Diego Elías"],
    "Porto Rico": ["Jasmine Camacho-Quinn", "María Pérez", "Adrián Díaz"],
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

        //Hongrie
        "Dóra Bodonyi" : "Dóra Bodonyi, kayakiste hongroise née en 1993, est une spécialiste du sprint. Triple championne du monde en K1 et K4, elle a également remporté l'or européen à six reprises et décroché la médaille de bronze aux Jeux olympiques de Tokyo en 2021 sur le K2 500m.  Considérée comme l'une des meilleures kayakistes de sa génération, elle vise une nouvelle médaille olympique à Paris en 2024.",
        "Sarolta Kovács" : "Née en 1991 à Tapolca en Hongrie, Sarolta Kovács est une pentathlète moderne de talent. Championne du monde individuelle et par équipe, elle a également remporté la médaille de bronze aux Jeux olympiques de Tokyo 2020. Son palmarès inclut des titres de championne d'Europe et de nombreuses victoires en Coupe du Monde.",
        "Áron Szilágyi" : "Áron Szilágyi, né le 14 janvier 1990 à Budapest, est un escrimeur hongrois pratiquant le sabre. Triple champion olympique consécutif (2012, 2016, 2020), champion du monde (2022) et champion d'Europe (2015), il est considéré comme l'un des meilleurs sabreurs de tous les temps. Son palmarès exceptionnel en fait une légende de son sport.",

        //Irlande
        "Paul O'Donovan" : "Paul O'Donovan, né le 19 avril 1994 à Skibbereen en Irlande, est un rameur poids léger. Il est champion olympique en titre du deux de couple poids légers avec Fintan McCarthy et a remporté cinq titres de champion du monde dans la même discipline. Son palmarès exceptionnel fait de lui l'un des rameurs les plus décorés de l'histoire de son pays.",
        "Ciara Mageean" : "Ciara Mageean, née le 12 mars 1992 à Portaferry en Irlande du Nord, est une athlète spécialiste du demi-fond. Médaillée de bronze aux Championnats d'Europe 2016 et d'argent en 2022, elle a également remporté l'argent aux Jeux du Commonwealth 2022. Son palmarès compte aussi plusieurs titres nationaux et des records d'Irlande sur 1500m et le mile.",
        "Sarah Lavin" : "Sarah Lavin est une athlète irlandaise née le 28 mai 1994 à Lisnagry, spécialiste du 100 mètres haies. Détentrice du record national irlandais sur la distance (12''62), elle a notamment remporté une médaille d'argent aux Championnats d'Europe juniors en 2013 et a participé aux Jeux olympiques de Tokyo en 2021. En 2023, elle a réalisé un nouveau record national sur 100 mètres plat (11''27).",

        //Italie
        "Valentina Rodini" : "Née en 1995 à Crémone, Valentina Rodini est une rameuse italienne. Sacrée championne olympique en deux de couple poids légers avec Federica Cesarini aux Jeux de Tokyo 2020, elle compte également à son palmarès une médaille d'argent aux Championnats d'Europe 2018 et une médaille de bronze aux Championnats du monde 2019.",
        "Eseosa Desalu" : "Eseosa Desalu, né le 19 février 1994 à Casalmaggiore en Italie, est un athlète italien spécialiste du 200 mètres et du relais. Il a remporté la médaille d'or du relais 4 x 100 mètres aux Jeux olympiques de Tokyo en 2021, ainsi que la médaille d'argent du 200 mètres aux Jeux méditerranéens de 2018. Son palmarès comprend également plusieurs titres nationaux en individuel et en relais.",
        "Alice Volpi" : "Née le 15 avril 1992 à Sienne, Alice Volpi est une escrimeuse italienne pratiquant le fleuret. Championne du monde en 2018 et médaillée de bronze par équipes aux Jeux olympiques de 2020, elle compte également à son palmarès deux titres de championne d'Europe par équipes (2015 et 2019) et une médaille d'argent aux Championnats du monde 2017.",

        //Lituanie
        "Andrius Gudžius" : "Andrius Gudžius est un lanceur de disque lituanien né le 14 février 1991. Il est champion du monde en 2017 et champion d'Europe en 2018. Son record personnel est de 69,59 m, réalisé en 2019.",
        "Airinė Palšytė" : "Airinė Palšytė, née le 13 juillet 1992 à Vilnius, est une athlète lituanienne spécialiste du saut en hauteur.  Palšytė a remporté la médaille d'or aux Championnats d'Europe en salle 2017 et la médaille d'argent aux Championnats d'Europe 2016.  Elle a également participé aux Jeux olympiques de 2012, 2016 et 2020.",
        "Laura Asadauskaitė-Zadneprovskienė" : "Laura Asadauskaitė-Zadneprovskienė est une pentathlonienne lituanienne née le 29 février 1984 à Vilnius. Championne olympique à Londres en 2012 et vice-championne à Rio en 2016, elle est également double championne du monde (2007 et 2013) et triple championne d'Europe (2009, 2010 et 2012).  Elle est l'une des athlètes les plus décorées de l'histoire de son pays.",

        //Moldavie
        "Serghei Tarnovschi" : "Serghei Tarnovschi, né le 24 juin 1997 à Lviv en Ukraine, est un céiste moldave naturalisé ukrainien en 2018. Spécialiste du C1 (canoë monoplace), il a remporté une médaille de bronze aux Jeux olympiques de 2020 à Tokyo sur 1000m après avoir été disqualifié pour dopage en 2016 suite à sa 3ème place à Rio. Son palmarès compte également deux titres de champion d'Europe en 2021 et 2022 sur la même distance.",
        "Dimitriana Surdu" : "Dimitriana Surdu, née le 12 avril 1994 à Chișinău, est une athlète moldave spécialiste du lancer du poids. Elle a participé aux Jeux olympiques d'été de 2016 à Rio de Janeiro, où elle s'est classée 13e en qualifications. Son palmarès comprend également une médaille d'or aux Jeux olympiques de la jeunesse de 2010, une médaille d'argent aux Championnats d'Europe d'athlétisme espoirs 2013 et une médaille de bronze aux Championnats d'Europe d'athlétisme par équipes 2014.",
        "Anastasia Nichita" : "Née le 19 février 1999, Anastasia Nichita est une lutteuse libre moldave. Championne du monde en 2022 et triple championne d'Europe (2018, 2019, 2020), elle compte également à son palmarès une médaille de bronze aux Championnats d'Europe 2021.",

        //Norvège
        "Eivind Henriksen" : "Eivind Henriksen, né le 14 septembre 1990 à Oslo, est un athlète norvégien spécialiste du lancer de marteau. Vice-champion olympique en 2021 à Tokyo et médaillé de bronze mondial en 2022 à Eugene, il a également remporté la médaille de bronze aux Championnats d'Europe 2018 à Berlin. Il compte à son palmarès 17 médailles aux Championnats de Norvège, dont 13 titres consécutifs entre 2009 et 2021.",
        "Vilde Johansen" : "Née le 25 juillet 1994 à Tønsberg, Vilde Johansen est une handballeuse norvégienne évoluant au poste de pivot. Internationale depuis 2015, elle compte 93 sélections et 163 buts avec la Norvège. Son palmarès est riche de plusieurs titres dont une médaille de bronze aux Jeux olympiques de Tokyo en 2020, deux titres de championne d'Europe en 2016 et 2020, et une médaille d'argent au championnat du monde en 2017. En club, elle a notamment remporté la Ligue des champions avec Vipers Kristiansand en 2021.",
        "Karoline Bjerkeli Grøvdal" : "Karoline Bjerkeli Grøvdal, née le 14 juin 1990 à Ålesund en Norvège, est une athlète spécialiste des courses de fond. Elle a remporté deux médailles de bronze aux Championnats d'Europe, une sur 3 000 mètres steeplechase en 2018 et l'autre sur 10 000 mètres en 2016. En 2021 et 2022, elle a réalisé un doublé en s'imposant aux Championnats d'Europe de cross-country.",

        //Pays bas
        "Ymkje Clevering" : "Ymkje Clevering, née le 17 juillet 1995 à Haulerwijk, est une rameuse néerlandaise. Championne d'Europe en quatre de pointe en 2019, elle a également remporté la médaille d'argent aux Jeux olympiques de Tokyo 2020 dans la même discipline. Son palmarès inclut aussi une médaille d'argent aux Championnats du monde 2019 et une médaille de bronze aux Championnats d'Europe 2022 en deux de pointe.",
        "Sharon van Rouwendaal" : "Née le 9 septembre 1993 à Baarn, Sharon van Rouwendaal est une nageuse néerlandaise spécialiste du dos et de l'eau libre. Sacrée championne olympique du 10 km en eau libre à Rio en 2016 et Tokyo en 2020, elle cumule également 7 titres de championne d'Europe sur 5 km, 10 km et l'épreuve par équipe entre 2014 et 2022.",
        "Anouk Vetter" : "Née en 1993 à Amsterdam, Anouk Vetter est une athlète néerlandaise spécialiste des épreuves combinées. Elle a remporté la médaille d'argent de l'heptathlon aux Jeux olympiques de Tokyo en 2020 et aux Championnats du monde d'athlétisme en 2022. Elle est également championne d'Europe de l'heptathlon en 2016 et détient le record des Pays-Bas avec un score de 6 867 points.",

        //Pologne
        "Maria Andrejczyk" : "Née le 9 mars 1996 à Suwałki, Maria Andrejczyk est une athlète polonaise spécialiste du lancer du javelot. Vice-championne olympique à Tokyo en 2021 avec un jet à 71,40m (record national), elle est également championne d'Europe espoirs en 2015 et médaillée de bronze aux Championnats d'Europe 2018.",
        "Justyna Święty-Ersetic" : "Justyna Święty-Ersetic, née le 3 décembre 1992 à Racibórz, est une athlète polonaise spécialiste du 400 mètres. Elle est double championne d'Europe en 2018 (individuel et en relais 4 x 400 m), et médaillée d'argent aux Jeux olympiques de Tokyo 2020 en relais 4 x 400 m mixte et féminin. Son palmarès complet est impressionnant, avec de nombreux titres et podiums nationaux et internationaux.",
        "Natalia Kaczmarek" : "Née le 17 janvier 1998 à Drezdenko, Natalia Kaczmarek est une athlète polonaise spécialiste du 400 mètres. Championne olympique du relais 4 x 400 m mixte à Tokyo en 2021 et vice-championne du monde du 400 m à Budapest en 2023, elle compte également à son palmarès une médaille de bronze du 4 x 400 m aux Championnats d'Europe en salle 2021 et deux titres de championne d'Europe par équipes (2021).",

        //Portugal
        "Pedro Pichardo" : "Pedro Pichardo, né le 30 juin 1993 à Santiago de Cuba, est un athlète spécialiste du triple saut. Naturalisé portugais en 2017, il est champion olympique à Tokyo en 2021, champion du monde à Eugene en 2022 et champion d'Europe à Munich en 2022. Son record personnel est de 18,08 m, réalisé à Doha en 2015, ce qui le place au 4e rang des performeurs de tous les temps.",
        "Patrícia Mamona" : "Née en 1988 à Lisbonne, Patrícia Mamona est une athlète portugaise spécialiste du triple saut. Détenant le record national avec 15,01m, elle s'est illustrée en remportant la médaille d'argent aux Jeux olympiques de Tokyo 2020, devenant ainsi la première athlète portugaise médaillée dans cette épreuve. Son palmarès riche comprend également un titre de championne d'Europe en salle en 2021 et plusieurs podiums en compétitions internationales.",
        "Fernando Pimenta" : "Né en 1989, Fernando Pimenta est un kayakiste portugais spécialiste de la course en ligne. Il est l'un des athlètes les plus décorés de son pays avec un palmarès exceptionnel : 3 médailles olympiques (dont 1 en or), 15 médailles aux Championnats du Monde et 27 médailles aux Championnats d'Europe. Véritable légende de son sport, il continue d'inspirer la nouvelle génération de kayakistes portugais.",
      
        //Roumanie
        "Simona Radiș" : "Née le 5 avril 1999, Simona Radiș est une rameuse roumaine spécialiste du deux de couple. Sacrée championne olympique en 2020 avec Ancuța Bodnar, elle a également remporté deux titres de championne d'Europe (2022) et deux médailles d'argent aux Championnats du monde (2019 et 2022).",
        "Ana Maria Popescu" : "Ana Maria Popescu est une escrimeuse roumaine née le 26 novembre 1984 à Bucarest. Spécialiste de l'épée, elle est l'une des escrimeuses les plus décorées de son pays avec un palmarès riche de deux médailles d'argent aux Jeux Olympiques (2008 et 2020), un titre de championne olympique par équipes en 2016, quatre titres de championne d'Europe par équipes et un titre de championne d'Europe individuel en 2013.",
        "Andrea Miklós" : "Née le 17 avril 1999 à Cluj-Napoca en Roumanie, Andrea Miklós est une athlète spécialisée dans le 400 mètres. Championne d'Europe junior du 400 mètres en 2017, elle a également remporté la médaille de bronze du relais 4 × 400 mètres aux Championnats du monde en salle 2016. Miklós a participé aux Jeux olympiques de 2016 et de 2020, atteignant les demi-finales du 400 mètres à chaque fois. Son record personnel est de 50"31, établi en 2021.",
  
        //serbie
        "Jovana Preković" : "Jovana Preković, née le 20 janvier 1996 à Aranđelovac en Serbie, est une karatéka serbe concourant dans la catégorie kumité -61 kg. Double championne du monde en 2018 et 2021, elle est également championne olympique en 2020, lors de la première apparition du karaté aux Jeux olympiques. Son palmarès exceptionnel fait d'elle l'une des karatékas les plus accomplies de sa génération.",
        "Milica Mandić" : "Milica Mandić, née le 6 décembre 1991 à Belgrade, est une taekwondoïste serbe. Double championne olympique (+67kg) à Londres 2012 et Tokyo 2020, elle est également championne du monde (+67kg) en 2017. Palmarès exceptionnel pour cette athlète d'exception.",
        "Gojko Pijetlović" : "Gojko Pijetlović, né le 7 août 1983 à Novi Sad, est un joueur de water-polo serbe évoluant au poste de gardien de but. Il est triple champion olympique (2012, 2016 et 2020), champion du monde (2009 et 2015) et champion d'Europe (2014 et 2016). Considéré comme l'un des meilleurs gardiens de but de l'histoire, il a remporté de nombreux autres titres et distinctions individuelles au cours de sa carrière.",
  
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
        
        // Bolivie
        
        "Karen Torrez":"Karen Torrez née le 19 juin 1992, Karen Torrez est une nageuse bolivienne spécialiste des épreuves de sprint. Déjà médaillée de bronze aux Jeux olympiques de la jeunesse de 2010, elle a également participé aux Jeux olympiques de Londres en 2012 et de Rio en 2016. Torrez est l'une des athlètes les plus populaires de Bolivie et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Hugo Dellien":"Hugo Dellien né le 16 juin 1993, Hugo Dellien est un joueur de tennis bolivien. Actuel 138ème joueur mondial, il a atteint le deuxième tour de Roland-Garros en 2022. Dellien est le premier joueur bolivien à avoir atteint le deuxième tour d'un Grand Chelem. Il espère continuer à progresser et représenter son pays aux Jeux olympiques de Paris en 2024.",
        "Jhonathan Cahuana":"Jhonathan Cahuana né le 10 février 2001, Jhonathan Cahuana est un athlète bolivien spécialiste du 50 km marche. Déjà médaillé d'or aux Jeux sud-américains de la jeunesse de 2018, il a également participé aux Jeux olympiques de Tokyo en 2020. Cahuana est un jeune athlète talentueux qui espère se qualifier pour les Jeux olympiques de Paris en 2024 et y réaliser une performance de choix.",
        
        //brésile
        
        "Neymar Jr":"Neymar Jr né le 5 février 1992, Neymar Jr. est un joueur de football brésilien évoluant au poste d'attaquant au Paris Saint-Germain et en équipe nationale du Brésil. Considéré comme l'un des meilleurs joueurs du monde, il a remporté la Copa América en 2019 et la médaille d'or olympique en 2016 avec l'équipe du Brésil. Neymar Jr. a également remporté la Ligue des champions avec le FC Barcelone en 2015.",
        "Alison dos Santos":"Alison dos Santos né le 3 juin 2000, Alison dos Santos est un athlète brésilien spécialiste du 400 m haies. Déjà médaillé de bronze aux Jeux olympiques de Tokyo en 2020, il sera l'un des favoris à Paris en 2024. Dos Santos est également le recordman d'Amérique du Sud de la discipline.",
        "Beatriz Haddad Maia":"Beatriz Haddad Maia née le 30 mai 1996, Beatriz Haddad Maia est une joueuse de tennis brésilienne. Actuelle 15ème joueuse mondiale, elle a atteint les quarts de finale de Wimbledon en 2022. Haddad Maia est la première joueuse brésilienne à atteindre les quarts de finale d'un Grand Chelem depuis 1999.",
        
        //canada
        
        "Alphonso Davies":"Alphonso Davies né le 2 novembre 2000, Alphonso Davies est un joueur de football canadien évoluant au poste d'ailier au Bayern Munich et en équipe nationale du Canada. Considéré comme l'un des meilleurs jeunes joueurs du monde, il a remporté la Ligue des champions avec le Bayern Munich en 2020 et 2021. Davies a également remporté la Gold Cup avec l'équipe du Canada en 2021.",
        "Penny Oleksiak":"Penny Oleksiak née le 13 juin 2000, Penny Oleksiak est une nageuse canadienne spécialiste des épreuves de sprint. Déjà médaillée de quatre médailles aux Jeux olympiques de Rio en 2016, dont une en or, elle sera l'une des favorites à Paris en 2024. Oleksiak est également la plus jeune athlète canadienne à avoir remporté une médaille d'or aux Jeux olympiques.",
        "Andre De Grasse":"Andre De Grasse né le 10 novembre 1994, Andre De Grasse est un athlète canadien spécialiste des épreuves de sprint. Déjà médaillé de six médailles aux Jeux olympiques de Rio en 2016 et de Tokyo en 2020, dont trois en bronze, il sera l'un des favoris à Paris en 2024. De Grasse est également le recordman du Canada du 100 m et du 200 m.",
        
        //colombie

        "Egan Bernal":"Egan Bernal né le 13 janvier 1997, Egan Bernal est un coureur cycliste colombien. Vainqueur du Tour de France en 2019 et du Giro d'Italia en 2021, il est l'un des meilleurs cyclistes du monde. Bernal espère participer aux Jeux olympiques de Paris en 2024 et y remporter une médaille.",
        "Mariana Pajón":"Mariana Pajón née le 10 octobre 1991, Mariana Pajón est une cycliste colombienne spécialiste du BMX. Déjà double médaillée d'or aux Jeux olympiques de Londres en 2012 et de Rio en 2016, elle sera l'une des favorites à Paris en 2024. Pajón est également la première femme colombienne à avoir remporté une médaille d'or aux Jeux olympiques.",
        "Yuberjen Martínez":"Yuberjen Martínez né le 3 novembre 1991, Yuberjen Martínez est un boxeur colombien. Déjà médaillé d'or aux Jeux olympiques de Rio en 2016, il sera l'un des favoris à Paris en 2024. Martínez est également le champion du monde amateur de boxe dans la catégorie des poids mi-mouches.",
        
        //costa rica
        
        "Andrea Vargas":"Andrea Vargas née le 29 septembre 1996, Andrea Vargas est une nageuse costaricaine spécialiste des épreuves de dos. Déjà médaillée d'or aux Jeux panaméricains de 2019, elle a également participé aux Jeux olympiques de Rio en 2016 et de Tokyo en 2020. Vargas est l'une des athlètes les plus populaires du Costa Rica et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Kenneth Tencio":"Kenneth Tencio né le 1er janvier 1993, Kenneth Tencio est un surfeur costaricain. Déjà médaillé d'or aux Jeux panaméricains de 2019, il a également participé aux Jeux olympiques de Tokyo en 2020. Tencio est l'un des meilleurs surfeurs du monde et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Andrey Amador":"Andrey Amador né le 29 août 1986, Andrey Amador est un coureur cycliste costaricien. Déjà vainqueur du Tour du Costa Rica en 2012 et 2015, il a également participé aux Jeux olympiques de Londres en 2012, de Rio en 2016 et de Tokyo en 2020. Amador est l'un des cyclistes les plus expérimentés du Costa Rica et il espère participer aux Jeux olympiques de Paris en 2024.",

        //cuba
        
        "Mijaín López":"Mijaín López né le 20 août 1982, Mijaín López est un lutteur cubain spécialiste de la lutte gréco-romaine. Déjà triple champion olympique dans la catégorie des plus de 130 kg (2008, 2012 et 2016), il sera l'un des favoris à Paris en 2024. López est également le champion du monde de la discipline en 2005, 2009, 2010 et 2014.",
        "Yarisley Silva":"Yarisley Silva née le 1er juin 1987, Yarisley Silva est une perchiste cubaine. Déjà médaillée d'argent aux Jeux olympiques de Londres en 2012, elle sera l'une des favorites à Paris en 2024. Silva est également la championne du monde de la discipline en 2015.",
        "Roniel Iglesias":"Roniel Iglesias né le 14 août 1988, Roniel Iglesias est un boxeur cubain. Déjà champion olympique dans la catégorie des poids welters en 2016, il sera l'un des favoris à Paris en 2024. Iglesias est également le champion du monde de la discipline en 2011 et 2014.",
        
        //equateur
        
        "Neisi Dajomes":"Neisi Dajomes née le 12 mai 1998, Neisi Dajomes est une haltérophile équatorienne. Déjà médaillée d'or aux Jeux olympiques de Tokyo en 2020 dans la catégorie des 76 kg, elle sera l'une des favorites à Paris en 2024. Dajomes est également la championne du monde de la discipline en 2018 et 2019.",
        "Richard Carapute":"Richard Carapaz né le 29 mai 1993, Richard Carapaz est un coureur cycliste équatorien. Déjà vainqueur du Tour d'Italie en 2019, il a également participé aux Jeux olympiques de Rio en 2016 et de Tokyo en 2020. Carapaz est l'un des meilleurs cyclistes du monde et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Alfredo Borrero":"Alfredo Borrero né le 29 janvier 1995, Alfredo Borrero est un athlète équatorien spécialiste du 200 m. Déjà médaillé d'argent aux Jeux panaméricains de 2019, il a également participé aux Jeux olympiques de Tokyo en 2020. Borrero est l'un des meilleurs sprinters d'Amérique du Sud et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",

        //Guatemala

        "Mirna Ortiz":"Mirna Ortiz née le 1er novembre 1986, Mirna Ortiz est une marcheuse guatémaltèque spécialiste du 20 km marche. Déjà médaillée de bronze aux Jeux olympiques de Londres en 2012, elle sera l'une des favorites à Paris en 2024. Ortiz est également la championne du monde de la discipline en 2013.",
        "Juan Ignacio Maegli":"Juan Ignacio Maegli né le 13 août 1988, Juan Ignacio Maegli est un skipper guatémaltèque. Déjà médaillé de bronze aux Jeux olympiques de Rio en 2016 dans la catégorie Laser, il sera l'un des favoris à Paris en 2024. Maegli est également le champion du monde de la discipline en 2014.",
        "Kevin Cordón":"Kevin Cordón né le 28 novembre 1996, Kevin Cordón est un joueur de badminton guatémaltèque. Déjà médaillé de bronze aux Jeux panaméricains de 2019, il a également participé aux Jeux olympiques de Rio en 2016 et de Tokyo en 2020. Cordón est l'un des meilleurs joueurs de badminton d'Amérique du Sud et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        
        //Jamaique
        
        "Elaine Thompson-Herah":"Elaine Thompson-Herah née le 28 juin 1992, Elaine Thompson-Herah est une sprinteuse jamaïcaine. Déjà triple championne olympique en 2016 (100m, 200m et 4x100m) et 2020 (100m et 200m), elle sera l'une des favorites à Paris en 2024. Thompson-Herah est également la détentrice du record du monde du 100m (10,61).",
        "Shelly-Ann Fraser-Pryce":"Shelly-Ann Fraser-Pryce née le 27 décembre 1986, Shelly-Ann Fraser-Pryce est une sprinteuse jamaïcaine. Déjà double championne olympique du 100m (2008 et 2012), elle sera l'une des favorites à Paris en 2024",
        "Yohan Blake":"Yohan Blake né le 26 décembre 1989, Yohan Blake est un sprinteur jamaïcain. Déjà médaillé d'argent du 100m et du 200m aux Jeux olympiques de Londres en 2012, il sera l'un des favoris à Paris en 2024. Blake est également le champion du monde du 200m en 2011.",
        
        //Mexique
        
        "Alejandra Valencia":"Alejandra Valencia née le 17 octobre 1994, Alejandra Valencia est une archère mexicaine. Déjà médaillée de bronze aux Jeux olympiques de Tokyo en 2020 dans l'épreuve par équipe, elle sera l'une des favorites à Paris en 2024. Valencia est également la championne du monde de la discipline en 2019.",
        "Aremi Fuentes":"Aremi Fuentes née le 15 mars 1994, Aremi Fuentes est une haltérophile mexicaine. Déjà médaillée de bronze aux Jeux olympiques de Tokyo en 2020 dans la catégorie des 76 kg, elle sera l'une des favorites à Paris en 2024. Fuentes est également la championne du monde de la discipline en 2018.",
        "Daniel Corral":"Daniel Corral né le 25 janvier 2000, Daniel Corral est un athlète mexicain spécialiste du saut à la perche. Déjà médaillé d'argent aux Jeux panaméricains de 2019, il a également participé aux Jeux olympiques de Tokyo en 2020. Corral est l'un des meilleurs perchistes d'Amérique du Nord et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        
        //Pérou
        
        "Kimberly García":"Kimberly García née le 19 novembre 1993, Kimberly García est une athlète péruvienne spécialiste de la marche athlétique. Déjà médaillée d'or aux Jeux panaméricains de 2019 dans l'épreuve du 20 km marche, elle sera l'une des favorites à Paris en 2024. García est également la championne du monde de la discipline en 2017 et 2019.",
        "Gladys Tejeda":"Gladys Tejeda née le 30 septembre 1985, Gladys Tejeda est une athlète péruvienne spécialiste du marathon. Déjà médaillée de bronze aux Jeux panaméricains de 2019, elle a également participé aux Jeux olympiques de Londres en 2012, de Rio en 2016 et de Tokyo en 2020. Tejeda est l'une des meilleures marathoniennes d'Amérique du Sud et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Diego Elías":"Diego Elías né le 12 février 1996, Diego Elías est un joueur de squash péruvien. Déjà médaillé d'or aux Jeux panaméricains de 2019, il a également participé aux Jeux olympiques de Tokyo en 2020. Elías est l'un des meilleurs joueurs de squash du monde et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        
        // Porto Rico
        
        "Jasmine Camacho-Quinn":"Jasmine Camacho-Quinn née le 21 août 1996, Jasmine Camacho-Quinn est une athlète de Porto Rico spécialiste du 100 m haies. Déjà championne olympique à Tokyo en 2020, elle sera l'une des favorites à Paris en 2024. Camacho-Quinn est également la détentrice du record du monde de la discipline (12,26).",
        "Adrián Díaz":"Adrián Díaz né le 10 septembre 2000, Adrián Díaz est un pongiste de Porto Rico. Déjà médaillé de bronze aux Jeux panaméricains de 2019, il a également participé aux Jeux olympiques de Rio en 2016 et de Tokyo en 2020. Díaz est l'un des meilleurs pongistes d'Amérique latine et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "María Pérez":"María Pérez née le 29 octobre 1994, María Pérez est une haltérophile de Porto Rico. Déjà médaillée d'or aux Jeux panaméricains de 2019 dans la catégorie des 76 kg, elle a également participé aux Jeux olympiques de Rio en 2016 et de Tokyo en 2020. Pérez est l'une des meilleures haltérophiles d'Amérique latine et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",  
  
  
  };
