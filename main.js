// ============================================================
// Données initiales : Récupération ou création du tableau
// ============================================================
let tabEmployer = JSON.parse(localStorage.getItem("employer")) || [
    {
        id: 1,
        Nom: "hello",
        Role: "Technicien IT",
        Url: "Image_profile1.jpg",
        email: "khadija@gmail.com",
        phone: "061234567",
        is_worked: false,
        zone_work: null,
        Experience: [
            { Entreprise: "hhhd", Post: "Receptionniste", dateDeub: "12-04-2002", dateFin: "12-07-2002" }
        ]
    },
    {
        id: 2,
        Nom: "kkk",
        Role: "Manager",
        Url: "Image_profile2.jpg",
        email: "youssef@gmail.com",
        phone: "0611223344",
        is_worked: false,
        zone_work: null,
        Experience: [
            { Entreprise: "ABC Corp", Post: "Manager", dateDeub: "12-04-2002", dateFin: "12-07-2002" }
        ]
    }
];

let container = document.getElementById("cards-container");


// ============================================================
// Sauvegarder employé dans localStorage
// ============================================================
function setEmployer(tabEmployer) {
    localStorage.setItem("employer", JSON.stringify(tabEmployer));
}
setEmployer(tabEmployer);

// ============================================================
// Récupérer les employées du localStorage
// ============================================================
function getEmployer() {
    return JSON.parse(localStorage.getItem("employer") || []);
}

const infoModal = document.getElementById('info_');


// ============================================================
// Affichage de la liste principale des employés (sidebar)
// ============================================================
function AfficherCarte(data) {
    container.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        const employe = data[i];
        const div = document.createElement('div');

        if (!employe.is_worked) {

            div.innerHTML = `
            <div class="card rounded-xl p-4 m-2 flex items-center bg-red-400 gap-4 cursor-pointer" data-id="${employe.id}"> 
                <img src="${employe.Url}" class="rounded-full w-20 h-20">
                <div class="flex flex-col">
                    
                    <h2 class="font-bold text-lg">${employe.Nom}</h2> 
                    <p class="text-gray-600">${employe.Role}</p>
                </div>
            </div>
            `;
        }

        container.appendChild(div);


        div.addEventListener('click', () => {
            ouvrirModalInfo(employe);
        });
    }
}
AfficherCarte(tabEmployer);


// ============================================================
// Ouvrir le modal d'informations
// ============================================================
function ouvrirModalInfo(employe) {
    const img = infoModal.querySelector("img");
    const name = infoModal.querySelector(".name");
    const role = infoModal.querySelector(".role");
    const email = infoModal.querySelector(".email");
    const phone = infoModal.querySelector(".phone");
    const Actuel=infoModal.querySelector(".Actuel");
    const experienceContainer = infoModal.querySelector(".Experience");

    img.src = employe.Url;
    name.textContent = employe.Nom;
    role.textContent = employe.Role;
    email.textContent = employe.email;
    phone.textContent = employe.phone;
    Actuel.textContent=employe.zone_work;

    
    experienceContainer.innerHTML = "";

    employe.Experience.forEach(exp => {
        const div = document.createElement("div");
        div.className = "p-2 border rounded-lg mb-2 w-full";
        div.innerHTML = `
            <p><strong>Entreprise:</strong> ${exp.Entreprise}</p>
            <p><strong>Post:</strong> ${exp.Post}</p>
            <p><strong>Début:</strong> ${exp.dateDeub}</p>
            <p><strong>Fin:</strong> ${exp.dateFin}</p>
        `;
        experienceContainer.appendChild(div);
    });

    infoModal.classList.remove("hidden");
}



// ============================================================
// Ajouter une nouvelle expérience dans le formulaire
// ============================================================
function addExperience() {
    const container = document.getElementById("experience-container");
    const experienceDiv = document.createElement("div");

    experienceDiv.className = "p-4 border rounded-xl mb-4 bg-gray-100 w-full max-w-[900px]";
    experienceDiv.innerHTML = `
        <div class="grid grid-cols-1 gap-3">
            <div>
                <label class="block">Entreprise</label>
                <input type="text" name="entreprise" class="w-full p-2 rounded-xl border">
            </div>
            <div>
                <label class="block">Post</label>
                <input type="text" name="post" class="w-full p-2 rounded-xl border">
            </div>
        </div>

        <div class="grid grid-cols-2 gap-3 mt-3">
            <div>
                <label class="block">Date Début</label>
                <input type="date" name="dateDebut"  class="w-full p-2 rounded-xl border">
            </div>
            <div>
                <label class="block">Date Fin</label>
                <input type="date" name="dateFin" class="w-full p-2 rounded-xl border">
            </div>
        </div>
    `;

    container.prepend(experienceDiv);
}


