// _________________________________
//déclaration des variables utilisées dans le code

// test pour github
// __________________________________
// déclaration des valeurs pour les feuilles de calcul
const costGroundByRegion= 65; //prix fixé à 65 e pour l'instant. Il faudra aprés faire une demande de la région de construction et prendre un prix moyen de la région

// ratio du calcul du devis bâtiment HORS TERRAIN
// constante de coût Hall
const costHallCompanyWithTaxesOffGround = 206.45*1.2555;//ratio coût du hall entreprise de construction +taxes PC hors marge constructeur
const costHeightAbove7WithTaxesOffGround = 14*1.2555;//ratio coût par métre supplémentaire au dessus de 7 m à ajouter à costHallCompanyWithTaxesOffGround

// constante de coût Bureaux
const costOfficesCompanyInsideOpenSpaceWithTaxesOffGround = 710*1.2555; //ratio coût des bureaux entreprise de construction intérieur et OpenSpace+taxes PC et Maitrise d'Oeuvre à 12% hors marge constructeur
const costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround = 749.01*1.2555; //ratio coût des bureaux entreprise de construction extérieur et OpenSpace+taxes PC et Maitrise d'Oeuvre à 12% hors marge constructeur
const costOfficesCompanyInsidePartitionedWithTaxesOffGround = 830.07*1.2555; //ratio coût des bureaux entreprise de construction intérieur et Cloisonnée+taxes PC et Maitrise d'Oeuvre à 12% hors marge constructeur
const costOfficesCompanyOutsidePartitionedWithTaxesOffGround = 867.79*1.2555; //ratio coût des bureaux entreprise de construction extérieur et Cloisonnée+taxes PC et Maitrise d'Oeuvre à 12% hors marge constructeur

// constante de coût VRD
const ratioBuilding1WithTaxAndFee = 94*1.2555; //94 euros/m²*(25,64% taxe et frais) de construit si le ration (voirie+Bâtiment)/terrain est <65%
const ratioBuilding2WithTaxAndFee = 78.5*1.2555; //78.5 euros/m²*(25,64% taxe et frais) de construit si le ratio (voirie+Bâtiment)/terrain est >65% 
const ratioRoadAndUtilities1WithTaxAndFee = 95.5*1.2555; //95.5 euros/m² *(25,64% taxe et frais) si le ratio (voirie+Bâtiment)/terrain est <65% 
const ratioRoadAndUtilities2WithTaxAndFee = 55.5*1.2555; //55.5 euros/m² *(25,64% taxe et frais) si le ratio (voirie+Bâtiment)/terrain est >65% 
const ratioPlantations1WithTaxAndFee = 9.75*1.2555; //9.75 euros/m²*(25,64% taxe et frais) pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est <65% 
const ratioPlantations2WithTaxAndFee = 10.80*1.2555; //10.80 euros/m² *(25,64% taxe et frais) pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est >65% 
const ratioFencing1WithTaxAndFee = 4.75*1.2555; //4.75 euros/m² *(25,64% taxe et frais) pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est <65% 
const ratioFencing2WithTaxAndFee = 3.25*1.2555; //3.25 euros/m² *(25,64% taxe et frais) pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est >65% const costRoadAndUtilitiesWithTaxesOffGround = 87;//ratio coût des VRD entreprise uniquement pour la cour +taxes PC hors marge constructeur

// constante de coût SPECIFICITES
const costSoilReinforcement = 19.87*1.2555 ; // 20 e/m² *(25,64% taxe et frais) pour des colonnes réalisées sur l'ensemble du bâtiment à une moyenne de 7m


const addedValueOverHeadCraneOnPoles = 126*1.2555; // euros par poteaux différence entre HEA400 et HEA 555
const addedValueOverHeadCraneFondation = 933*1.2555; // euros par plus value de fondations sous poteau de pont roulant
const addedValueOverHeadCraneRaceway = 285*1.2555 ;// euros par ml (HEA300 +carré plein 2,5x2,5)

const costDockShelter = (11000+4000)*1.2555; //euros par unité ( voir ratio 11000 de matériel quai et 4000 de Gros Oeuvre quai )

const costSectionalDoors = 5000; //euros par unité

const costBlueRate = 5000;// coût d'un tarif bleu
const costYellowRate = 10000;// coût d'un tarif jaune
const costGreenRate = 60000;// coût d'un tarif vert 15000 Enedis + 45000 de transfo pour l'elctricien

const addedValueHeating = 9.22*1.2555;// e/m² pour chauffage aérotherme gaz

const costStair = 20000;// Prix d'un escalier
// ________________________________
// Action en fonction du terrain : je posséde ou pas le terrain
const ground = document.getElementById('choice1');
const noGround = document.getElementById('choice2');

