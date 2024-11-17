/** Consommation de l'API */
const apiUrl = 'https://mohamedmoustir.github.io/api/';
// let datatprds = [];
let id = location.href.split("?")[1].split("=")[1];

let tshrtcart = document.getElementById("affchg1");
let infosctnr2 = document.getElementById("infosctnr2");
let infosctnr = document.getElementById("infosctnr");
let tshrttype = document.getElementById("tshrttype");
let tableauinfos = document.getElementById("tableauinfos");


fetch(apiUrl)
    .then(response => response.json())
    .then(function (data){
    // datatprds.push(data);
    for (let i = 0; i < data.Tshorts.length; i++) {
        if (i == id) {
            tshrtcart.innerHTML = `
            <div id="qtrimgs" class="hidden h-[6.813rem] w-[5.875rem] grid grid-cols-1 gap-y-[1.625rem] ml-[25%] xl:grid xl:pl-[6rem]">
            <div class="chldimg cursor-pointer h-[6.813rem] w-[5.875rem]">
                <img class="" src="${data.Tshorts[id-1].images[0]}" alt="Home Jersey">
            </div>
            <div class="chldimg cursor-pointer h-[6.813rem] w-[5.875rem]">
                <img class="" src="${data.Tshorts[id-1].images[1]}" alt="Away Jersey">
            </div>
            <div class="chldimg cursor-pointer h-[6.813rem] w-[5.875rem]">
                <img class="" src="${data.Tshorts[id-1].images[2]}" alt="Jersey Training">
            </div>
            <div class="chldimg cursor-pointer h-[6.813rem] w-[5.875rem]">
                <img class="" src="${data.Tshorts[id-1].images[0]}" alt="Home Jersey">
            </div>
          </div>

          
          <div class="max-w-[55%] mr-[20%] mx-auto md:h-[27.688rem] md:w-[22.813rem] md:ml-[23%] md:mb-[7%] lg:h-[29.688rem] lg:w-[24.813rem] lg:ml-[27%] xl:h-[31.813rem] xl:w-[30.063rem] xl:pt-[0%] xl:max-w-[481px] xl:ml-[0]">

              <div class="relative xl:h-[31.813rem] xl:w-[30.063rem] xl:pt-[0%]">
                  
                  <div id="bgcrssl" class="relative cursor-pointer h-[19.063rem] pt-[20%] md:h-[27.688rem] md:w-[22.813rem] md:pt-[15.5%] lg:h-[29.688rem] lg:w-[24.813rem] lg:pt-[12.5%] xl:h-[31.813rem] xl:w-[30.063rem] xl:pt-[0%]">

                      <div class="fdrimg" >
                          <img src="${data.Tshorts[id-1].images[0]}"
                              class="object-cover" alt="Home Jersey">
                      </div>

                      <div class="fdrimg hidden duration-700 ease-in-out">
                          <img src="${data.Tshorts[id-1].images[1]}"
                              class="object-cover" alt="Home Jersey">
                      </div>

                      <div class="fdrimg hidden duration-700 ease-in-out">
                          <img src="${data.Tshorts[id-1].images[2]}"
                              class="object-cover" alt="Home Jersey">
                      </div>

                  </div>
                  
                  <button id="btnlft" type="button" class="absolute top-[50%] right-[96%] md:right-[100%]">
                      <i class="fa-solid fa-chevron-left text-[2rem] " style="color: #B5B5B5;"></i>
                  </button>

                  <button id="btnrgt" type="button" class="absolute top-[50%] left-[96%] md:left-[100%]">
                      <i class="fa-solid fa-chevron-right text-[2rem]" style="color: #B5B5B5;"></i>
                  </button>
              </div>
          
          </div>
            
            
            `;
            affichageducrssl();
            affchgcrsslimgs();



            infosctnr2.innerHTML =`
            <h1 class="marqname mb-2 text-lg font-medium text-gray-900 dark:text-white md:font-medium md:text-3xl lg:font-medium lg:text-5xl">${data.Tshorts[id-1].category}</h1>        
            <p class="teamname mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 md:text-2xl md:w-[15rem] md:font-semibold lg:text-4xl lg:w-[20rem] lg:font-semibold">T-shirt <span class="spneqpnm">${data.Tshorts[id-1].title}</span> Originals</p>
            <div class="prix inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-secondary md:text-xl md:font-normal lg:text-2xl">
            ${data.Tshorts[id-1].price} MAD
            </div>
            `;

            infosctnr.innerHTML =`
            <h1 class="marqname mb-2 text-xl font-medium text-gray-900 dark:text-white md:font-medium md:text-4xl lg:font-medium lg:text-6xl">${data.Tshorts[id-1].category}</h1>        
            <p class="teamname mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 md:text-2xl md:w-[15rem] md:font-semibold lg:text-4xl lg:w-[20rem] lg:font-semibold">T-shirt <span class="spneqpnm">${data.Tshorts[id-1].title}</span> Originals</p>
            <div class="prix inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-secondary md:text-xl md:font-normal lg:text-2xl">
            ${data.Tshorts[id-1].price} MAD
            </div>
            `;



            tshrttype.innerHTML = `

            <div id="lclimg" class="cursor-pointer">
                  <img class="h-[3.313rem] w-[3.188rem] md:h-[5.5rem] md:w-[5.25rem] lg:h-[5.85rem] lg:w-[5.55rem] xl:h-[5.5rem] xl:w-[5.25rem]" src="${data.Tshorts[id-1].images[0]}" alt="Home Jersey">
              </div>
              <div id="homimg" class="cursor-pointer">
                  <img class="h-[3.313rem] w-[3.188rem] md:h-[5.5rem] md:w-[5.25rem] lg:h-[5.85rem] lg:w-[5.55rem] xl:h-[5.5rem] xl:w-[5.25rem]" src="${data.Tshorts[id-1].images[1]}" alt="Away Jersey">
              </div>
              <div id="awyimg" class="cursor-pointer">
                  <img class="h-[3.313rem] w-[3.188rem] md:h-[5.5rem] md:w-[5.25rem] lg:h-[5.85rem] lg:w-[5.55rem] xl:h-[5.5rem] xl:w-[5.25rem]" src="${data.Tshorts[id-1].images[2]}" alt="Jersey Training">
              </div>
            
            
            
            `;
            





            tableauinfos.innerHTML = `
            <tr class="border-b-[0.6rem] border-white">

                        <th class="w-[4.875rem] h-[1.25rem] border-r-[0.34rem] border-white px-4 py-[0.32rem] font-medium text-gray-900 bg-gray-300 md:w-[5.875rem] xl:w-[11.25rem]">
                            Taille
                        </th>
                        
                        <td id="tailleprdt" class="w-[9.125rem] h-[1.25rem] px-4 py-[0.32rem] bg-secondary text-white md:w-[13.75rem] lg:w-[15.75rem] xl:w-[21rem] xl:h-[2.5rem]">
                            Large
                        </td>

                    </tr>

                    <tr class="border-b-[0.6rem] border-white">

                        <th class="w-[4.875rem] h-[1.25rem] border-r-[0.34rem] border-white px-4 py-[0.32rem] font-medium text-gray-900 bg-gray-300 md:w-[5.875rem] xl:w-[11.25rem]">
                            League
                        </th>
                        
                        <td id="marqprdt" class="w-[9.125rem] h-[1.25rem] px-4 py-[0.32rem] bg-secondary text-white md:w-[13.75rem] lg:w-[15.75rem] xl:w-[21rem] xl:h-[2.5rem]">
                        ${data.Tshorts[id-1].category}
                        </td>

                    </tr>

                    <tr class="hidden border-b-[0.6rem] border-white xl:table-row">

                        <th class="border-r-[0.34rem] border-white px-4 py-[0.32rem] font-medium text-gray-900 bg-gray-300 w-[11.25rem]">
                            Description
                        </th>
                        
                        <td id="dcrptprdt" class="px-4 py-[0.32rem] bg-secondary text-white w-[21rem] h-[2.5rem]">
                        ${data.Tshorts[id-1].description}
                        </td>

                    </tr>

                    <tr class="border-b-[0.6rem] border-white">

                        <th class="w-[4.875rem] h-[1.25rem] border-r-[0.34rem] border-white px-4 py-[0.32rem] font-medium text-gray-900 bg-gray-300 md:w-[5.875rem] xl:w-[11.25rem]">
                            Couleur
                        </th>
                        
                        <td id="cltrprdt" class="w-[9.125rem] h-[1.25rem] px-4 py-[0.32rem] bg-secondary text-white  md:w-[13.75rem] lg:w-[15.75rem] xl:w-[21rem] xl:h-[2.5rem]">
                            Domicile
                        </td>

                    </tr>

                    <tr class="hidden border-b-[0.6rem] border-white xl:table-row">
                        <th class="border-r-[0.34rem] border-white px-4 py-[0.32rem] font-medium text-gray-900 bg-gray-300 w-[11.25rem]">
                            Pays d'expédition
                        </th>
                        
                        <td id="payprdt" class="px-4 py-[0.32rem] bg-secondary text-white w-[21rem] h-[2.5rem]">
                        ${data.Tshorts[id-1].country}
                        </td>

                    </tr>
            
            `;
            changercouleur();
            




    }};
    
});









