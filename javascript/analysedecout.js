//déclaration des variables utilisées dans le code


// __________________________________
const studyFeesAndInsurance = 1.2555 // 25,55% taxe et frais :etude de sol, bureau de controle, thermique, SPS, assurance décennale et RC  
// __________________________________
const costGroundByRegion= 65; //prix fixé à 65 e pour l'instant. Il faudra aprés faire une demande de la région de construction et prendre un prix moyen de la région
// constante de coût VRD
    const ratioBuilding1 = 94; //94 euros/m² de construit hors taxes hors marge si le ration (voirie+Bâtiment)/terrain est <65%
    const ratioBuilding2 = 78.5; //78.5 euros/m² de construit hors taxes hors marge si le ratio (voirie+Bâtiment)/terrain est >65% 
    const ratioRoadAndUtilities1 = 95.5; //95.5 euros/m²  hors taxes hors marge si le ratio (voirie+Bâtiment)/terrain est <65% 
    const ratioRoadAndUtilities2 = 55.5; //55.5 euros/m²  hors taxes hors marge si le ratio (voirie+Bâtiment)/terrain est >65% 
    const ratioPlantations1 = 9.75; //9.75 euros/m² hors taxes hors marge pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est <65% 
    const ratioPlantations2 = 10.80; //10.80 euros/m² hors taxes hors marge pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est >65% 
    const ratioFencing1 = 4.75; //4.75 euros/m² hors taxes hors marge pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est <65% 
    const ratioFencing2 = 3.25; //3.25 euros/m² hors taxes hors marge pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est >65% 
//constante de coût Hall
    const ratioFondationBlockHall = 1200 // 550e/u de fondation hors taxes hors marge
    const ratioConcreteWorkHall = 9 // 9e/m² de plancher construit pour le gros oeuvre hors taxes hors marge
    const ratioMetalFrameHall = 76 // 76e/m² de plancher construit pour la structure métallique hors taxes hors marge
    const ratioRoofHall = 52 // 52e/m² de plancher construit pour la couverture hors taxes hors marge
    const ratioSidingPanelSimpleHall = 60  // 60e/m² de façade construite pour le bardage standard hors taxes hors marge
    const ratioSidingPanelHighHall = 120  // 120e/m² de façade construite pour le bardage luxe hors taxes hors marge
    const ratioConcreteSlabHall = 30  // 30e/m² de dalle construit hors taxes hors marge
    const ratioRescueDoors = 2500  // 2500 e/u par porte de secours hors taxes hors marge
    const ratioElectricityHall = 22  // 22e/m² de plancher construit pour l'électricité hors taxes hors marge
    
//constante de coût Bureaux
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
//constante des spécificités
    const ratioSoilReinforcement = 19.87 ; // 20 e/m² pour des colonnes réalisées sur l'ensemble du bâtiment à une moyenne de 7m
    const addedValueOverHeadCraneOnPoles = 120 ; // euros par ml de poteaux sur la base d'un HEA 300(90kg/ml) passé en HEA 400(127,4kg/ml) à 3e du kg 
    //const addedValueOverHeadCraneRaceway = 285;// euros par ml non utilisé car rail considéré comme à la charge du fournisseur de pont roulant
    const addedValueOverHeadCraneFondationByPole = 933; // euros par plus value de fondations sous poteau de pont roulant
    const costDockShelter = 11000; //euros par unité
    const costconcreteWorkDockShelter = 4000; //euros par unité
    const costSectionalDoors = 5000; //euros par unité
    const costBlueRate = 5000;// coût d'un tarif bleu
    const costYellowRate = 10000;// coût d'un tarif jaune
    const costGreenRate = 15000;// coût d'un tarif vert
    const costGreenRateAddedValueElectricity = 45000;// coût du transfo à la charge du lot Electricité
    const ratioPartitionInsideSidingPanel = 90;// 90 e/m² pour cloison de division intérieure du hall
    const ratioElectricHeatingHall = 4 //NON UTILISE // 4e/m² de plancher construit pour le chauffage electrique hors taxes hors marge
    const ratioGasHeatingHall = 9.22  // 9e/m² de plancher construit pour le chauffage gaz hors taxes hors marge
    const ratioFireNetworkHall = 5  // 5e/m² de plancher construit pour le réseau RIA hors taxes hors marge
    const costElevator = 35000;// Prix d'un ascenseur comprenant la cabine et la colonne
    const addedValueStair = 20000;// Prix d'un escalier
