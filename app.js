let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
};
//on cible nos elements du dom
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');

//on fait apparaitre le détail de ces elements dans la console avec .dir
console.dir('firstname');
console.dir('lastname');
console.dir('email');

//on observe les saisies des value de text en temps reel des champs
firstname.addEventListener('input', function(){
  console.log(firstname.value)
})

//assigner une valeur à la propriété "value " dans le html element
//on impose à l'utilisateur d'inserer dans le champs email la valeur 'gmail.com'
email.value = 'gmail.com';