// ============================================================
// Ouvrir / fermer modal d'ajout employé
// ============================================================
function AddWorker(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle("hidden");
}
document.getElementById("btn").addEventListener("click", () => AddWorker("modal"));
document.getElementById("btncancel").addEventListener("click", () => AddWorker("modal"));


// ============================================================
// Prévisualisation de l'image
// ============================================================
const imgInput = document.getElementById('photoInput');
const previewimg = document.getElementById('photoPreview');

imgInput.addEventListener('change', (e) => {
    previewimg.src = e.target.value || "Image_profile1.jpg";
    previewimg.classList.remove("hidden");
});


// ============================================================
// Valider le formulaire d'ajout
// ============================================================
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
    
   
    const nameRegex = /^[A-Za-z\s]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{8,15}$/;

    nomError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    urlError.textContent = "";

    if (!nameRegex.test(nom)) {
        nomError.textContent = "Nom invalide";
        isValid = false;
    }
    if (!emailRegex.test(email)) {
        emailError.textContent = "Email invalide !";
        isValid = false;
    }
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Numéro invalide !";
        isValid = false;
    }

    const experienceDivs = document.querySelectorAll("#experience-container > div");
    for (let div of experienceDivs) {
         const  dateDebut=div.querySelector('input[name="dateDebut"]').value;
         const  dateFin=div.querySelector('input[name="dateFin"]').value;
        if (new Date(dateDebut) > new Date(dateFin)) {
              alert("La date de début doit être antérieure à la date de fin pour toutes les expérience");
            isValid = false;
        }
    }

    return isValid;
}

document.getElementById("btnsave").addEventListener("click", function (e) {
    e.preventDefault();
    if (validateEmployeeForm()) {
        saveEmployee();
        alert("Employé enregistré !");
    }
});


