
// déclaration des valeurs pour les calculs
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
    const ratioElectricHeatingHall = 4  // 4e/m² de plancher construit pour le chauffage electrique hors taxes hors marge
    const ratioGasHeatingHall = 9.22  // 9e/m² de plancher construit pour le chauffage gaz hors taxes hors marge
    const ratioFireNetworkHall = 5  // 5e/m² de plancher construit pour le réseau RIA hors taxes hors marge
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
    const ratioInteriorDesignOfficesWithoutOpenSPace = 450  // 300e/m² de plancher construit pour l'aménagement intérieur hors taxes hors marge sans Open Space, Show room, atelier….
//constante des spécificités
    const ratioSoilReinforcement = 19.87 ; // 20 e/m² pour des colonnes réalisées sur l'ensemble du bâtiment à une moyenne de 7m
    const addedValueOverHeadCraneOnPoles = 126; // euros par poteaux
    const addedValueOverHeadCraneRaceway = 285;// euros par ml 
    const addedValueOverHeadCraneFondationByPole = 933; // euros par plus value de fondations sous poteau de pont roulant
    const costDockShelter = 11000; //euros par unité
    const costconcreteWorkDockShelter = 4000; //euros par unité
    const costSectionalDoors = 5000; //euros par unité
    const costBlueRate = 5000;// coût d'un tarif bleu
    const costYellowRate = 10000;// coût d'un tarif jaune
    const costGreenRate = 15000;// coût d'un tarif vert
    const costGreenRateAddedValueElectricity = 45000;// coût du transfo à la charge du lot Electricité
    const ratioPartitionInsideSidingPanel = 90;// 90 e/m² pour cloison de division intérieure du hall
    const costElevator = 35000;// Prix d'un ascenseur comprenant la cabine et la colonne
    const costStair = 20000;// Prix d'un escalier