// _____________________________________________________________________________
// FONCTION
    function costBreakdown(event) {
        // _____________________________________________________________________________
        // TEXTE DES ERREURS
        let inputSellingPrice = Number(document.getElementById("inputSellingPrice").value);
        let inputAreaGround = Number(document.getElementById("inputAreaGround").value);
        let inputCostGround =  Number(document.getElementById("inputCostGround").value);
        let inputAreaBox = Number(document.getElementById("inputAreaBox").value);
        let inputAreaOfficesGroundInside = Number(document.getElementById("inputAreaOfficesGroundInside").value);
        let inputAreaOfficesGroundOutside = Number(document.getElementById("inputAreaOfficesGroundOutside").value);
        const choiceBlueRate = document.getElementById('choiceBlueRate');
        const choiceYellowRate = document.getElementById('choiceYellowRate');
        const choiceGreenRate = document.getElementById('choiceGreenRate');
        
        // if (inputSellingPrice==0){
        //     alert("vous n'avez pas indiqué le prix de vente de votre projet");
        //     event.stopPropagation();
        // }
        // if (inputAreaGround==0 && inputCostGround==0){
        //     alert("vous devez indiquer la surface ou le coût de votre terrain");
        //     event.stopPropagation();
        // }
        // if (inputAreaBox==0){
        //     alert("vous n'avez pas indiqué la surface du Hall");
        //     event.stopPropagation();
        // }
        // if (choiceOfficesInside==='yes' && inputAreaOfficesGroundInside==0){
        //     alert("vous n'avez pas indiqué la surface des bureaux");
        //     event.stopPropagation();
        // }
        // if (choiceOfficesOutside==='yes' && inputAreaOfficesGroundOutside==0){
        //     alert("vous n'avez pas indiqué la surface des bureaux");
        //     event.stopPropagation();
        // }
        // if (choiceOfficesInside==='no' && choiceOfficesOutside==='no'){
        //     alert("vous n'avez pas indiqué si les bureaux étaient extérieur ou intérieur au Hall");
        //     event.stopPropagation();
        // }
        // if (choiceBlueRate.checked===false && choiceYellowRate.checked===false && choiceGreenRate.checked===false){
        //     alert("vous n'avez pas indiqué la puissance de raccordement électrique de votre bâtiment");
        //     event.stopPropagation();
        // }
        // else {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
// _____________________________________________________________________________
// RECUPERATION DES DONNEES

    // RécupérationPrix de vente du bâtimet clef en main________________________________________________________
            //let inputSellingPrice = Number(document.getElementById("inputSellingPrice").value);déclarée dans le texte des erreures fonction aprés déclenchement fonction costBreakdown(event)
        console.log(inputSellingPrice);
            
    //récupération Hauteur hall
    let inputHeightHallTotal = Number(document.getElementById("inputHeightHallTotal").value);
    console.log(inputHeightHallTotal);
        
    // RécupérationLes bureaux du Bâtiment____________________________________________________
        // RécupérationBureaux Intérieurs
            let choiceOfficesInside = document.getElementById("choiceOfficesInside").value;
            //let inputAreaOfficesGroundInside = Number(document.getElementById("inputAreaOfficesGroundInside").value);déclarée dans le texte des erreures fonction aprés déclenchement fonction costBreakdown(event)
            let inputLengthOfficesInside = Number(document.getElementById("inputLengthOfficesInside").value);
            let inputWidthOfficesInside = Number(document.getElementById("inputWidthOfficesInside").value);
            let inputAreaOfficesFloorInside = Number(document.getElementById("inputAreaOfficesFloorInside").value);

            console.log(inputLengthOfficesInside);
            console.log(inputWidthOfficesInside);
            console.log(inputAreaOfficesFloorInside);

        // Récupération Bureaux Extérieurs
            let choiceOfficesOutside = document.getElementById("choiceOfficesOutside").value;
            //let inputAreaOfficesGroundOutside = Number(document.getElementById("inputAreaOfficesGroundOutside").value);déclarée dans le texte des erreures fonction aprés déclenchement fonction costBreakdown(event)
            let inputLengthOfficesOutside = Number(document.getElementById("inputLengthOfficesOutside").value);
            let inputWidthOfficesOutside = Number(document.getElementById("inputWidthOfficesOutside").value);
            let inputAreaOfficesFloorOutside = Number(document.getElementById("inputAreaOfficesFloorOutside").value);
            
            console.log(inputLengthOfficesOutside);
            console.log(inputWidthOfficesOutside);
            console.log(inputAreaOfficesFloorOutside);
            
        // Récupération Hall du Bâtiment_________________________
            // Récupération Surface hall
                //inputHeightHallTotal récupérée au début car nécessaire dans les bureaux
                //let inputAreaBox = Number(document.getElementById("inputAreaBox").value);déclarée dans le texte des erreures fonction aprés déclenchement fonction costBreakdown(event)
                let inputLengthHall = Number(document.getElementById("inputLengthHall").value);
                let inputWidthHall = Number(document.getElementById("inputWidthHall").value);

                console.log(inputLengthHall);
                console.log(inputWidthHall);

    // Récupération Spécificités_________________________________________________
        // Récupération Renfort de sol :
            let choiceSoilReinforcement = document.getElementById("choiceSoilReinforcement").value;

        // Récupération Cloison intérieure
            let choicePartitionInside = document.getElementById("choicePartitionInside").value;
            let inputNumberPartitionInside = document.getElementById("inputNumberPartitionInside").value;  


        // Récupération Pont roulant :
            let choiceOverHeadCrane = document.getElementById("choiceOverHeadCrane").value; 
            let inputNumberOverHeadCrane = document.getElementById("inputNumberOverHeadCrane").value; 

        // Récupération Niveleur de quai :
            let choiceDockShelter = document.getElementById("choiceDockShelter").value; 
            let inputNumberDockShelter = document.getElementById("inputNumberDockShelter").value; 
        
        // Récupération Porte Sectionnelle de plain pied :
            let choiceFloorSectionalDoor = document.getElementById("choiceFloorSectionalDoor").value; 
            let inputNumberFloorSectionalDoor = document.getElementById("inputNumberFloorSectionalDoor").value; 
        
        // Récupération Stockage extérieur :
            let choiceStorageOutdoor = document.getElementById("choiceStorageOutdoor").value; 
            let inputAreaRoadAndUtilitiesStorageOutdoor = Number(document.getElementById("inputAreaRoadAndUtilitiesStorageOutdoor").value); 

        // Récupération Raccordement électrique
            //const choiceBlueRate = document.getElementById('choiceBlueRate').value;récupérée dans le texte des erreurs
            //const choiceYellowRate = document.getElementById('choiceYellowRate').value;récupérée dans le texte des erreurs
            //const choiceGreenRate = document.getElementById('choiceGreenRate').value;récupérée dans le texte des erreurs
            let inputBlueRate = document.getElementById("inputBlueRate").value; 
            let inputYellowRate = document.getElementById("inputYellowRate").value; 

        // Récupération Chauffage Hall
            let choiceHeatingHall = document.getElementById("choiceHeatingHall").value;

        // Récupération Ria Hall
            let choiceFireNetworkHall = document.getElementById("choiceFireNetworkHall").value;

        // Récupération Open Space dans les bureaux
            let choiceOpenSpace = document.getElementById("choiceOpenSpace").value;

        // Récupération Bardage luxe pour les bureaux
            let choicePanelOffices = document.getElementById("choicePanelOffices").value;

        // Récupération  chauffage des bureaux
            let choiceHeatingOffices = document.getElementById('choiceHeatingOffices').value;

            
         // Récupération Ascenseur :
            let choiceElevator = document.getElementById("choiceElevator").value; 

        // Récupération  ICPE pas nécessaire car lors de la vérification de devis on vérifie des éléments déjà calculés

        // Récupération Terrain________________________________________________________
            let choiceGroundOwner = document.getElementById("choiceGroundOwner").value;
            let choiceAreaGround = document.getElementById("choiceAreaGround").value;
            //let inputAreaGround = document.getElementById("inputAreaGround").value;déclarée dans le texte des erreures fonction aprés déclenchement fonction costBreakdown(event)
            let choiceCostGround = document.getElementById("choiceCostGround").value;
            //let inputCostGround = document.getElementById("inputCostGround").value;déclarée dans le texte des erreures fonction aprés déclenchement fonction costBreakdown(event)

        // Récupération VRD________________________________________________________
            let choiceAreaRoadAndUtilities = document.getElementById("choiceAreaRoadAndUtilities").value;
            let inputAreaRoadAndUtilities = document.getElementById("inputAreaRoadAndUtilities").value;

        // Récupération Tout compris_________________________________
            let choiceAllIn = document.getElementById("choiceAllIn").value;
        // Récupération TAxes PC___________________________
            let choiceFeeBuildingPermit = document.getElementById("choiceFeeBuildingPermit").value;
        // Récupération Insurance________________________________________
            let choiceInsurance = document.getElementById("choiceInsurance").value;
        // Récupération Maitrise d'Oeuvre_____________________
            let choiceManagement = document.getElementById("choiceManagement").value;
        // Récupération Agence commerciale____________________
            let choiceBusinessAgency = document.getElementById("choiceBusinessAgency").value;
        // Récupération Promoteur____________________________
            let choiceDevelopper = document.getElementById("choiceDevelopper").value;
            
// _____________________________________________________________________________
//CALCULS CARACTERISTIQUES BATIMENTS
    // Calcul bureaux du Bâtiment____________________________________________________
        // Calcul Bureaux Intérieurs
            let areaOfficesInside=inputAreaOfficesGroundInside +inputAreaOfficesFloorInside;
            inputLengthOfficesInside==0? inputLengthOfficesInside=Math.round(Math.sqrt(inputAreaOfficesGroundInside)):inputLengthOfficesInside ; 
            inputWidthOfficesInside==0? inputWidthOfficesInside=Math.round(Math.sqrt(inputAreaOfficesGroundInside)):inputWidthOfficesInside ; 
            inputWidthOfficesInside==0? inputAreaOfficesGroundInside= inputLengthOfficesInside*inputWidthOfficesInside:inputAreaOfficesGroundInside;
            console.log(inputAreaOfficesGroundInside);
            console.log(inputAreaOfficesFloorInside);
            console.log(inputLengthOfficesInside);
            console.log(inputWidthOfficesInside);
            console.log(areaOfficesInside);

        // Calcul  hauteur des bureaux intérieurs
            let heightOfficesInside;
            if (inputAreaOfficesGroundInside==0 && inputAreaOfficesFloorInside==0) {
                heightOfficesInside = 0;
            }
            if (inputAreaOfficesGroundInside>0 && inputAreaOfficesFloorInside==0){
                heightOfficesInside = 4.5;
            }
            if (inputAreaOfficesGroundInside>0 &&inputAreaOfficesFloorInside>0){
                heightOfficesInside = inputHeightHallTotal-1.20;
            }
            console.log(heightOfficesInside);
        
        // Calcul Bureaux Extérieurs
            let areaOfficesOutside=inputAreaOfficesGroundOutside +inputAreaOfficesFloorOutside;
            inputLengthOfficesOutside==0? inputLengthOfficesOutside=Math.round(Math.sqrt(inputAreaOfficesGroundOutside)):inputLengthOfficesOutside ; 
            inputWidthOfficesOutside==0? inputWidthOfficesOutside=Math.round(Math.sqrt(inputAreaOfficesGroundOutside)):inputWidthOfficesOutside ; 
            inputAreaOfficesGroundOutside==0? inputAreaOfficesGroundOutside= inputLengthOfficesOutside*inputWidthOfficesOutside:inputAreaOfficesGroundOutside;
            console.log(inputAreaOfficesGroundOutside);
            console.log(inputAreaOfficesFloorOutside);
            console.log(inputLengthOfficesOutside);
            console.log(inputWidthOfficesOutside);
            console.log(areaOfficesOutside);
            
        // Calcul  hauteur des bureaux
            let heightOfficesOutside
            if (inputAreaOfficesGroundOutside==0 && inputAreaOfficesFloorOutside==0) {
                heightOfficesOutside = 0;
            }
            if (inputAreaOfficesGroundOutside>0 && inputAreaOfficesFloorOutside==0){
                heightOfficesOutside = 4.5;
            }
            if (inputAreaOfficesGroundOutside>0 &&inputAreaOfficesFloorOutside>0){
                heightOfficesOutside = 2*4.5;
            }
            console.log(heightOfficesOutside);
        // Calcul  escaliers des bureaux
            let numberStair;
            if (inputAreaOfficesFloorInside>0 && inputAreaOfficesFloorOutside==0){
                numberStair=1;
            }
            else if (inputAreaOfficesFloorInside==0 && inputAreaOfficesFloorOutside>0){
                numberStair=1;
            }
            else if (inputAreaOfficesFloorInside>0 && inputAreaOfficesFloorOutside>0){
                numberStair=2;
            }
            else if (inputAreaOfficesFloorInside==0 && inputAreaOfficesFloorOutside==0){
                numberStair=0;
            }
        console.log(numberStair);

        //Calcul Massif de fondations des bureaux

            let numberFondationBlockOffices;

            if (inputWidthOfficesInside/30<1 && inputWidthOfficesOutside/30<1){
                numberFondationBlockOffices= (Math.ceil((inputLengthOfficesInside/6)+1))+(Math.ceil(inputWidthOfficesInside/6)*2)+(Math.ceil((inputLengthOfficesOutside/6)+1))+(Math.ceil(inputWidthOfficesOutside/6)*2);
            } 
            if (inputWidthOfficesInside/30>1 && inputWidthOfficesOutside/30<1){
                numberFondationBlockOffices= Math.ceil((inputLengthOfficesInside/6)+1)*Math.ceil(inputWidthOfficesInside/30)+Math.ceil((inputWidthOfficesInside/6)*2) +(Math.ceil((inputLengthOfficesOutside/6)+1))+(Math.ceil(inputWidthOfficesOutside/6)*2);
            } 
            if (inputWidthOfficesInside/30<1 && inputWidthOfficesOutside/30>1){
                numberFondationBlockOffices= (Math.ceil((inputLengthOfficesInside/6)+1))+(Math.ceil(inputWidthOfficesInside/6)*2)+Math.ceil((inputLengthOfficesOutside/6)+1)*Math.ceil(inputWidthOfficesOutside/30)+Math.ceil((inputWidthOfficesOutside/6)*2);
            } 
            else{
                numberFondationBlockOffices= Math.ceil((inputLengthOfficesInside/6)+1)*Math.ceil(inputWidthOfficesInside/30)+Math.ceil((inputWidthOfficesInside/6)*2) + Math.ceil((inputLengthOfficesOutside/6)+1)*Math.ceil(inputWidthOfficesOutside/30)+Math.ceil((inputWidthOfficesOutside/6)*2);    
            }
        console.log(numberFondationBlockOffices);

        
    // Calcul Hall du Bâtiment
        // Calcul de la surface sol totale et surface box;
        let areaBuilding; // surface au sol avec les bureaux donc si les bureaux sont extérieurs plus de surface // nécessaire pour VRD
        let areaBox;// surface de la boite si bur intérieurs = ils sont compris dans la surface de la boite // necessaire pour structure bâtiment
        let areaHall;// surface de la zone de travail //necessaire pour l'équipement
            areaBox= inputAreaBox;
            areaHall =areaBox-inputAreaOfficesGroundInside;
            areaBuilding = areaBox+inputAreaOfficesGroundOutside;
                        
        console.log(areaBox);
        console.log(inputAreaOfficesGroundInside);
        console.log(areaHall);
        console.log(inputAreaOfficesGroundOutside);
        console.log(areaBuilding);
    
        // Calcul Surface hall
        let lengthHall;
        let widthHall;
        inputLengthHall==0? lengthHall=(Math.sqrt(areaBox)):lengthHall=inputLengthHall ; 
        inputWidthHall==0? widthHall=(Math.sqrt(areaBox)):widthHall=inputWidthHall ; 
        
            inputAreaOfficesGroundInside>0?areaHall = areaBox-inputAreaOfficesGroundInside:areaHall = areaBox;
        console.log(lengthHall);
        console.log(widthHall);
        console.log(areaHall);
        
        // Calcul Massif de fondations Hall
        let numberFondationBlockHall;
        if (widthHall/30<1){
            numberFondationBlockHall= (Math.ceil((lengthHall/6)+1)*2)+(Math.ceil(widthHall/6)*2);
        }
        else{
            numberFondationBlockHall= Math.ceil((lengthHall/6)+1)*Math.ceil(widthHall/30+1)+Math.ceil((widthHall/6)*2);    
        };

        console.log(numberFondationBlockHall);

    // Calcul Spécificités
        // Calcul Renfort de sol :

        // Calcul Cloison intérieure

        // Calcul Pont roulant :

        // Calcul Niveleur de quai :
        //utilisé si on ne connait pas la surface de VRD
            let areaRoadAndUtilitiesDockShelter;
                inputNumberDockShelter>0?areaRoadAndUtilitiesDockShelter=Number(inputNumberDockShelter*(5*35+20*5)) :areaRoadAndUtilitiesDockShelter=0;// 5*35+20*5 c'est la surface de VRD nécessaire en cas de quai soit 5 m de large par 30 m de long devant le quai + 20 x5 nécessaire pour la mise à quai
            console.log(areaRoadAndUtilitiesDockShelter);
        
        // Calcul Porte Sectionnelle de plain pied :
        //utilisé si on ne connait pas la surface de VRD

            let areaRoadAndUtilitiesFloorSectionelDoor;
                inputNumberFloorSectionalDoor>0?areaRoadAndUtilitiesFloorSectionelDoor =Number(inputNumberFloorSectionalDoor*(5*20)):areaRoadAndUtilitiesFloorSectionelDoor=0;// 5*20 c'est la surface de VRD nécessaire en cas de porte de plain pied soit 5 m de large par 20 m de long devant la porte / pas de surface supplémentaire comptée pour la mise à la porte car souvent couplée avec les quais et donc utilisation de cette surface
            console.log(areaRoadAndUtilitiesFloorSectionelDoor);
        
        // Calcul Stockage extérieur :

        // Calcul Raccordement électrique :  

        // Calcul Chauffage Hall

        // Calcul Ria Hall

        // Calcul Open Space dans les bureaux

        // Calcul Bardage luxe pour les bureaux

        // Calcul Ascenseur :

        // Calcul  ICPE pas nécessaire car lors de la vérification de devis on vérifie des éléments déjà calculés

        // Calcul Terrain
            //Calcul pour le cas où on ne connait pas la surface de VRD
                let areaGround;
                switch(choiceAreaGround){
                    case'yes':
                    areaGround = inputAreaGround;
                    break;
                    case'no':
                    areaGround =(areaBuilding+areaRoadAndUtilitiesDockShelter+areaRoadAndUtilitiesFloorSectionelDoor+inputAreaRoadAndUtilitiesStorageOutdoor+(((inputAreaOfficesGroundInside+inputAreaOfficesGroundOutside)/15)*(2.5*8*1.2)))*1.2;
                    break;
                    };
                console.log(areaGround);

        // Calcul VRD________________________________________________________
            //calcul de la surface de VRD
            let areaRoadAndUtilities;
            let areaPlantations;

            switch(choiceAreaRoadAndUtilities){
                case'yes':
                    areaRoadAndUtilities = inputAreaRoadAndUtilities;
                    areaPlantations =areaGround-areaRoadAndUtilities-areaBuilding;
                break;
                case'no':
                    areaRoadAndUtilities =areaRoadAndUtilitiesDockShelter+areaRoadAndUtilitiesFloorSectionelDoor+inputAreaRoadAndUtilitiesStorageOutdoor+(((areaOfficesInside+areaOfficesOutside)/15)*(2.5*8*2));//calcul surface VRD selon nombre de quai de porte de plain pied, de surface de cour de stockage et du nombre d'employés, // multiplie par 2 la surface de parking car il faut la surface de parking et la surface de la route d'accés au parking
                    areaPlantations =areaGround-areaRoadAndUtilities-areaBuilding;
                break;
                };
        console.log(areaRoadAndUtilities);
        console.log(areaBuilding);
        console.log(areaPlantations);


        // Calcul Tout compris

        // Calcul TAxes PC

        // Calcul Insurance

        // Calcul Maitrise d'Oeuvre

        // Calcul Agence commerciale

        // Calcul Promoteur
            
//COUTS
    //COUT HALL
        //Cout Massif de fondations Hall
            let costFondationBlockHall =ratioFondationBlockHall*numberFondationBlockHall
            console.log(costFondationBlockHall);
        //Coût Gros Oeuvre Hall
            let costConcreteWorkHall=ratioConcreteWorkHall*areaHall;
            console.log(costConcreteWorkHall);
        //Coût Structure métallique Hall
            let costMetalFrameHall=ratioMetalFrameHall*areaBox;
            console.log(costMetalFrameHall);
        //Coût Couverture Hall
            let costRoofHall=ratioRoofHall*areaBox;
            console.log(costRoofHall);
        //Coût Bardage Hall
        //  ATTENTION NE TIENT PAS COMPTE DE BARDAGE HAUT DE GAMME POUR LE HALL
            let costSidingPanelSimpleHall=ratioSidingPanelSimpleHall*((lengthHall+widthHall)*2*inputHeightHallTotal-inputLengthOfficesOutside*heightOfficesOutside-inputLengthOfficesInside*heightOfficesInside);//on compte Inside et Outside car lorsqu'il y a les 2 Types des bureaux, ils sont souvent séparés
            console.log(costSidingPanelSimpleHall);
        //Coût Dallage Hall
            let costConcreteSlabHall=ratioConcreteSlabHall*areaHall;
            console.log(costConcreteSlabHall);
        //Coût portes et quais Hall
            let costRescueDoors=ratioRescueDoors*(Math.ceil(((lengthHall+widthHall)*2)/45));
            console.log(costRescueDoors);
        //Coût Electricité Hall
                let costElectricityHall;
                choiceGreenRate.checked===true?                costElectricityHall=ratioElectricityHall*areaHall+costGreenRateAddedValueElectricity:costElectricityHall=ratioElectricityHall*areaHall;
                console.log(costElectricityHall);

    // COUTBUREAUX
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
            let costRoofOffices=ratioRoofOffices*(inputLengthOfficesOutside*inputWidthOfficesOutside); // ne pas prendre en compte inputAreaOffices car il tient compte de la surface totale des bureaux
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
                
                let costSidingPanelOffices=ratioSidingPanelOffices*((inputLengthOfficesOutside+inputWidthOfficesOutside*2)*heightOfficesOutside)+ratioSidingPanelOffices*((inputLengthOfficesInside)*heightOfficesInside);

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
            let ratioInteriorDesignOffices
            switch(choiceOpenSpace){
                case'yes':
                ratioInteriorDesignOffices= ratioInteriorDesignOfficesWithOpenSPace
                break;
                case'no':
                ratioInteriorDesignOffices= ratioInteriorDesignOfficesWithoutOpenSPace
                break;
                };
                
                let costInteriorDesignOffices=ratioInteriorDesignOffices*(areaOfficesInside+areaOfficesOutside);
                
            console.log(ratioInteriorDesignOffices);
            console.log(costInteriorDesignOffices);
    // COUT SPECIFICITES
        //Coût Renfort de sol
            let costSoilReinforcement;
            switch(choiceSoilReinforcement){
                case'yes':
                    costSoilReinforcement= ratioSoilReinforcement*(areaBuilding);
                break;
                case'no':
                    costSoilReinforcement= 0;
                break;
                };
            console.log(areaBuilding);
            console.log(costSoilReinforcement);
        //Coût Cloison(s) intérieure(s)
            let costPartitionInsideSidingPanel=ratioPartitionInsideSidingPanel*(widthHall*inputHeightHallTotal)*inputNumberPartitionInside;

            switch(choicePartitionInside){
                case'yes':
                costPartitionInsideSidingPanel
                break;
                case'no':
                costPartitionInsideSidingPanel = 0;
                break;
            };
            console.log(costPartitionInsideSidingPanel);
        //Coût Ponts roulants
            let polesUnderOverHeadCrane;
            let lengthRaceway;
            let addedValueOverHeadCrane;
            let addedValueOverHeadCraneFondations;
            switch(choiceOverHeadCrane){
                case'yes':
                    polesUnderOverHeadCrane = (Math.ceil((lengthHall/6)+1)*2);
                    //lengthRaceway = ((lengthHall)*2); Neutralisé travail du poseur de pont
                    addedValueOverHeadCrane =(polesUnderOverHeadCrane*addedValueOverHeadCraneOnPoles)*inputHeightHallTotal*inputNumberOverHeadCrane;// pas de rails compté à la charge du fournisseur de pont
                    addedValueOverHeadCraneFondations= polesUnderOverHeadCrane*addedValueOverHeadCraneFondationByPole*inputNumberOverHeadCrane;
                    break;
                case'no':
                    polesUnderOverHeadCrane= 0;
                    //lengthRaceway= 0;neutralisé à la charge du fournisseur de pont
                    addedValueOverHeadCrane= 0;
                    addedValueOverHeadCraneFondations=0;
                    break;
                };
        console.log(polesUnderOverHeadCrane);
        console.log(inputHeightHallTotal);
        console.log(inputNumberOverHeadCrane);
        console.log(addedValueOverHeadCrane);
        console.log(addedValueOverHeadCraneFondations);

        //Coût Quai Niveleur
                let addedValueDockShelter;
                let addedValueConcreteWorkDockShelter;
                switch(choiceDockShelter){
                    case'yes':
                        // coût de la plus value pour les quais + plus value pour la voirie aire de manoeuvre
                        addedValueDockShelter = Number(inputNumberDockShelter)*(costDockShelter);
                        //Plus value VRD compté dans le calcul VRD;
                        addedValueConcreteWorkDockShelter = Number(inputNumberDockShelter) *costconcreteWorkDockShelter;//coût de la fosse à haillon
                        break;
                    case'no':
                        addedValueDockShelter = 0;
                        addedValueConcreteWorkDockShelter = 0;
                        break;
                    };
        console.log(addedValueDockShelter);
        console.log(addedValueConcreteWorkDockShelter);

        //Coût Portes Sectionnelles de plain pied
                let addedValueSectionalDoors;
                switch(choiceFloorSectionalDoor){
                    case'yes':
                        // coût de la plus value pour porte sectionnelles
                        addedValueSectionalDoors = Number(inputNumberFloorSectionalDoor)*(costSectionalDoors);
                        //Plus value VRD compté dans le calcul VRD;
                        break;
                    case'no':
                        addedValueSectionalDoors = 0;
                        break;
                    };
        console.log(inputNumberFloorSectionalDoor);
        console.log(addedValueSectionalDoors);
        //Coût Stockage extérieur compté dans le VRD

        //Coût  Puissance Electrique
                let costElectricalConnection = [costBlueRate,costYellowRate,costGreenRate,0];
                
                if (choiceBlueRate.checked===true && choiceYellowRate.checked===true && choiceGreenRate.checked===true){
                    inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                    inputYellowRate==''?inputYellowRate=1:inputYellowRate;
                    costElectricalConnection=costElectricalConnection[0]*inputBlueRate + costElectricalConnection[1]*inputYellowRate+costElectricalConnection[2];
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
                    costElectricalConnection= costElectricalConnection[1]*inputYellowRate+costElectricalConnection[2];
            }
                else if (choiceBlueRate.checked===true && choiceYellowRate.checked===false && choiceGreenRate.checked===true){
                    inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                    costElectricalConnection=costElectricalConnection[0]*inputBlueRate + costElectricalConnection[2];
            }
                else if (choiceBlueRate.checked===false && choiceYellowRate.checked===false && choiceGreenRate.checked===true){
                    costElectricalConnection= costElectricalConnection[2];
            }
                else{
                    costElectricalConnection=costElectricalConnection[3];
                };
        console.log(inputBlueRate);
        console.log(inputYellowRate);
        console.log(costElectricalConnection);
        
        //Coût Chauffage Hall
            //  ATTENTION TIENT COMPTE UNIQUEMENT DU CHAUFFAGE AEROTHERME GAZ 
            let costGasHeatingHall=ratioGasHeatingHall*areaHall;
            switch(choiceHeatingHall){
                case'yes':
                costGasHeatingHall
                break;
                case'no':
                costGasHeatingHall = 0;
                break;
            };
            console.log(costGasHeatingHall);
        //Coût RIA Hall
            let costFireNetworkHall=ratioFireNetworkHall*areaHall;
            switch(choiceFireNetworkHall){
                case'yes':
                costFireNetworkHall
                break;
                case'no':
                costFireNetworkHall = 0;
                break;
            };
            console.log(costFireNetworkHall);
        //Coût Chauffage bureaux 
            //Calcul : voir bureaux
        //Coût Bardage luxe bureaux 
            //Calcul : voir bureaux
        //Coût Ascenseur bureaux 
            let addedValueElevator;
            switch(choiceElevator){
                case'yes':
                addedValueElevator=costElevator;
                    break;
                case'no':
                addedValueElevator = 0;
                    break;
                };
        console.log(addedValueElevator);
        //Coût Escalier bureaux 
            let costStair;
                costStair=addedValueStair*numberStair;
        console.log(costStair);

    //Coût  TERRAIN
        //coût du terrain quand il n'est pas connu
            let costGround;
            switch(choiceGroundOwner){
                case 'yes':
                    switch(choiceCostGround){
                        case'yes':
                        costGround = Math.round(areaGround*inputCostGround);
                        break;
                        case'no':
                        costGround = areaGround*costGroundByRegion;
                        break;
                        };
                break;
                case 'no':
                        costGround = 0;
                break;
                };
            console.log(costGround);
    //Coût VRD
        // Coût du poste VRD En fonction de la surface et de l'occupation du terrain
            let costRoadAndUtilities;
            if (((areaRoadAndUtilities+areaBuilding)/areaGround)> 0.65&& areaGround>5000){
                costRoadAndUtilities= areaBuilding*ratioBuilding2+areaRoadAndUtilities*ratioRoadAndUtilities2+areaPlantations*ratioPlantations2+areaGround*ratioFencing2;
            }
            else {
                costRoadAndUtilities= areaBuilding*ratioBuilding1+areaRoadAndUtilities*ratioRoadAndUtilities1+areaPlantations*ratioPlantations1+areaGround*ratioFencing1;
            }
            console.log(costRoadAndUtilities);
        // Coût du poste Total travaux HT
            let costTotalWorks=costRoadAndUtilities+costSoilReinforcement+costFondationBlockHall+addedValueOverHeadCraneFondations+costConcreteWorkHall+addedValueConcreteWorkDockShelter+costFondationBlockOffices+costConcreteWorkOffices+costMetalFrameHall+costMetalFrameOffices+addedValueOverHeadCrane+costRoofHall+costSidingPanelSimpleHall+costPartitionInsideSidingPanel+costSidingPanelOffices+costRoofOffices+costConcreteSlabHall+costConcreteSlabOffices+costRescueDoors+addedValueDockShelter+addedValueSectionalDoors+costDoorsAndWindowsOffices+costGasHeatingHall+costFireNetworkHall+costPlumbingOffices+costHeatingOffices+costElectricityHall+costElectricityOffices+costInteriorDesignOffices+costStair+addedValueElevator;
            console.log(costTotalWorks);

        // Coût du DIVERS
            // Coût Clef en main
                let costAllIn;
                switch(choiceAllIn){
                    case 'yes':
                        costAllIn = Math.round(costTotalWorks*0.0115+costElectricalConnection);
                    break;
                    case 'no':
                        costAllIn = 0;
                    break;
                    };
                console.log(costAllIn);
            // Coût Taxes Permis de construire
                let costFeeBuildingPermit;
                switch(choiceFeeBuildingPermit){
                    case 'yes':
                        costFeeBuildingPermit = Math.round(costTotalWorks*0.0741);
                    break;
                    case 'no':
                        costFeeBuildingPermit = 0;
                    break;
                    };
                console.log(costFeeBuildingPermit);
            // Coût Dommage Ouvrage
                let costInsurance;
                switch(choiceInsurance){
                    case 'yes':
                        costInsurance = Math.round(costTotalWorks*0.0345);
                    break;
                    case 'no':
                        costInsurance = 0;
                    break;
                    };
                console.log(costInsurance);
            // Coût Maitrise d'Oeuvre
                let costManagement;
                switch(choiceManagement){
                    case 'yes':
                        costManagement = Math.round(costTotalWorks*0.12);
                    break;
                    case 'no':
                        costManagement = 0;
                    break;
                    };
                console.log(costManagement);
            // Coût Agence commerciale
                let costBusinessAgency;
                switch(choiceBusinessAgency){
                    case 'yes':
                        costBusinessAgency = Math.round(costTotalWorks*0.0375);
                    break;
                    case 'no':
                        costBusinessAgency = 0;
                    break;
                    };
                console.log(costBusinessAgency);
            // Coût Promoteur
                let costDevelopper;
                switch(choiceDevelopper){
                    case 'yes':
                        costDevelopper = Math.round(costTotalWorks*0.06);
                    break;
                    case 'no':
                        costDevelopper = 0;
                    break;
                    };
                console.log(costDevelopper);
            // Coût du poste Total Administrative
                let costTotalAdministrative=costGround+costAllIn+costFeeBuildingPermit+costInsurance+costManagement+costBusinessAgency+costDevelopper;
                console.log(costTotalAdministrative);
            // Coût du Total Général pour comparaison avec L'offre reçue par le client
                let costTotalGeneral=costTotalAdministrative+costTotalWorks;
                console.log(costTotalGeneral);
            // Coût de La différence entre le Total Général/Offre reçue par le client
                let costDifference=inputSellingPrice-costTotalGeneral;
                console.log(costDifference);

//_____________________________________________________________________________________________
// AFFICHAGE DE REPARTITION DES LOTS
                // DEMOLITION : sans objet
                // VRD + PORTAIL/CLOTURE+EV
                    console.log(costRoadAndUtilities);
                    let desplayRoadAndUtilities = costRoadAndUtilities;
                    desplayRoadAndUtilities = new Intl.NumberFormat().format(desplayRoadAndUtilities);// pour affichage style monétaire x xxx xxx
                    console.log(desplayRoadAndUtilities);
                // FONDATIONS SPECIALES
                    console.log(costSoilReinforcement);
                    let desplaySoilReinforcement = new Intl.NumberFormat().format(costSoilReinforcement);// pour affichage style monétaire x xxx xxx
                    console.log(desplaySoilReinforcement);
                // FONDATIONS / GROS OEUVRE
                    console.log(costFondationBlockHall+addedValueOverHeadCraneFondations+costConcreteWorkHall+costFondationBlockOffices+costConcreteWorkOffices+addedValueConcreteWorkDockShelter);
                    let desplayConcreteWork = costFondationBlockHall+addedValueOverHeadCraneFondations+costConcreteWorkHall+costFondationBlockOffices+costConcreteWorkOffices+addedValueConcreteWorkDockShelter;
                    desplayConcreteWork = new Intl.NumberFormat().format(desplayConcreteWork);// pour affichage style monétaire x xxx xxx
                    console.log(desplayConcreteWork);
                //CHARPENTE
                    console.log(costMetalFrameHall+costMetalFrameOffices+addedValueOverHeadCrane);
                    let desplayMetalFrame = costMetalFrameHall+costMetalFrameOffices+addedValueOverHeadCrane;
                    desplayMetalFrame = new Intl.NumberFormat().format(desplayMetalFrame);// pour affichage style monétaire x xxx xxx
                    console.log(desplayMetalFrame);
                // BARDAGE + ETANCHEITE
                console.log(costRoofHall+costSidingPanelSimpleHall+costPartitionInsideSidingPanel+costSidingPanelOffices+costRoofOffices);
                    let desplayRoofAndSiding = costRoofHall+costSidingPanelSimpleHall+costPartitionInsideSidingPanel+costSidingPanelOffices+costRoofOffices;
                    desplayRoofAndSiding = new Intl.NumberFormat().format(desplayRoofAndSiding);// pour affichage style monétaire x xxx xxx
                    console.log(desplayRoofAndSiding);
                // DALLAGE
                    console.log(costConcreteSlabHall+costConcreteSlabOffices);
                    let desplayConcreteSlab = costConcreteSlabHall+costConcreteSlabOffices;
                    desplayConcreteSlab = new Intl.NumberFormat().format(desplayConcreteSlab);// pour affichage style monétaire x xxx xxx
                    console.log(desplayConcreteSlab);
                // QUAI + FERMETURES HALL (portes sectionnelles et secours)
                    console.log(costRescueDoors+addedValueDockShelter+addedValueSectionalDoors);
                    let desplayDoorsAndDock = costRescueDoors+addedValueDockShelter+addedValueSectionalDoors;
                    desplayDoorsAndDock = new Intl.NumberFormat().format(desplayDoorsAndDock);// pour affichage style monétaire x xxx xxx
                    console.log(desplayDoorsAndDock);
                // MA + PORTE SECOURS
                    console.log(costDoorsAndWindowsOffices);
                    let desplayDoorsAndWindowsOffices = new Intl.NumberFormat().format(costDoorsAndWindowsOffices);// pour affichage style monétaire x xxx xxx
                    console.log(desplayDoorsAndWindowsOffices);
                // CHAUFF + PLOMBERIE + RIA+Clim
                    console.log(costGasHeatingHall+costFireNetworkHall+costPlumbingOffices+costHeatingOffices);
                    let desplayHeatingAndPlumbing = costGasHeatingHall+costFireNetworkHall+costPlumbingOffices+costHeatingOffices;
                    desplayHeatingAndPlumbing = new Intl.NumberFormat().format(desplayHeatingAndPlumbing);// pour affichage style monétaire x xxx xxx
                    console.log(desplayHeatingAndPlumbing);
                // ELECTRICITE
                    console.log(costElectricityHall+costElectricityOffices);
                    let desplayElectricity =costElectricityHall+costElectricityOffices;
                    desplayElectricity = new Intl.NumberFormat().format(desplayElectricity);// pour affichage style monétaire x xxx xxx
                    console.log(desplayElectricity);
                // AMENAGEMENT BUREAUX 
                    console.log(costInteriorDesignOffices+addedValueElevator);
                    let desplayInteriorDesignOffices =costInteriorDesignOffices+addedValueElevator+costStair;
                    desplayInteriorDesignOffices = new Intl.NumberFormat().format(desplayInteriorDesignOffices);// pour affichage style monétaire x xxx xxx
                    console.log(desplayInteriorDesignOffices);
                //TOTAL travaux  
                    let desplayTotalWorks
                    desplayTotalWorks = new Intl.NumberFormat().format(costTotalWorks);// pour affichage style monétaire x xxx xxx
                    console.log(desplayTotalWorks);

            // Affichage des divers et taxes
                // Acquisition du terrain
                    let desplayGround = new Intl.NumberFormat().format(costGround);// pour affichage style monétaire x xxx xxx
                    console.log(desplayGround);
                // Offre tout compris : concédés, contrôle  et études construction
                    let desplayAllIn = new Intl.NumberFormat().format(costAllIn);// pour affichage style monétaire x xxx xxx
                    console.log(desplayAllIn);
                // Taxes PC
                    let desplayFeeBuildingPermit = new Intl.NumberFormat().format(costFeeBuildingPermit);// pour affichage style monétaire x xxx xxx
                    console.log(desplayFeeBuildingPermit);
                // Dommage Ouvrage
                    let desplayInsurance = new Intl.NumberFormat().format(costInsurance);// pour affichage style monétaire x xxx xxx
                    console.log(desplayInsurance);
                // La Maitrise d'Oeuvre et son assurance
                    let desplayManagement = new Intl.NumberFormat().format(costManagement);// pour affichage style monétaire x xxx xxx
                    console.log(desplayManagement);
                // Agence commerciale
                    let desplayBusinessAgency = new Intl.NumberFormat().format(costBusinessAgency);// pour affichage style monétaire x xxx xxx
                    console.log(desplayBusinessAgency);
                // Promoteur
                    let desplayDevelopper = new Intl.NumberFormat().format(costDevelopper);// pour affichage style monétaire x xxx xxx
                    console.log(desplayDevelopper);
                //TOTAL Administrative  
                    let desplayTotalAdministrative
                    desplayTotalAdministrative = new Intl.NumberFormat().format(costTotalAdministrative);// pour affichage style monétaire x xxx xxx
                    console.log(desplayTotalAdministrative);
           // Affichage de l'offre et du total de décomposition
                // Total de l'offre remise au client
                    let desplaySellingPrice = new Intl.NumberFormat().format(inputSellingPrice);// pour affichage style monétaire x xxx xxx
                    console.log(desplaySellingPrice);                    
                // Total Général
                    let desplayTotalGeneral = new Intl.NumberFormat().format(costTotalGeneral);// pour affichage style monétaire x xxx xxx
                    console.log(desplayTotalGeneral);                    
                // Différence entre l'offre et le Total Site
                    let desplayDifference = new Intl.NumberFormat().format(costDifference);// pour affichage style monétaire x xxx xxx
                    console.log(desplayDifference);                    
                    
                
// TEXTES_______________________________________
    //HALL
        // si la surface n'est pas égal à la longueur x largeur
        let verificationAreaHall = {null : "vous n'avez pas rentré de valeur pour la longueur et la largeur du Hall, celles-ci ont été déduites", yes :"la surface du hall corresponds à la largeur par la longueur", no : "Attention : la surface du hall que vous avez rentrée ne corresponds pas à la largeur x la longueur"};


        if( Number(document.getElementById("inputLengthHall").value)==0 && Number(document.getElementById("inputWidthHall").value)==0){ 
        x2 =verificationAreaHall.null;
        }
        else if(areaBox == Number(document.getElementById("inputLengthHall").value)*Number(document.getElementById("inputWidthHall").value))
        { 
        x2 =verificationAreaHall.yes;
        }
        else{
        x2 = verificationAreaHall.no;    
        };    
    //BUREAUX
        // si la surface n'est pas égal à la longueur x largeur
        let verificationAreaOffices = {null : "vous n'avez pas rentré de valeur pour la longueur et la largeur des bureaux, celles-ci ont été déduites", yes :"la surface des bureaux que vous avez saisie corresponds aux largeur et longueur bureaux saisies", no : "Attention : la surface des bureaux Rez de chaussée que vous avez saisie ne corresponds pas aux largeur et longueur bureaux saisies"};

        if( inputLengthOfficesInside==0 || inputWidthOfficesInside==0 || inputLengthOfficesOutside==0 || inputWidthOfficesOutside ==0){ 
        x3 =verificationAreaOffices.null;
        }
        else if(inputAreaOfficesGroundInside == inputLengthOfficesInside*inputWidthOfficesInside && inputAreaOfficesGroundOutside == inputLengthOfficesOutside*inputWidthOfficesOutside)
        { 
        x3 =verificationAreaOffices.yes;
        }
        else{
        x3 = verificationAreaOffices.no;    
        };
        // si il y a ou pas d'étage aux bureaux
        let verificationFloor = {yes1 :"les bureaux à l'intérieur possédent un étage", yes2 :"les bureaux à l'extérieur possédent un étage", no1 : "les bureaux à l'intérieur ne posséde pas d'étage", no2 : "les bureaux à l'extérieur ne posséde pas d'étage"};
        if(inputAreaOfficesFloorInside>0) { 
        x32 =verificationFloor.yes1;
        }
        else{
        x32 = verificationFloor.no1;    
        };
        if(inputAreaOfficesFloorOutside>0) { 
        x33 =verificationFloor.yes2;
        }
        else{
        x33 = verificationFloor.no2;    
        };

    //PUISSANCE ELECTRIQUE
        let verificationElectricalConnection = { blue :`Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu`, yellow : `Raccordement électrique : Vous avez choisi ${inputYellowRate} tarif(s) jaune`, blueyellow : `Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu et ${inputYellowRate} tarif(s) jaune` ,green : `Raccordement électrique : Vous avez choisi le tarif vert`, bluegreen : `Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu et 1 tarif vert`, yellowgreen : `Raccordement électrique : Vous avez choisi ${inputYellowRate} tarif(s) jaune et 1 tarif vert`, blueyellowgreen : `Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu, ${inputYellowRate} tarif(s) jaune et 1 tarif vert` };

        if( choiceBlueRate.checked===true&& choiceYellowRate.checked===false && choiceGreenRate.checked===false ){ 
            x4 =verificationElectricalConnection.blue;
        }
        else if( choiceBlueRate.checked===false && choiceYellowRate.checked===true && choiceGreenRate.checked===false){ 
            x4 =verificationElectricalConnection.yellow;
        }
        else if( choiceBlueRate.checked===false && choiceYellowRate.checked===false && choiceGreenRate.checked===true){ 
            x4 =verificationElectricalConnection.green;
        }
        else if( choiceBlueRate.checked===true && choiceYellowRate.checked===true && choiceGreenRate.checked===false ){ 
            x4 =verificationElectricalConnection.blueyellow;
        }
        else if( choiceBlueRate.checked===false && choiceYellowRate.checked===true && choiceGreenRate.checked===true){ 
            x4 =verificationElectricalConnection.yellowgreen;
        }
        else if( choiceBlueRate.checked===true && choiceYellowRate.checked===false &&choiceGreenRate.checked===true){ 
            x4 =verificationElectricalConnection.bluegreen;
        }
        else if( choiceBlueRate.checked===true && choiceYellowRate.checked===true &&choiceGreenRate.checked===true){ 
            x4 =verificationElectricalConnection.blueyellowgreen;
        }
        else{ 
            x4 ="je n'ai pas sélectionné de type de connection électrique, phrase à supprimer quand les messages d'erreurs seront réactivés";
        };
    // TERRAIN
        let textAreaGround = { yes :`la surface du terrain est connue soit ${inputAreaGround} m²`, no : `Vous n'avez pas indiqué connaître la surface du terrain, celle-ci est déduite par calcul soit ${areaGround}m²`};

        switch(choiceAreaGround){
            case'yes':
            x5= textAreaGround.yes;
            break;
            case'no':
            x5= textAreaGround.no;
            break;
            };
            let textCostGround = { yes :`la coût du terrain est connue soit ${inputCostGround} euros/m² HT`, no : `la coût du terrain pris en compte est ${costGroundByRegion}euros/m² HT`};
            
            switch(choiceCostGround){
                case'yes':
                x6= textCostGround.yes;
                break;
                case'no':
                x6= textCostGround.no;
                break;
            };

    //VRD
        let textAreaRoadAndUtilities = { yes :`la surface de voiries est connue soit ${inputAreaRoadAndUtilities} m²`, no : `Vous n'avez pas indiqué connaître la surface de voirie, celle-ci est déduite par calcul soit ${areaRoadAndUtilities}m²`};

        switch(choiceAreaRoadAndUtilities){
            case'yes':
            x7= textAreaRoadAndUtilities.yes;
            break;
            case'no':
            x7= textAreaRoadAndUtilities.no;
            break;
            };
    //DIVERS
        //Offre clef en main :études,le dossier PC, les controles technique, branchements (électrique, eau...)
            let textAllIn = { yes :`compris`, no : `non compris`};
            switch(choiceAllIn){
                case'yes':
                x8= textAllIn.yes;
                break;
                case'no':
                x8= textAllIn.no;
                break;
                };
        //Taxes Permis de construire
            let textFeeBuildingPermit = { yes:`compris`, no:`non compris`};
            switch(choiceFeeBuildingPermit){
                case'yes':
                x9= textFeeBuildingPermit.yes;
                break;
                case'no':
                x9= textFeeBuildingPermit.no;
                break;
                };
        //Dommage Ouvrage
            let textInsurance = { yes :`compris`, no : `non compris`};
            switch(choiceInsurance){
                case'yes':
                x10= textInsurance.yes;
                break;
                case'no':
                x10= textInsurance.no;
                break;
                };
        //Maîtrise d'Oeuvre
            let textManagement = { yes :`compris`, no : `non compris`};
            switch(choiceManagement){
                case'yes':
                x11= textManagement.yes;
                break;
                case'no':
                x11= textManagement.no;
                break;
                };
        //Agence Commerciale
            let textBusinessAgency = { yes :`compris`, no : `non compris`};
            switch(choiceBusinessAgency){
                case'yes':
                x12= textBusinessAgency.yes;
                break;
                case'no':
                x12= textBusinessAgency.no;
                break;
                };
        //Promoteur
            let textDevelopper = { yes :`compris`, no : `non compris`};
            switch(choiceDevelopper){
                case'yes':
                x13= textDevelopper.yes;
                break;
                case'no':
                x13= textDevelopper.no;
                break;
                };
// _______________________________________
     // affichage de décomposition du coût du bâtiment avec spécificités et les textes de choix

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
     <ul>
     <li><h4>${x2}</h4></li>
     <li><h4>${x3}</h4></li>
     <li><h4>${x32},${x33}</h4></li>
     <li><h4>${x4}</h4></li>
     <li><h4>${x5}.${x6}</h4></li>
     <li><h4>${x7}</h4></li>
     <li><h4>Etudes et dossier de Permis de construire (PC) ${x8}; taxes du PC ${x9}; Assurance Dommage Ouvrage ${x11}; Maîtrise d'Oeuvre ${x11}; Frais commerciaux ${x12}; Frais de promotion ${x13}  </h4></li>
     </ul>

    <center>
        <table summary="résultats de décomposition de l'offre pour les travaux">
    <thead>
    <th colspan=3>VALEUR DES TRAVAUX POUR LA DECOMPOSITION DU PRIX</th>
    </thead>
    <tbody>
        <tr>
            <td>Lots</th>
            <td>Montants</th>
            <td>Unités</th>
        </tr>
        <tr>
            <td>VRD /Portail /Cloture /Espace Vert</td>
            <td>${desplayRoadAndUtilities}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Fondations Spéciales</td>
            <td>${desplaySoilReinforcement}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Gros Oeuvre</td>
            <td>${desplayConcreteWork}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Charpente Métallique</td>
            <td>${desplayMetalFrame}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Bardage /Etanchéité</td>
            <td>${desplayRoofAndSiding}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Dallage</td>
            <td>${desplayConcreteSlab}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Quai et Fermetures Hall</td>
            <td>${desplayDoorsAndDock}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Menuiserie Aluminium et Portes secours</td>
            <td>${desplayDoorsAndWindowsOffices}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Chauffage, Plomberie, RIA, Climatisation</td>
            <td>${desplayHeatingAndPlumbing}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Electricité</td>
            <td>${desplayElectricity}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Aménagement des bureaux</td>
            <td>${desplayInteriorDesignOffices}</td>
            <td>Euros HT</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>TOTAL TRAVAUX</td>
            <td>${desplayTotalWorks}</td>
            <td>Euros HT</td>
        </tr>
    </tfoot>
    </table></center>
    <br>
    <center>
    <table summary="résultats de décomposition de l'offre pour les divers et terrain">
<thead>
<th colspan=3>VALEUR DES DIVERS POUR LA DECOMPOSITION DU PRIX</th>
</thead>
    <tbody>
        <tr>
            <td>Frais Hors travaux</th>
            <td>Montants</th>
            <td>Unités</th>
        </tr>
        <tr>
            <td>Acquisition du terrain</td>
            <td>${desplayGround}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Offre tout compris : concédés, contrôle  et études construction</td>
            <td>${desplayAllIn}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Taxes Permis de construire</td>
            <td>${desplayFeeBuildingPermit}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Assurance Dommage Ouvrage</td>
            <td>${desplayInsurance}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>La Maitrise d'Oeuvre et son assurance</td>
            <td>${desplayManagement}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Agence commerciale</td>
            <td>${desplayBusinessAgency}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Promoteur</td>
            <td>${desplayDevelopper}</td>
            <td>Euros HT</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>TOTAL ADMINISTRATIF</td>
            <td>${desplayTotalAdministrative}</td>
            <td>Euros HT</td>
        </tr>
    </tfoot>
    </table></center>
    <br>
    <center>
    <table summary="différence entre le total site de décomposition et le prix de vente faite au client ">
<thead>
<th colspan=3>COMPARAISON DE L'OFFRE PAR RAPPORT A LA VALEUR MARCHE</th>
</thead>
    <tbody>
        <tr>
            <td>Désignation</th>
            <td>Montants</th>
            <td>Unités</th>
        </tr>
        <tr>
            <td>Offre de vente remise au client</td>
            <td>${desplaySellingPrice}</td>
            <td>Euros HT</td>
        </tr>
        <tr>
            <td>Total général de la décomposition de prix</td>
            <td>${desplayTotalGeneral}</td>
            <td>Euros HT</td>
        </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Valeur Négociable</td>
                <td>${desplayDifference}</td>
                <td>Euros HT</td>
            </tr>
        </tfoot>
        </table></center>

     

     <div class="button1">
            <input type="button" value="Retour à l'Accueil" onclick=window.location.href="http://127.0.0.1:5500/index.html" />
            </div>

     </section>
     
     `         
    };
    // <li><h4>le côut de votre terrain est de ${costGround}euros</h4></li>

// };