// ============================================================
// Sauvegarder nouvel employé
// ============================================================
function saveEmployee() {

    const nom = document.getElementById("nomInput").value;
    const role = document.getElementById("roleSelect").value;
    const url = document.getElementById("photoInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;

    const experienceDivs = document.querySelectorAll("#experience-container > div");
    const experiences = [];

    for (let div of experienceDivs) {
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
        is_worked: false,
        zone_work: null
    };

    tabEmployer.push(newEmployee);
    setEmployer(tabEmployer);

    document.getElementById("employeForm").reset();
    document.getElementById("experience-container").innerHTML = "";
    document.getElementById("modal").classList.add("hidden");

    AfficherCarte(tabEmployer);
}


// ============================================================
// Variables des rooms
// ============================================================
let _room1 = document.getElementById("room1")
let _room2 = document.getElementById("room2")
let _room3 = document.getElementById("room3")
let _room4 = document.getElementById("room4")
let _room5 = document.getElementById("room5")
let _room6 = document.getElementById("room6")


// ============================================================
// Affichage des employés dans une zone + assignation
// ============================================================
function afficherEmployesZone(room_name, container_) {
    const maxPerZone = {
        "Reception": 3,
        "Salle des serveurs": 2,
        "Salle de sécurité": 2,
        "Salle du personnel": 5,
        "Salle de conférence": 4,
        "Salle d'archives": 1
    };


    const roles_zone = {
        "Reception": ["Manager", "Réceptionniste", "Nettoyage"],
        "Salle des serveurs": ["Manager", "Technicien IT", "Nettoyage"],
        "Salle de sécurité": ["Manager", "Agent de sécurité", "Nettoyage"],
        "Salle du personnel": ["Manager", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage", "Autres"],
        "Salle de conférence": ["Manager", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage", "Autres"],
        "Salle d'archives": ["Manager"]
    };

    let employes = JSON.parse(localStorage.getItem("employer")) || [];
    let rolesAcceptes = roles_zone[room_name] || [];
    let assignedCount = employes.filter(emp => emp.zone_work === container_.id).length;

    
    if (assignedCount >= (maxPerZone[room_name] || 10)) {
        alert(`Limite d'employés pour ${room_name} atteinte !`);
        return;
    }

    // Préparer modal d’assignation
    const assignModal = document.getElementById("assign");
    assignModal.innerHTML = `<div class="bg-white p-4 rounded-xl min-w-[300px] min-h-[400px] flex flex-col items-center">
    <h2 class="font-bold mb-4">Assigner un employé à ${room_name}</h2>
    <div id="listEmployee" class="flex flex-col gap-2 w-full max-h-[300px] overflow-y-auto"></div>
    <button onclick="document.getElementById('assign').classList.add('hidden')" class="mt-4 px-4 py-2 bg-red-500 text-white rounded-xl">Close</button>
</div>`;

    const listEmployee = document.getElementById("listEmployee");

    for (let emp of employes) {
        if (!emp.is_worked && rolesAcceptes.includes(emp.Role)) {
            const div = document.createElement("div");
            div.className = "card cursor-pointer bg-red-500 shadow-lg rounded-xl p-4 m-2 flex items-center gap-4";
            div.innerHTML = `<img src="${emp.Url}" class="rounded-full w-20 h-20">
            <div class="flex flex-col">
                <h5 class="font-bold">${emp.id}</h5>
                <h2 class="font-bold text-lg">${emp.Nom}</h2>
                <p class="text-gray-600">${emp.Role}</p>
            </div>`;
            div.addEventListener("click", () => {
                emp.is_worked = true;
                emp.zone_work = container_.id;
                localStorage.setItem("employer", JSON.stringify(employes));
                assignModal.classList.add("hidden");
                window.location.reload();
            });
            listEmployee.appendChild(div);
        }
    }
    assignModal.classList.remove("hidden");
}


// ============================================================
// Afficher les employés déjà assignés dans les zones
// ============================================================
function aficher_data() {

    let employes = JSON.parse(localStorage.getItem("employer")) || [];

    for (let emp of employes) {

        if (emp.is_worked) {

            const zone = document.getElementById(emp.zone_work);

            zone.innerHTML += `
                <div class="card cursor-pointer bg-blue-500 w-80 shadow-lg rounded-xl p-4 m-2 flex items-center gap-4" data-id="${emp.id}">
                    <img src="${emp.Url}" class="rounded-full w-20 h-20">
                    <div class="flex flex-col">
                        <h2 class="font-bold text-lg">${emp.Nom}</h2>
                        <p class="text-gray-600">${emp.Role}</p>
                        <button class="supprimer rounded-lg bg-red-500 w-10 ml-40">
                            <i class="fa-solid fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
        }
    }

}
aficher_data();


// ============================================================
// Click sur les rooms
// ============================================================
_room1.addEventListener("click", () => afficherEmployesZone("Salle de conférence", document.getElementById("container_conference")));
_room2.addEventListener("click", () => afficherEmployesZone("Reception", document.getElementById("container_reseption_")));
_room3.addEventListener("click", () => afficherEmployesZone("Salle des serveurs", document.getElementById("container_serveurs")));
_room4.addEventListener("click", () => afficherEmployesZone("Salle de sécurité", document.getElementById("container_securite")));
_room5.addEventListener("click", () => afficherEmployesZone("Salle du personnel", document.getElementById("container_personnel")));
_room6.addEventListener("click", () => afficherEmployesZone("Salle d'archives", document.getElementById("container_archives")));


// ============================================================
// Suppression d'un employé depuis une zone
// ============================================================
document.addEventListener("click", (e) => {

    const card = e.target.closest(".card");
    if (!card) return;

    const id = parseInt(card.dataset.id); 
    let employes = JSON.parse(localStorage.getItem("employer")) || [];
    let emp = employes.find(emp => emp.id ==id);

    // Si click sur le bouton supprimer
    if (e.target.closest(".supprimer")) {
        if (emp) {
            emp.is_worked = false;
            emp.zone_work = null;
        }
        localStorage.setItem("employer", JSON.stringify(employes));
        window.location.reload();
        return;
    }

    // Sinon clic ksur la carte => ouvrir le modal
   
    ouvrirModalInfo(emp);
});





// ============================================================
// Fermer modals au clic
// ============================================================
const modals = document.querySelectorAll('.modal');

modals.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.add('hidden');
    });
});

// ============================================================
//   les couleurs des zones
// ============================================================
function color_zone() {
    const zones = [
        { id: "container_reseption_", name: "Réception" },
        { id: "container_serveurs", name: "Salle des serveurs" },
        { id: "container_securite", name: "Salle de sécurité" },
        { id: "container_personnel", name: "Salle du personnel" },
        { id: "container_conference", name: "Salle de conférence" },
        { id: "container_archives", name: "Salle d'archives" }
    ];

    const excluded = ["Salle de conférence", "Salle du personnel"];
    let employes = JSON.parse(localStorage.getItem("employer")) || [];
    zones.forEach(zoneInfo => {
        const container = document.getElementById(zoneInfo.id);
        if (!container) return;
        const parentZone = container.parentElement; 
        const employesDansZone = employes.filter(emp => emp.zone_work === zoneInfo.id).length;
        if (employesDansZone === 0) {
            if (excluded.includes(zoneInfo.name)) {           
                parentZone.style.backgroundColor = "#d1fae5"; 
                parentZone.style.border = "1px solid #34d399"; 
            } else {
        
                parentZone.style.backgroundColor = "#fee2e2"; 
                parentZone.style.border = "1px solid #f87171"; 
            }
            parentZone.style.borderRadius = "12px";
            parentZone.style.padding = "10px";
        } else {          
            parentZone.style.backgroundColor = "";
            parentZone.style.border = "";
            parentZone.style.padding = "10px";
        }
    });
}
window.addEventListener("load",color_zone);
