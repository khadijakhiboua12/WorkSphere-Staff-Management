//Tableau  contient les donnes 
 let tabEmployer =  JSON.parse(localStorage.getItem("employer")) || [
    {
        id: 1,
        Nom: "hello",
        Role: "Technicien IT",
        Url: "Image_profile1.jpg",
        email: "khadija@gmail.com",
        phone: "061234567",
        is_worked:false,
        zone_work:null ,
        Experience: [
            { Entreprise: "hhhd", Post: "Receptionniste", dateDeub: "12-04-2002" ,dateFin:"12-07-2002"}
        ]
    },
    {
        id: 2,
        Nom: "kkk",
        Role: "Manager",
        Url: "Image_profile2.jpg",
        email: "youssef@gmail.com",
        phone: "0611223344",
         is_worked:false,
        zone_work:null,
        Experience: [
            { Entreprise: "ABC Corp", Post: "Manager", dateDeub: "12-04-2002" ,dateFin:"12-07-2002" }
        ]
    }
];
let container=document.getElementById("cards-container");
let container_reseption_ =document.getElementById("container_Réception")
//fonction de setItem
function setEmployer(tabEmployer){
   localStorage.setItem("employer",JSON.stringify(tabEmployer));
}
setEmployer(tabEmployer);
//fonction de getItem
function   getEmployer(){
     return  JSON.parse(localStorage.getItem("employer") || []);
}

//Affichage la  cartes  de  la page
let data=getEmployer();
function AfficherCarte(data){
    container.innerHTML="";
   for(let i=0;i<data.length;i++){
        const employe=data[i];
        if(employe.is_worked==false){
      container.innerHTML+=`
    <div class="shadow-lg rounded-xl p-4 m-2 flex items-center gap-4 "> 
    <img src="${employe.Url}" class="rounded-full w-20 h-20">
   
     <div class=" flex flex-col">
     <h5 class="id_card font-bold text-lg">${employe.id}</h5>
     <h2 class="font-bold text-lg">${employe.Nom}</h2> 
     <p class="text-gray-600">${employe.Role}</p>
  </div>
    </div>
    
     `;
     }
   }
     
}
AfficherCarte(tabEmployer);
//Fonction pour add plusieur expirience
function addExperience() {
    const container = document.getElementById("experience-container");
    const experienceDiv = document.createElement("div");
    experienceDiv.className = "p-4 border rounded-xl mb-4 bg-gray-100 w-full max-w-[900px]";
    experienceDiv.innerHTML = `
        <div class="grid grid-cols-1 gap-3  ">
            <div>
                <label class="block">Entreprise</label>
                <input type="text" name="entreprise" class="w-full max-w-[200px] p-2 rounded-xl border border-gray-300">
            </div>
            <div>
                <label class="block">Post</label>
                <input type="text" name="post" class="w-full max-w-[200px] p-2 rounded-xl border border-gray-300">
            </div>
        </div>
        <div class="grid grid-cols-2 gap-3 mt-3">
            <div>
                <label class="block">Date Début</label>
                <input type="date" name="dateDebut" class="w-full p-2 rounded-xl border border-gray-300">
            </div>

            <div>
                <label class="block">Date Fin</label>
                <input type="date"  name="dateFin" class="w-full p-2 rounded-xl border border-gray-300">
            </div>
        </div>
    `;
    container.prepend(experienceDiv);
}
//function pour ajouter les employer
function AddWorker(modalId){
    const modal=document.getElementById(modalId);
    modal.classList.toggle("hidden");
}
document.getElementById("btn").addEventListener("click",()=>AddWorker("modal"));
document.getElementById("btncancel").addEventListener("click",()=>AddWorker("modal"));

//preview d'un image 
function previewPhoto() {
    const photoInput = document.getElementById("photoInput");
    const photoPreview = document.getElementById("photoPreview");
    const urlError = document.getElementById("urlError");
    photoInput.addEventListener("input", function() {
        const url = photoInput.value.trim();
        const imageRegex = /^[\w,\s-]+\.(jpg|jpeg|png|gif)$/i;

        if(url === "") {
            photoPreview.src = "";
            photoPreview.classList.add("hidden");
            urlError.textContent = "";
            return;
        }
        if(imageRegex.test(url)) {
            photoPreview.src = url;
            photoPreview.classList.remove("hidden");
            urlError.textContent = "";
        } else {
            photoPreview.src = "";
            photoPreview.classList.add("hidden");
            urlError.textContent = "URL invalide ! Utilisez une image locale (jpg, png, gif).";
        }
    });
}
previewPhoto();