// _____________________________________________________________________________
// FONCTION
    function costBreakdown(event) {
        // _____________________________________________________________________________
        // TEXTE DES ERREURS
        // let inputSellingPrice = Number(document.getElementById("inputSellingPrice").value);
        // let inputAreaGround = Number(document.getElementById("inputAreaGround").value);
        // let inputCostGround =  Number(document.getElementById("inputCostGround").value);
        // let inputAreaBox = Number(document.getElementById("inputAreaBox").value);
        // let inputAreaOfficesGroundInside = Number(document.getElementById("inputAreaOfficesGroundInside").value);
        // let inputAreaOfficesGroundOutside = Number(document.getElementById("inputAreaOfficesGroundOutside").value);
        // const choiceBlueRate = document.getElementById('choiceBlueRate');
        // const choiceYellowRate = document.getElementById('choiceYellowRate');
        // const choiceGreenRate = document.getElementById('choiceGreenRate');
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
// RECUPERATION DES DONNEES et CALCULS CARACTERISTIQUES BATIMENTS

    //Prix de vente du bâtimet clef en main________________________________________________________
            let inputSellingPrice = Number(document.getElementById("inputSellingPrice").value);
        console.log(inputSellingPrice);
            
    //récupération Hauteur hall
    let inputHeightHall = Number(document.getElementById("inputHeightHall").value);
    console.log(inputHeightHall);
        
    //Les bureaux du Bâtiment____________________________________________________
        //Bureaux Intérieurs
        let choiceOfficesInside = document.getElementById("choiceOfficesInside").value;
            //Surface Longueur Largeur bureaux
            let inputAreaOfficesGroundInside = Number(document.getElementById("inputAreaOfficesGroundInside").value);
            let inputLengthOfficesInside = Number(document.getElementById("inputLengthOfficesInside").value);
            let inputWidthOfficesInside = Number(document.getElementById("inputWidthOfficesInside").value);
            //Etage bureaux
            let inputAreaOfficesFloorInside = Number(document.getElementById("inputAreaOfficesFloorInside").value);
            let inputAreaOfficesInside=inputAreaOfficesGroundInside +inputAreaOfficesFloorInside;
            inputLengthOfficesInside==0? inputLengthOfficesInside=Math.round(Math.sqrt(inputAreaOfficesGroundInside)):inputLengthOfficesInside ; 
            inputWidthOfficesInside==0? inputWidthOfficesInside=Math.round(Math.sqrt(inputAreaOfficesGroundInside)):inputWidthOfficesInside ; 
            inputAreaOfficesGroundInside==0? inputAreaOfficesGroundInside= inputLengthOfficesInside*inputWidthOfficesInside:inputAreaOfficesGroundInside;
            console.log(inputAreaOfficesGroundInside);
            console.log(inputAreaOfficesFloorInside);
            console.log(inputAreaOfficesInside);
            console.log(inputLengthOfficesInside);
            console.log(inputWidthOfficesInside);

            // hauteur des bureaux intérieurs
            let inputHeightOfficesInside;
            if (inputAreaOfficesGroundInside==0 && inputAreaOfficesFloorInside==0) {
                inputHeightOfficesInside = 0;
            }
            if (inputAreaOfficesGroundInside>0 && inputAreaOfficesFloorInside==0){
                inputHeightOfficesInside = 4.5;
            }
            if (inputAreaOfficesGroundInside>0 &&inputAreaOfficesFloorInside>0){
                inputHeightOfficesInside = inputHeightHall-1.20;
            }
            console.log(inputHeightOfficesInside);
        //Bureaux Extérieurs
        let choiceOfficesOutside = document.getElementById("choiceOfficesOutside").value;
            //Surface Longueur Largeur bureaux
            let inputAreaOfficesGroundOutside = Number(document.getElementById("inputAreaOfficesGroundOutside").value);
            let inputLengthOfficesOutside = Number(document.getElementById("inputLengthOfficesOutside").value);
            let inputWidthOfficesOutside = Number(document.getElementById("inputWidthOfficesOutside").value);
            //Etage bureaux
            let inputAreaOfficesFloorOutside = Number(document.getElementById("inputAreaOfficesFloorOutside").value);
            let inputAreaOfficesOutside=inputAreaOfficesGroundOutside +inputAreaOfficesFloorOutside;
            inputLengthOfficesOutside==0? inputLengthOfficesOutside=Math.round(Math.sqrt(inputAreaOfficesGroundOutside)):inputLengthOfficesOutside ; 
            inputWidthOfficesOutside==0? inputWidthOfficesOutside=Math.round(Math.sqrt(inputAreaOfficesGroundOutside)):inputWidthOfficesOutside ; 
            inputAreaOfficesGroundOutside==0? inputAreaOfficesGroundOutside= inputLengthOfficesOutside*inputWidthOfficesOutside:inputAreaOfficesGroundOutside;
            console.log(inputAreaOfficesGroundOutside);
            console.log(inputAreaOfficesFloorOutside);
            console.log(inputAreaOfficesOutside);
            console.log(inputLengthOfficesOutside);
            console.log(inputWidthOfficesOutside);
            
            // hauteur des bureaux
            let inputHeightOfficesOutside
            if (inputAreaOfficesGroundOutside==0 && inputAreaOfficesFloorOutside==0) {
                inputHeightOfficesOutside = 0;
            }
            if (inputAreaOfficesGroundOutside>0 && inputAreaOfficesFloorOutside==0){
                inputHeightOfficesOutside = 4.5;
            }
            if (inputAreaOfficesGroundOutside>0 &&inputAreaOfficesFloorOutside>0){
                inputHeightOfficesOutside = 2*4.5;
            }
            console.log(inputHeightOfficesOutside);
    //Le Hall du Bâtiment____________________________________________________
    //Surface hall
        //inputHeightHall récupérée au début car nécessaire dans les bureaux
        let inputAreaBox = Number(document.getElementById("inputAreaBox").value);
        let inputLengthHall = Number(document.getElementById("inputLengthHall").value);
        let inputWidthHall = Number(document.getElementById("inputWidthHall").value);
        inputLengthHall==0? inputLengthHall=(Math.sqrt(inputAreaBox)):inputLengthHall ; 
        inputWidthHall==0? inputWidthHall=(Math.sqrt(inputAreaBox)):inputWidthHall ; 
        inputAreaBox==0? inputAreaBox= inputLengthHall*inputWidthHall:inputAreaBox;

        let inputAreaHall
        if (inputAreaOfficesGroundInside>0 && inputAreaOfficesGroundOutside>0){
            inputAreaHall = inputAreaBox-inputAreaOfficesGroundInside;
        }
        if (inputAreaOfficesGroundInside>0 && inputAreaOfficesGroundOutside==0){
            inputAreaHall = inputAreaBox-inputAreaOfficesGroundInside;
        }
        if (inputAreaOfficesGroundInside==0 && inputAreaOfficesGroundOutside>0){
            inputAreaHall = inputAreaBox;
        };
        if (inputAreaOfficesGroundInside==0 && inputAreaOfficesGroundOutside==0){
            inputAreaHall = inputAreaBox;
        };

        console.log(inputAreaHall);
        console.log(inputLengthHall);
        console.log(inputWidthHall);

    //Spécificités_________________________________________________
        //Renfort de sol :
        let selectSoilReinforcement = document.getElementById("selectSoilReinforcement").value;

        //Cloison intérieure
        let inputPartitionInside = document.getElementById("inputPartitionInside").value;  

        //Pont roulant :
        let choiceOverHeadCrane = document.getElementById("choiceOverHeadCrane").value; 

        //Niveleur de quai :
        let choiceDockShelter = document.getElementById("choiceDockShelter").value; 
        let numberDockShelter = document.getElementById("numberDockShelter").value; 
        
        //Porte Sectionnelle de plein pied :
        let choiceSectionalDoors = document.getElementById("choiceSectionalDoors").value; 
        let numberFloorSectionalDoor = document.getElementById("numberFloorSectionalDoor").value; 
        
        //Stockage extérieur :
        let choiceStorageOutdoor = document.getElementById("choiceStorageOutdoor").value; 
        let areaRoadAndUtilitiesStorageOutdoor = Number(document.getElementById("areaRoadAndUtilitiesStorageOutdoor").value); 

        //Puissance électrique : voir calcul pour les choixrécupération de donnée intégrée dans le calcul _ ici récupération des quantités tarif bleus et jaune
        let inputBlueRate = document.getElementById("inputBlueRate").value; 
        let inputYellowRate = document.getElementById("inputYellowRate").value; 
        //Open Space dans les bureaux_______________________________________
            let selectOpenSpace = document.getElementById("selectOpenSpace").value;
            let ratioInteriorDesignOffices
            switch(selectOpenSpace){
                case'yes':
                ratioInteriorDesignOffices= ratioInteriorDesignOfficesWithOpenSPace
                break;
                case'no':
                ratioInteriorDesignOffices= ratioInteriorDesignOfficesWithoutOpenSPace
                break;
                };
        console.log(ratioInteriorDesignOffices);
        //Bardage luxe pour les bureaux_______________________________________
            let selectPanelOffices = document.getElementById("selectPanelOffices").value;
            let ratioSidingPanelOffices
            switch(selectPanelOffices){
                case'yes':
                ratioSidingPanelOffices= ratioSidingPanelHighOffices
                break;
                case'no':
                ratioSidingPanelOffices= ratioSidingPanelSimpleOffices
                break;
                };
        console.log(ratioSidingPanelOffices);
         //Ascenseur :
         let choiceElevator = document.getElementById("choiceElevator").value; 


    //Terrain________________________________________________________
        let choiceGroundOwner = document.getElementById("choiceGroundOwner").value;
        let choiceAreaGround = document.getElementById("choiceAreaGround").value;
        let inputAreaGround = document.getElementById("inputAreaGround").value;
        let choiceCostGround = document.getElementById("choiceCostGround").value;
        let inputCostGround = document.getElementById("inputCostGround").value;
    //VRD________________________________________________________
        let choiceAreaRoadAndUtilities = document.getElementById("choiceAreaRoadAndUtilities").value;
        let inputAreaRoadAndUtilities = document.getElementById("inputAreaRoadAndUtilities").value;
    //Tout compris________________________________________________________
        let choiceAllIn = document.getElementById("choiceAllIn").value;
    //TAxes PC________________________________________________________
        let choiceFeeBuildingPermit = document.getElementById("choiceFeeBuildingPermit").value;
    //Insurance________________________________________________________
        let choiceInsurance = document.getElementById("choiceInsurance").value;
    //Maitrise d'Oeuvre________________________________________________________
        let choiceManagement = document.getElementById("choiceManagement").value;
    //Agence commerciale________________________________________________________
        let choiceBusinessAgency = document.getElementById("choiceBusinessAgency").value;
    //Promoteur________________________________________________________
        let choiceDevelopper = document.getElementById("choiceDevelopper").value;
        
//_____________________________________________________________________________________________
    // CALCULS TRAVAUX
        //HALL
            //Massif de fondations Hall
                let numberFondationBlockHall;
                if (inputWidthHall/30<1){
                    numberFondationBlockHall= (Math.ceil((inputLengthHall/6)+1)*2)+(Math.ceil(inputWidthHall/6)*2);
                }
                else{
                    numberFondationBlockHall= Math.ceil((inputLengthHall/6)+1)*Math.ceil(inputWidthHall/30+1)+Math.ceil((inputWidthHall/6)*2);    
                }
                let costFondationBlockHall =ratioFondationBlockHall*numberFondationBlockHall
                console.log(numberFondationBlockHall);
                console.log(costFondationBlockHall);
            //Gros Oeuvre Hall
                let costConcreteWorkHall=ratioConcreteWorkHall*inputAreaHall;
                console.log(costConcreteWorkHall);
            //Structure métallique Hall
                let costMetalFrameHall=ratioMetalFrameHall*inputAreaBox;
                console.log(costMetalFrameHall);
            //Couverture Hall
                let costRoofHall=ratioRoofHall*inputAreaBox;
                console.log(costRoofHall);
            //Bardage Hall
            //  ATTENTION NE TIENT PAS COMPTE DE BARDAGE HAUT DE GAMME POUR LE HALL
                let costSidingPanelSimpleHall=ratioSidingPanelSimpleHall*((inputLengthHall+inputWidthHall)*2*inputHeightHall-inputLengthOfficesOutside*inputHeightOfficesOutside-inputLengthOfficesInside*inputHeightOfficesInside);//on compte Inside et Outside car lorsqu'il y a les 2 Types des bureaux, ils sont souvent séparés
                console.log(costSidingPanelSimpleHall);
            //Dallage Hall
                let costConcreteSlabHall=ratioConcreteSlabHall*inputAreaHall;
                console.log(costConcreteSlabHall);
            //portes et quais Hall
                let costRescueDoors=ratioRescueDoors*(Math.ceil(((inputLengthHall+inputWidthHall)*2)/45));
                console.log(costRescueDoors);
            //Electricité Hall
                    let costElectricityHall=ratioElectricityHall*inputAreaHall;
                    choiceGreenRate.checked===true?
                    costElectricityHall=ratioElectricityHall*inputAreaHall+costGreenRateAddedValueElectricity:costElectricityHall=ratioElectricityHall*inputAreaHall;
                    console.log(costElectricityHall);

        // BUREAUX
            //Massif de fondations
                let numberFondationBlockOffices= (Math.ceil((inputLengthOfficesInside/6)+1))+(Math.ceil(inputWidthOfficesInside/6)*2)+(Math.ceil((inputLengthOfficesOutside/6)+1))+(Math.ceil(inputWidthOfficesOutside/6)*2);
                if (inputWidthOfficesInside/30<1 && inputWidthOfficesOutside/30<1){
                    numberFondationBlockOffices;
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
                let costFondationBlockOffices =ratioFondationBlockOffices*numberFondationBlockOffices
                console.log(costFondationBlockOffices);
            //Gros Oeuvre Offices
                let costConcreteWorkOffices=ratioConcreteWorkOffices*inputAreaOfficesInside+ratioConcreteWorkOffices*inputAreaOfficesOutside;
                console.log(costConcreteWorkOffices);
            //Structure métallique Offices
                let costMetalFrameOffices=ratioMetalFrameOffices*(inputAreaOfficesInside)+ratioMetalFrameOffices*(inputAreaOfficesOutside);
                console.log(costMetalFrameOffices);
            //Couverture et bardage Bureaux
                let costRoofOffices=ratioRoofOffices*(inputLengthOfficesOutside*inputWidthOfficesOutside); // ne pas prendre en compte inputAreaOffices car il tient compte de la surface totale des bureaux
            //  ATTENTION NE TIENT PAS COMPTE DU BARDAGE HAUT DE GAMME POUR LE HALL
                let costSidingPanelOffices=ratioSidingPanelOffices*((inputLengthOfficesOutside+inputWidthOfficesOutside*2)*inputHeightOfficesOutside)+ratioSidingPanelOffices*((inputLengthOfficesInside)*inputHeightOfficesInside);
                console.log(costRoofOffices);
                console.log(costSidingPanelOffices);
            //Dallage Bureaux
                let costConcreteSlabOffices=ratioConcreteSlabOffices*(inputAreaOfficesInside+inputAreaOfficesOutside);
                console.log(costConcreteSlabOffices);
            //Menuiserie Aluminium Bureaux
                let costDoorsAndWindowsOffices=ratioDoorsAndWindowsOffices*(inputAreaOfficesInside+inputAreaOfficesOutside);
                console.log(costDoorsAndWindowsOffices);
            //Plomberie Bureaux
                let costPlumbingOffices=ratioPlumbingOffices*(inputAreaOfficesInside+inputAreaOfficesOutside);
                console.log(costPlumbingOffices);
            // Chauffage des bureaux
                let costHeatingOffices
                let selectHeatingOffices = document.getElementById('selectHeatingOffices').value;
                switch(selectHeatingOffices){
                    case'airConditioner':
                    costHeatingOffices =ratioAirConditionningOffices*(inputAreaOfficesInside+inputAreaOfficesOutside)
                    break;
                    case'hotWaterHeating':
                    costHeatingOffices =ratioHotWaterHeatingOffices*(inputAreaOfficesInside+inputAreaOfficesOutside)
                    break;
                    case'electricityHeating':
                    costHeatingOffices =ratioElectrityHeatingOffices*(inputAreaOfficesInside+inputAreaOfficesOutside)
                    break;                
                };
                console.log(costHeatingOffices);
                //Electricité Bureaux
                    let costElectricityOffices=ratioElectricityOffices*(inputAreaOfficesInside+inputAreaOfficesOutside);
                    console.log(costElectricityOffices);
                //Aménagement Bureaux
                    let costInteriorDesignOffices=ratioInteriorDesignOffices*(inputAreaOfficesInside+inputAreaOfficesOutside);
                    console.log(costInteriorDesignOffices);
        // SPECIFICITES
            //Renfort de sol
                //Calcul
                let costSoilReinforcement;
                switch(selectSoilReinforcement){
                    case'yes':
                    if (choiceOfficesInside==='yes' && choiceOfficesOutside==='no' ||inputAreaOfficesGroundInside>0 && inputAreaOfficesGroundOutside==0){
                        costSoilReinforcement= ratioSoilReinforcement*(inputAreaBox);
                    }
                    if (choiceOfficesInside==='no' && choiceOfficesOutside==='yes' || inputAreaOfficesGroundInside==0 && inputAreaOfficesGroundOutside>0){
                        costSoilReinforcement= ratioSoilReinforcement*(inputAreaBox+inputAreaOfficesGroundOutside);
                    }
                    if (choiceOfficesInside==='yes' && choiceOfficesOutside==='yes' || inputAreaOfficesGroundInside>0 && inputAreaOfficesGroundOutside>0){
                        costSoilReinforcement= ratioSoilReinforcement*(inputAreaBox+inputAreaOfficesGroundOutside);
                    }
                    else if (choiceOfficesInside==='no' && choiceOfficesOutside==='no' || inputAreaOfficesGroundInside>=0 && inputAreaOfficesGroundOutside>=0){
                        costSoilReinforcement= ratioSoilReinforcement*(inputAreaBox+inputAreaOfficesGroundOutside);
                    };
                    break;
                    case'no':
                        costSoilReinforcement= 0;
                    break;
                    };
                console.log(inputAreaBox);
                console.log(inputAreaOfficesGroundOutside);
                console.log(costSoilReinforcement);
            //Cloison(s) intérieure(s)
                //Calcul
                let costPartitionInsideSidingPanel=ratioPartitionInsideSidingPanel*(inputWidthHall*inputHeightHall)*inputPartitionInside;

                let selectPartitionInside = document.getElementById("selectPartitionInside").value;
                switch(selectPartitionInside){
                    case'yes':
                    costPartitionInsideSidingPanel
                    break;
                    case'no':
                    costPartitionInsideSidingPanel = 0;
                    break;
                };
                console.log(costPartitionInsideSidingPanel);
            //Ponts roulants
            //Calcul
                let polesUnderOverHeadCrane;
                let lengthRaceway;
                let addedValueOverHeadCrane;
                let addedValueOverHeadCraneFondations;
                switch(choiceOverHeadCrane){
                    case'yes':
                        polesUnderOverHeadCrane = (Math.ceil((inputLengthHall/6)+1)*2);
                        lengthRaceway = ((inputLengthHall)*2);
                        addedValueOverHeadCrane =(polesUnderOverHeadCrane*addedValueOverHeadCraneOnPoles+lengthRaceway*addedValueOverHeadCraneRaceway);
                        addedValueOverHeadCraneFondations= polesUnderOverHeadCrane*addedValueOverHeadCraneFondationByPole
                        break;
                    case'no':
                        polesUnderOverHeadCrane= 0;
                        lengthRaceway= 0;
                        addedValueOverHeadCrane= 0;
                        addedValueOverHeadCraneFondations=0;
                        break;
                    };
            console.log(polesUnderOverHeadCrane);
            console.log(lengthRaceway);
            console.log(addedValueOverHeadCrane);
            console.log(addedValueOverHeadCraneFondations);

            //Quai Niveleur
                //Calcul
                    let addedValueDockShelter;
                    let addedValueConcreteWorkDockShelter;
                    switch(choiceDockShelter){
                        case'yes':
                            // coût de la plus value pour les quais + plus value pour la voirie aire de manoeuvre
                            addedValueDockShelter = Number(numberDockShelter)*(costDockShelter);
                            //Plus value VRD compté dans le calcul VRD;
                            addedValueConcreteWorkDockShelter = Number(numberDockShelter) *costconcreteWorkDockShelter;//coût de la fosse à haillon
                            break;
                        case'no':
                            addedValueDockShelter = 0;
                            addedValueConcreteWorkDockShelter = 0;
                            break;
                        };
            console.log(addedValueDockShelter);
            console.log(addedValueConcreteWorkDockShelter);

            //Portes Sectionnelles de plain pied
                //Calcul
                    let addedValueSectionalDoors;
                    switch(choiceSectionalDoors){
                        case'yes':
                            // coût de la plus value pour porte sectionnelles
                            addedValueSectionalDoors = Number(numberFloorSectionalDoor)*(costSectionalDoors);
                            //Plus value VRD compté dans le calcul VRD;
                            break;
                        case'no':
                            addedValueSectionalDoors = 0;
                            break;
                        };
            console.log(numberFloorSectionalDoor);
            console.log(addedValueSectionalDoors);
            //Stockage extérieur compté dans le VRD

            // Puissance Electrique
            //Récupération des données
                    //à l'origine de la fonction costBreakdown(event) sauf pour les quantités
            //Calcul
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
            //Chauffage Hall
                //Calcul
                //  ATTENTION TIENT COMPTE UNIQUEMENT DU CHAUFFAGE AEROTHERME GAZ 
                let costGasHeatingHall=ratioGasHeatingHall*inputAreaHall;
                let selectHeatingHall = document.getElementById("selectHeatingHall").value;
                switch(selectHeatingHall){
                    case'yes':
                    costGasHeatingHall
                    break;
                    case'no':
                    costGasHeatingHall = 0;
                    break;
                };
                console.log(costGasHeatingHall);
            //RIA Hall
                //Calcul
                let costFireNetworkHall=ratioFireNetworkHall*inputAreaHall;
                let selectFireNetworkHall = document.getElementById("selectFireNetworkHall").value;
                switch(selectFireNetworkHall){
                    case'yes':
                    costFireNetworkHall
                    break;
                    case'no':
                    costFireNetworkHall = 0;
                    break;
                };
                console.log(costFireNetworkHall);
            //Chauffage bureaux 
                //Calcul : voir bureaux
            //Bardage luxe bureaux 
                //Calcul : voir bureaux
            //Ascenseur bureaux 
                //Calcul
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
            //Escalier bureaux 
                //Calcul
                let numberStairs;
                let addedValueStair;
                if (inputAreaOfficesFloorInside>0 && inputAreaOfficesFloorOutside==0){
                    numberStairs=1;
                    addedValueStair=costStair*numberStairs;
            }
                else if (inputAreaOfficesFloorInside==0 && inputAreaOfficesFloorOutside>0){
                    numberStairs=1;
                    addedValueStair=costStair*numberStairs;
            }
                else if (inputAreaOfficesFloorInside>0 && inputAreaOfficesFloorOutside>0){
                    numberStairs=2;
                    addedValueStair=costStair*numberStairs;
            }
                else if (inputAreaOfficesFloorInside==0 && inputAreaOfficesFloorOutside==0){
                    numberStairs=0;
                    addedValueStair=costStair*numberStairs;
            }
        console.log(addedValueStair);
    
        // TERRAIN

        //pour le cas où on ne connait pas la surface de VRD
                    let areaRoadAndUtilitiesDockShelter;
                    let areaRoadAndUtilitiesFloorSectionelDoor;
        
                    if (numberDockShelter>0 && numberFloorSectionalDoor>0) {
                        areaRoadAndUtilitiesDockShelter=Number(numberDockShelter*5*35+20*5);
                        areaRoadAndUtilitiesFloorSectionelDoor =Number(numberFloorSectionalDoor*(5*20));
                    }
                    if (numberDockShelter>0 && numberFloorSectionalDoor<=0) {
                        areaRoadAndUtilitiesDockShelter=Number(numberDockShelter*5*20+20*20);
                        areaRoadAndUtilitiesFloorSectionelDoor =0;
                    }
                    if (numberDockShelter<=0 && numberFloorSectionalDoor>0) {
                        areaRoadAndUtilitiesDockShelter=0;
                        areaRoadAndUtilitiesFloorSectionelDoor =Number(numberFloorSectionalDoor*(5*20)+20*5);
                    }
                    if (numberDockShelter<=0 && numberFloorSectionalDoor<=0) {
                        areaRoadAndUtilitiesDockShelter=0;
                        areaRoadAndUtilitiesFloorSectionelDoor=0;
                    };
                console.log(areaRoadAndUtilitiesDockShelter);
                console.log(areaRoadAndUtilitiesFloorSectionelDoor);
                console.log(areaRoadAndUtilitiesStorageOutdoor);

             //calcul de la surface du terrain quand elle n'est pas connue
                let areaGround;
                switch(choiceAreaGround){
                    case'yes':
                    areaGround = (inputAreaGround);
                    break;
                    case'no':
                    areaGround =(inputAreaBox+inputAreaOfficesGroundOutside+areaRoadAndUtilitiesDockShelter+areaRoadAndUtilitiesFloorSectionelDoor+areaRoadAndUtilitiesStorageOutdoor+(((inputAreaOfficesInside+inputAreaOfficesOutside)/15)*(2.5*8*1.2)))*1.2;
                    break;
                    };
                console.log(areaGround);
            //calcul du coût du terrain quand il n'est pas connu
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
        //VRD
            //calcul de la surface de VRD
                let areaRoadAndUtilities;
                let areaBuilding;
                let areaPlantations;

                switch(choiceAreaRoadAndUtilities){
                    case'yes':
                    if (choiceOfficesInside==='yes' && choiceOfficesOutside==='no' || inputAreaOfficesGroundInside>0 && inputAreaOfficesGroundOutside==0){
                        areaRoadAndUtilities = inputAreaRoadAndUtilities;
                        areaBuilding = inputAreaBox;
                        areaPlantations =areaGround-areaRoadAndUtilities-areaBuilding;
                    }
                    if (choiceOfficesInside==='no' && choiceOfficesOutside==='yes' || inputAreaOfficesGroundInside==0 && inputAreaOfficesGroundOutside>0){
                        areaRoadAndUtilities = inputAreaRoadAndUtilities;
                        areaBuilding = inputAreaBox+inputAreaOfficesGroundOutside;
                        areaPlantations =areaGround-areaRoadAndUtilities-areaBuilding;
                        }
                    if (choiceOfficesInside==='yes' && choiceOfficesOutside==='yes' || inputAreaOfficesGroundInside>0 && inputAreaOfficesGroundOutside>0){
                        areaRoadAndUtilities = inputAreaRoadAndUtilities;
                        areaBuilding = inputAreaBox+inputAreaOfficesGroundOutside;
                        areaPlantations =areaGround-areaRoadAndUtilities-areaBuilding;
                        }
                    if (choiceOfficesInside==='no' && choiceOfficesOutside==='no' || inputAreaOfficesGroundInside>=0 && inputAreaOfficesGroundOutside>=0){
                        areaRoadAndUtilities = inputAreaRoadAndUtilities;
                        areaBuilding = inputAreaBox+inputAreaOfficesGroundOutside;
                        areaPlantations =areaGround-areaRoadAndUtilities-areaBuilding;
                        }
                    break;
                    case'no':
                        if (choiceOfficesInside==='yes' && choiceOfficesOutside==='no'|| inputAreaOfficesGroundInside>0 && inputAreaOfficesGroundOutside==0){
                        areaRoadAndUtilities = areaRoadAndUtilitiesDockShelter+areaRoadAndUtilitiesFloorSectionelDoor+areaRoadAndUtilitiesStorageOutdoor+(((inputAreaOfficesInside+inputAreaOfficesOutside)/15)*(2.5*8*1.2));// quand on ne connait pas la surface de voiries, elle est calculé en fonction des quais, portes sectionneLles, stockage ext et besoin de parking des bureaux
                        areaBuilding = inputAreaBox;
                        areaPlantations =areaGround-areaRoadAndUtilities-areaBuilding;
                    }
                    if (choiceOfficesInside==='no' && choiceOfficesOutside==='yes'|| inputAreaOfficesGroundInside==0 && inputAreaOfficesGroundOutside>0){
                        areaRoadAndUtilities =areaRoadAndUtilitiesDockShelter+areaRoadAndUtilitiesFloorSectionelDoor+areaRoadAndUtilitiesStorageOutdoor+(((inputAreaOfficesInside+inputAreaOfficesOutside)/15)*(2.5*8*1.2));//idem
                        areaBuilding = (inputAreaBox+inputAreaOfficesGroundOutside);
                        areaPlantations =areaGround-areaRoadAndUtilities-areaBuilding;
                        }
                    if (choiceOfficesInside==='yes' && choiceOfficesOutside==='yes'|| inputAreaOfficesGroundInside>0 && inputAreaOfficesGroundOutside>0){
                        areaRoadAndUtilities =areaRoadAndUtilitiesDockShelter+areaRoadAndUtilitiesFloorSectionelDoor+areaRoadAndUtilitiesStorageOutdoor+(((inputAreaOfficesInside+inputAreaOfficesOutside)/15)*(2.5*8*1.2));//idem
                        areaBuilding = (inputAreaBox+inputAreaOfficesGroundOutside);
                        areaPlantations =areaGround-areaRoadAndUtilities-areaBuilding;
                        }
                    if (choiceOfficesInside==='no' && choiceOfficesOutside==='no'|| inputAreaOfficesGroundInside>=0 && inputAreaOfficesGroundOutside>=0){
                        areaRoadAndUtilities =areaRoadAndUtilitiesDockShelter+areaRoadAndUtilitiesFloorSectionelDoor+areaRoadAndUtilitiesStorageOutdoor+(((inputAreaOfficesInside+inputAreaOfficesOutside)/15)*(2.5*8*1.2));//idem
                        areaBuilding = (inputAreaBox+inputAreaOfficesGroundOutside);
                        areaPlantations =areaGround-areaRoadAndUtilities-areaBuilding;
                        }
                    break;
                    };
                console.log(areaRoadAndUtilities);
                console.log(areaBuilding);
                console.log(areaPlantations);
            //calcul du poste VRD
                let costRoadAndUtilities;
                if (((areaRoadAndUtilities+areaBuilding)/areaGround)> 0.65&& areaGround>5000){
                    costRoadAndUtilities= areaBuilding*ratioBuilding2+areaRoadAndUtilities*ratioRoadAndUtilities2+areaPlantations*ratioPlantations2+areaGround*ratioFencing2;
                }
                else {
                    costRoadAndUtilities= areaBuilding*ratioBuilding1+areaRoadAndUtilities*ratioRoadAndUtilities1+areaPlantations*ratioPlantations1+areaGround*ratioFencing1;
                }
                console.log(costRoadAndUtilities);
            //calcul du poste Total travaux HT
                let costTotalWorks=costRoadAndUtilities+costSoilReinforcement+costFondationBlockHall+addedValueOverHeadCraneFondations+costConcreteWorkHall+addedValueConcreteWorkDockShelter+costFondationBlockOffices+costConcreteWorkOffices+costMetalFrameHall+costMetalFrameOffices+addedValueOverHeadCrane+costRoofHall+costSidingPanelSimpleHall+costPartitionInsideSidingPanel+costSidingPanelOffices+costRoofOffices+costConcreteSlabHall+costConcreteSlabOffices+costRescueDoors+addedValueDockShelter+addedValueSectionalDoors+costDoorsAndWindowsOffices+costGasHeatingHall+costFireNetworkHall+costPlumbingOffices+costHeatingOffices+costElectricityHall+costElectricityOffices+costInteriorDesignOffices+addedValueStair+addedValueElevator;
                console.log(costTotalWorks);

            //calcul du DIVERS
                //Clef en main
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
                //Taxes Permis de construire
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
                //Dommage Ouvrage
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
                //Maitrise d'Oeuvre
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
                //Agence commerciale
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
                //Promoteur
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
                //calcul du poste Total Administrative
                    let costTotalAdministrative=costGround+costAllIn+costFeeBuildingPermit+costInsurance+costManagement+costBusinessAgency+costDevelopper;
                    console.log(costTotalAdministrative);
                //calcul du Total Général pour comparaison avec L'offre reçue par le client
                    let costTotalGeneral=costTotalAdministrative+costTotalWorks;
                    console.log(costTotalGeneral);
                //calcul de La différence entre le Total Général/Offre reçue par le client
                    let costDifference=inputSellingPrice-costTotalGeneral;
                    console.log(costDifference);

//_____________________________________________________________________________________________
// Affichage de répartition des Lots
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
                    let desplayInteriorDesignOffices =costInteriorDesignOffices+addedValueElevator+addedValueStair;
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
        else if(inputAreaBox == Number(document.getElementById("inputLengthHall").value)*Number(document.getElementById("inputWidthHall").value))
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
