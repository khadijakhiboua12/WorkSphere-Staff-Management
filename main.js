//Tableau  contient les donnes 
 tabEmployer = [
    {
        id: 1,
        Nom: "khadija",
        Role: ["Technicien IT"],
        Url: "Image_profile1.jpg",
        email: "khadija@gmail.com",
        phone: "061234567",
        Experience: [
            { Entreprise: "hhhd", Post: "Receptionniste", Duree: "2 ans" }
        ]
    },
    {
        id: 2,
        Nom: "youssef",
        Role: ["Manager"],
        Url: "Image_profile2.jpg",
        email: "youssef@gmail.com",
        phone: "0611223344",
        Experience: [
            { Entreprise: "ABC Corp", Post: "Manager", Duree: "3 ans" }
        ]
    }
];

//fonction de setItem
function setEmployer(tabEmployer){
   localStorage.setItem("employer",JSON.stringify(tabEmployer));
}
setEmployer(tabEmployer);
//fonction de getItem
function   getEmployer(){
     return  JSON.parse(localStorage.getItem("employer") || []);
}

//Affichage d'une cartes  la page
let data=getEmployer();
function AfficherCarte(data){
    const container=document.getElementById("cards-container");
    container.innerHTML="";
   for(let i=0;i<data.length;i++){
        const employe=data[i];
      container.innerHTML+=`
    <div class="shadow-lg rounded-xl p-4 m-2 flex items-center gap-4 ">
   
    <img src="${employe.Url}" class="rounded-full w-20 h-20">
   
     <div class=" flex flex-col">
     <h2 class="font-bold text-lg">${employe.Nom}</h2> 
     <p class="text-gray-600">${employe.Role}</p>
  </div>
    </div>
    
     `;
   }
     
}
AfficherCarte(data);
//Fonction pour add plusieur expirience
function addExperience() {
    const container = document.getElementById("experience-container");
    const expDiv = document.createElement("div");
    expDiv.className = "p-4 border rounded-xl mb-4 bg-gray-100";
    expDiv.innerHTML = `
        <!-- Ligne 1 : Entreprise + Post -->
        <div class="grid grid-cols-2 gap-3">
            <div>
                <label class="block">Entreprise</label>
                <input type="text" class="w-full p-2 rounded-xl border border-gray-300">
            </div>

            <div>
                <label class="block">Post</label>
                <input type="text" class="w-full p-2 rounded-xl border border-gray-300">
            </div>
        </div>
        <div class="grid grid-cols-2 gap-3 mt-3">
            <div>
                <label class="block">Date Début</label>
                <input type="date" class="w-full p-2 rounded-xl border border-gray-300">
            </div>

            <div>
                <label class="block">Date Fin</label>
                <input type="date" class="w-full p-2 rounded-xl border border-gray-300">
            </div>
        </div>
    `;
    container.prepend(expDiv);
}


