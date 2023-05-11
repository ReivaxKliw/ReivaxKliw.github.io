//déclaration des variables utilisées dans le code


// __________________________________
const studyFeesAndInsurance = 1.2555 // 25,55% taxe et frais :etude de sol, bureau de controle, thermique, SPS, assurance décennale et RC  
// __________________________________
const inputCostGroundByRegion= 65; //prix fixé à 65 e pour l'instant. Il faudra aprés faire une demande de la région de construction et prendre un prix moyen de la région
// constante de coût VRD
     const ratioBuilding1 = 94; //94 euros/m² de construit si le ration (voirie+Bâtiment)/terrain est <65%
     const ratioBuilding2 = 78.5 ; //78.5 euros/m² de construit si le ratio (voirie+Bâtiment)/terrain est >65% 
     const ratioRoadAndUtilities1 = 95.5; //95.5 euros/m²  si le ratio (voirie+Bâtiment)/terrain est <65% 
     const ratioRoadAndUtilities2 = 55.5; //55.5 euros/m²  si le ratio (voirie+Bâtiment)/terrain est >65% 
     const ratioPlantations1 = 9.75; //9.75 euros/m² pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est <65% 
     const ratioPlantations2 = 10.80; //10.80 euros/m²  pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est >65% 
     const ratioFencing1 = 4.75; //4.75 euros/m²  pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est <65% 
     const ratioFencing2 = 3.25; //3.25 euros/m²  pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est >65% const costRoadAndUtilities = 87;//ratio coût des VRD entreprise uniquement pour la cour  hors marge constructeur

// ratio du calcul du devis bâtiment HORS TERRAIN
// constante de coût Hall
     // constante pour méthode m²
          const costHallCompany = 255.89;//ratio coût du hall entreprise de construction  hors marge constructeur
          const costHeightAbove7 = 14;//ratio coût par métre supplémentaire au dessus de 7 m à ajouter à costHallCompany
     // constante pour méthode annalysedecout
          const ratioFondationBlockHall = 1200 // 550e/u de fondation hors taxes hors marge
          const ratioConcreteWorkHall = 9 // 9e/m² de plancher construit pour le gros oeuvre hors taxes hors marge
          const ratioMetalFrameHall = 76 // 76e/m² de plancher construit pour la structure métallique hors taxes hors marge
          const ratioRoofHall = 52 // 52e/m² de plancher construit pour la couverture hors taxes hors marge
          const ratioSidingPanelSimpleHall = 60  // 60e/m² de façade construite pour le bardage standard hors taxes hors marge
          const ratioSidingPanelHighHall = 120  // 120e/m² de façade construite pour le bardage luxe hors taxes hors marge
          const ratioConcreteSlabHall = 30  // 30e/m² de dalle construit hors taxes hors marge
          const ratioRescueDoors = 2500  // 2500 e/u par porte de secours hors taxes hors marge
          const ratioElectricityHall = 22  // 22e/m² de plancher construit pour l'électricité hors taxes hors marge

// constante de coût Bureaux
     // constante pour méthode m²
          const costOfficesCompanyInsideOpenSpace = 710; //ratio coût des bureaux entreprise de construction intérieur et OpenSpace et Maitrise d'Oeuvre à 12% hors marge constructeur
          const costOfficesCompanyOutsideOpenSpace = 749.01; //ratio coût des bureaux entreprise de construction extérieur et OpenSpace et Maitrise d'Oeuvre à 12% hors marge constructeur
          const costOfficesCompanyInsidePartitioned = 830.07; //ratio coût des bureaux entreprise de construction intérieur et Cloisonnée et Maitrise d'Oeuvre à 12% hors marge constructeur
          const costOfficesCompanyOutsidePartitioned = 867.79; //ratio coût des bureaux entreprise de construction extérieur et Cloisonnée et Maitrise d'Oeuvre à 12% hors marge constructeur
     // constante pour méthode annalysedecout
          const ratioFondationBlockOffices = 1200 // 550e/u de fondation hors taxes hors marge
          const ratioConcreteWorkOffices = 55 // 55e/m² de plancher construit pour le gros oeuvre hors taxes hors marge
          const ratioMetalFrameOffices = 30 // 30e/m² de plancher construit pour la structure métalliquen hors taxes hors marge
          const ratioRoofOffices = 52 // 52e/m² de plancher construit oour la couverture hors taxes hors marge
          const ratioSidingPanelSimpleOffices = 60  // 60e/m² de façade construite pour le bardage standard hors taxes hors marge
          const ratioSidingPanelHighOffices = 150  // 150e/m² de façade construite pour le bardage luxe hors taxes hors marge
          const ratioConcreteSlabOffices = 36  // 36e/m² de plancher construit pour la dalle béton hors taxes hors marge
          const ratioDoorsAndWindowsOffices = 105  // 105e/m² de plancher construit pour les portes et  les fenâtre hors taxes hors marge
          const ratioElectricityOffices = 50  // 50e/m² de plancher construit pour l'électricité hors taxes hors marge
          const ratioPlumbingOffices = 45  // 45e/m² de plancher construit pour la plomberie hors taxes hors marge
          const ratioHotWaterHeatingOffices = 50  // 50e/m² de plancher construit pour le chauffage hors taxes hors marge
          const ratioAirConditionningOffices = 90  // 90e/m² de plancher construit pour l'air conditionnée hors taxes hors marge
          const ratioElectrityHeatingOffices = 40  // 40e/m² de plancher construit pour le chauffage par convecteur électrique hors taxes hors marge
          const ratioInteriorDesignOfficesWithOpenSPace = 300  // 300e/m² de plancher construit pour l'aménagement intérieur hors taxes hors marge avec Open Space, Show room, atelier….
          const ratioInteriorDesignOfficesWithoutOpenSPace = 450  // 450e/m² de plancher construit pour l'aménagement intérieur hors taxes hors marge sans Open Space, Show room, atelier….
      
 
// constante de coût SPECIFICITES
     const ratioSoilReinforcement = 19.87 ; // 20 e/m²  pour des colonnes réalisées sur l'ensemble du bâtiment à une moyenne de 7m
     const addedValueOverHeadCraneOnPoles = 120; // 126 euros/ml  sur la base d'un HEA 300(90kg/ml) passé en HEA 400(127,4kg/ml) à 3e du kg 
     //const addedValueOverHeadCraneRaceway = 285 ;// 285 euros par ml (HEA300 +carré plein 2,5x2,5) considéré à la charge du fournisseur de pont
     const addedValueOverHeadCraneFondation = 933; // 933 euros par plus value de fondations sous poteau de pont roulant
     const costDockShelter =11000; //euros par unité ( voir ratio 11000 de matériel quai et 4000 de Gros Oeuvre quai )
     const costconcreteWorkDockShelter = 4000; //euros par unité 
     const costSectionalDoors = 5000; //euros par unité 
     const costBlueRate = 5000;// coût d'un tarif bleu
     const costYellowRate = 10000;// coût d'un tarif jaune
     const costGreenRate = 15000;// coût d'un tarif vert 15000 Enedis (+ 45000 de transfo pour l'elctricien autre constante)
     const costGreenRateAddedValueElectricity = 45000;// coût du transfo à la charge du lot Electricité euros par unité 
     const ratioPartitionInsideSidingPanel = 90;// 90 e/m² pour cloison de division intérieure du hall 
     const ratioElectricHeatingHall = 4 //NON UTILISE // 4e/m² de plancher construit pour le chauffage electrique 
     const ratioGasHeatingHall = 9.22;// e/m² pour chauffage aérotherme gaz 
     const ratioFireNetworkHall = 5  // 5e/m² de plancher construit pour le réseau RIA 
     const costElevator = 35000;// Prix d'un ascenseur comprenant la cabine et la colonne 
     const addedValueStair = 20000;// Prix d'un escalier 
// ________________________________