/** Validation des Inputs */

psnlcard.addEventListener('submit', (e) => {
    
    const alert1 = document.getElementById("alert1");
    const alert2 = document.getElementById("alert2");
    const alert3 = document.getElementById("alert3");

    e.preventDefault();
    if( taislct.value !== "initial") {
        if(vleprd.value > 0){
            stockerdata();
            alert3.style.display = 'grid';
        }
        else{
            
        alert2.style.display = 'grid';
        }
        

    }
    else{
        alert1.style.display = 'grid';
    }

    vleprd.value = 0;

    setTimeout(() => {
        alert1.style.display = 'none';
        alert2.style.display = 'none';
        alert3.style.display = 'none';
    }, 2500);
    

});


/**////////////////////////////////////////////////////// */


/** Choix de Couleur  */

function changercouleur(){
    const lclimg = document.getElementById("lclimg");
    const homimg = document.getElementById("homimg");
    const awyimg = document.getElementById("awyimg");
    const cltrprdt = document.getElementById("cltrprdt");
    

    lclimg.addEventListener('click', () => {
        chxclrprdt.textContent = "Domicile";
        cltrprdt.textContent = "Domicile";
    });

    homimg.addEventListener('click', () => {
        chxclrprdt.textContent = "Extérieur";
        cltrprdt.textContent = "Extérieur";
        

        
    });

    awyimg.addEventListener('click', () => {
        chxclrprdt.textContent = "Third";
        cltrprdt.textContent = "Third";
        
    });
};