function selectGround() {
        if (ground.checked===true){
          console.log(ground.value);// on log pour vérifier que l'on a bien le retour aprés le check
     }
     else if (noGround.checked===true){
          console.log(noGround.value);// on log pour vérifier que l'on a bien le retour aprés le check
     }
};
// __________________________________
// Questions si le client posséde le terrain ou pas
function redirectionGround(){
    if (ground.checked === true){ 
          
document.body.innerHTML= `
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

<h2>Devis si je connais mon terrain : <div class=titre1>complétez les éléments ci-dessous</div> </h2> 

<!-- METHODE avec onclick pour récupération des données -->

<div class=questionProject>
<label for="areaGround">Quelle est la <b>surface de votre terrain</b>:</label>
<input type="text" placeholder="surface en m²" id="areaGround"> m² <br>
</div>

<div class="questionProject">
<label for="costGround">Quel est le <b>coût de votre terrain</b>:</label>
<input type="text" placeholder="prix en euros" id="costGround"> euros HT <br>
</div>
<!-- bouton valider  -->
        <div class="button">
        <button type="submit" onclick="dataForCost()">valider la réponse</button>
        </div>
</section>        
`;
        inputAreaGround = document.getElementById("areaGround").value;
        inputCostGround = document.getElementById("costGround").value;
          }
 else{
      dataForCost();

 }};

 let inputAreaGround;
 function dataForCost(){
          
     if (typeof (inputAreaGround)=='undefined'){
          inputAreaGround=0}
          else {
               inputAreaGround = document.getElementById("areaGround").value
          }; 

     if (typeof (inputCostGround)=='undefined'){
          inputCostGround=0}
          else {
               inputCostGround = document.getElementById("costGround").value
          }; 

     console.log(inputAreaGround);//retour de inputAreaGround?
     // console.log(inputCostGround);//retour de inputAreaGround?

 document.body.innerHTML= `
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
 <h2> QUESTIONS GENERALES</h2>
<div class="questionProject">
<label for="areaStorage">Quelle est la surface d'atelier ou de stockage (hors bureaux) dont vous avez besoin:</label>
<input type="text" placeholder="surface en m²" id="areaStorage"> m² <br>
</div>

<div class="questionProject">
<label for="heightBuilding">Quelle est la <b>hauteur intérieure du bâtiment projeté</b>:</label>
<input type="text" placeholder="hauteur en m" id="heightBuilding"> m <br>
</div>

<div class="questionProject">
<label for="badSoil"> Votre terrain a t'il besoin de renforcement de sol ? (voir conclusion de l'étude de sol) :</label>
          <select id="selectStudySoil">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
               <option value="iDontKnow"> Je ne sais pas</option>
          </select>
          </p>
</div>
<h2> QUESTIONS CONCERNANTS LES BUREAUX</h2>
<div class="questionProject">
<label for="positionOfficesInside"> Souhaitez-vous la réalisation de vos bureaux dans le volume du Hall <b>(à l'intérieur)</b> ?</label>
          <select id="choiceOfficesInside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="clercks">Calcul du nombre de poste de travail : Combien de <b>personnes travaillent dans les bureaux intérieurs </b> ? </label>
          <input type="text" placeholder="nombre" id="clercksOfficesInside"> employés dans les bureaux intérieurs<br>
          </label>
          <label for="partitionedOfficesInside"> Envisagez-vous la réalisation de bureaux type Open Space pour les employés?  :</label>
          <select id="choiceOpenspaceOfficesInside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="choiceShowroomInside"> Dans ces bureaux, souhaitez-vous la réalisation d'un showroom, d'un studio, atelier...  ?</label>
          <select id="choiceShowroomInside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="choiceShowroomInside">Le cas échéant, quelle est la surface de showroom nécessaire ? </label>
          <input type="text" placeholder="nombre" id="areaShowroomInside"> m²<br>
          </label>
          <label for="socialRoomOfficesInside">Souhaitez-vous la réalisation de locaux sociaux (vestiaires, refectoire) dans ces bureaux ?</label>
          <select id="choiceSocialRoomOfficesInside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="inputWorkersOfficesInside">Pour combien de personnes ? </label>
          <input type="text" placeholder="nombre" id="inputWorkersOfficesInside"> personne(s)<br>
          </label>
          </div>
          <br>
          <br>
<label for="positionOfficesOutside"> Souhaitez-vous la réalisation de vos bureaux en dehors du volume du Hall <b>(à l'extérieur)</b> ?</label>
          <select id="choiceOfficesOutside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="clercks">Calcul du nombre de poste de travail : Combien de <b>personnes travaillent dans les bureaux extérieurs</b> ? </label>
          <input type="text" placeholder="nombre" id="clercksOfficesOutside"> employés dans les bureaux extérieurs<br>
          </label>
          <label for="partitionedOfficesOutside"> Envisagez-vous la réalisation de bureaux type Open Space pour les employés?  :</label>
          <select id="choiceOpenspaceOfficesOutside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="choiceShowroomOutside"> Dans ces bureaux, souhaitez-vous la réalisation d'un showroom, d'un studio, atelier...  ?</label>
          <select id="choiceShowroomOutside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="choiceShowroomOutside">Le cas échéant, quelle est la surface de showroom nécessaire ? </label>
          <input type="text" placeholder="nombre" id="areaShowroomOutside"> m²<br>
          </label>
          <label for="socialRoomOfficesOutside">Souhaitez-vous la réalisation de locaux sociaux (vestiaires, refectoire) dans ces bureaux ?</label>
          <select id="choiceSocialRoomOfficesOutside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="inputWorkersOfficesOutside">Pour combien de personnes ? </label>
          <input type="text" placeholder="nombre" id="inputWorkersOfficesOutside"> personne(s)<br>
          </label>
          </div>
<h2> SPECIFITES DU BATIMENT</h2>
<div class="questionProject">
<label for="overHeadCrane"> Avez - vous besoin d'équiper le bâtiment en pont roulant ?:</label>
          <select id="choiceOverHeadCrane">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
          </select>
          </br>
          <label for="overHeadCrane">Si oui combien de pont roulant ?: (nécessaire pour le renfort de charpente, le renfort de fondations et la création de chemin de roulement mais hors fourniture et pose des ponts) </label>
           <input type="text" id="numberOverHeadCrane" name="overHeadCrane" placeholder="indiquez le nombre de pont" > unité(s)
           <br>
</div>

<div class="questionProject">
<label for="dockShelter"> Avez-vous besoin de quais de déchargement ?:</label>
          <select id="choiceDockShelter">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
          </select>
          <br>
          <label for="dockShelter">Si oui Combien de quai avez-vous besoin ?: </label>
           <input type="text" id="numberDockShelter" name="dockShelter" placeholder="indiquez le nombre de quai(s)" > unité(s)
           <br>
</div>
<div class="questionProject">
<label for="floorSectionalDoor"> Avez-vous besoin de porte de plein pied (accés camion à niveau) ?:</label>
          <select id="choiceFloorSectionalDoor">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
          </select>
          <br>
          <label for="floorSectionalDoor">Si oui Combien de portes avez-vous besoin ?: </label>
           <input type="text" id="numberFloorSectionalDoor" name="floorSectionalDoor" placeholder="indiquez le nombre de porte(s)" > unité(s)
           <br>
</div>
</div>
<div class="questionProject">
<label for="areaRoadAndUtilitiesStorageOutdoor"> Avez-vous besoin d'une cour de stockage ?:</label>
          <select id="choiceAreaStorageOutdoor">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
          </select>
          <br>
          <label for="areaRoadAndUtilitiesStorageOutdoor">Si oui Combien de surface de stockage extérieur avez-vous besoin ?: </label>
           <input type="text" id="areaRoadAndUtilitiesStorageOutdoor" name="areaRoadAndUtilitiesStorageOutdoor" placeholder="indiquez la surface" > m²
           <br>
</div>

<div class="questionProject">
<label for="electricity"> Quel est votre besoin de puissance électrique ?:</label>
          <br>
          <input type="radio" id="choiceBlueRate" name="q4" value="blueRate">
          <label for="choiceBlueRate"> tarif Bleu < à 36 kVA (~36kW) </label>
          <br>
          <input type="radio" id="choiceYellowRate" name="q4" value="yellowRate>
          <label for="choiceYellowRate"> tarif Jaune > à 36 kVA (~36kW) et < à 250 kVA (~250kW)</label>
          <br>
          <input type="radio" id="choiceGreenRate" name="q4" value="greenRate">
          <label for="choiceGreenRate"> tarif Vert > à 250 kVA (~250kW) </label>
          <br>
</div>

<div class="questionProject">
<label for="heating"> Voulez vous chauffer le Hall ?:</label>
          <select id="selectHeating">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
          </select>

           </p>
</div>

<div class="questionProject">
<label for="icpe">  Votre bâtiment est il classé ICPE (installation classée pour l'environnement) pour les rubriques 1510 et 2663 ( à vérifier) et au seuil supérieur de non classé ? :</label>
          <select id="selectIcpe">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
               <option value="iDontKnow"> Je ne sais pas</option>
          </select>
</div>

<div class="questionProject">
<button type="button2" onclick="getAreas()">Valider</button>
</div>
</section>
`;

}
;