// FONCTION
function functionBudget() {
     // _____________________________________________________________________________
     // TEXTE DES ERREURS

     const inputWorkersOfficesInside =  Number(document.getElementById("inputWorkersOfficesInside").value);
     const inputWorkersOfficesOutside =  Number(document.getElementById("inputWorkersOfficesOutside").value);
     const choiceBlueRate = document.getElementById('choiceBlueRate');
     const choiceYellowRate = document.getElementById('choiceYellowRate');
     const choiceGreenRate = document.getElementById('choiceGreenRate');
     
     // if (inputWorkersOfficesOutside==0 &&inputWorkersOfficesInside==0){
     //          alert("vous n'avez pas indiqué de données pour les locaux sociaux de votre projet, il faut des vestiaires pour le personnel hors administratif");
     //          event.stopPropagation();
     //      }
          // if (choiceBlueRate.checked===false && choiceYellowRate.checked===false && choiceGreenRate.checked===false){
     //     alert("vous n'avez pas indiqué la puissance de raccordement électrique de votre bâtiment");
     //     event.stopPropagation();
        // }     
     // 
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
     // _____________________________________________________________________________
// RECUPERATION DES DONNEES
     // Récupération Terrain________________________________________________________
          let choiceGroundOwner = document.getElementById("choiceGroundOwner").value;
          let choiceCostGround = document.getElementById("choiceCostGround").value;
          let inputCostGround = document.getElementById("inputCostGround").value;
          let choiceAreaGround = document.getElementById("choiceAreaGround").value;
          let inputAreaGround = document.getElementById("inputAreaGround").value;

     
     // Récupération Hall du Bâtiment_____
          const inputAreaHall= Number(document.getElementById("inputAreaHall").value);

     // Récupération hauteur bâtiment__________________________________________     
          const inputHeightHallUseful = Number(document.getElementById("inputHeightHallUseful").value);
     
     // Récupération bureaux du Bâtiment________________
          // récupération bureaux intérieurs
               const choiceOfficesInside = document.getElementById('choiceOfficesInside').value;
               const inputClercksOfficesInside =  Number(document.getElementById("inputClercksOfficesInside").value);
               const choiceOpenspaceOfficesInside = document.getElementById('choiceOpenspaceOfficesInside').value;
               const choiceShowroomInside = document.getElementById('choiceShowroomInside').value;
               let inputAreaShowroomInside = Number(document.getElementById('inputAreaShowroomInside').value);
               let choiceSocialRoomOfficesInside = document.getElementById('choiceSocialRoomOfficesInside').value;
               // const inputWorkersOfficesInside =  Number(document.getElementById("inputWorkersOfficesInside").value);déclarée dans le texte des erreurs
          // récupération bureaux extérieurs
               const choiceOfficesOutside = document.getElementById('choiceOfficesOutside').value;
               const inputClercksOfficesOutside =  Number(document.getElementById("inputClercksOfficesOutside").value);
               const choiceOpenspaceOfficesOutside = document.getElementById('choiceOpenspaceOfficesOutside').value;
               const choiceShowroomOutside = document.getElementById('choiceShowroomOutside').value;
               let inputAreaShowroomOutside = Number(document.getElementById('inputAreaShowroomOutside').value);
               let choiceSocialRoomOfficesOutside = document.getElementById('choiceSocialRoomOfficesOutside').value;
               // const inputWorkersOfficesOutside > récupéré dans texte des erreurs

     // Récupération  Spécificités____________________________________________________
          // Récupération renfort de sol
               const choiceSoilReinforcement = document.getElementById('choiceSoilReinforcement').value;
          
          // Récupération  cloison intérieure
               const choicePartitionInside = document.getElementById('choicePartitionInside').value;
               const inputNumberPartitionInside = document.getElementById("inputNumberPartitionInside").value;  
          
          // Récupération  Pont roulant
               const choiceOverHeadCrane = document.getElementById('choiceOverHeadCrane').value;
               const inputNumberOverHeadCrane = document.getElementById("inputNumberOverHeadCrane").value;
          
          // Récupération Niveleur de quais
               const choiceDockShelter = document.getElementById('choiceDockShelter').value;
               const inputNumberDockShelter = document.getElementById("inputNumberDockShelter").value; 
          
          // Récupération Porte Sectionnelle de Plain-Pied
               const choiceFloorSectionalDoor = document.getElementById('choiceFloorSectionalDoor').value;
               let inputNumberFloorSectionalDoor = document.getElementById("inputNumberFloorSectionalDoor").value; 

          // Récupération Stockage extérieur
               let choiceStorageOutdoor = document.getElementById("choiceStorageOutdoor").value; 
               let inputAreaRoadAndUtilitiesStorageOutdoor = Number(document.getElementById("inputAreaRoadAndUtilitiesStorageOutdoor").value);

          // Récupération  Raccordement Electricté
               //const choiceBlueRate = document.getElementById('choiceBlueRate').value;déclarée dans le texte des erreures
               //const choiceYellowRate = document.getElementById('choiceYellowRate').value;déclarée dans le texte des erreures
               //const choiceGreenRate = document.getElementById('choiceGreenRate').value;déclarée dans le texte des erreures
               let inputBlueRate = document.getElementById("inputBlueRate").value; 
               let inputYellowRate = document.getElementById("inputYellowRate").value; 
          
          // Récupération  Chauffage dans le Hall 
               const choiceHeatingHall = document.getElementById('choiceHeatingHall').value;
            
          // Récupération  Ria
               const choiceFireNetworkHall = document.getElementById('choiceFireNetworkHall').value;

          // Récupération   surface avec ICPE
               const choiceIcpe = document.getElementById('choiceIcpe').value;
               
          // Récupération  chauffage des bureaux
               const choiceHeatingOffices = document.getElementById('choiceHeatingOffices').value;
               
          // Récupération Bardage luxe pour les bureaux
               const choicePanelOffices = document.getElementById('choicePanelOffices').value;
          
          // Récupération Ascenseur
               const choiceElevator = document.getElementById('choiceElevator').value;

// CALCULS CARACTERISTIQUES BATIMENTS
     
     // Calcul HAUTEUR HALL
          // calcul HALL méthode 1 budget.js au m²
               //pas de calcul>récupéré
          //calcul HALL méthode analysedecout.js pour comparaison
               let heightHallTotal = inputHeightHallUseful+1.80; //Pannes 0.3+bac acier 0.2+laine de roche 0.2+ acrotére 0.5 + pente 3% pour distance 20m (pris arbitrairement)
          //comparaison des deux méthodes
          console.log(inputHeightHallUseful);//c'est la hauteur intérieure
          console.log(heightHallTotal);//c'est la hauteur totale utile pour m² bardage


     // Calcul SURFACE HALL
          // calcul SURFACE HALL méthode 1 budget.js au m²
               // calculer aprés surface bureaux car pour l'instant nous n'avons que la surface de stockage souhaitée et il faut savoir si les bureaux sont inside ou outside pour calculer la surface de la box (areaBox ou areaBuilding)
          //calculs HALL méthode analysedecout.js pour comparaison
               // la surface sera calculer aprés surface bureaux car pour l'instant nous n'avons que la surface de stockage souhaitée et il faut savoir si les bureaux sont inside ou outside pour calculer la surface de la box (areaBox ou areaBuilding)
          // Calcul Massif de fondations Hall
               // la surface sera calculer aprés surface bureaux car pour l'instant nous n'avons que la surface de stockage souhaitée et il faut savoir si les bureaux sont inside ou outside pour calculer la surface de la box (areaBox ou areaBuilding)
     // Calcul BUREAUX
          // calcul BUREAUX méthode 1 budget.js au m²
               // Calcul vérification Show room intérieur ou extérieur
                    // Calcul Vérification du choix de showroom Intérieur
                    let answer41 = [0,inputAreaShowroomInside];
                    let areaShowroomInside;
                    switch(choiceShowroomInside){
                    case'no':
                    areaShowroomInside= answer41[0];
                    break;
                    case'yes':
                    areaShowroomInside= answer41[1];
                    break;
                    };
                    // Calcul Vérification du choix de showroom Extérieur
                    let answer42 = [0,inputAreaShowroomOutside];
                    let areaShowroomOutside;
                    switch(choiceShowroomOutside){
                         case'no':
                         areaShowroomOutside= answer42[0];
                         break;
                         case'yes':
                         areaShowroomOutside= answer42[1];
                         break;
                    };
               console.log(areaShowroomInside);
               console.log(areaShowroomOutside);

               //Calcul de la surface des bureaux administratifs
               let officesAdministrationInsideDimensions ;
               let officesAdministrationOutsideDimensions;

                    // Calcul bureaux intérieurs Openspace 
                         if (choiceOfficesInside==="yes"){
                         if (choiceOpenspaceOfficesInside==="yes"){
                              officesAdministrationInsideDimensions = ((inputClercksOfficesInside-3)*10+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 10m² par personne pour les open space mais 3 bureaux fermés de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
                         }
                    // Calcul bureaux intérieurs Cloisonnés
                         if (choiceOpenspaceOfficesInside==="no"){
                              officesAdministrationInsideDimensions = ((inputClercksOfficesInside-3)*15+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 15m² par personne pour les bureaux fermés mais 3 bureaux de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
                         }
                         }
                         else{
                              officesAdministrationInsideDimensions = 0;
                         }
                    // Calcul bureaux extérieurs Openspace 
                         if (choiceOfficesOutside==="yes"){
                         if (choiceOpenspaceOfficesOutside==="yes"){
                              officesAdministrationOutsideDimensions = ((inputClercksOfficesOutside-3)*10+(3)*20)*1.5;// Calcul calcul de dimensionnement des bureaux basé sur 10m² par personne pour les open space mais 3 bureaux fermés de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
                         }
                    // Calcul bureaux extérieurs Cloisonnés
                         else if (choiceOpenspaceOfficesOutside==="no"){
                              officesAdministrationOutsideDimensions = ((inputClercksOfficesOutside-3)*15+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 15m² par personne pour les bureaux fermés mais 3 bureaux de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
                         }
                         }
                         else{
                              officesAdministrationOutsideDimensions = 0;
                         };
                    console.log(officesAdministrationInsideDimensions);
                    console.log(officesAdministrationOutsideDimensions);

                    // Calcul lOCAUX SOCIAUX 
                    let officesSocialDimensionsInside;
                    let officesSocialDimensionsOutside;

                         if (choiceSocialRoomOfficesInside ==="yes"){
                         officesSocialDimensionsInside = (inputWorkersOfficesInside)*10;//les locaux sociaux nombre de travailleurs * 10m²;
                         }else{
                         officesSocialDimensionsInside =0;     
                         };
                         if (choiceSocialRoomOfficesOutside ==="yes"){
                         officesSocialDimensionsOutside = (inputWorkersOfficesOutside)*10;//les locaux sociaux nombre de travailleurs * 10m²;
                         }else{
                         officesSocialDimensionsOutside =0;     
                         };
                    console.log(officesSocialDimensionsInside);
                    console.log(officesSocialDimensionsOutside);

                    //Calcul BUREAUX surface TOTALE
                    let officesDimensionsInside;
                    let officesDimensionsOutside;

                         officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside+areaShowroomInside);
                         officesDimensionsOutside=(officesAdministrationOutsideDimensions+officesSocialDimensionsOutside+areaShowroomOutside);

                    console.log(officesDimensionsInside);
                    console.log(officesDimensionsOutside);
                    //Calcul BUREAUX étage ou pas
                    // Prise en compte de bureaux réalisé en étage si leur surface est supérieure à 200 m² et qu'ils sont positionnés à l'intérieur et augmentation de la variable areaBuilding
                    let areaOfficesGroundInside;// surface au sol des bureaux intérieurs
                    let numberStairInside;
                    let areaOfficesGroundOutside;// surface au sol des bureaux extérieurs
                    let numberStairOutside;
                    let numberStair;// nombre d'escalier
                         
                         if (officesDimensionsInside <= 200){ 
                              areaOfficesGroundInside = officesDimensionsInside;
                              numberStairInside=0;
                         }
                         else if (officesDimensionsInside > 200){
                              areaOfficesGroundInside = officesDimensionsInside/2;
                              numberStairInside=1;
                         }
                         if (officesDimensionsOutside <= 200){ 
                              areaOfficesGroundOutside = officesDimensionsOutside;
                              numberStairOutside=0;
                         }
                         else if (officesDimensionsOutside > 200){
                              areaOfficesGroundOutside = officesDimensionsOutside/2;
                              numberStairOutside=1;
                         }

                         numberStair = numberStairInside+numberStairOutside

                    console.log(areaOfficesGroundInside);
                    console.log(numberStairInside);
                    console.log(areaOfficesGroundOutside);
                    console.log(numberStairOutside);
                    console.log(numberStair);

          // calcul BUREAUX méthode analysedecout.js pour comparaison
               // dans analysedecout.js on rentre la surface des bureaux puisque nous avons les plans.Ici, je vais utiliser les calculs fait dans calcul m² car je le déduis du nombre de personne. Soit officesDimensionsInside et officesDimensionsOutside, je vais alors leur appliquer le même calcul que dans analyse pour permettre d'avoir la largeur et longueur des bureaux. Les constantes ne sont alors plus des inputconstante puisqu'elles sont issues de calcul
               // Calcul Bureaux Intérieurs
                    let lengthOfficesInside;
                    let widthOfficesInside;
                    let areaOfficesFloorInside;
                    
                    lengthOfficesInside=Math.round(Math.sqrt(areaOfficesGroundInside)); 
                    widthOfficesInside=Math.round(Math.sqrt(areaOfficesGroundInside));
                    areaOfficesFloorInside=officesDimensionsInside-areaOfficesGroundInside;
               
               console.log(areaOfficesGroundInside);
               console.log(lengthOfficesInside);
               console.log(widthOfficesInside);
               console.log(officesDimensionsInside);
               console.log(areaOfficesFloorInside);
               
               // Calcul  hauteur des bureaux intérieurs
                    let heightOfficesInside;
                    if (areaOfficesGroundInside==0 && areaOfficesFloorInside==0) {
                         heightOfficesInside = 0;
                    }
                    if (areaOfficesGroundInside>0 && areaOfficesFloorInside==0){
                         heightOfficesInside = 4.5;
                    }
                    if (areaOfficesGroundInside>0 &&areaOfficesFloorInside>0){
                         heightOfficesInside = inputHeightHallUseful;
                    }
               console.log(heightOfficesInside);
               
               // Calcul Bureaux Extérieurs
                    let lengthOfficesOutside;
                    let widthOfficesOutside;
                    let areaOfficesFloorOutside;
                    
                    lengthOfficesOutside=Math.round(Math.sqrt(areaOfficesGroundOutside)); 
                    widthOfficesOutside=Math.round(Math.sqrt(areaOfficesGroundOutside));
                    areaOfficesFloorOutside=officesDimensionsOutside-areaOfficesGroundOutside;
               
               console.log(areaOfficesGroundOutside);
               console.log(lengthOfficesOutside);
               console.log(widthOfficesOutside);
               console.log(officesDimensionsOutside);
               console.log(areaOfficesFloorOutside);
               
               // Calcul  hauteur des bureaux Extérieurs
                    let heightOfficesOutside;
                    if (areaOfficesGroundOutside==0 && areaOfficesFloorOutside==0) {
                         heightOfficesOutside = 0;
                    }
                    if (areaOfficesGroundOutside>0 && areaOfficesFloorOutside==0){
                         heightOfficesOutside = 4.5;
                    }
                    if (areaOfficesGroundOutside>0 &&areaOfficesFloorOutside>0){
                         heightOfficesOutside = 2*4.5;
                    }
               console.log(heightOfficesOutside);
               // Calcul  nombre d'escalier
                    let numberStairInside2;
                    let numberStairOutside2;
                    let numberStair2;
                    heightOfficesInside>4.5?numberStairInside2=1:numberStairInside2=0;
                    heightOfficesOutside>4.5?numberStairOutside2=1:numberStairOutside2=0;
                    numberStair2=numberStairInside2+numberStairOutside2
               console.log(numberStair2);
               //Calcul Massif de fondations des bureaux
                    let numberFondationBlockOffices;

                    if (widthOfficesInside/30<1 && widthOfficesOutside/30<1){
                    numberFondationBlockOffices= (Math.ceil((lengthOfficesInside/6)+1))+(Math.ceil(widthOfficesInside/6)*2)+(Math.ceil((lengthOfficesOutside/6)+1))+(Math.ceil(widthOfficesOutside/6)*2);
                    } 
                    if (widthOfficesInside/30>1 && widthOfficesOutside/30<1){
                    numberFondationBlockOffices= Math.ceil((lengthOfficesInside/6)+1)*Math.ceil(widthOfficesInside/30)+Math.ceil((widthOfficesInside/6)*2) +(Math.ceil((lengthOfficesOutside/6)+1))+(Math.ceil(widthOfficesOutside/6)*2);
                    } 
                    if (widthOfficesInside/30<1 && widthOfficesOutside/30>1){
                    numberFondationBlockOffices= (Math.ceil((lengthOfficesInside/6)+1))+(Math.ceil(widthOfficesInside/6)*2)+Math.ceil((lengthOfficesOutside/6)+1)*Math.ceil(widthOfficesOutside/30)+Math.ceil((widthOfficesOutside/6)*2);
                    } 
                    else{
                    numberFondationBlockOffices= Math.ceil((lengthOfficesInside/6)+1)*Math.ceil(widthOfficesInside/30)+Math.ceil((widthOfficesInside/6)*2) + Math.ceil((lengthOfficesOutside/6)+1)*Math.ceil(widthOfficesOutside/30)+Math.ceil((widthOfficesOutside/6)*2);    
                    }
           console.log(numberFondationBlockOffices);
   
               
          //comparaison des deux méthodes 
          // je déduis des données différentes donc je ne peux pas les comparer
               
     // Calcul de la surface sol totale et surface box;
               let areaBuilding; // surface au sol avec les bureaux donc si les bureaux sont extérieurs plus de surface // nécessaire pour VRD
               let areaBox;// surface de la boite si bur intérieurs = ils sont compris dans la surface de la boite // necessaire pour structure bâtiment
               let areaHall;// surface de la zone de travail //necessaire pour l'équipement
                    areaHall =inputAreaHall;
                    areaBox= areaHall+areaOfficesGroundInside;
                    areaBuilding = areaBox+areaOfficesGroundOutside;
                              
          console.log(areaHall);
          console.log(areaOfficesGroundInside);
          console.log(areaBox);
          console.log(areaOfficesGroundOutside);
          console.log(areaBuilding);

     // Calcul Massif de fondations Hall
          let numberFondationBlockHall;
          let widthHall= Math.sqrt(areaBox);
          let lengthHall= Math.sqrt(areaBox);

          if (widthHall/30<1){
               numberFondationBlockHall= (Math.ceil((lengthHall/6)+1)*2)+(Math.ceil(widthHall/6)*2);
          }
          else{
               numberFondationBlockHall= Math.ceil((lengthHall/6)+1)*Math.ceil(widthHall/30+1)+Math.ceil((widthHall/6)*2);
          };
     console.log(numberFondationBlockHall);


     // Calcul Spécificités
          // Calcul renfort de sol
          
          // Calcul  cloison intérieure
          
          // Calcul  Pont roulant
          // calcul du nombre de poteaux renforcés 
          const polesUnderOverHeadCrane = (Math.ceil((((Math.sqrt(areaBox))/6)+1)*2));
          //const lengthRaceway = ((Math.sqrt(areaBox))*2); considéré comme à la charge du fournisseur de pont

          
          // Calcul Niveleur de quais
               let areaRoadAndUtilitiesDockShelter;
               inputNumberDockShelter>0?areaRoadAndUtilitiesDockShelter=Number(inputNumberDockShelter*(5*35+20*5)) :areaRoadAndUtilitiesDockShelter=0;// 5*35+20*5 c'est la surface de VRD nécessaire en cas de quai soit 5 m de large par 30 m de long devant le quai + 20 x5 nécessaire pour la mise à quai
          console.log(areaRoadAndUtilitiesDockShelter);

          // Calcul Porte Sectionnelle de Plain-Pied
               let areaRoadAndUtilitiesFloorSectionelDoor;
               inputNumberFloorSectionalDoor>0?areaRoadAndUtilitiesFloorSectionelDoor =Number(inputNumberFloorSectionalDoor*(5*20)):areaRoadAndUtilitiesFloorSectionelDoor=0;// 5*20 c'est la surface de VRD nécessaire en cas de porte de plain pied soit 5 m de large par 20 m de long devant la porte / pas de surface supplémentaire comptée pour la mise à la porte car souvent couplée avec les quais et donc utilisation de cette surface
          console.log(areaRoadAndUtilitiesFloorSectionelDoor);

          // Calcul Stockage extérieur
          // déclarée dans la récupération des données
          inputAreaRoadAndUtilitiesStorageOutdoor === ""?inputAreaRoadAndUtilitiesStorageOutdoor=0:inputAreaRoadAndUtilitiesStorageOutdoor;

          console.log(inputAreaRoadAndUtilitiesStorageOutdoor);

          // Calcul  Raccordement Electricté

          // Calcul  Chauffage dans le Hall 
          
          // Calcul  Ria

          // Calcul Open Space dans les bureaux

          // Calcul Bardage luxe pour les bureaux ????????????
          
          // Calcul Ascenseur ????????????

          // Calcul   surface avec ICPE
          // fait dans le terrain car j'ai besoin de connaître areaGround


     // Calcul VRD
          //Si on connait le terrain > inputAreaGround définie au début de la fonction

          // Calcul  Si on ne connait pas le terrain :Calcul du terrain necessaire lorsque le choix non a été fait quand on ne connait pas son terrain , peut  être fait aprés détermination des variables areaBuilding / officesDimensionsOutside et inside / areaRoadAndUtilities est calculée
          // calcul VRD m²
               let areaRoadAndUtilities = areaRoadAndUtilitiesDockShelter+areaRoadAndUtilitiesFloorSectionelDoor+inputAreaRoadAndUtilitiesStorageOutdoor+Number((inputClercksOfficesInside+inputClercksOfficesOutside+inputWorkersOfficesInside+inputWorkersOfficesOutside)*(2.5*8*2));//calcul surface VRD selon nombre de quai de porte de plain pied, de surface de cour de stockage et du nombre d'employés, // multiplie par 2 la surface de parking car il faut la surface de parking et la surface de la route d'accés au parking

          //calcul VRD méthode analysedecout.js pour comparaison
          // ne sert à rien peut être supprimé méthode de calcul identique > la seule différenciation se fait sur la surface de bureaux mais la surface des bureaux dans les deux cas est déduite du nombre de personnes 

               let areaOfficesInside= officesDimensionsInside;
               let areaOfficesOutside= officesDimensionsOutside;

               let areaRoadAndUtilities2 = areaRoadAndUtilitiesDockShelter+areaRoadAndUtilitiesFloorSectionelDoor+inputAreaRoadAndUtilitiesStorageOutdoor+(((areaOfficesInside+areaOfficesOutside)/15)*(2.5*8*2));//calcul surface VRD selon nombre de quai de porte de plain pied, de surface de cour de stockage et du nombre d'employés, // multiplie par 2 la surface de parking car il faut la surface de parking et la surface de la route d'accés au parking
          //comparaison des deux méthodes
          console.log(areaRoadAndUtilities);
          console.log(areaRoadAndUtilities2);

     // Calcul TERRAIN
          //Calcul TERRAIN méthode 1 budget.js au m²
               let areaGround;

               switch(choiceGroundOwner){
                    case'yes':
                    areaGround =inputAreaGround;
                    break;
                    case'no':
                    areaGround = ((areaBuilding+areaRoadAndUtilities)*1.2);
                    break;
               };
          // calcul TERRAIN méthode analysedecout.js pour comparaison
 // ne sert à rien méthode de calcul identique > la seule différenciation se fait sur la surface de bureaux mais la surface des bureaux dans les deux cas est déduite du nombre de personnes 
          let areaGround2;
               switch(choiceAreaGround){
                    case'yes':
                    areaGround2 = inputAreaGround;
                    break;
                    case'no':
                    areaGround2 =((areaBuilding+areaRoadAndUtilities)*1.2);
                    break;
               };
          //comparaison des deux méthodes
          console.log(areaGround);
          console.log(areaGround2);
          

     //Calcul TERRAIN dans le cas ICPE

     const areaIcpe = Math.round((Math.pow(((Math.sqrt(areaBox))+40),2)));
     let additionalGroundAreaIcpe;

     switch(choiceIcpe){
          case'no':
          additionalGroundAreaIcpe= 0;
          // console.log(additionalGroundAreaIcpe);// vérification de la valeur de terrain supplémentaire nécessaire
          break;
          case'yes':
          areaGround>areaIcpe?additionalGroundAreaIcpe=0:additionalGroundAreaIcpe=areaIcpe-areaGround;
          // console.log(additionalGroundAreaIcpe);// vérification de la valeur de terrain supplémentaire nécessaire
          break;
          case'iDontKnow':
          additionalGroundAreaIcpe= 0;
          // console.log(additionalGroundAreaIcpe);// vérification de la valeur de terrain supplémentaire nécessaire
          break; 
     };
     console.log(additionalGroundAreaIcpe);


     // Calcul  Espaces Vert
          let areaPlantations
          areaPlantations =areaGround-areaRoadAndUtilities-areaBuilding;
     console.log(areaRoadAndUtilities);
     console.log(areaPlantations);

//COUTS
//COUT DU HALL
     // Coût HALL méthode 1 budget.js au m²
          //Coût plus value hauteur bâtiment
               let addedValueHeight;
               if(inputHeightHallUseful>7){
                    addedValueHeight=(inputHeightHallUseful-7)*costHeightAbove7;
               }
               else {
                    addedValueHeight=0;
               };
          //Coût hALL
               const costBox = Number(areaBox)*(costHallCompany +addedValueHeight);
     // Coût HALL méthode 2 analysedecout.js
          //constante de coût Hall
               //Cout Massif de fondations Hall
                    let costFondationBlockHall =ratioFondationBlockHall*numberFondationBlockHall
               //Coût Gros Oeuvre Hall
                    let costConcreteWorkHall=ratioConcreteWorkHall*areaHall;
               //Coût Structure métallique Hall
                    let costMetalFrameHall=ratioMetalFrameHall*areaBox;
               //Coût Couverture Hall
                    let costRoofHall=ratioRoofHall*areaBox;
               //Coût Bardage Hall
                    let costSidingPanelSimpleHall=ratioSidingPanelSimpleHall*((lengthHall+widthHall)*2*heightHallTotal-lengthOfficesOutside*heightOfficesOutside-lengthOfficesInside*heightOfficesInside);//on compte Inside et Outside car lorsqu'il y a les 2 Types des bureaux, ils sont souvent séparés
               //Coût Dallage Hall
                    let costConcreteSlabHall=ratioConcreteSlabHall*areaHall;
               //Coût portes et quais Hall
                    let costRescueDoors=ratioRescueDoors*(Math.ceil(((lengthHall+widthHall)*2)/45));
               //Coût Electricité Hall
                    let costElectricityHall;
                    choiceGreenRate.checked===true?                costElectricityHall=ratioElectricityHall*areaHall+costGreenRateAddedValueElectricity:costElectricityHall=ratioElectricityHall*areaHall;
          let costBox2 = costFondationBlockHall+costConcreteWorkHall+costMetalFrameHall+costRoofHall+costSidingPanelSimpleHall+costConcreteSlabHall+costRescueDoors+costElectricityHall;
          //Comparaison des deux méthodes
          console.log(costBox);
          console.log(costBox2);
//COUT DES BUREAUX
     // Coût Bureaux méthode 1 budget.js au m²
          let costOffices
          // coût bureaux intérieur pas extérieur
          if (choiceOfficesInside==="yes" && choiceOfficesOutside==="no"){
               // coût bureaux intérieurs Openspace 
               if (choiceOpenspaceOfficesInside==="yes"){
               costOffices = costOfficesCompanyInsideOpenSpace*(officesDimensionsInside);
               }
               // coût bureaux intérieurs Cloisonnés
               if (choiceOpenspaceOfficesInside==="no"){
               costOffices = costOfficesCompanyInsidePartitioned*(officesDimensionsInside-areaShowroomInside)+areaShowroomInside*costOfficesCompanyInsideOpenSpace;
               }
               }
          // coût bureaux extérieur pas intérieur
          else if (choiceOfficesInside==="no" && choiceOfficesOutside==="yes"){
               // coût  bureaux extérieurs OpenSPace
               if (choiceOpenspaceOfficesOutside==="yes"){
                    costOffices = costOfficesCompanyOutsideOpenSpace*(officesDimensionsOutside);
               }
               // coût  bureaux extérieurs Cloisonnés
               if (choiceOpenspaceOfficesOutside==="no"){
                    costOffices = costOfficesCompanyOutsidePartitioned*(officesDimensionsOutside-areaShowroomOutside)+areaShowroomOutside*costOfficesCompanyOutsideOpenSpace;
               }
               }
          // coût bureaux extérieur et intérieur
          else if (choiceOfficesInside==="yes" && choiceOfficesOutside==="yes"){
               // coût  bureaux intérieur Openspace
               if (choiceOpenspaceOfficesInside==="yes"){
                    // coût  bureaux extérieurs Openspace
                    if (choiceOpenspaceOfficesOutside==="yes"){
                    costOffices = officesDimensionsInside*costOfficesCompanyInsideOpenSpace+ costOfficesCompanyOutsideOpenSpace*(officesDimensionsOutside);
                    }
                    // coût  bureaux extérieurs cloisonnés
                    else if (choiceOpenspaceOfficesOutside==="no"){
                    costOffices = officesDimensionsInside*costOfficesCompanyInsideOpenSpace+costOfficesCompanyOutsidePartitioned*(officesDimensionsOutside-areaShowroomOutside)+areaShowroomOutside*costOfficesCompanyOutsideOpenSpace;
                    }
               }
               // coût  bureaux intérieurs Cloisonné
               else if (choiceOpenspaceOfficesInside==="no"){
                    // coût  bureaux extérieurs Openspace
                    if (choiceOpenspaceOfficesOutside==="yes"){
                    costOffices = costOfficesCompanyInsidePartitioned*(officesDimensionsInside-areaShowroomInside)+areaShowroomInside*costOfficesCompanyInsideOpenSpace+ costOfficesCompanyOutsideOpenSpace*(officesDimensionsOutside);
                    }
                    // coût  bureaux extérieurs Cloisonnés
                    else if (choiceOpenspaceOfficesOutside==="no"){
                    costOffices = costOfficesCompanyInsidePartitioned*(officesDimensionsInside-areaShowroomInside)+areaShowroomInside*costOfficesCompanyInsideOpenSpace+costOfficesCompanyOutsidePartitioned*(officesDimensionsOutside-areaShowroomOutside)+areaShowroomOutside*costOfficesCompanyOutsideOpenSpace;
                    }
               }
          }
          // coût bureaux ni extérieur ni intérieur
          else if (choiceOfficesInside==="no" && choiceOfficesOutside==="no"){
          costOffices = 0;
          };
     // Coût BUREAUX méthode 2 analysedecout.js

          //Massif de fondations
               let costFondationBlockOffices =ratioFondationBlockOffices*numberFondationBlockOffices
               console.log(costFondationBlockOffices);
          //Coût Gros Oeuvre Offices
               let costConcreteWorkOffices=ratioConcreteWorkOffices*areaOfficesInside+ratioConcreteWorkOffices*areaOfficesOutside;
               console.log(costConcreteWorkOffices);
          //Coût Structure métallique Offices
               let costMetalFrameOffices=ratioMetalFrameOffices*(areaOfficesInside)+ratioMetalFrameOffices*(areaOfficesOutside);
               console.log(costMetalFrameOffices);
          //Coût Couverture
               let costRoofOffices=ratioRoofOffices*(lengthOfficesOutside*widthOfficesOutside);
          console.log(costRoofOffices);
          //Coût bardage Bureaux
               let ratioSidingPanelOffices
               switch(choicePanelOffices){
                    case'yes':
                    ratioSidingPanelOffices= ratioSidingPanelHighOffices
                    break;
                    case'no':
                    ratioSidingPanelOffices= ratioSidingPanelSimpleOffices
                    break;
                    };
                    let costSidingPanelOffices=ratioSidingPanelOffices*((lengthOfficesOutside+widthOfficesOutside*2)*heightOfficesOutside)+ratioSidingPanelOffices*((lengthOfficesInside)*heightOfficesInside);
          console.log(ratioSidingPanelOffices);
          console.log(costSidingPanelOffices);
          //Coût Dallage Bureaux
               let costConcreteSlabOffices=ratioConcreteSlabOffices*(areaOfficesInside+areaOfficesOutside);
               console.log(costConcreteSlabOffices);
          //Coût Menuiserie Aluminium Bureaux
               let costDoorsAndWindowsOffices=ratioDoorsAndWindowsOffices*(areaOfficesInside+areaOfficesOutside);
               console.log(costDoorsAndWindowsOffices);
          //Coût Plomberie Bureaux
               let costPlumbingOffices=ratioPlumbingOffices*(areaOfficesInside+areaOfficesOutside);
               console.log(costPlumbingOffices);
          //Coût  Chauffage des bureaux
               let costHeatingOffices
               switch(choiceHeatingOffices){
                    case'airConditioner':
                    costHeatingOffices =ratioAirConditionningOffices*(areaOfficesInside+areaOfficesOutside)
                    break;
                    case'hotWaterHeating':
                    costHeatingOffices =ratioHotWaterHeatingOffices*(areaOfficesInside+areaOfficesOutside)
                    break;
                    case'electricityHeating':
                    costHeatingOffices =ratioElectrityHeatingOffices*(areaOfficesInside+areaOfficesOutside)
                    break;                
               };
               console.log(costHeatingOffices);
          //Coût Electricité Bureaux
                    let costElectricityOffices=ratioElectricityOffices*(areaOfficesInside+areaOfficesOutside);
                    console.log(costElectricityOffices);
          //Coût Aménagement Bureaux
               let ratioInteriorDesignOfficesInside;
               let ratioInteriorDesignOfficesOutside;
               switch(choiceOpenspaceOfficesInside){
                    case'yes':
                    ratioInteriorDesignOfficesInside= ratioInteriorDesignOfficesWithOpenSPace
                    break;
                    case'no':
                    ratioInteriorDesignOfficesInside= ratioInteriorDesignOfficesWithoutOpenSPace
                    break;
                    };
               switch(choiceOpenspaceOfficesOutside){
                    case'yes':
                    ratioInteriorDesignOfficesOutside= ratioInteriorDesignOfficesWithOpenSPace
                    break;
                    case'no':
                    ratioInteriorDesignOfficesOutside= ratioInteriorDesignOfficesWithoutOpenSPace
                    break;
                    };
                    
                    let costInteriorDesignOffices=ratioInteriorDesignOfficesInside*areaOfficesInside+ratioInteriorDesignOfficesOutside*areaOfficesOutside;
                    
          console.log(ratioInteriorDesignOfficesInside);
          console.log(ratioInteriorDesignOfficesOutside);
          console.log(costInteriorDesignOffices);
          //Coût total
               let costOffices2;
               costOffices2=costFondationBlockOffices+costConcreteWorkOffices+costMetalFrameOffices+costRoofOffices+costSidingPanelOffices+costConcreteSlabOffices+costDoorsAndWindowsOffices+costPlumbingOffices+costHeatingOffices+costElectricityOffices+costInteriorDesignOffices
          //Comparaison des deux méthodes
          console.log(costOffices);
          console.log(costOffices2);
     //COUT DES ESCALIERS
          // Coût ESCALIER méthode 1 budget.js au m²
               let costStair; // calcul de la plus value escalier
               costStair=numberStair*addedValueStair;
          // Coût ESCALIER méthode 2 analysedecout.js
               let costStair2; // calcul de la plus value escalier mais déduit des mêmes variables sert donc juste à vérifier si les variables sont ok;
               costStair2=numberStair2*addedValueStair;
          //Comparaison des deux méthodes
          console.log(costStair);
          console.log(costStair2);

     //Coûts spécifités
          //Coût spécificité Stockage extérieur
               //compris dans le VRD 

          //Coût spécifité renfort de sol
               let areaSoilReinforcement;
               let answer2 = [0,Number(areaBuilding)];

               switch(choiceSoilReinforcement){
                    case'yes':
                    areaSoilReinforcement= answer2[1];
                    break;
                    case'no':
                    areaSoilReinforcement= answer2[0];
                    break;
                    case'iDontKnow':
                    areaSoilReinforcement= answer2[0];
                    break; 
               };
               const costSoilReinforcement = Number(areaSoilReinforcement*ratioSoilReinforcement);
          console.log(costSoilReinforcement);

          // Coût  spécifité cloison intérieure
          // widthHall déduit de la racine de areabox dans méthode 1 et 2
          // pour les 2 méthodes les calculs sont les mêmes
               let answer8 = [0,inputNumberPartitionInside];
               
               switch(choicePartitionInside){
                    case'no':
                    answer8= answer8[0];
                    break;
                    case'yes':
                    answer8= answer8[1];
                    break;
               };
               const costPartitionInsideSidingPanel=Number(answer8)*(ratioPartitionInsideSidingPanel*(widthHall*inputHeightHallUseful));
          console.log(costPartitionInsideSidingPanel);

          // Coût  spécifité pont roulant
               let answer5 = [0,inputNumberOverHeadCrane];

               switch(choiceOverHeadCrane){
                    case'no':
                    answer5= answer5[0];
                    break;
                    case'yes':
                    answer5= answer5[1];
                    break;
               };
               const addedValueOverHeadCrane = Number(answer5)*(polesUnderOverHeadCrane*addedValueOverHeadCraneOnPoles*inputHeightHallUseful+polesUnderOverHeadCrane*addedValueOverHeadCraneFondation);
          console.log(addedValueOverHeadCrane);

          //Cout spécificité nombre de quais
               let answer6 = [0,inputNumberDockShelter];

               switch(choiceDockShelter){
                    case'no':
                    answer6= answer6[0];
                    break;
                    case'yes':
                    answer6= answer6[1];
                    break;
               };
               // coût de la plus value pour les quais niveleur, sas, butoir et gros oeuvre
               const addedValueDockShelter = (Number(answer6)*(costDockShelter+costconcreteWorkDockShelter));
          console.log(addedValueDockShelter);
          
          //Cout spécificité nombre de portes de plain pied
               let answer7 = [0,inputNumberFloorSectionalDoor];
               switch(choiceFloorSectionalDoor){
                    case'no':
                    answer7= answer7[0];
                    break;
                    case'yes':
                    answer7= answer7[1];
                    break;
               };
               const addedValueFloorSectionalDoor = (Number(answer7)*(costSectionalDoors));
          console.log(addedValueFloorSectionalDoor);
          
          // Coût  spécificité tarif électricité
               let costElectricalConnection = [costBlueRate,costYellowRate,costGreenRate,0];
                    
                    if (choiceBlueRate.checked===true && choiceYellowRate.checked===true && choiceGreenRate.checked===true){
                         inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                         inputYellowRate==''?inputYellowRate=1:inputYellowRate;
                    costElectricalConnection=costElectricalConnection[0]*inputBlueRate + costElectricalConnection[1]*inputYellowRate+(costElectricalConnection[2]+costGreenRateAddedValueElectricity);
                    }
                    else if (choiceBlueRate.checked===true && choiceYellowRate.checked===true && choiceGreenRate.checked===false ){
                         inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                         inputYellowRate==''?inputYellowRate=1:inputYellowRate;
                         costElectricalConnection=costElectricalConnection[0]*inputBlueRate + costElectricalConnection[1]*inputYellowRate;
                    }
                    else if (choiceBlueRate.checked===true && choiceYellowRate.checked===false && choiceGreenRate.checked===false ){
                         inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                         costElectricalConnection=costElectricalConnection[0]*inputBlueRate;
                    }
                    else if (choiceBlueRate.checked===false && choiceYellowRate.checked===true && choiceGreenRate.checked===false ){
                         inputYellowRate==''?inputYellowRate=1:inputYellowRate;
                         costElectricalConnection=costElectricalConnection[1]*inputYellowRate;
                    }
                    else if (choiceBlueRate.checked===false && choiceYellowRate.checked===true && choiceGreenRate.checked===true ){
                         inputYellowRate==''?inputYellowRate=1:inputYellowRate;
                         costElectricalConnection= costElectricalConnection[1]*inputYellowRate+(costElectricalConnection[2]+costGreenRateAddedValueElectricity);
                    }
                    else if (choiceBlueRate.checked===true && choiceYellowRate.checked===false && choiceGreenRate.checked===true){
                         inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                         costElectricalConnection=costElectricalConnection[0]*inputBlueRate +(costElectricalConnection[2]+costGreenRateAddedValueElectricity);
                    }
                    else if (choiceBlueRate.checked===false && choiceYellowRate.checked===false && choiceGreenRate.checked===true){
                         costElectricalConnection= (costElectricalConnection[2]+costGreenRateAddedValueElectricity);
                    }
                    else{
                         costElectricalConnection=costElectricalConnection[3];
                    };
            console.log(inputBlueRate);
            console.log(inputYellowRate);
            console.log(costElectricalConnection);

          // Coût  spécifité chauffage du hall aérotherme gaz
          let answer9 = [0,areaBox];
          switch(choiceHeatingHall){
               case'no':
               // calcul du chauffage dans le Hall
               answer9= answer9[0];
               break;
               case'yes':
               answer9= answer9[1];
               break; 
          };
          let costHeating=answer9*ratioGasHeatingHall;
          console.log(costHeating);//vérification de costHeating
          
          // Coût  spécifité RIA Hall
          let answer10 = [0,areaBox];
                switch(choiceFireNetworkHall){
                     case'yes':
                     answer10= answer10[0];
                     break;
                    case'no':
                    answer10= answer10[1];
                    break;
               };
               let costFireNetworkHall =answer10*ratioFireNetworkHall;
          console.log(costFireNetworkHall);

          // Coût  spécifité bâtiment ICPE

               let addedValueIcpe =[((inputCostGround/areaGround)*additionalGroundAreaIcpe),(inputCostGroundByRegion*additionalGroundAreaIcpe)];
               
               areaGround>0?
               addedValueIcpe =addedValueIcpe[0]:addedValueIcpe =addedValueIcpe[1];

               additionalGroundAreaIcpe!== 0 ? addedValueIcpe : addedValueIcpe=0;
          console.log(addedValueIcpe);

          //Coût terrain
               // je connais le coût et la surface du terrain
               let costGroundInput= Number(inputCostGround*inputAreaGround); //on connait le coût du terrain; inputCostGround c'est la valeur rentrée et la valeur du terrain

               // je ne connais pas le coût et la surface du terrain
               let costCalculationNeedAreaGround;
               inputAreaGround===0? costCalculationNeedAreaGround= Number(areaGround)*inputCostGroundByRegion: costCalculationNeedAreaGround=0;//on ne connait pas le coût du terrain soit inputAreaGround===0 alors on calcul la valeur 

          //Coût VRD
               let costRoadAndUtilities;

               if (((areaRoadAndUtilities+areaBuilding)/areaGround)> 0.65&& areaGround>5000){
               costRoadAndUtilities= areaBuilding*ratioBuilding2+areaRoadAndUtilities*ratioRoadAndUtilities2+areaPlantations*ratioPlantations2+areaGround*ratioFencing2;
               }
               else {
               costRoadAndUtilities= areaBuilding*ratioBuilding1+areaRoadAndUtilities*ratioRoadAndUtilities1+areaPlantations*ratioPlantations1+areaGround*ratioFencing1;
               };
               console.log(areaBuilding);
               console.log(areaRoadAndUtilities);
               console.log(areaPlantations);
               console.log(areaGround);
               console.log(costRoadAndUtilities);

          //Coût Total
               const costGround= Math.round((Number(costGroundInput)+Number(costCalculationNeedAreaGround)+addedValueIcpe)*100/100);// calcul du terrain seuls - costGroundInput c'est le coût si on le connait (issu de Input)- costCalculationNeedAreaGround c'est le côut issu de calcul
               console.log(costGround);

               const costEnergyAndSanitation= Math.round ((costElectricalConnection)*100/100);// calcul des concédés
               console.log(costEnergyAndSanitation);
//________________________________________________________________________________________
     // VERIFICATION POUR LA CONSOLE 
               // calcul TRAVAUX méthode 1 budget.js au m²
                    const costProjectWorks= Math.round ((costBox+costOffices+costRoadAndUtilities+costSoilReinforcement+costPartitionInsideSidingPanel+addedValueOverHeadCrane+addedValueDockShelter+addedValueFloorSectionalDoor+costHeating+costFireNetworkHall+costStair)*100/100);// calcul des travaux seuls
               //calcul TRAVAUX méthode analysedecout.js pour comparaison
                    const costProjectWorks2= Math.round ((costBox2+costOffices2+costRoadAndUtilities+costSoilReinforcement+costPartitionInsideSidingPanel+addedValueOverHeadCrane+addedValueDockShelter+addedValueFloorSectionalDoor+costHeating+costFireNetworkHall+costStair2)*100/100);// calcul des travaux seuls
               //comparaison des deux méthodes
               console.log(costProjectWorks);
               console.log(costProjectWorks2);               
//________________________________________________________________________________________
const costProjectWithFeesWithoutCommercialMargin= Math.round((Number(costGroundInput)+Number(costCalculationNeedAreaGround)+addedValueIcpe+costEnergyAndSanitation+studyFeesAndInsurance*(costBox+costOffices+costRoadAndUtilities+costSoilReinforcement+costPartitionInsideSidingPanel+addedValueOverHeadCrane+addedValueDockShelter+addedValueFloorSectionalDoor+costHeating+costFireNetworkHall+costStair))*100/100);// calcul du coût du bâtiment hors marge commerciale
               console.log(costProjectWithFeesWithoutCommercialMargin);

               const number = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format( costProjectWithFeesWithoutCommercialMargin);// pour affichage number en euros
               // console.log(number);
          
          //COUT Frais commercial
               const CostDeveloppementAndCommercial=Math.round (0.095*costProjectWithFeesWithoutCommercialMargin)//calcul du coût du bâtiement comprenant la valeur commerciale de 9,5%
               const number2 = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format( CostDeveloppementAndCommercial);// pour affichage number2 en euros
// TEXTES_______________________________________
     // TEXTE BUREAUX A L'INTERIEUR DU HALL / EXTERIEUR HALL

          // Texte Vérification du choix de bureaux à l'intérieur
          let answer31 = [0,1];

          if (choiceOfficesInside.value=="yes"){ 
               answer31=answer31[0];
          }
          else {
               answer31=answer31[1];
               // console.log(answer31);// on log pour vérifier que l'on a bien le retour aprés le check
          }
          // Texte Vérification de l'option choisie pour le texte de bureaux intérieur ou extérieur
          const answerChoiceOfficesInside = {yes :"Il y a des bureaux dans le volume des locaux d'activité", no : "Il n'y a pas de bureaux situés dans les locaux d'activité"};
          x31 = answerChoiceOfficesInside.yes;
          y31 = answerChoiceOfficesInside.no;
          answer31 > 0 ? y31 : y31=x31;
          // Texte Vérification du choix de bureaux à l'extérieur
          let answer32 = [0,1];

          if (choiceOfficesInside.value=="yes"){ 
               answer32=answer32[0];
          }
          else {
               answer32=answer32[1];
          }
          // Texte Vérification de l'option choisie pour le texte de bureaux intérieur ou extérieur
          const answerChoiceOfficesOutside = {yes :"Il y a des bureaux à l'extérieur des locaux d'activité", no : "Il n'y a pas de bureaux situés à l'extérieur des locaux d'activité"};
          x32 = answerChoiceOfficesOutside.yes;
          y32 = answerChoiceOfficesOutside.no;
          answer32 > 0 ? y32 : y32=x32;

     // Texte SHOWROOM
          //Pas de texte pour choix de Show room pour Intérieur/Extérieur
          // ____________________________________________________________
     //Texte hauteur bâtiment
          // ____________________________________________________________
     //Texte stockage extérieur
          // Texte Vérification de la taille du terrain pour le texte d'affichage
          const inputAreaGroundWithStorage =((Number(areaBuilding)+Number(areaRoadAndUtilities))*1.2); // areaRoadAndUtilities comprend la surface de stockage
          const answerOutDoorStorage = {sufficient :"bonnes", insufficient : "insuffisantes"};
          x1 = answerOutDoorStorage.sufficient;
          y1 = answerOutDoorStorage.insufficient;
          w1 = "prises en compte dans le chiffrage"
          if ((choiceGroundOwner.value==="yes") && (Number(areaGround)>=(inputAreaGroundWithStorage))) {
               x1=x1;
          }
          else if (choiceGroundOwner.value==="no") {
               x1=w1;
          }else {
               x1=y1;
          };

     //Texte renfort de sol
          // Texte Vérification de l'option choisie pour le texte d'affichage
          const answerChoiceStudySoil = {yes :"Le bâtiment a besoin de renforcement de sol qui sont calculés dans le coût", no : "le chiffrage est réalisé sans renforcement de sol"};
          x2 = answerChoiceStudySoil.yes;
          y2 = answerChoiceStudySoil.no;

          areaSoilReinforcement > 0 ? x2 : x2=y2;

     // Texte pont roulant

          // Texte Vérification de l'option choisie pour le texte d'affichage Réalisée directement dans le texte avec la variable answer5 déterminée pour le calcul du coût

     // Texte nombre de quais          
          // Texte Vérification de l'option choisie pour le texte d'affichage Réalisée directement dans le texte avec la variable answer6 déterminée pour le calcul du coût

     //TEXTE Porte Sectionnelle de Plain-Pied
          // Texte Vérification de l'option choisie pour le texte d'affichage Réalisée directement dans le texte avec la variable answer7 déterminée pour le calcul du coût
          
     // Texte tarif électricité
          // Texte Puissance Electrique
          let verificationElectricalConnection = { blue :`Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu`, yellow : `Raccordement électrique : Vous avez choisi ${inputYellowRate} tarif(s) jaune`, blueyellow : `Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu et ${inputYellowRate} tarif(s) jaune` ,green : `Raccordement électrique : Vous avez choisi le tarif vert`, bluegreen : `Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu et 1 tarif vert`, yellowgreen : `Raccordement électrique : Vous avez choisi ${inputYellowRate} tarif(s) jaune et 1 tarif vert`, blueyellowgreen : `Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu, ${inputYellowRate} tarif(s) jaune et 1 tarif vert` };

        if( choiceBlueRate.checked===true&& choiceYellowRate.checked===false && choiceGreenRate.checked===false ){ 
            x7 =verificationElectricalConnection.blue;
        }
        else if( choiceBlueRate.checked===false && choiceYellowRate.checked===true && choiceGreenRate.checked===false){ 
            x7 =verificationElectricalConnection.yellow;
        }
        else if( choiceBlueRate.checked===false && choiceYellowRate.checked===false && choiceGreenRate.checked===true){ 
            x7 =verificationElectricalConnection.green;
        }
        else if( choiceBlueRate.checked===true && choiceYellowRate.checked===true && choiceGreenRate.checked===false ){ 
            x7 =verificationElectricalConnection.blueyellow;
        }
        else if( choiceBlueRate.checked===false && choiceYellowRate.checked===true && choiceGreenRate.checked===true){ 
            x7 =verificationElectricalConnection.yellowgreen;
        }
        else if( choiceBlueRate.checked===true && choiceYellowRate.checked===false &&choiceGreenRate.checked===true){ 
            x7 =verificationElectricalConnection.bluegreen;
        }
        else if( choiceBlueRate.checked===true && choiceYellowRate.checked===true &&choiceGreenRate.checked===true){ 
            x7 =verificationElectricalConnection.blueyellowgreen;
        }
        else{ 
            x7 ="je n'ai pas sélectionné de type de connection électrique, phrase à supprimer quand les messages d'erreurs seront réactivés";
        };

     // Texte chauffage dans le hall par aérotherme gaz

          const answerChoiceHeating = {yes :"le Hall est chauffé par aérothermes gaz", no : "Le hall n'est pas chauffé"};
          x8 = answerChoiceHeating.yes;
          y8 = answerChoiceHeating.no;

          costHeating > 0 ? x8 : x8=y8;
          
     // TEXTE RIA Hall
          
          const answerChoiceFireNetworkHall = {yes :"le Hall est équipé de RIA", no : "Le hall n'est pas équipé de RIA"};
          x9 = answerChoiceFireNetworkHall.yes;
          y9 = answerChoiceFireNetworkHall.no;

          costFireNetworkHall > 0 ? x9 : x9=y9;

     // Texte ICPE
          const answerChoiceIcpe = {tooSmall :"Le terrain est trop petit pour réaliser un bâtiment de cette surface classé ICPE sur le terrain envisagé, le calcul de valeur tient compte de la plus value terrain sur la base de vos données",good :"Le terrain envisagé est suffisant pour réaliser un bâtiment de cette surface classé ICPE, le calcul de valeur tient compte de la plus value terrain sur la base de vos données",  no : "Pas de classement ICPE"};
          x10 = answerChoiceIcpe.tooSmall;
          y10 = answerChoiceIcpe.good;
          z10 = answerChoiceIcpe.no;


          const answerAreaGround=[areaIcpe,areaGround];
          let u10= answerAreaGround[0];
          let v10= answerAreaGround[1];
          
          if (additionalGroundAreaIcpe < 0 && areaGround>0){
               x10=x10;
               u10=u10;
          }
          else if (additionalGroundAreaIcpe > 0 && areaGround>0){
               x10=y10;
               u10=u10;
          }
          else if (additionalGroundAreaIcpe < 0 && areaGround==0){
               x10='il faut plus de terrain pour un classement ICPE.' ;
               u10=u10;
          }
          else {
               x10=z10;
               u10=v10;
          };

     // affichage du coût du bâtiment avec spécificités et les textes de choix

     document.body.innerHTML=
     `
     <header>
     <nav>
         <ul>
             <li id="logo"><a href="#">AMO : le site des maîtres d'ouvrage</a>  </li>
             <li><a href="#contact">Nous contacter</a>  </li>
             <li><a href="#s'identifier">s'identifier</a>  </li>
         </ul>
     </nav>
    </header>
     <section id="imagePrincipale"> 
     <h2 class='textResult'>le coût de construction du  bâtiment que vous envisagez est de :
               <div class='textCout'>${number} HT</div></h2>
               <ul>
               <li><h3>y compris Frais (Architecte, bureaux controle, Suivi de chantier(environ 12%), assurance...)</li> 
               <li><h3>y compris Taxes(Permis de construire)</li>
               <li><h3>y compris Terrain</li>
               <li><h3>non compris marges commerciales promotion et agences (environ 9,5% de la valeur travaux soit ${number2} ) </h3>
               </ul>
               
     <ul>
     <h2>Avec les conditions suivantes :</h2>
     <li><h4> vous avez besoin de ${areaGround} m² minimum de terrain sans classement ICPE. les dimensions de votre terrain sont ${x1} avec un stockage extérieur de ${inputAreaRoadAndUtilitiesStorageOutdoor}m2</h4></li>
     <li><h4>${x2}</h4></li>
     <li><h4>${y31}</h4></li>
     <li><h4>${y32}</h4></li>
     <li><h4>Vous avez besoin de ${answer5} pont(s) roulant</h4></li>
     <li><h4>Vous avez besoin de ${answer6} quai(s) de déchargement</h4></li>
     <li><h4>${x7}</h4></li>
     <li><h4>${x8}</h4></li>
     <li><h4>${x9}</h4></li>
     <li><h4>${x10}. Vous avez donc besoin de ${u10} m2 de terrain total</h4></li>
     </ul>
     <h2>Détails de prestation du Chiffrage :</h2>
     <h4> comprenant bitume, espace vert, assainissement,fondations, gros oeuvre, charpente, bardage,couverture, électricité, chauffage, plomberie, aménagement des bureaux </h4>
     <h4> hors démolitions, racks, ameublement, machine, video surveillance, alarmes autre que alarme incendie,ponts roulant .....à mettre plus de détails</h4> 
 
     <div class="button1">
     <input type="button" value="Retour à l'Accueil" onclick=window.location.href="http://127.0.0.1:5500/index.html" />
     </div>             
</section>
`
          };// fermeture de la fonction getAreas


          
