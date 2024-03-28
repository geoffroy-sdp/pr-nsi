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
    "Danemark": ["Anne-Marie Rindom", "Viktor Axelsen","Julie Leth"],
    "Espagne": ["Fátima Gálvez", "Alberto Ginés López","Sandra Sánchez"],
    "Estonie": ["Julia Beljajeva", "Erika Kirpu","Katrina Lehis"],
    "Finland": ["Viivi Lehikoinen", "Satu Mäkelä-Nummela","Mira Potkonen"],
    "Géorgie": ["Vazha Margvelashvili", "Lasha Bekauri","Lasha Talakhadze"],
    "Grande-Bretagne": ["Hannah Mills", "Keely Hodgkinson", "Lauren Price"],
    "Grèce": ["Elefthérios Petroúnias", "Rafaéla Spanoudáki-Chatziríga","Antigóni Drisbióti"],
    "Hongrie": ["Dóra Bodonyi", "Sarolta Kovács","Áron Szilágyi"],
    "Irlande": ["Paul O'Donovan", "Ciara Mageean","Sarah Lavin"],
    "Italie": ["Valentina Rodini", "Eseosa Desalu","Alice Volpi"],
    "Lituanie": ["Andrius Gudžius", "Airinė Palšytė","Laura Asadauskaitė-Zadneprovskienė"],
    "Moldavie": ["Serghei Tarnovschi", "Dimitriana Surdu","Anastasia Nichita"],
    "Norvège": ["Eivind Henriksen", "Vilde Johansen","Karoline Bjerkeli Grøvdal"],
    "Pays-Bas": ["Ymkje Clevering", "Sharon van Rouwendaal","Anouk Vetter"],
    "Pologne": ["Maria Andrejczyk", "Justyna Święty-Ersetic","Natalia Kaczmarek"],
    "Portugale": ["Pedro Pichardo", "Patrícia Mamona","Fernando Pimenta"],
    "Roumanie": ["Simona Radiș", "Ana Maria Popescu","Andrea Miklós"],
    "Serbie": ["Jovana Prekovic", "Milica Mandić","Gojko Pijetlović"],
    "Slovaquie": ["Zuzana Rehák-Štefečeková", "Jakub Grigar","Rory Sabbatini"],
    "Slovénie": ["", "",""],
    "Suède": ["", "",""],
    "Suisse": ["", "",""],
    "Tchéquie": ["", "",""],
    "Turquie": ["", "",""],
    "Ukraine": ["", "",""],
  
    // Océanie
    "Australie": ["Ariarne Titmus", "Ash Barty", "Patty Mills"],
    "Fidji": ["Josua Tuisova", "Adi Bakaniceva", "Swen Nater"],
    "Nouvelle-Zélande": ["Rieko Ioane", "Beauden Barrett", "Ian Ferguson"],
  
    //Afrique
    "Afrique du Sud": ["Tatjana Schoenmaker", "Wayde van Niekerk", "Bianca Buitendag"],
    "Algérie": ["Yasser Mohamed Triki", "Amina Berrichi", "Ramy Boudrouma"],
    "Burkina Faso": ["Benjamin Kaboré", "Marthe Koala", "Hugues Fabrice Zango"],
    "Cameroun": ["Clarisse Agbegnenou", "Emmanuel Eseme", "Ajara Nchout Njoya"],
    "Djibouti": ["Abdi Waiss Mouhyadin", "Zahra Ali", "Ayanleh Souleiman"],
    "Égypte": ["Doaa Elghobashy", "Alaaeldin Abouelkassem", "Faten El-Ghorra"],
    "Érythrée": ["Haile Gebrselassie", "Ghirmay Ghebreslassie", "Yemane Hailu"],
    "Éthiopie": ["Letesenbet Gidey", "Selemon Barega", "Tirunesh Dibaba"],
    "Gambie": ["Muhammed Jawara", "Ebrima Kamara", "Gina Bass"],
    "Kenya": ["Brigid Kosgei", "Faith Kipyegon", "Eliud Kipchoge"],
    "Maroc": ["Achraf Hakimi", "Sifan Hassan", "Soufiane El Bakkali"],
    "Nigeria": ["Blessing Okagbare", "Ese Brume", "Tobi Amusan"],
    "Ouganda": ["Jacob Kiplimo", "Peruth Chemutai", "Joshua Cheptegei"],
    "Sénégale": ["Mamadou Ndiaye", "Fatoumata Ndiaye", "Adama Diatta"],
    "Tanzanie": ["Suleiman Nyambui", "Agnes Jebet Tirop", "Alphonce Felix Simbu"],
    "Tunisie": ["Habiba Ghribi", "Oussama Marnaoui", "Ines Boubakri"],
    "Zimbabwe": ["Alexander Axon", "Kirsty Coventry", "Ngoni Makusha"],
    
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
    "République dominicaine": ["Marileidy Paulino", "Félix Sánchez", "Prisilla Rivera"],
    "Suriname": ["Jair Tjon En Fa", "Miguel van Assen", "Renzo Tjon A Joe"],
    "Trinité-et-Tobago": ["Keshorn Walcott", "Dylan Carter", "Akeem Stewart"],
    "Uruguay": ["Dolores Moreira", "Pablo Cuevas", "Déborah Rodríguez"],
  
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
        "Rafaéla Spanoudáki-Chatziríga" : "Née le 7 juin 1994 à Rhodes, Rafaéla Spanoudáki-Chatziríga est une sprinteuse grecque. Spécialiste du 200m, elle a remporté le titre de championne d'Europe en 2021 à Munich avec un temps de 22'82, établissant un nouveau record national. Elle a également participé aux Jeux olympiques de Tokyo en 2021, où elle a atteint les demi-finales.",
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
        "Andrea Miklós" : "Née le 17 avril 1999 à Cluj-Napoca en Roumanie, Andrea Miklós est une athlète spécialisée dans le 400 mètres. Championne d'Europe junior du 400 mètres en 2017, elle a également remporté la médaille de bronze du relais 4 × 400 mètres aux Championnats du monde en salle 2016. Miklós a participé aux Jeux olympiques de 2016 et de 2020, atteignant les demi-finales du 400 mètres à chaque fois. Son record personnel est de 50'31, établi en 2021.",
  
        //Serbie
        "Jovana Prekovic" : "Jovana Preković, née le 20 janvier 1996 à Aranđelovac en Serbie, est une karatéka serbe concourant dans la catégorie kumité -61 kg. Double championne du monde en 2018 et 2021, elle est également championne olympique en 2020, lors de la première apparition du karaté aux Jeux olympiques. Son palmarès exceptionnel fait d'elle l'une des karatékas les plus accomplies de sa génération.",
        "Milica Mandić" : "Milica Mandić, née le 6 décembre 1991 à Belgrade, est une taekwondoïste serbe. Double championne olympique (+67kg) à Londres 2012 et Tokyo 2020, elle est également championne du monde (+67kg) en 2017. Palmarès exceptionnel pour cette athlète d'exception.",
        "Gojko Pijetlović" : "Gojko Pijetlović, né le 7 août 1983 à Novi Sad, est un joueur de water-polo serbe évoluant au poste de gardien de but. Il est triple champion olympique (2012, 2016 et 2020), champion du monde (2009 et 2015) et champion d'Europe (2014 et 2016). Considéré comme l'un des meilleurs gardiens de but de l'histoire, il a remporté de nombreux autres titres et distinctions individuelles au cours de sa carrière.",
  
        //Slovaquie
        "Zuzana Rehák-Štefečeková" : "Zuzana Rehák-Štefečeková est une tireuse sportive slovaque née le 15 janvier 1984 à Nitra. Spécialiste du trap, elle est championne olympique en 2020 à Tokyo et vice-championne olympique en 2008 à Pékin et en 2012 à Londres. Elle est également championne du monde en 2010 et a remporté de nombreuses autres médailles internationales.",
        "Jakub Grigar" : "Né le 27 avril 1997 à Liptovský Mikuláš, Jakub Grigar est un kayakiste slovaque spécialiste du slalom. Double champion du monde junior, il a remporté la médaille d'argent aux Jeux olympiques de Tokyo en 2021 et compte également deux médailles d'argent aux Championnats du monde en K1 par équipe.",
        "Rory Sabbatini" : "Rory Sabbatini, né le 2 avril 1976 à Durban en Afrique du Sud, est un golfeur professionnel. Passé professionnel en 1998, il a remporté six titres sur le PGA Tour dont le HP Byron Nelson Championship en 2009 et The Honda Classic en 2011. Il a également décroché la médaille d'argent aux Jeux olympiques de Tokyo en 2020 sous les couleurs de la Slovaquie, pays dont il a acquis la nationalité en 2019.",
   
        //Suède
        "Sarah Sjöström" : "Sarah Sjöström, née le 17 août 1993, est une nageuse suédoise spécialiste des épreuves de papillon et de nage libre. Nageuse la plus décorée de l'histoire des Championnats du monde en bassin long avec 23 médailles individuelles, elle est également championne olympique du 100 m papillon en 2016 et détentrice de plusieurs records du monde",
        "Armand Duplantis" : "Armand "Mondo" Duplantis, né en 1999, est un perchiste américano-suédois. Détenteur du record du monde en salle et en plein air avec 6m22 et 6m23, il est champion olympique (2021), champion du monde (2022 & 2023) et champion d'Europe (2018 & 2021). Son palmarès exceptionnel fait de lui l'un des meilleurs perchistes de l'histoire.",
        "Daniel Ståhl" : "Daniel Ståhl,né le 27 août 1992, est un athlète suédois spécialiste du lancer de disque. Il est champion olympique en 2021, champion du monde en 2019 et 2023, et champion d'Europe en 2018 et 2022. Son record personnel est de 71,46 m, établi en 2023, ce qui le place au deuxième rang des performeurs mondiaux de tous les temps.",
 
        //Suisse
        "Mujinga Kambundji" : "Née à Berne en 1992, Mujinga Kambundji est une sprinteuse suisse spécialiste du 100m et 200m. Figure incontournable du sprint helvétique, elle cumule les titres et médailles depuis 2014, dont une médaille de bronze aux Championnats du Monde 2019 sur 200m et le titre de Championne du Monde en salle du 60m en 2022. Sa carrière exceptionnelle fait d'elle l'athlète suisse la plus rapide de l'histoire et une inspiration pour la nouvelle génération.",
        "Max Heinzer" : "Max Heinzer est un escrimeur suisse né le 8 août 1987. Spécialiste de l'épée, il a remporté de nombreuses médailles internationales, dont l'or par équipes aux Championnats du monde 2018 et l'argent par équipes aux Jeux olympiques de 2020. Il a également été champion d'Europe à trois reprises (2013, 2015 et 2016) et a participé à trois éditions des Jeux olympiques (2012, 2016 et 2020).",
        "Ralph Stöckli" : "Ralph Stöckli, né le 23 juillet 1976 à Uzwil, est un curleur suisse à la carrière riche en succès. Il a notamment remporté la médaille d'argent aux Championnats du monde 2003, l'or aux Championnats d'Europe 2006 et le bronze aux Jeux olympiques d'hiver de 2010. Après sa carrière sportive, il est devenu chef du sport de performance à Swiss Olympic et chef de mission de l'équipe suisse aux Jeux olympiques de 2016 à 2022.",

        //Tchéquie
        "Kateřina Siniaková" : "Kateřina Siniaková, née le 10 mai 1996, est une joueuse de tennis tchèque. Professionnelle depuis 2012, elle a atteint la 31ème place mondiale en simple et la 1ère place mondiale en double. Siniaková a remporté 7 titres WTA en simple et 17 en double, dont 2 titres du Grand Chelem en double à Wimbledon (2018) et Roland-Garros (2021).",
        "Jiří Prskavec" : "Jiří Prskavec est un kayakiste tchèque né le 18 mai 1993 à Mělník. Spécialisé dans la catégorie K1, il est champion olympique en 2020 à Tokyo et triple champion du monde (2018, 2019 et 2022). Il a également remporté la médaille de bronze aux Jeux olympiques de 2016 à Rio de Janeiro et compte quatre titres de champion d'Europe à son palmarès.",
        "Lukáš Krpálek" : "Lukáš Krpálek, judoka tchèque né en 1990, est double champion olympique (2016 et 2020) et double champion du monde (2014 et 2019) dans la catégorie des +100kg. Il compte également à son palmarès 3 titres de champion d'Europe (2013, 2014 et 2018) et plus de 43 médailles en Coupe du Monde. Un véritable palmarès de légende pour ce judoka d'exception.",

        //Turquie
        "Mete Gazoz" : "Né le 8 juin 1999 à Istanbul, Mete Gazoz est un archer turc spécialiste de l'arc classique. Il est le premier archer turc à remporter une médaille olympique, en décrochant l'or à Tokyo en 2020. Son palmarès est riche : champion olympique en 2020, champion du monde en 2023, médaillé d'argent aux Championnats d'Europe en salle 2019 et médaillé d'or aux Jeux méditerranéens de 2018 et 2022.",
        "Busenaz Sürmeneli" : "Busenaz Sürmeneli, née le 26 mai 1998 à Bursa en Turquie, est une boxeuse amateure. Sacrée championne olympique dans la catégorie poids welters aux Jeux de Tokyo en 2021, elle est également double championne du monde (2019 et 2022) et championne d'Europe (2018) dans la même catégorie. Véritable étoile montante de la boxe féminine, elle compte à son palmarès 78 victoires en 80 combats.",
        "Buse Çakıroğlu" : "Buse Naz Çakıroğlu, née le 26 mai 1996 à Trabzon, est une boxeuse turque. Championne d'Europe en 2019 et médaillée d'or aux Jeux méditerranéens de 2022, elle est également la première boxeuse turque à avoir remporté un titre olympique, en bronze, aux Jeux de Tokyo 2020. Son palmarès exceptionnel fait d'elle l'une des athlètes les plus brillantes de son pays.",

        //Ukraine
        "Oleksandr Khyzhniak" : "Oleksandr Khyzhniak, boxeur ukrainien né le 3 août 1995 à Poltava, est un champion accompli. Il a notamment remporté l'or aux Championnats du monde 2017, aux Championnats d'Europe 2017 et aux Jeux européens 2019, tous dans la catégorie des poids moyens. Son palmarès impressionnant comprend également une médaille de bronze aux Jeux olympiques de 2020 à Tokyo.",
        "Mykhailo Romanchuk" : "Mykhailo Romanchuk, né le 7 août 1996 à Rivne en Ukraine, est un nageur spécialiste de la nage libre. Il compte à son palmarès deux médailles d'argent olympiques (800m et 1500m nage libre) remportées aux Jeux de Tokyo en 2020, ainsi que six titres de champion d'Europe (400m, 800m et 1500m nage libre) et deux titres de champion du monde (800m et 1500m nage libre).",
        "Anzhelika Terliuga" : "Née le 27 mars 1992 à Odessa en Ukraine, Anzhelika Terliuga est une karatéka spécialiste du kumite (-55 kg). Triple championne d'Europe (2017, 2018, 2019) et vice-championne olympique aux Jeux de Tokyo 2020, elle est l'une des athlètes les plus titrées de sa discipline.",

        //Slovénie
        "Benjamin Savšek" : "Benjamin Savšek, né le 24 mars 1987 à Ljubljana en Slovénie, est un céiste pratiquant le slalom. Il est l'un des pagayeurs C1 les plus titrés de sa génération avec un palmarès impressionnant : champion olympique en 2020, double champion du monde (2017 et 2023) et quadruple champion d'Europe (2014, 2015, 2019 et 2022).",
        "Primož Roglič" : "Né en 1989 en Slovénie, Primož Roglič est un coureur cycliste polyvalent. Il a d'abord excellé en saut à ski avant de se reconvertir avec succès sur la route. Son palmarès est impressionnant : 3 Tours d'Espagne (2019, 2020, 2021), 1 Tour d'Italie (2023), 1 titre de champion du monde du contre-la-montre (2020) et de nombreuses autres victoires d'étapes sur les Grands Tours. Roglič est considéré comme l'un des meilleurs cyclistes du monde.",
        "Janja Garnbret" : "Janja Garnbret, née en 1999, est une grimpeuse slovène. Considérée comme la meilleure grimpeuse de l'histoire, elle a remporté 19 titres mondiaux en difficulté, bloc et combiné, ainsi que l'or olympique en combiné à Tokyo 2020. Parmi ses autres faits d'armes, elle est la première femme à avoir réalisé un 8c en escalade sportive et la seule à avoir remporté six manches de Coupe du monde de bloc en une saison.",

    
              //afrique
        

        //afrique du sud
        "Tatjana Schoenmaker":"Tatjana Schoenmakernée le 9 juillet 1997 est une nageuse sud-africaine spécialiste de la brasse. Déjà médaillée d'or du 200 m brasse aux Jeux olympiques de Tokyo en 2020, elle sera l'une des favorites à Paris en 2024. Schoenmaker est également la détentrice du record du monde du 200 m brasse (2:18.95).",
        "Wayde van Niekerk":"Wayde van Niekerk né le 15 juillet 1992 est un athlète sud-africain spécialiste du 400 m. Déjà champion olympique du 400 m et du 4x400 m aux Jeux olympiques de Rio en 2016, il sera l'un des favoris à Paris en 2024. Van Niekerk est également le détenteur du record du monde du 400 m (43,03).",
        "Bianca Buitendag":"Bianca Buitendag née le 5 octobre 1994 est une surfeuse sud-africaine. Déjà médaillée d'argent aux Jeux olympiques de Tokyo en 2020, elle sera l'une des favorites à Paris en 2024. Buitendag est également la championne du monde de la discipline en 2019.",

         //algérie
         "Yasser Mohamed Triki" : "Yasser Mohamed Triki né le 1er août 1998 est un athlète algérien spécialiste du triple saut. Déjà médaillé d'argent aux Jeux africains de 2019 et champion d'Afrique en 2022, il s'est qualifié pour les JO 2024 en réalisant un saut de 17m18. Triki est l'un des meilleurs triple sauteurs d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
         "Amina Berrichi" : "Amina Berrichi née le 1er janvier 2004 est une véliplanchiste algérienne. Championne d'Afrique en 2022 dans la catégorie RS:X, elle s'est qualifiée pour les JO 2024 en terminant 10ème au championnat du monde 2023. Berrichi est l'une des meilleures véliplanchistes d'Afrique et elle espère faire une belle performance aux Jeux olympiques de Paris en 2024.",
         "Ramy Boudrouma" : "Ramy Boudrouma né le 1er janvier 2000 est un véliplanchiste algérien. Champion d'Afrique en 2022 dans la catégorie IQFoil, il s'est qualifié pour les JO 2024 en terminant 9ème au championnat du monde 2023. Boudrouma est l'un des meilleurs véliplanchistes d'Afrique et il espère faire une belle performance aux Jeux olympiques de Paris en 2024.",

          //Burkina Faso
        "Hugues Fabrice Zango" : "Hugues Fabrice Zango né le 25 juin 1993, Hugues Fabrice Zango est un athlète burkinabé spécialiste du triple saut. Déjà médaillé de bronze aux championnats du monde 2019 et champion d'Afrique en 2018 et 2022, il s'est qualifié pour les JO 2024 en réalisant un saut de 17m37. Zango est l'un des meilleurs triple sauteurs du monde et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Marthe Koala" : "Marthe Koala née le 24 novembre 2000 est une athlète burkinabé spécialiste du 100 m haies. Déjà médaillée d'or aux Jeux africains de 2019 et championne d'Afrique en 2022, elle s'est qualifiée pour les JO 2024 en réalisant un temps de 13,25. Koala est l'une des meilleures coureuses de 100 m haies d'Afrique et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Benjamin Kaboré" : "Benjamin Kaboré né le 1er janvier 2002 est un nageur burkinabé spécialiste du 50 m nage libre. Déjà médaillé d'argent aux Jeux africains de 2019 et champion d'Afrique en 2022, il s'est qualifié pour les JO 2024 en réalisant un temps de 22,67. Kaboré est l'un des meilleurs nageurs d'Afrique et il espère faire une belle performance aux Jeux olympiques de Paris en 2024.",

         //Cameroun
         "Ajara Nchout Njoya" : "Ajara Nchout Njoya née le 12 janvier 1993 est une athlète camerounaise spécialiste du triple saut. Déjà médaillée d'or aux Jeux africains de 2019 et championne d'Afrique en 2018 et 2022, elle s'est qualifiée pour les JO 2024 en réalisant un saut de 14m17. Nchout Njoya est l'une des meilleures triple sauteuses d'Afrique et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.         ",
         "Emmanuel Eseme" : "Emmanuel Eseme né le 1er janvier 1996 est un lutteur camerounais spécialiste de la lutte libre dans la catégorie des 74 kg. Déjà médaillé de bronze aux Jeux africains de 2019 et champion d'Afrique en 2022, il s'est qualifié pour les JO 2024 en terminant 5ème au championnat du monde 2023. Eseme est l'un des meilleurs lutteurs d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
         "Clarisse Agbegnenou" : "Clarisse Agbegnenou née le 25 octobre 1992 est une judokate camerounaise naturalisée française. Déjà championne olympique en 2016 et 2020, elle est également quintuple championne du monde et quintuple championne d'Europe. Agbegnenou est l'une des meilleures judokates du monde et elle espère remporter une troisième médaille d'or consécutive aux Jeux olympiques de Paris en 2024.",

          //djibouti
        "Ayanleh Souleiman" : "Ayanleh Souleiman né le 30 décembre 1992 est un athlète djiboutien spécialiste du 1500 m. Déjà médaillé de bronze aux championnats du monde 2013 et champion d'Afrique en 2012 et 2014, il s'est qualifié pour les JO 2024 en réalisant un temps de 3h, 35m et 28s. Souleiman est l'un des meilleurs coureurs de 1500 m d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Zahra Ali" : "Zahra Ali née le 23 janvier 1994 est une athlète djiboutienne spécialiste du marathon. Déjà médaillée d'or aux Jeux africains de 2019 et championne d'Afrique en 2022, elle s'est qualifiée pour les JO 2024 en réalisant un temps de 2h28'40. Ali est l'une des meilleures marathoniennes d'Afrique et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Abdi Waiss Mouhyadin" : "Abdi Waiss Mouhyadin né le 1er janvier 2000 est un athlète djiboutien spécialiste du 3000 m steeple. Déjà médaillé d'argent aux Jeux africains de 2019 et champion d'Afrique en 2022, il s'est qualifié pour les JO 2024 en réalisant un temps de 8h, 17m et 36s. Mouhyadin est l'un des meilleurs coureurs de 3000 m steeple d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",

         //Egypte
         "Faten El-Ghorra" : "Faten El-Ghorra née le 1er janvier 2000 est une karatéka égyptienne spécialiste du kumite dans la catégorie des +61 kg. Déjà médaillée d'or aux Jeux africains de 2019 et championne d'Afrique en 2022, elle s'est qualifiée pour les JO 2024 en terminant 3ème au championnat du monde 2023. El-Ghorra est l'une des meilleures karatékas du monde et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
         "Alaaeldin Abouelkassem" : "Alaaeldin Abouelkassem né le 1er janvier 1990 est un haltérophile égyptien spécialiste de la catégorie des 81 kg. Déjà médaillé de bronze aux Jeux olympiques de Rio en 2016 et champion d'Afrique en 2018 et 2022, il s'est qualifié pour les JO 2024 en terminant 5ème au championnat du monde 2023. Abouelkassem est l'un des meilleurs haltérophiles d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
         "Doaa Elghobashy" : "Doaa Elghobashy née le 14 août 1996 est une nageuse égyptienne spécialiste du papillon. Déjà médaillée d'or aux Jeux africains de 2019 et championne d'Afrique en 2018 et 2022, elle s'est qualifiée pour les JO 2024 en réalisant un temps de 58h 79m sur 100 m papillon. Elghobashy est l'une des meilleures nageuses d'Afrique et elle espère faire une belle performance aux Jeux olympiques de Paris en 2024.",

         //Érythrée
        "Yemane Hailu" : "Yemane Hailu né le 25 novembre 1991 est un athlète érythréen spécialiste du 3000 m steeple. Déjà médaillé de bronze aux championnats du monde 2019 et champion d'Afrique en 2016 et 2018, il s'est qualifié pour les JO 2024 en réalisant un temps de 8h, 12m et 32s. Hailu est l'un des meilleurs coureurs de 3000 m steeple d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Ghirmay Ghebreslassie" : "Ghirmay Ghebreslassie né le 15 novembre 1995 est un athlète érythréen spécialiste du marathon. Déjà médaillé de bronze aux Jeux olympiques de Rio en 2016, il s'est qualifié pour les JO 2024 en réalisant un temps de 2h06'56. Ghebreslassie est l'un des meilleurs marathoniens d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Haile Gebrselassie" : "Haile Gebrselassie né le 18 avril 1973 est un athlète érythréen retraité spécialiste du 10 000 m et du marathon. Déjà double champion olympique du 10 000 m (2000 et 2004) et quadruple champion du monde (1999, 2001, 2003 et 2005), il est considéré comme l'un des plus grands coureurs de fond de tous les temps. Gebrselassie a annoncé son intention de revenir à la compétition en 2024 pour participer aux JO de Paris, à l'âge de 51 ans.",

         //Éthiopie
         "Letesenbet Gidey" : "Letesenbet Gidey née le 23 novembre 1998 est une athlète éthiopienne spécialiste du 10 000 m. Déjà championne du monde du 10 000 m en 2019 et 2022, elle s'est qualifiée pour les JO 2024 en réalisant un temps de 29h, 01m et 03s. Gidey est l'une des meilleures coureuses de 10 000 m du monde et elle espère remporter une médaille d'or aux Jeux olympiques de Paris en 2024.",
         "Selemon Barega" : "Selemon Barega né le 20 janvier 2001 est un athlète éthiopien spécialiste du 10 000 m. Déjà champion olympique du 10 000 m en 2020, il s'est qualifié pour les JO 2024 en réalisant un temps de 27h, 28m et 98s. Barega est l'un des meilleurs coureurs de 10 000 m du monde et il espère remporter une deuxième médaille d'or consécutive aux Jeux olympiques de Paris en 2024.         ",
         "Tirunesh Dibaba" : "Tirunesh Dibaba née le 1er juin 1985 est une athlète éthiopienne spécialiste du 10 000 m et du marathon. Déjà triple championne olympique (5 000 m en 2008 et 10 000 m en 2008 et 2012), elle s'est qualifiée pour les JO 2024 en réalisant un temps de 2h18'02 au marathon. Dibaba est l'une des meilleures marathoniennes du monde et elle espère remporter une quatrième médaille olympique aux Jeux olympiques de Paris en 2024.",

         //Gambie
        "Gina Bass" : "Gina Bass née le 4 mai 1995 est une athlète gambienne spécialiste du 800 m. Déjà médaillée d'or aux Jeux africains de 2019 et championne d'Afrique en 2022, elle s'est qualifiée pour les JO 2024 en réalisant un temps de 1h 59m et 42s. Bass est l'une des meilleures coureuses de 800 m d'Afrique et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Ebrima Kamara" : "Ebrima Kamara né le 1er janvier 2000 est un athlète gambien spécialiste du 100 m. Déjà médaillé d'argent aux Jeux africains de 2019 et champion d'Afrique en 2022, il s'est qualifié pour les JO 2024 en réalisant un temps de 10m et 10s. Kamara est l'un des meilleurs sprinters d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Muhammed Jawara" : "Muhammed Jawara né le 1er janvier 1998 est un haltérophile gambien spécialiste de la catégorie des 73 kg. Déjà médaillé de bronze aux Jeux africains de 2019 et champion d'Afrique en 2022, il s'est qualifié pour les JO 2024 en terminant 9ème au championnat du monde 2023. Jawara est l'un des meilleurs haltérophiles d'Afrique et il espère faire une belle performance aux Jeux olympiques de Paris en 2024.",

         //Kenya
         "Eliud Kipchoge" : "Eliud Kipchoge né le 5 novembre 1984 est un athlète kenyan spécialiste du marathon. Déjà champion olympique en 2016 et 2020, il est également détenteur du record du monde du marathon (2h01'39). Kipchoge est l'un des meilleurs marathoniens de tous les temps et il espère remporter une troisième médaille d'or consécutive aux Jeux olympiques de Paris en 2024.",
         "Faith Kipyegon" : "Faith Kipyegon née le 10 janvier 1994 est une athlète kenyane spécialiste du 1500 m. Déjà championne olympique en 2016 et 2020, elle est également championne du monde en 2017 et 2019. Kipyegon est l'une des meilleures coureuses de 1500 m de tous les temps et elle espère remporter une troisième médaille d'or consécutive aux Jeux olympiques de Paris en 2024.",
         "Brigid Kosgei" : "Brigid Kosgei née le 20 février 1994 est une athlète kenyane spécialiste du marathon. Déjà championne du monde en 2019 et détentrice du record du monde du marathon féminin (2h14'04), elle espère remporter une médaille d'or aux Jeux olympiques de Paris en 2024.",

        //Maroc
        "Soufiane El Bakkali" : "Soufiane El Bakkali né le 7 mai 1996 est un athlète marocain spécialiste du 3000 m steeple. Déjà champion olympique en 2020, il est également champion du monde en 2023. El Bakkali est l'un des meilleurs coureurs de 3000 m steeple du monde et il espère remporter une deuxième médaille d'or consécutive aux Jeux olympiques de Paris en 2024.",
        "Sifan Hassan" : "Sifan Hassan née le 1er janvier 1993 est une athlète d'origine éthiopienne naturalisée néerlandaise spécialiste des courses de fond. Déjà médaillée d'or du 5000 m et du 10 000 m aux Jeux olympiques de Tokyo en 2020, elle a également remporté 3 médailles aux championnats du monde 2019. Hassan est l'une des meilleures coureuses de fond du monde et elle espère remporter de nouvelles médailles aux Jeux olympiques de Paris en 2024.",
        "Achraf Hakimi" : "é le 4 novembre 1998 est un footballeur marocain. Déjà champion d'Italie avec l'Inter Milan en 2021 et champion de France avec le Paris Saint-Germain en 2022, il est l'un des meilleurs latéraux droits du monde. Hakimi espère mener le Maroc à la victoire aux Jeux olympiques de Paris en 2024.",

        //Nigeria
        "Tobi Amusan" : "Tobi Amusan née le 23 avril 1997 est une athlète nigériane spécialiste du 100 m haies. Déjà médaillée d'or aux championnats du monde 2023 et championne d'Afrique en 2018 et 2022, elle s'est qualifiée pour les JO 2024 en réalisant un temps de 12m et 12s. Amusan est l'une des meilleures coureuses de 100 m haies du monde et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Ese Brume" : "Ese Brume née le 13 octobre 1996 est une athlète nigériane spécialiste du saut en longueur. Déjà médaillée de bronze aux championnats du monde 2019 et championne d'Afrique en 2018 et 2022, elle s'est qualifiée pour les JO 2024 en réalisant un saut de 7m17. Brume est l'une des meilleures sauteuses en longueur du monde et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Blessing Okagbare" : "Blessing Okagbare née le 9 octobre 1988 est une athlète nigériane spécialiste du saut en longueur et du 100 m. Déjà médaillée d'argent aux championnats du monde 2013 et championne d'Afrique en 2010, 2012, 2014 et 2018, elle s'est qualifiée pour les JO 2024 en réalisant un temps de 11m et 5s. Okagbare est l'une des athlètes les plus polyvalentes du monde et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",

        //Ouganda
        "Joshua Cheptegei" : "Joshua Cheptegei né le 12 décembre 1996 est un athlète ougandais spécialiste du 5000 m et du 10 000 m. Déjà champion du monde du 10 000 m en 2019 et 2023, et champion olympique du 5 000 m et du 10 000 m en 2020, il sera l'un des favoris à Paris en 2024. Cheptegei est l'un des meilleurs coureurs de fond du monde et il espère remporter deux nouvelles médailles d'or aux Jeux olympiques de Paris en 2024.",
        "Peruth Chemutai" : "Peruth Chemutai née le 10 juillet 1999 est une athlète ougandaise spécialiste du 3000 m steeple. Déjà championne du monde du 3000 m steeple en 2019 et championne olympique de la discipline en 2020, elle sera l'une des favorites à Paris en 2024. Chemutai est l'une des meilleures steepleuses du monde et elle espère remporter une nouvelle médaille d'or aux Jeux olympiques de Paris en 2024.",
        "Jacob Kiplimo" : "Jacob Kiplimo né le 14 novembre 2000 est un athlète ougandais spécialiste du 5000 m et du 10 000 m. Déjà médaillé de bronze du 10 000 m aux championnats du monde 2019 et champion du monde du 5 000 m en 2023, il sera l'un des favoris à Paris en 2024. Kiplimo est l'un des meilleurs coureurs de fond du monde et il espère remporter une médaille d'or aux Jeux olympiques de Paris en 2024.",

        //Sénégale
        "Adama Diatta" : "Adama Diatta né le 28 mai 1995 est un athlète sénégalais spécialiste du 400 m haies. Déjà médaillé d'argent aux Jeux africains de 2019 et champion d'Afrique en 2022, il s'est qualifié pour les JO 2024 en réalisant un temps de 48m et 37s. Diatta est l'un des meilleurs coureurs de 400 m haies d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Fatoumata Ndiaye" : "Fatoumata Ndiaye née le 17 juillet 1990 est une athlète sénégalaise spécialiste du 100 m haies. Déjà médaillée d'or aux Jeux africains de 2019 et championne d'Afrique en 2022, elle s'est qualifiée pour les JO 2024 en réalisant un temps de 12m et 87s. Ndiaye est l'une des meilleures coureuses de 100 m haies d'Afrique et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Mamadou Ndiaye" : "Né le 20 octobre 1996 est un basketteur sénégalais évoluant au poste de pivot. Déjà médaillé d'argent à la Coupe d'Afrique des nations masculine de basket-ball en 2021, il a également participé aux Jeux olympiques de Tokyo en 2020. Ndiaye est l'un des meilleurs joueurs de basket-ball d'Afrique et il espère faire une belle performance aux Jeux olympiques de Paris en 2024.        ",
         
        //Tanzanie
        "Alphonce Felix Simbu" : "Alphonce Felix Simbu né le 8 janvier 1990 est un athlète tanzanien spécialiste du marathon. Déjà médaillé d'or aux Jeux du Commonwealth de 2018 et champion d'Afrique en 2022, il s'est qualifié pour les JO 2024 en réalisant un temps de 2h09'21. Simbu est l'un des meilleurs marathoniens d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Agnes Jebet Tirop" : "Agnes Jebet Tirop née le 23 octobre 1995 est une athlète tanzanienne spécialiste du 10 000 m. Déjà médaillée de bronze aux championnats du monde 2015 et 2017, elle s'est qualifiée pour les JO 2024 en réalisant un temps de 30h 45m et 21s. Tirop est l'une des meilleures coureuses de 10 000 m du monde et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Suleiman Nyambui" : "Suleiman Nyambui né le 15 décembre 1993 est un athlète tanzanien spécialiste du 5 000 m. Déjà médaillé d'argent aux Jeux africains de 2019 et champion d'Afrique en 2022, il s'est qualifié pour les JO 2024 en réalisant un temps de 13h 08m et 04s. Nyambui est l'un des meilleurs coureurs de 5 000 m d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
         
        //tunisie
        "Ines Boubakri" : "Ines Boubakri née le 18 août 1988 est une escrimeuse tunisienne spécialiste du sabre. Déjà médaillée de bronze aux Jeux olympiques de Rio en 2016, elle est également championne du monde en 2018 et championne d'Afrique en 2019 et 2022. Boubakri est l'une des meilleures sabreuses du monde et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Oussama Marnaoui" : "Oussama Marnaoui né le 31 décembre 1999 est un nageur tunisien spécialiste du 1500 m nage libre. Déjà médaillé d'or aux Jeux africains de 2019 et champion d'Afrique en 2022, il s'est qualifié pour les JO 2024 en réalisant un temps de 14h 55m et 36s. Marnaoui est l'un des meilleurs nageurs d'Afrique et il espère faire une belle performance aux Jeux olympiques de Paris en 2024.",
        "Habiba Ghribi" : "Habiba Ghribi née le 9 mars 1984 est une athlète tunisienne spécialiste du 3000 m steeple. Déjà championne du monde en 2015 et championne d'Afrique en 2012, 2014 et 2016, elle s'est qualifiée pour les JO 2024 en réalisant un temps de 9h 28m et 71s. Ghribi est l'une des meilleures coureuses de 3000 m steeple d'Afrique et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
         
        //Zimbabwe
        "Ngoni Makusha" : "Ngoni Makusha né le 10 mars 1987 est un athlète zimbabwéen spécialiste du saut en longueur. Déjà médaillé d'argent aux Jeux olympiques de Londres en 2012, il s'est qualifié pour les JO 2024 en réalisant un saut de 8m24. Makusha est l'un des meilleurs sauteurs en longueur d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Kirsty Coventry" : "Kirsty Coventry née le 16 septembre 1983 est une nageuse zimbabwéenne spécialiste des épreuves individuelles en dos. Déjà médaillée d'or aux Jeux olympiques de Pékin en 2008 et d'argent aux Jeux olympiques de Londres en 2012, elle s'est qualifiée pour les JO 2024 en réalisant un temps de 2h 09m et 55s sur 200 m dos. Coventry est l'une des meilleures nageuses d'Afrique et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Alexander Axon" : "Alexander Axon né le 24 août 1994 est un athlète zimbabwéen spécialiste du lancer du javelot. Déjà médaillé d'or aux Jeux africains de 2019 et champion d'Afrique en 2022, il s'est qualifié pour les JO 2024 en réalisant un lancer de 84m73. Axon est l'un des meilleurs lanceurs de javelot d'Afrique et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",


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

        //République dominicaine
        
        "Marileidy Paulino":"Marileidy Paulino née le 25 octobre 2001, Marileidy Paulino est une athlète dominicaine spécialiste du 400m. Déjà médaillée d'argent aux Jeux olympiques de Tokyo en 2020, elle sera l'une des favorites à Paris en 2024. Paulino est également la championne du monde du 400m en 2022.",
        "Félix Sánchez":"Félix Sánchez né le 30 août 1977, Félix Sánchez est un athlète dominicain spécialiste du 400m haies. Déjà champion olympique à Athènes en 2004 et à Londres en 2012, il sera l'un des athlètes les plus expérimentés à Paris en 2024. Sánchez est également le champion du monde de la discipline en 2003 et 2007.",
        "Prisilla Rivera":"Prisilla Rivera née le 29 décembre 1984, Prisilla Rivera est une joueuse de volley-ball dominicaine. Déjà médaillée de bronze aux Jeux olympiques de Londres en 2012, elle espère remporter une nouvelle médaille à Paris en 2024. Rivera est l'une des meilleures joueuses de volley-ball d'Amérique latine et elle est la capitaine de l'équipe nationale dominicaine.",
        
        //Suriname
        
        "Jair Tjon En Fa":" Jair Tjon En Fa né le 26 décembre 1988, Jair Tjon En Fa est un cycliste sur piste surinamien. Déjà qualifié pour les Jeux olympiques de Paris 2024 dans les épreuves du sprint et du keirin, il sera l'un des favoris en 2024. Tjon En Fa est également champion du monde du keirin en 2015 et 2018.",
        "Miguel van Assen":"Miguel van Assen né le 26 avril 1997, Miguel van Assen est un athlète surinamien spécialiste du 100 m. Déjà médaillé d'argent aux Jeux panaméricains de 2019, il a également participé aux Jeux olympiques de Tokyo en 2020. Van Assen est l'un des meilleurs sprinters d'Amérique du Sud et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Renzo Tjon A Joe":"Renzo Tjon A Joe né le 10 décembre 2001, Renzo Tjon A Joe est un nageur surinamien spécialiste du 50 m nage libre. Déjà médaillé d'or aux Jeux panaméricains de 2019, il a également participé aux Jeux olympiques de Tokyo en 2020. Tjon A Joe est l'un des meilleurs nageurs d'Amérique du Sud et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        
        //trinité-et-tobago
        
        "Keshorn Walcott":"Keshorn Walcott né le 2 avril 1993, Keshorn Walcott est un athlète de Trinité-et-Tobago spécialiste du lancer du javelot. Déjà champion olympique à Londres en 2012, il sera l'un des favoris à Paris en 2024. Walcott est également le champion du monde de la discipline en 2015.",
        "Dylan Carter":"Dylan Carter né le 31 janvier 1996, Dylan Carter est un nageur de Trinité-et-Tobago. Déjà médaillé de bronze aux Jeux panaméricains de 2019 dans l'épreuve du 100 m papillon, il a également participé aux Jeux olympiques de Rio en 2016 et de Tokyo en 2020. Carter est l'un des meilleurs nageurs d'Amérique centrale et des Caraïbes et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Akeem Stewart":"Akeem Stewart né le 22 août 1997, Akeem Stewart est un athlète de Trinité-et-Tobago spécialiste du sprint. Déjà médaillé d'argent aux Jeux panaméricains de 2019 dans l'épreuve du 400 m, il a également participé aux Jeux olympiques de Tokyo en 2020. Stewart est l'un des meilleurs sprinters d'Amérique du Nord et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        
        //Uruguay
        
        "Dolores Moreira":"Dolores Moreira née le 19 mars 1995, Dolores Moreira est une athlète uruguayenne spécialiste du lancer du marteau. Déjà médaillée d'or aux Jeux panaméricains de 2019, elle a également participé aux Jeux olympiques de Rio en 2016 et de Tokyo en 2020. Moreira est l'une des meilleures lanceuses de marteau d'Amérique du Sud et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Pablo Cuevas":"Pablo Cuevas né le 1er janvier 1986, Pablo Cuevas est un joueur de tennis uruguayen. Déjà médaillé de bronze aux Jeux olympiques de Rio en 2016, il a également participé aux Jeux olympiques de Londres en 2012 et de Tokyo en 2020. Cuevas est l'un des meilleurs joueurs de tennis d'Amérique latine et il espère remporter une médaille aux Jeux olympiques de Paris en 2024.",
        "Déborah Rodríguez ":"Déborah Rodríguez née le 20 décembre 1992, Déborah Rodríguez est une athlète uruguayenne spécialiste du 800 m. Déjà médaillée d'argent aux Jeux panaméricains de 2019, elle a également participé aux Jeux olympiques de Rio en 2016 et de Tokyo en 2020. Rodríguez est l'une des meilleures coureuses de 800 m d'Amérique du Sud et elle espère remporter une médaille aux Jeux olympiques de Paris en 2024.",



        //Asie    

        //Arabie saoudite
        "" : "",
        "" : "",
        "" : "",

        //Bahreïn 
        "" : "",
        "" : "",
        "" : "",
    
        //Chine
        "Guan Chenchen" : "Guan Chenchen, née le 25 septembre 2004, est une gymnaste artistique chinoise. Championne olympique à la poutre en 2020, elle compte également à son palmarès un titre de championne du monde par équipes en 2022 et deux médailles d'argent aux Championnats d'Asie (2019 et 2022).",
        "Li Wenwen" : "Li Wenwen est une haltérophile chinoise née le 5 mars 2000 à Anshan. Championne olympique en +87 kg à Tokyo en 2020, elle est également l'actuelle championne du monde et d'Asie. Son palmarès est impressionnant : elle détient les records du monde du snatch (148 kg), du clean & jerk (187 kg) et du total (335 kg).",
        "Wang Yilyu" : "Wang Yilyu, né le 8 novembre 1994, est un joueur de badminton chinois. Spécialisé en double mixte avec Huang Dongping, il est champion olympique 2020 et triple champion du monde (2018, 2019 et 2021). Il compte également à son palmarès deux titres de champion d'Asie (2018 et 2019) et deux médailles d'argent aux Jeux asiatiques (2018 et 2022).",
    
        //Corée du Sud
        "Lee Da-bin" : "Née le 7 décembre 1996, Lee Da-bin est une athlète sud-coréenne spécialiste du taekwondo. Championne du monde en 2019 et médaillée d'argent aux Jeux olympiques de Tokyo 2020 et aux Championnats du monde 2022, elle a également remporté deux titres aux Jeux asiatiques (2014 et 2018).",
        "Yoon Ji-su" : "Née le 24 janvier 1993 à Busan, Yoon Ji-su est une escrimeuse sud-coréenne spécialiste du sabre. Sacrée championne d'Asie à deux reprises en individuel (2012 et 2019) et quatre fois par équipes (2012, 2013, 2015 et 2019), elle a également remporté la médaille de bronze par équipes aux Jeux olympiques de Tokyo en 2021.",
        "Kim Je-deok" : "Kim Je-deok est un archer sud-coréen né le 12 avril 2004 à Séoul. Double champion olympique en 2020 à Tokyo, il a remporté l'or par équipe masculine et mixte. Il est également champion du monde par équipe masculine en 2021.",
    
        //Émirats arabes unis
        "" : "",
        "" : "",
        "" : "",
    
        //Hong Kong
        "" : "",
        "" : "",
        "" : "",
    
        //Inde
        "Neeraj Chopra" : "Néeraj Chopra, athlète indien spécialiste du lancer du javelot, est né le 24 décembre 1997. Il est champion olympique (2021), champion du monde (2023), champion d'Asie (2017), champion du Commonwealth (2018) et vainqueur des Jeux asiatiques (2018). Il a remporté les cinq titres majeurs auxquels peut postuler un athlète d'Inde.",
        "Saikhom Mirabai Chanu" : "Née en 1994 dans le Manipur en Inde, Saikhom Mirabai Chanu est une haltérophile de talent qui a marqué l'histoire de son pays. Sacrée championne du monde en 2017 et médaillée d'argent aux Jeux olympiques de Tokyo 2020 dans la catégorie des moins de 49 kg, elle est devenue une inspiration pour la nouvelle génération d'athlètes indiens.",
        "Pusarla Venkata Sindhu" : "Née en 1995 à Hyderabad, Pusarla Venkata Sindhu est une joueuse de badminton indienne considérée comme l'une des meilleures au monde. Son palmarès est impressionnant avec une médaille d'argent aux Jeux olympiques de Rio en 2016, une médaille de bronze à Tokyo en 2020 et un titre de championne du monde en 2019. Elle a également remporté de nombreux autres titres sur le circuit BWF, faisant d'elle une véritable légende du badminton indien.",
    
        //Iran
        "Javad Foroughi" : "Javad Foroughi, né le 11 septembre 1979 à Dehloran en Iran, est un tireur sportif. Champion olympique en 2020 à Tokyo, il devient à 41 ans le médaillé olympique iranien le plus âgé de l'histoire. Son palmarès inclut également une médaille de bronze aux Championnats d'Asie de tir en 2019.",
        "Mohammad Reza Geraei" : "Mohammad Reza Geraei, né le 25 juillet 1996 à Chiraz, est un lutteur gréco-romain iranien. Il a remporté la médaille d'or aux Jeux olympiques de Tokyo 2020 dans la catégorie des 67 kg, ainsi que deux titres de champion du monde en 2021 et 2023. Il est également champion d'Asie en 2022. Son palmarès exceptionnel fait de lui l'un des meilleurs lutteurs gréco-romains de sa génération.",
        "Sajjad Ganjzadeh" : "Sajjad Ganjzadeh, né le 4 janvier 1992 à Téhéran, est un karatéka iranien spécialiste du kumite (+84kg). Il est triple champion du monde par équipe (2014, 2016, 2018) et champion du monde individuel en 2016. Il a également remporté la médaille d'or aux Jeux olympiques de Tokyo 2020, devenant ainsi le premier champion olympique iranien de karaté.",
    
        //Japon
        "Shohei Ōno" : "Né le 3 février 1992 à Yamaguchi, Shohei Ōno est un judoka japonais évoluant dans la catégorie des moins de 73 kg. Considéré comme l'un des meilleurs judokas de l'histoire, il possède un palmarès exceptionnel avec 3 titres de champion du monde (2015, 2017, 2019), 2 titres olympiques (2016, 2020) et 7 titres de champion du Grand Slam. Il est également invaincu en compétition internationale depuis 2015.",
        "Yuto Horigome" : "Né à Tokyo en 1999, Yuto Horigome est un skateur professionnel japonais. Considéré comme l'un des meilleurs skateurs du monde, il a remporté de nombreuses compétitions prestigieuses dont la SLS World Championship en 2018 et 2021, et surtout la médaille d'or aux Jeux olympiques de Tokyo en 2020, devenant ainsi le premier champion olympique de l'histoire en skateboard.",
        "Jun Mizutani" : "Jun Mizutani, né le 9 juin 1989, est un pongiste japonais retraité. Il est l'un des joueurs les plus décorés de l'histoire du tennis de table, avec deux médailles d'or olympiques (en double mixte en 2016 et 2020) et une médaille d'argent (en simple en 2016). Il a également remporté deux titres de champion du monde (en simple en 2015 et en double en 2017) et six titres de champion d'Asie. Mizutani est connu pour son style de jeu spectaculaire et offensif, et il est considéré comme l'un des meilleurs joueurs de tennis de table de tous les temps.",
    
        //Kazakhstan
        "Yeldos Smetov" : "Né le 9 septembre 1992 au Kazakhstan, Yeldos Smetov est un judoka évoluant dans la catégorie des -60kg. Son palmarès est riche de plusieurs médailles dont l'argent aux Jeux Olympiques de 2016 à Rio, l'or aux Championnats du Monde 2015 et le bronze aux Championnats du Monde 2019 et 2022.",
        "Zulfiya Chinshanlo" : "Née le 25 juillet 1993 à Almaty, Zulfiya Chinshanlo est une haltérophile kazakhe d'origine chinoise. Triple championne du monde et médaillée de bronze olympique en 2012 et 2020, elle a remporté l'or aux Jeux olympiques de la Jeunesse en 2010 et compte de nombreux autres titres à son palmarès.",
        "Igor Son" : "Né le 16 novembre 1998 à Ushtobe au Kazakhstan, Igor Son est un haltérophile kazakh. Il a remporté la médaille de bronze aux Jeux olympiques d'été de 2020 dans la catégorie des moins de 61 kg. Son palmarès comprend également une médaille d'argent aux Championnats du monde d'haltérophilie de 2019 et une médaille d'or aux Championnats d'Asie d'haltérophilie de 2020.",
    
        //Liban
        "" : "",
        "" : "",
        "" : "",
    
        //Pakistan
        "" : "",
        "" : "",
        "" : "",
    
        //Philippines
        "Hidilyn Diaz" : "Née le 20 février 1991 à Zamboanga, Hidilyn Diaz est une haltérophile philippine qui a marqué l'histoire de son pays en devenant la première athlète, homme ou femme confondu, à remporter une médaille d'or olympique. Son palmarès est impressionnant avec une médaille d'argent aux Jeux olympiques de Rio en 2016 et l'or à Tokyo en 2020, battant au passage deux records olympiques.",
        "Carlo Paalam" : "Carlo Paalam, né le 16 juillet 1998, est un boxeur amateur philippin. Il a remporté la médaille d'argent aux Jeux olympiques de Tokyo 2020 dans la catégorie des poids mouches. Son palmarès comprend également une médaille de bronze aux Jeux asiatiques de 2018 et une médaille d'or aux Jeux d'Asie du Sud-Est de 2019.",
        "Nesthy Petecio" : "Nesthy Petecio, née le 11 avril 1992, est une boxeuse philippine. Elle a remporté la médaille d'argent aux Jeux olympiques de Tokyo 2020 dans la catégorie des poids plumes, devenant ainsi la première femme philippine à remporter une médaille olympique en boxe. Parmi ses autres titres, elle compte une médaille d'or aux Championnats du monde 2019 et une médaille d'or aux Jeux d'Asie du Sud-Est 2019.",
    
        //Qatar
        "Fares El-Bakh" : "Fares El-Bakh, né le 4 juin 1998 en Égypte, est un haltérophile qatarien. Champion olympique en 2020 et champion du monde en 2021, il est également médaillé d'argent aux Championnats du monde 2019 et 2022. Son palmarès compte aussi deux titres de champion d'Asie (2019 et 2020) et six titres de champion junior du monde.",
        "Mutaz Essa Barshim" : "Mutaz Essa Barshim, né le 24 juin 1991 à Doha, est un athlète qatari spécialiste du saut en hauteur. Il est champion olympique en 2020 et triple champion du monde (2017, 2019 et 2022). Il a également remporté deux médailles d'argent aux Jeux olympiques (2012 et 2016) et une médaille de bronze aux championnats du monde en salle (2014). Son record personnel est de 2,43 m, réalisé en 2013, ce qui le place deuxième meilleur performeur de tous les temps derrière Javier Sotomayor.",
        "Cherif Younousse" : "Né le 22 mai 1995 à Dakar, Cherif Younousse est un joueur de beach-volley qatarien. Il a notamment remporté la médaille d'or aux Jeux asiatiques de 2018 et la médaille de bronze aux Jeux olympiques de 2020 avec son coéquipier Ahmed Tijan. Younousse est considéré comme l'un des meilleurs joueurs de beach-volley du monde.",
    
        //Singapour
        "" : "",
        "" : "",
        "" : "",
    
        //Taipei chinois
        "Kuo Hsing-chun" : "Née en 1993 à Yilan, Taïwan, Kuo Hsing-chun est une haltérophile aux multiples talents. Déjà médaillée de bronze aux Jeux olympiques de Rio en 2016, elle a atteint le sommet en 2020 à Tokyo en remportant l'or dans la catégorie des 59 kg. Son palmarès impressionnant compte également cinq titres de championne du monde, deux titres de championne d'Universiade et un titre de championne d'Asie.",
        "Lo Chia-ling" : "Lo Chia-ling est une taekwondoïste taïwanaise née le 8 octobre 2001. Médaillée de bronze aux Jeux olympiques de Tokyo 2020 en moins de 57 kg, elle a également remporté l'argent aux Championnats du monde 2022. Son palmarès compte aussi deux titres de championne du monde juniors (2016 et 2018).",
        "Wang Chi-lin" : "Wang Chi-lin est un joueur de badminton taïwanais né le 18 janvier 1995 à Taipei. Spécialiste du double hommes, il est champion olympique en 2020 avec Lee Yang et a remporté plusieurs titres sur le BWF World Tour. Son palmarès inclut également une médaille de bronze aux Championnats du monde 2018 et aux Jeux asiatiques de 2018.",
    
        //Viêt Nam
        "Quách Thị Lan" : "Née le 18 octobre 1995, Quách Thị Lan est une athlète vietnamienne spécialiste du 400m et du 400m haies. Son palmarès est impressionnant : elle a remporté deux médailles d'or aux Jeux asiatiques (2018 et 2019), deux médailles d'argent aux Championnats d'Asie (2017 et 2019) et plusieurs médailles aux Jeux d'Asie du Sud-Est. En 2019, elle a également participé aux Championnats du monde d'athlétisme.",
        "Thạch Kim Tuấn" : "Né le 15 janvier 1994, Thạch Kim Tuấn est un haltérophile vietnamien.Il s'est illustré dès son jeune âge en remportant l'or aux Jeux olympiques de la jeunesse d'été de 2010. Sa carrière est ponctuée de succès avec des titres de champion du monde et d'Asie, ainsi que des médailles aux Jeux olympiques et aux Jeux d'Asie du Sud-Est.",
        "Nguyễn Thị Ánh Viên" : "Née en 1996 à Cần Thơ, Nguyễn Thị Ánh Viên est une nageuse vietnamienne spécialiste du 4 nages. Elle est considérée comme l'une des meilleures athlètes de son pays, avec un palmarès impressionnant: 8 médailles d'or aux SEA Games 2015, 2 médailles d'argent aux Championnats d'Asie 2014 et une participation aux Jeux olympiques de 2016. En 2013 et 2014, elle a été élue Sportive vietnamienne de l'année.",
  
  
  };



//nsm tout ces pays où ya pas les infos
