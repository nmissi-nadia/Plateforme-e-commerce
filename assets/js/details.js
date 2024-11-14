


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