// récupération des données

function getAreas() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
     // _____________________________________________________________________________
     // TEXTE DES ERREURS

     const inputWorkersOfficesInside =  Number(document.getElementById("inputWorkersOfficesInside").value);
     const inputWorkersOfficesOutside =  Number(document.getElementById("inputWorkersOfficesOutside").value);
     // if (inputWorkersOfficesOutside==0 &&inputWorkersOfficesInside==0){
     //          alert("vous n'avez pas indiqué de données pour les locaux sociaux de votre projet, il faut des vestiaires pour le personnel hors administratif");
     //          event.stopPropagation();
     //      }
          
     // ___________________________________________ 
     //SURFACE DES BUREAUX
     // récupération des données
          const choiceOfficesInside = document.getElementById('choiceOfficesInside');
          const choiceOfficesOutside = document.getElementById('choiceOfficesOutside');
          // const inputWorkersOfficesInside > récupéré dans texte des erreurs
          // const inputWorkersOfficesOutside > récupéré dans texte des erreurs
          const inputClercksOfficesInside =  Number(document.getElementById("clercksOfficesInside").value);
          const inputClercksOfficesOutside =  Number(document.getElementById("clercksOfficesOutside").value);
          const choiceOpenspaceOfficesOutside = document.getElementById('choiceOpenspaceOfficesOutside');
          const choiceOpenspaceOfficesInside = document.getElementById('choiceOpenspaceOfficesInside');
     
          let areaShowroomInside = Number(document.getElementById("areaShowroomInside").value);
          let areaShowroomOutside = Number(document.getElementById("areaShowroomOutside").value);
          let officesDimensionsInside;
          let officesDimensionsOutside;
          let officesAdministrationInsideDimensions ;
          let officesAdministrationOutsideDimensions;
     
     //CALCUL DE LA SURFACE DES BUREAUX ADMINISTRATIFS
          //bureaux intérieurs Openspace 
          if (choiceOfficesInside.value==="yes"){
          if (choiceOpenspaceOfficesInside.value==="yes"){
               officesAdministrationInsideDimensions = ((inputClercksOfficesInside-3)*10+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 10m² par personne pour les open space mais 3 bureaux fermés de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
          }
          //bureaux intérieurs Cloisonnés
          if (choiceOpenspaceOfficesInside.value==="no"){
               officesAdministrationInsideDimensions = ((inputClercksOfficesInside-3)*15+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 15m² par personne pour les bureaux fermés mais 3 bureaux de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
          }
          }
          if (choiceOfficesInside.value==="no"){
               officesAdministrationInsideDimensions = 0;
          }
          //bureaux extérieurs Openspace 
          if (choiceOfficesOutside.value==="yes"){
          if (choiceOpenspaceOfficesOutside.value==="yes"){
               officesAdministrationOutsideDimensions = ((inputClercksOfficesOutside-3)*10+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 10m² par personne pour les open space mais 3 bureaux fermés de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
          }
          //bureaux extérieurs Cloisonnés
          if (choiceOpenspaceOfficesOutside.value==="no"){
               officesAdministrationOutsideDimensions = ((inputClercksOfficesOutside-3)*15+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 15m² par personne pour les bureaux fermés mais 3 bureaux de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
          }
          }
          if (choiceOfficesOutside.value==="no"){
               officesAdministrationOutsideDimensions = 0;
          };

     //CALCUL DE LA SURFACE DES LOCAUX SOCIAUX
     
          const officesSocialDimensionsInside = (inputWorkersOfficesInside)*10;//les locaux sociaux nombre de travailleurs * 10m²
          const officesSocialDimensionsOutside = (inputWorkersOfficesOutside)*10; //les locaux sociaux nombre de travailleurs * 10m²

    
     // SURFACE BUREAUX ; SURFACE BOX ET CONSTRUITE AU SOL Prise en compte de bureaux réalisé en étage si leur surface est supérieure à 200 m² et qu'ils sont positionnés à l'intérieur et augmentation de la variable areaBuilding
     let areaBuilding;
     let areaBox;
     let addedValueStair; // calcul de la plus value escalier

     //Bureaux Intérieur avec locaux sociaux intérieurs
     if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="no"&& choiceSocialRoomOfficesInside.value ==="yes"){
          officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside+areaShowroomInside);
          officesDimensionsOutside=0;
          if (officesDimensionsInside <= 200){ 
          areaBuilding = Number(document.getElementById("areaStorage").value)+officesDimensionsInside;
          areaBox= Number(document.getElementById("areaStorage").value)+officesDimensionsInside;
          
          }
          else if (officesDimensionsInside > 200){
          areaBuilding = Number(document.getElementById("areaStorage").value)+officesDimensionsInside/2;
          areaBox = Number(document.getElementById("areaStorage").value)+officesDimensionsInside/2;
          addedValueStair=1*costStair;
          }
     }
     //Bureaux Intérieur sans locaux sociaux intérieurs
    else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="no"&& choiceSocialRoomOfficesInside.value ==="no"){
          officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside);
          officesDimensionsOutside=0;
          if (officesDimensionsInside <= 200){ 
          areaBuilding = Number(document.getElementById("areaStorage").value)+officesDimensionsInside;
          areaBox = Number(document.getElementById("areaStorage").value)+officesDimensionsInside;
          }
          else if (officesDimensionsInside > 200){ 
          areaBuilding = Number(document.getElementById("areaStorage").value)+officesDimensionsInside/2;
          areaBox = Number(document.getElementById("areaStorage").value)+officesDimensionsInside/2;
          addedValueStair=1*costStair;
          }
     }
     //Bureaux Extérieur avec locaux sociaux extérieurs
     else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesOutside.value ==="yes"){
          officesDimensionsInside=0;
          officesDimensionsOutside=(officesAdministrationOutsideDimensions+officesSocialDimensionsOutside+areaShowroomOutside);
          if (officesDimensionsOutside <= 200){ 
          areaBuilding = Number(document.getElementById("areaStorage").value)+officesDimensionsOutside;
          areaBox = Number(document.getElementById("areaStorage").value);
          }
          else if (officesDimensionsOutside > 200){ 
          areaBuilding = Number(document.getElementById("areaStorage").value)+officesDimensionsOutside/2;
          areaBox = Number(document.getElementById("areaStorage").value);
          addedValueStair=1*costStair;
          }
     }
     //Bureaux Extérieurs sans locaux sociaux extérieur
     else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesOutside.value ==="no"){
          officesDimensionsInside=0;
          officesDimensionsOutside=(officesAdministrationOutsideDimensions+areaShowroomOutside);
          if (officesDimensionsOutside <= 200){ 
          areaBuilding = Number(document.getElementById("areaStorage").value)+officesDimensionsOutside;
          areaBox = Number(document.getElementById("areaStorage").value);
          }
          else if (officesDimensionsOutside > 200){ 
          areaBuilding = Number(document.getElementById("areaStorage").value)+officesDimensionsOutside/2;
          areaBox = Number(document.getElementById("areaStorage").value);
          addedValueStair=1*costStair;
          }
     }
     //Bureaux Intérieur + Extérieurs avec locaux sociaux intérieurs
     else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesInside.value ==="yes"&&choiceSocialRoomOfficesOutside.value ==="no"){
          officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside+areaShowroomInside);
          officesDimensionsOutside=(officesAdministrationOutsideDimensions+areaShowroomOutside);
          if (officesDimensionsInside <= 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside+officesDimensionsOutside;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=2*costStair;
          }
          else if (officesDimensionsInside <= 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside;
               addedValueStair=1*costStair;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=2*costStair;
          }
     }
     //Bureaux Intérieur + Extérieurs avec locaux sociaux extérieurs
     else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesInside.value ==="no"&&choiceSocialRoomOfficesOutside.value ==="yes"){
          officesDimensionsInside=(officesAdministrationInsideDimensions+areaShowroomInside);
          officesDimensionsOutside=(officesAdministrationOutsideDimensions+officesSocialDimensionsOutside+areaShowroomOutside);
          if (officesDimensionsInside <= 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside+officesDimensionsOutside;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=1*costStair;
          }
          else if (officesDimensionsInside <= 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside;
               addedValueStair=1*costStair;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=2*costStair;
          }
     }
     //Bureaux Intérieur + Extérieur avec locaux sociaux intérieurs + Extérieurs
     else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"&&choiceSocialRoomOfficesInside.value ==="yes"&& choiceSocialRoomOfficesOutside.value ==="yes"){
          officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside +areaShowroomInside);
          officesDimensionsOutside=(officesAdministrationOutsideDimensions+officesSocialDimensionsOutside+areaShowroomOutside);
          if (officesDimensionsInside <= 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside+officesDimensionsOutside;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=1*costStair;
          }
          else if (officesDimensionsInside <= 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside;
               addedValueStair=1*costStair;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("areaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=2*costStair;
          }
     }
     else{
          officesDimensionsInside=0;
          officesDimensionsOutside=0;
          areaBuilding = Number(document.getElementById("areaStorage").value);
          areaBox = Number(document.getElementById("areaStorage").value);
     };
     console.log(officesAdministrationInsideDimensions);
     console.log(officesAdministrationOutsideDimensions);
     console.log(officesSocialDimensionsInside);
     console.log(officesSocialDimensionsOutside);
     console.log(areaShowroomInside);
     console.log(areaShowroomOutside);
     console.log(officesDimensionsInside);
     console.log(officesDimensionsOutside);
     console.log(areaBuilding);
     console.log(areaBox);
     console.log(addedValueStair);

          // Texte BUREAUX A L'INTERIEUR DU HALL / EXTERIEUR HALL

          //Vérification du choix de bureaux à l'intérieur
          let answer31 = [0,1];

          if (choiceOfficesInside.value=="yes"){ 
               answer31=answer31[0];
          }
          else {
               answer31=answer31[1];
               // console.log(answer31);// on log pour vérifier que l'on a bien le retour aprés le check
          }
          //Vérification de l'option choisie pour le texte de bureaux intérieur ou extérieur
          const answerChoiceOfficesInside = {yes :"Il y a des bureaux dans le volume des locaux d'activité", no : "Il n'y a pas de bureaux situés dans les locaux d'activité"};
          x31 = answerChoiceOfficesInside.yes;
          y31 = answerChoiceOfficesInside.no;
          answer31 > 0 ? y31 : y31=x31;
          //Vérification du choix de bureaux à l'extérieur
          let answer32 = [0,1];

          if (choiceOfficesInside.value=="yes"){ 
               answer32=answer32[0];
          }
          else {
               answer32=answer32[1];
               // console.log(answer32);// on log pour vérifier que l'on a bien le retour aprés le check
          }
          //Vérification de l'option choisie pour le texte de bureaux intérieur ou extérieur
          const answerChoiceOfficesOutside = {yes :"Il y a des bureaux à l'extérieur des locaux d'activité", no : "Il n'y a pas de bureaux situés à l'extérieur des locaux d'activité"};
          x32 = answerChoiceOfficesOutside.yes;
          y32 = answerChoiceOfficesOutside.no;
          answer32 > 0 ? y32 : y32=x32;

          // Texte SHOWROOM
          //Récupération des données
          const choiceShowroomInside = document.getElementById('choiceShowroomInside');
          const choiceShowroomOutside = document.getElementById('choiceShowroomOutside');
          //Vérification du choix de showroom Intérieur
          let valueShowroomInside = choiceShowroomInside.value;
          let answer41 = [0,areaShowroomInside];
          switch(valueShowroomInside){
          case'no':
          answer41= answer41[0];
          // console.log(answer41);// vérification de la valeur de answer41
          break;
          case'yes':
          answer41= answer41[1];
          // console.log(answer41); // vérification de la valeur de answer41
          break;
          };
          // surface supplémentaire pour le Show room Intérieur
          areaShowroomInside = Number(answer41);

          //Vérification du choix de showroom Extérieur
          let valueShowroomOutside = choiceShowroomOutside.value;
          let answer42 = [0,areaShowroomOutside];
          switch(valueShowroomOutside){
          case'no':
          answer42= answer42[0];
          // console.log(answer42);// vérification de la valeur de answer42
          break;
          case'yes':
          answer42= answer42[1];
          // console.log(answer42); // vérification de la valeur de answer42
          break;
          };
          // surface supplémentaire pour le Show room Extérieur
          areaShowroomOutside = Number(answer42);

          //Pas de texte pour choix de Show room pour Intérieur/Extérieur
          // ___________________________________________
          // SURFACE DU TERRAIN ET DES VRD
          //Si on connait le terrain > inputAreaGround définie au début de la fonction

          // Si on ne connait pas le terrain :Calcul du terrain necessaire lorsque le choix non a été fait quand on ne connait pas son terrain , peut être fait aprés détermination des variables areaBuilding / officesDimensionsOutside et inside / areaRoadAndUtilities est calculée

          let inputNeedAreaGround;
          let groundValue
          
          let  numberDockShelter = document.getElementById("numberDockShelter").value;
          let  numberFloorSectionalDoor = document.getElementById("numberFloorSectionalDoor").value;
          let  areaRoadAndUtilitiesStorageOutdoor = Number(document.getElementById("areaRoadAndUtilitiesStorageOutdoor").value);
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

          let areaRoadAndUtilities = areaRoadAndUtilitiesDockShelter+areaRoadAndUtilitiesFloorSectionelDoor+areaRoadAndUtilitiesStorageOutdoor+Number((inputClercksOfficesInside+inputClercksOfficesOutside+inputWorkersOfficesInside+inputWorkersOfficesOutside)*(2.5*8*2));//calcul surface VRD selon nombre de quai de porte de plain pied, de surface de cour de stockage et du nombre d'employés
          if (inputAreaGround===0){
               inputNeedAreaGround = ((areaBuilding+areaRoadAndUtilities)*1.2);
          }
          else {
               inputNeedAreaGround = 0;
          };
          
          (inputAreaGround===0)? groundValue= inputNeedAreaGround: groundValue= inputAreaGround;
          
          console.log(numberDockShelter);
          console.log(numberFloorSectionalDoor);
          console.log(areaRoadAndUtilitiesStorageOutdoor);
          console.log(inputClercksOfficesInside);
          console.log(inputClercksOfficesOutside);
          console.log(inputWorkersOfficesInside);
          console.log(inputWorkersOfficesOutside);
          console.log(Number((inputClercksOfficesInside+inputClercksOfficesOutside+inputWorkersOfficesInside+inputWorkersOfficesOutside)*(2.5*8*2)));
          console.log(areaRoadAndUtilitiesDockShelter);
          console.log(areaRoadAndUtilitiesFloorSectionelDoor);
          console.log(areaRoadAndUtilities);
          console.log(inputAreaGround);
          console.log(inputNeedAreaGround);
          console.log(groundValue);
          // _________________________________________________________________
          //___________________________________________________________________________
          // SURFACE ESPACE VERT
          let areaPlantations
          areaPlantations =groundValue-areaRoadAndUtilities-areaBuilding;
          console.log(areaRoadAndUtilities);
          console.log(areaPlantations);
     // _________________________________________________________________
     //COUT ET TEXTES DES SPECIFICITES
     // ____________________________________________________________
          //COUT ET TEXTES SPECIFICITE HAUTEUR DU BATIMENT
          // récupération des données
          const inputHeight = document.getElementById("heightBuilding").value;
          let addedValueHeight;
          if(inputHeight>7){
               addedValueHeight=(inputHeight-7)*costHeightAbove7WithTaxesOffGround;
          }
          else {
               addedValueHeight=0;
          };

          console.log(addedValueHeight);
     // ____________________________________________________________
          //COUT ET TEXTES SPECIFICITE STOCKAGE EXTERIEUR
          // récupération des données
          let inputOutdoorStorage = Number(document.getElementById("areaRoadAndUtilitiesStorageOutdoor").value);
          inputOutdoorStorage === ""? inputOutdoorStorage=0:inputOutdoorStorage;
          //coût du stockage extérieur  :compris dans le VRD 
          
          //Vérification de la taille du terrain pour le texte d'affichage

          const inputAreaGroundWithStorage =((Number(areaBuilding)+Number(areaRoadAndUtilities))*1.2); // areaRoadAndUtilities comprend la surface de stockage
          
          const answerOutDoorStorage = {sufficient :"bonnes", insufficient : "insuffisantes"};
          x1 = answerOutDoorStorage.sufficient;
          y1 = answerOutDoorStorage.insufficient;
          w1 = "prises en compte dans le chiffrage"

          if ((ground.checked===true) && (Number(groundValue)>=(inputAreaGroundWithStorage))) {
               x1=x1;
          }
          else if (noGround.checked===true) {
               x1=w1;
          }else {
               x1=y1;
          };

     // ____________________________________________________
          //COUT ET TEXTES  SPECIFICITE RENFORT DE SOL
          // calcul du coût du renfort de sol

          //Récupération du choix de renfort de sol
          const selectStudySoil = document.getElementById('selectStudySoil');
          
          //Vérification du choix de renfort de sol
          let choice = selectStudySoil.value;
          let answer2 = [0,Number(areaBuilding)];

          switch(choice){
               case'yes':
               choiceStudySoil= answer2[1];
               // console.log(choiceStudySoil); // vérification de la valeur de choiceStudySoil
               break;
               case'no':
               choiceStudySoil= answer2[0];
               // console.log(choiceStudySoil);// vérification de la valeur de choiceStudySoil
               break;
               case'iDontKnow':
               choiceStudySoil= answer2[0];
               // console.log(choiceStudySoil);// vérification de la valeur de choiceStudySoil
               break; 
          };
          const costChoiceSoil = Number(choiceStudySoil*costSoilReinforcement);//calcul de la valeur de renfort de Sol
          // console.log(costChoiceSoil);// vérification de la valeur de costChoiceSoil
          //Vérification de l'option choisie pour le texte d'affichage
          const answerChoiceStudySoil = {yes :"Le bâtiment a besoin de renforcement de sol qui sont calculés dans le coût", no : "le chiffrage est réalisé sans renforcement de sol"};
          x2 = answerChoiceStudySoil.yes;
          y2 = answerChoiceStudySoil.no;

          choiceStudySoil > 0 ? x2 : x2=y2;

     // ____________________________________________________

          // COUT ET TEXTES SPECIFITE PONT ROULANT

          //Récupération des données
          const choiceOverHeadCrane = document.getElementById('choiceOverHeadCrane');
          const numberOverHeadCrane = document.getElementById("numberOverHeadCrane").value;
          //Vérification du choix de renfort de sol
          let valueOverHeadCrane = choiceOverHeadCrane.value;
          let answer5 = [0,numberOverHeadCrane];

          switch(valueOverHeadCrane){
               case'no':
               answer5= answer5[0];
               // console.log(answer5);// vérification de la valeur de answer5
               break;
               case'yes':
               answer5= answer5[1];
               // console.log(answer5); // vérification de la valeur de answer5
               break;
          };
          // calcul du nombre de poteaux renforcés et longeur rail de roulement
               const polesUnderOverHeadCrane = ((((Math.sqrt(areaBox))/6)+1)*2);
               const lengthRaceway = ((Math.sqrt(areaBox))*2);
          // coût de la plus value pont roulant
          const addedValueOverHeadCrane = Number(answer5)*(polesUnderOverHeadCrane*addedValueOverHeadCraneOnPoles+polesUnderOverHeadCrane*addedValueOverHeadCraneFondation+lengthRaceway*addedValueOverHeadCraneRaceway);
          // console.log(addedValueOverHeadCrane);//vérification de la plus value pour pont roulant

          //Vérification de l'option choisie pour le texte d'affichage Réalisée directement dans le texte avec la variable answer5
     // ____________________________________________________
          //COUT ET TEXTES SPECIFICITE NOMBRE DE QUAIS
          //Récupération des données
          const choiceDockShelter = document.getElementById('choiceDockShelter');
          //Vérification du choix
          let valueDockShelter = choiceDockShelter.value;
          let answer6 = [0,numberDockShelter];

          switch(valueDockShelter){
               case'no':
               answer6= answer6[0];
               // console.log(answer6);// vérification de la valeur de answer6
               break;
               case'yes':
               answer6= answer6[1];
               // console.log(answer6); // vérification de la valeur de answer6
               break;
          };

          // coût de la plus value pour les quais niveleur, sas, butoir et gros oeuvre
          const addedValueDockShelter = (Number(answer6)*(costDockShelter));
          
     // ____________________________________________________
          //COUT ET TEXTES SPECIFICITE Porte Sectionnelle de Plain-Pied
          //Récupération des données
          const choiceFloorSectionalDoor = document.getElementById('choiceFloorSectionalDoor');
          //Vérification du choix
          let valueFloorSectionalDoor = choiceFloorSectionalDoor.value;
          let answer7 = [0,numberFloorSectionalDoor];

          switch(valueFloorSectionalDoor){
               case'no':
               answer7= answer7[0];
               // console.log(answer6);// vérification de la valeur de answer6
               break;
               case'yes':
               answer7= answer7[1];
               // console.log(answer6); // vérification de la valeur de answer6
               break;
          };

          // coût de la plus value pour les quais niveleur, sas, butoir et gros oeuvre
          const addedValueFloorSectionalDoor = (Number(answer7)*(costSectionalDoors));
          
     // ____________________________________________________

          // COUT ET TEXTES SPECIFICITE TARIF ELECTRICTE

          //Récupération du choix dU TARIF ELECTRICITE
          const choiceBlueRate = document.getElementById('choiceBlueRate');
          const choiceYellowRate = document.getElementById('choiceYellowRate');
          const choiceGreenRate = document.getElementById('choiceGreenRate');

          // //Vérification du choix de tarif électricité + Vérification de l'option choisie pour le texte d'affichage
          
          let costElectricity = [costBlueRate,costYellowRate,costGreenRate,0];

          let choiceElectricity = {blue :"Le bâtiment est alimenté par un compteur <36kVa", yellow : "Le bâtiment est alimenté par un compteur >36kVa mais < à 250kVa", green : "Le bâtiment est alimenté par un compteur > à 250kVa",nothing:"vous n'avez pas choisi de tarif d'électricité"};
          let x7 = [choiceElectricity.blue, choiceElectricity.yellow,choiceElectricity.green, choiceElectricity.nothing];
          
          if (choiceBlueRate.checked===true){
               costElectricity=costElectricity[0];
               x7=x7[0];
          }
          else if (choiceYellowRate.checked===true){
               costElectricity=costElectricity[1];
               x7=x7[1];
          }
          else if (choiceGreenRate.checked===true){
               costElectricity=costElectricity[2];
               x7=x7[2];
          }
          else {
               costElectricity=costElectricity[3];
               x7= x7[3];
          };
          // console.log(answer7); //vérification de answer7
     // ____________________________________________________
          // COUT ET TEXTES SPECIFICIITE CHAUFFAGE DANS LE HALL PAR AEROTHERME GAZ
          
          //Récupération du choix de CHAUFFAGE 
          const selectHeating = document.getElementById('selectHeating');
          
          //Vérification du choix de chauffage

          let choiceHeating = selectHeating.value;

          switch(choiceHeating){
               case'no':
               // calcul du chauffage dans le Hall
               costHeating=0;
               break;
               case'yes':
               // calcul du chauffage dans le Hall
               costHeating=areaBox*addedValueHeating;
               break; 
          };

          // console.log(costHeating);//vérification de costHeating
          const answerChoiceHeating = {yes :"le Hall est chauffé par aérothermes gaz", no : "Le hall n'est pas chauffé"};
          x8 = answerChoiceHeating.yes;
          y8 = answerChoiceHeating.no;

          costHeating > 0 ? x8 : x8=y8;

     // ____________________________________________________
          // COUT ET TEXTES SPECIFICITE BATIMENT ICPE
          // calcul de la compatibilté de la surface avec ICPE

          // calcul de la surface nécessaire en cas d'Icpe  et comparaison avec la surface terrain pour voir si c'est suffisant
     
          const areaIcpe = Math.round((Math.pow(((Math.sqrt(areaBox))+40),2)));

          sufficientGround = [(Number(groundValue)- areaIcpe),(Number(inputNeedAreaGround)- areaIcpe)];
          groundValue === 0? sufficientGround = sufficientGround[1]:sufficientGround = sufficientGround[0];

          //Récupération du choix Icpe
          const selectIcpe = document.getElementById('selectIcpe');
          
          //Vérification du choix Icpe
          let choiceIcpe = selectIcpe.value;
          let additionalGroundAreaIcpe=[0, sufficientGround];

          switch(choiceIcpe){
               case'no':
               additionalGroundAreaIcpe= additionalGroundAreaIcpe[0];
               // console.log(additionalGroundAreaIcpe);// vérification de la valeur de terrain supplémentaire nécessaire
               break;
               case'yes':
               additionalGroundAreaIcpe= additionalGroundAreaIcpe[1];
               // console.log(additionalGroundAreaIcpe);// vérification de la valeur de terrain supplémentaire nécessaire
               break;
               case'iDontKnow':
               additionalGroundAreaIcpe= additionalGroundAreaIcpe[0];
               // console.log(additionalGroundAreaIcpe);// vérification de la valeur de terrain supplémentaire nécessaire
               break; 
          };

          //  texte d'affichage
          
          const answerChoiceIcpe = {tooSmall :"Le terrain est trop petit pour réaliser un bâtiment de cette surface classé ICPE sur le terrain envisagé, le calcul de valeur tient compte de la plus value terrain sur la base de vos données",good :"Le terrain envisagé est suffisant pour réaliser un bâtiment de cette surface classé ICPE, le calcul de valeur tient compte de la plus value terrain sur la base de vos données",  no : "Pas de classement ICPE"};
          x9 = answerChoiceIcpe.tooSmall;
          y9 = answerChoiceIcpe.good;
          z9 = answerChoiceIcpe.no;


          const answerAreaGround=[areaIcpe,inputNeedAreaGround];
          let u9= answerAreaGround[0];
          let v9= answerAreaGround[1];
          
          if (additionalGroundAreaIcpe < 0 && groundValue>0){
               x9=x9;
               u9=u9;
          }
          else if (additionalGroundAreaIcpe > 0 && groundValue>0){
               x9=y9;
               u9=u9;
          }
          else if (additionalGroundAreaIcpe < 0 && groundValue==0){
               x9='il faut plus de terrain pour un classement ICPE.' ;
               u9=u9;
          }
          else {
               x9=z9;
               u9=v9;
          };
          
          
          //  calcul de la plus value terrain si le bâtiment est ICPE rubrique 1510 et 2663
          // console.log(addedValueIcpe);
          additionalGroundAreaIcpe = Math.abs(additionalGroundAreaIcpe);

          let addedValueIcpe =[((inputCostGround/groundValue)*additionalGroundAreaIcpe),(costGroundByRegion*additionalGroundAreaIcpe)];
          
          groundValue>0?
          addedValueIcpe =addedValueIcpe[0]:addedValueIcpe =addedValueIcpe[1];

          additionalGroundAreaIcpe!== 0 ? addedValueIcpe : addedValueIcpe=0;

          // console.log(inputNeedAreaGround);
          // console.log(groundValue);
          // console.log(areaIcpe);
          // console.log(sufficientGround);
          // console.log(additionalGroundAreaIcpe);
          // console.log(addedValueIcpe); //vérification des valeurs de addedValueIcpe
          // console.log(inputCostGround);
          // console.log(costNeedAreaGround);

