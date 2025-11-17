//Tableau  contient les donnes 
 tabEmployer=[
{id:1,
 Nom:"khadija",
 Role:["Receptionnist","Technicien iT","Manager","Nettoyage","Agent de securite "],
 Url:"Image_Mobile.jpg",
 email:"khadija@gmail.com",
 phone:"061234567",
 Experience:[
    { 
        Entreprise:"hhhd",
        Post:"Receptionniste",
        Duree:"2 ans"
    }
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
console.log(getEmployer());
