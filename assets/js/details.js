/** Consommation de l'API */
const apiUrl = 'https://mohamedmoustir.github.io/api/';
let datatch = [];
let id = location.href.split("?")[1].split("=")[1];

fetch(apiUrl)
    .then(response => response.json())
    .then(function (data){
    datatch.push(data);

});




function afficherProduit() {


};







psnlcard.addEventListener('submit', () => {

    stockerdata();

});





let dataprdts = JSON.parse(localStorage.getItem('produits')) || [];

function stockerdata() {

    let prdt = {
        
        taille: taislct.value,
        couleur: chxclrprdt.value,
        nombre: vleprd.value,
        identifiant: id
    };

    dataprdts.push(prdt);

    localStorage.setItem('produits', JSON.stringify(dataprdts));

   
};
console.log(dataprdts); 




/**////////////////////////////////////////////////////// */




/** Affichage des images et des informations */



/** Declaration des variables et des constantes */
let spneqpnm = document.querySelectorAll(' .spneqpnm');
const tailleprdt = document.getElementById("tailleprdt");
const dcrptprdt = document.getElementById("dcrptprdt");
const cltrprdt = document.getElementById("cltrprdt");
const payprdt = document.getElementById("payprdt");





const taislct = document.getElementById("taislct");
const chxclrprdt = document.getElementById("chxclrprdt");


/**////////////////////////////////////////////////////// */



/** Compteur des produits */

const monprd = document.getElementById("monprd");
const vleprd = document.getElementById("vleprd");
const plsprd = document.getElementById("plsprd");

let cmptr = 0;

function updatecounter(){
    vleprd.value = cmptr;
};

plsprd.addEventListener('click', () => {
    cmptr ++;
    updatecounter();
});

monprd.addEventListener('click', () => {
    if(cmptr > 0){
        cmptr --;
        updatecounter();
    }

});


updatecounter();

/**////////////////////////////////////////////////////// */


/** Caroussel de quatre images */
const chldimg = document.querySelectorAll('#qtrimgs .chldimg img');
const prntimg = document.querySelector('#bgcrssl .fdrimg img');


chldimg.forEach((img) => {
  img.addEventListener('click', (e) => {
    const chngimg = e.target.src;
    prntimg.src = chngimg;
  });
});


/**////////////////////////////////////////////////////// */



/** Caroussel des images */

const crslimgs = document.querySelectorAll('.fdrimg');
const bttnagch = document.getElementById("btnlft");
const bttndrt = document.getElementById("btnrgt");

let currentIndex = 0;

function updateCarousel() {
    crslimgs.forEach((img, index) => {
        if (index === currentIndex) {
            img.classList.remove('hidden'); 
        } else {
            img.classList.add('hidden');
        }
    });
}

bttnagch.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? crslimgs.length - 1 : currentIndex - 1;
    updateCarousel();
});

bttndrt.addEventListener('click', () => {
    currentIndex = currentIndex === crslimgs.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
});

updateCarousel();

/**////////////////////////////////////////////////////// */