//La fonction de validation de la formulaire
function validateEmployeeForm() {
    let isValid = true;
    const nom = document.getElementById("nomInput").value.trim();
    const role = document.getElementById("roleSelect").value;
    const url = document.getElementById("photoInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const phone = document.getElementById("phoneInput").value.trim();
    const nomError = document.getElementById("nomError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const urlError = document.getElementById("urlError");    
    const nameRegex = /^[A-Za-z]{2,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{8,15}$/;
    const urlRegex =  /^[\w,\s-]+\.(jpg|jpeg|png|gif)$/i;
    nomError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    urlError.textContent = "";
    if(!nameRegex.test(nom)) {
        nomError.textContent = "Nom invalide";
        isValid = false;
    }
    if(!emailRegex.test(email)) {
        emailError.textContent = "Email invalide !";
        isValid = false;
    }
    if(!phoneRegex.test(phone)) {
        phoneError.textContent = "Numéro invalide !";
        isValid = false;
    }
    if(!urlRegex.test(url)) {
        urlError.textContent = "URL invalide !";
        isValid = false;
    }
    const experienceDivs = document.querySelectorAll("#experience-container > div");
    for(let i=0; i<experienceDivs.length; i++){
        const div = experienceDivs[i];
        const entreprise = div.querySelector("input[name='entreprise']");
        const post = div.querySelector("input[name='post']");
        const dateDebut = div.querySelector("input[name='dateDebut']");
        const dateFin = div.querySelector("input[name='dateFin']");
        if(!div.querySelector(".expError")){
            const span = document.createElement("span");
            span.className = "text-red-600 text-sm expError";
            div.appendChild(span);
        }
        const expError = div.querySelector(".expError");
        expError.textContent = "";
        if(entreprise.value.trim() === "" || post.value.trim() === "" || dateDebut.value === "" || dateFin.value === ""){
            expError.textContent = `Tous les champs de l'expérience  sont obligatoires`;
            isValid = false;
        }
    }
    return isValid;
}
document.getElementById("btnsave").addEventListener("click", function(e){
    e.preventDefault();
    if(validateEmployeeForm()){
        saveEmployee();
        alert("Employe sauvegarde avec succe ");
    }
});

// Sauvegarder l'employer 
function saveEmployee() {
    const nom = document.getElementById("nomInput").value;
    const role = document.getElementById("roleSelect").value;
    const url = document.getElementById("photoInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;
    const experienceDivs = document.querySelectorAll("#experience-container > div");
    const experiences = [];
    for (let i = 0; i < experienceDivs.length; i++) {
        const div = experienceDivs[i];
        experiences.push({
            Entreprise: div.querySelector("input[name='entreprise']").value,
            Post: div.querySelector("input[name='post']").value,
            dateDebut: div.querySelector("input[name='dateDebut']").value,
            dateFin: div.querySelector("input[name='dateFin']").value
        });
    }
    const newEmployee = {
        id: tabEmployer.length + 1,
        Nom: nom,
        Role: role,
        Url: url,
        email: email,
        phone: phone,
        Experience: experiences,
        is_worked:false,
        zone_work:null 

    };
    tabEmployer.push(newEmployee);
    setEmployer(tabEmployer);
    document.getElementById("employeForm").reset();
    document.getElementById("experience-container").innerHTML = "";
    document.getElementById("modal").classList.add("hidden");
    AfficherCarte(tabEmployer);
}
//L parie de zone
let _room1 =document.getElementById("room1")
let _room2 =document.getElementById("room2")
let _room3 =document.getElementById("room3")
let _room4 =document.getElementById("room4")
let _room5 =document.getElementById("room5")
let _room6 =document.getElementById("room6")







function get_role_by_room_name(room_name,container_){
    container_.innerHTML=""
    let data = JSON.parse(localStorage.getItem("employer")) || []
    let roles = {
        "Reception": ["Manager", "Réceptionniste", "Nettoyage"],
        "Salle des serveurs" : ["Manager", "Technicien IT", "Nettoyage"],
        "Salle de sécurité":["Manager", "Agent de sécurité", "Nettoyage"],
        "Salle du personnel": ["Manager", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage", "Autres"],
        "Salle de conférence": ["Manager", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage", "Autres"],
        "Salle d'archives": ["Manager"]
}

for(persons of Object.entries(data)){

    for(room_ of Object.entries(roles)){
       if(room_[0] == room_name){

        for(let data_ of room_[1]){
          if(data_==persons.Role){
            
        container_.innerHTML+=`
                <div class="card shadow-lg rounded-xl p-4 m-2 flex items-center gap-4 "> 
                <img src="${persons.Url}" class="rounded-full w-20 h-20">
            
                <div class=" flex flex-col">
                <h5 class="id_card font-bold text-lg">${persons.id}</h5> 
                <h2 class="name font-bold text-lg">${persons.Nom}</h2> 
                <p class="text-gray-600">${persons.Role}</p>
            </div>
          </div>
    
     `;
          }

        }
        
          
       }
       
    }
}


}


function fetch_data(container_to_fetch){
container_to_fetch.innerHTML=""
let data_1 = JSON.parse(localStorage.getItem("employer")) || []
for(data__ of Object.entries(data_1)){
if(data__.id==true){
    container_to_fetch.innerHTML+=`
                <div class="card shadow-lg rounded-xl p-4 m-2 flex items-center gap-4 "> 
                <img src="${data__.Url}" class="rounded-full w-20 h-20">
                <div class=" flex flex-col">
                <h5 class="id_card font-bold text-lg">${data__.id}</h5> 
                <h2 class="name font-bold text-lg">${data__.Nom}</h2> 
                <p class="text-gray-600">${data__.Role}</p>
            </div>
          </div>
     `;
}
}
}
fetch_data(container_reseption_)


_room1.addEventListener("click",()=>{

get_role_by_room_name("Salle de conférence")
})

_room2.addEventListener("click",()=>{

get_role_by_room_name("Reception",container_reseption_)

container_reseption_.addEventListener("click",function(e){
let card = e.target.closest(".card")
let id_clicked=card.querySelector("h5").textContent
let data_2 = JSON.parse(localStorage.getItem("employer")) || []
for(update_umploiyer of Object.entries(data_2)){
    if(update_umploiyer.id ===id_clicked){
        update_umploiyer.is_worked=true
        update_umploiyer.zone_work="Reception"
        localStorage.setItem("employer",JSON.stringify(data_2));
    }
}
  
})





})
_room3.addEventListener("click",()=>{

get_role_by_room_name("Salle des serveurs")
})
_room4.addEventListener("click",()=>{
get_role_by_room_name("Salle de sécurité")

})
_room5.addEventListener("click",()=>{

get_role_by_room_name("Salle du personnel")
})
_room6.addEventListener("click",()=>{

get_role_by_room_name("Salle d'archives")
})



