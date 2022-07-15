function displayModal() {
    const modal = document.getElementById("contact-form");
    const logo = document.querySelector('.logo');
	modal.style.display = "block";
    logo.style.display = "none";
}

function closeModal() {
    const modal = document.getElementById("contact-form");
    const logo = document.querySelector('.logo');
    modal.style.display = "none";
    logo.style.display = "block";
}

// FORMULAIRE DE CONTACT

// La recuperation des elements

const dataForm = document.querySelector('.data__form');
const inputs = document.querySelectorAll('.input-control');
const inpValidation = document.querySelector('.data__form span');

//array1.forEach(element => console.log(element));
//forEach parcourir sans modifier
//map avec la modification
inputs.forEach(input => {
    input.addEventListener('input', function(e) {
        // for each SelectorAll
         console.log(e.target.value);
         if(e.target.value !== "") {
             e.target.parentNode.classList.add('active-input');
         }else if(e.target.value === "") {
             e.target.parentNode.classList.remove('active-input');
         }
     
         if(e.target.value.includes('$')) {
             //console.log("erreur!");
             input.classList.add('erreur');
             inpValidation.innerText = "Les $ sont interdits"
             inpValidation.classList.add('visible');
         } else {
             input.classList.remove('erreur');
             inpValidation.classList.remove('visible');
         }
     })
})
// des qu'on remplisse input
// input.addEventListener('input', function(e) {
//    // for each SelectorAll
//     console.log(e.target.value);
//     if(e.target.value !== "") {
//         e.target.parentNode.classList.add('active-input');
//     }else if(e.target.value === "") {
//         e.target.parentNode.classList.remove('active-input');
//     }

//     if(e.target.value.includes('$')) {
//         //console.log("erreur!");
//         input.classList.add('erreur');
//         inpValidation.innerText = "Les $ sont interdits"
//         inpValidation.classList.add('visible');
//     } else {
//         input.classList.remove('erreur');
//         inpValidation.classList.remove('visible');
//     }
// })