/**////////////////////////////////////////////////////// */



/** Stocker Data dans local storage */

const taislct = document.getElementById("taislct");
let chxclrprdt = document.getElementById("chxclrprdt");
let prices = document.querySelectorAll(' .prix');



let cart = JSON.parse(localStorage.getItem('produits')) || [];

function stockerdata() {

    cart.push({id: id, quantity: vleprd.value, taille: taislct.value, couleur: chxclrprdt.textContent });

    localStorage.setItem('produits', JSON.stringify(cart));

   
};
console.log(cart); 




/**////////////////////////////////////////////////////// */


// ---JavaScript--- :


const panelIcons = document.querySelectorAll(".panel-icons");

panelIcons.forEach(function(icon) {
  icon.addEventListener("click", function () {
    const panelCard = document.getElementById("panel-aside-bar");
    // displayCartItems();
    panelCard.classList.remove("hidden");
  });
});

document.getElementById("close-btn").addEventListener("click", function () {
const panelCard = document.getElementById("panel-aside-bar");

panelCard.classList.add("hidden");
})

const seePanel = document.getElementById("see-panel");
seePanel.addEventListener("click", function () {
const panelCard = document.getElementById("panel-aside-bar");
panelCard.classList.add("hidden");
window.location.href = "../vues/panier.html";

})



// --- JavaScript End---




/** Affichage des images et des informations */



/** Declaration des variables et des constantes */
let spneqpnm = document.querySelectorAll(' .spneqpnm');
const tailleprdt = document.getElementById("tailleprdt");
const dcrptprdt = document.getElementById("dcrptprdt");
const cltrprdt = document.getElementById("cltrprdt");
const payprdt = document.getElementById("payprdt");








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
function affchgcrsslimgs(){
    const chldimg = document.querySelectorAll('#qtrimgs .chldimg img');
    const prntimg = document.querySelector('#bgcrssl .fdrimg img');


    chldimg.forEach((img) => {
    img.addEventListener('click', (e) => {
        const chngimg = e.target.src;
        prntimg.src = chngimg;
    });
    });
};


/**////////////////////////////////////////////////////// */



/** Caroussel des images */

function affichageducrssl(){
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

};


/**////////////////////////////////////////////////////// */