// ___________________________________________
//CALCUL COUTS
     //COUT TERRAIN
          const costGround = Number(inputCostGround); //on connait le coût du terrain; inputCostGround c'est la valeur rentrée
          inputAreaGround===0? costNeedAreaGround= Number(inputNeedAreaGround)*costGroundByRegion: costNeedAreaGround=0;//on ne connait pas le coût du terrain soit inputAreaGround===0 alors on calcul la valeur 
     //COUT HALL
          const costBox = Number(areaBox)*(costHallCompanyWithTaxesOffGround +addedValueHeight);
     //COUT DES BUREAUX
          let costOffices
          //bureaux intérieur pas extérieur
          if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="no"){
          //bureaux intérieurs Openspace 
          if (choiceOpenspaceOfficesInside.value==="yes"){
          costOffices = costOfficesCompanyInsideOpenSpaceWithTaxesOffGround*(officesDimensionsInside);
          }
          //bureaux intérieurs Cloisonnés
          if (choiceOpenspaceOfficesInside.value==="no"){
          costOffices = costOfficesCompanyInsidePartitionedWithTaxesOffGround*(officesDimensionsInside-areaShowroomInside)+areaShowroomInside*costOfficesCompanyInsideOpenSpaceWithTaxesOffGround;
          }
          }
          //bureaux extérieur pas intérieur
          else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="yes"){
          // bureaux extérieurs OpenSPace
          if (choiceOpenspaceOfficesOutside.value==="yes"){
               costOffices = costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround*(officesDimensionsOutside);
          }
          // bureaux extérieurs Cloisonnés
          if (choiceOpenspaceOfficesOutside.value==="no"){
               costOffices = costOfficesCompanyOutsidePartitionedWithTaxesOffGround*(officesDimensionsOutside-areaShowroomOutside)+areaShowroomOutside*costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround;
          }
          }
          //bureaux extérieur et intérieur
          else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"){
          // bureaux intérieur Openspace
          if (choiceOpenspaceOfficesInside.value==="yes"){
          // bureaux extérieurs Openspace
          if (choiceOpenspaceOfficesOutside.value==="yes"){
          costOffices = officesDimensionsInside*costOfficesCompanyInsideOpenSpaceWithTaxesOffGround+ costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround*(officesDimensionsOutside);
          }
          // bureaux extérieurs cloisonnés
          else if (choiceOpenspaceOfficesOutside.value==="no"){
          costOffices = officesDimensionsInside*costOfficesCompanyInsideOpenSpaceWithTaxesOffGround+costOfficesCompanyOutsidePartitionedWithTaxesOffGround*(officesDimensionsOutside-areaShowroomOutside)+areaShowroomOutside*costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround;
          }
          }
          // bureaux intérieurs Cloisonné
          else if (choiceOpenspaceOfficesInside.value==="no"){
          // bureaux extérieurs Openspace
          if (choiceOpenspaceOfficesOutside.value==="yes"){
          costOffices = costOfficesCompanyInsidePartitionedWithTaxesOffGround*(officesDimensionsInside-areaShowroomInside)+areaShowroomInside*costOfficesCompanyInsideOpenSpaceWithTaxesOffGround+ costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround*(officesDimensionsOutside);
          }
          // bureaux extérieurs Cloisonnés
          else if (choiceOpenspaceOfficesOutside.value==="no"){
          costOffices = costOfficesCompanyInsidePartitionedWithTaxesOffGround*(officesDimensionsInside-areaShowroomInside)+areaShowroomInside*costOfficesCompanyInsideOpenSpaceWithTaxesOffGround+costOfficesCompanyOutsidePartitionedWithTaxesOffGround*(officesDimensionsOutside-areaShowroomOutside)+areaShowroomOutside*costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround;
          }
          }
          }
          //bureaux ni extérieur ni intérieur
          else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="no"){
          costOffices = 0;
          };
          
          // vérification valeur bureaux
          console.log(costOffices);//vérification du coût des bureaux

     //COUT VRD
         
          let costRoadAndUtilities;

          if (((areaRoadAndUtilities+areaBuilding)/groundValue)> 0.65&& groundValue>5000){
          costRoadAndUtilities= areaBuilding*ratioBuilding2WithTaxAndFee+areaRoadAndUtilities*ratioRoadAndUtilities2WithTaxAndFee+areaPlantations*ratioPlantations2WithTaxAndFee+groundValue*ratioFencing2WithTaxAndFee;
          }
          else {
          costRoadAndUtilities= areaBuilding*ratioBuilding1WithTaxAndFee+areaRoadAndUtilities*ratioRoadAndUtilities1WithTaxAndFee+areaPlantations*ratioPlantations1WithTaxAndFee+groundValue*ratioFencing1WithTaxAndFee;
          };
          console.log(areaBuilding);
          console.log(areaRoadAndUtilities);
          console.log(areaPlantations);
          console.log(groundValue);
          console.log(costRoadAndUtilities);

     //COUT TOTAL
          // log des données du TOTAL
          console.log(inputCostGround);
          console.log(costNeedAreaGround);
          console.log(costBox);
          console.log(costOffices);
          console.log(costRoadAndUtilities);
          console.log(costChoiceSoil);
          console.log(addedValueOverHeadCrane);
          console.log(addedValueDockShelter);
          console.log(addedValueFloorSectionalDoor);
          console.log(costElectricity);
          console.log(costHeating);
          console.log(addedValueIcpe);
          console.log(addedValueStair);
          const costProjectWithoutCommercialMargin= Math.round ((Number(inputCostGround) + Number(costNeedAreaGround) + costBox + costOffices+ costRoadAndUtilities +costChoiceSoil+addedValueOverHeadCrane+addedValueDockShelter+addedValueFloorSectionalDoor+costElectricity+costHeating+addedValueIcpe+addedValueStair)*100/100);// calcul du coût du bâtiment hors marge commerciale
          console.log(costProjectWithoutCommercialMargin);
          const number = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format( costProjectWithoutCommercialMargin);// pour affichage number en euros
          // console.log(number);
     
     //COUT Frais commercial
          const CostDeveloppementAndCommercial=Math.round (0.095*costProjectWithoutCommercialMargin)//calcul du coût du bâtiement comprenant la valeur commerciale de 13%
          const number2 = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format( CostDeveloppementAndCommercial);// pour affichage number2 en euros

     // _______________________________________
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
               <li><h3>non compris marges commerciales promotion et agences (environ 9,5% de la valeur travaux soit ${number2} ) </h3>
               </ul>
               
     <ul>
     <h2>Avec les conditions suivantes :</h2>
     <li><h4> vous avez besoin de ${inputNeedAreaGround} m² minimum de terrain sans classement ICPE. les dimensions de votre terrain sont ${x1} avec un stockage extérieur de ${inputOutdoorStorage}m2</h4></li>
     <li><h4>${x2}</h4></li>
     <li><h4>${y31}</h4></li>
     <li><h4>${y32}</h4></li>
     <li><h4>Vous avez besoin de ${answer5} pont(s) roulant</h4></li>
     <li><h4>Vous avez besoin de ${answer6} quai(s) de déchargement</h4></li>
     <li><h4>${x7}</h4></li>
     <li><h4>${x8}</h4></li>
     <li><h4>${x9}. Vous avez donc besoin de ${u9} m2 de terrain total</h4></li>
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


          
