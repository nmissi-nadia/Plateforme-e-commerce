// const cart = [
//   {
//     "id": 1,
//     "title": "Real Madrid",
//     "quantity": 3,
//     "price": 109.95,
//     "description": "Sac à dos robuste conçu pour les joueurs de football du Real Madrid, avec une poche rembourrée pour les ordinateurs portables jusqu'à 15 pouces. Ligue : La Liga, Pays : Espagne.",
//     "category": "La Liga",
//     "country": "Espagne",
//     "images": [
//       "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0195-01-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=75",
//       "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0201-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=75",
//       "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0205-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=75"
//     ],
//     "rating": {
//       "rate": 4.5,
//       "count": 120
//     }
//   },
//   {
//     "id": 2,
//     "title": "FC Barcelona",
//     "quantity": 3,
//     "price": 22.3,
//     "description": "T-shirt d'entraînement de football ajusté avec un tissu anti-humidité pour une respirabilité et un confort lors des matchs et des entraînements intensifs. Ligue : La Liga, Pays : Espagne.",
//     "category": "La Liga",
//     "country": "Espagne",
//     "images": [
//       "https://store.fcbarcelona.com/cdn/shop/files/25100BM_1_86eb0beb-5621-4ac0-a371-fffc816c53ae.jpg?v=1728911048&width=493",
//       "https://store.fcbarcelona.com/cdn/shop/files/VO240917A71454_med_4bceeb70-c419-4d90-b73c-1c5995707991.jpg?v=1726649023&width=493",
//       "https://store.fcbarcelona.com/cdn/shop/files/25200C_1.jpg?v=1725428228&width=493"
//     ],
//     "rating": {
//       "rate": 4.1,
//       "count": 259
//     }
//   },
//   {
//     "id": 3,
//     "title": "Manchester United",
//     "quantity": 3,
//     "price": 55.99,
//     "description": "Veste légère en coton pour les joueurs de football, idéale pour les échauffements et les détentes. Matériau respirant pour un ajustement confortable. Ligue : Premier League, Pays : Angleterre.",
//     "category": "Premier League",
//     "country": "Angleterre",
//     "images": [
//       "https://mufc-live.cdn.scayle.cloud/images/8ed8c14d2c334556c14da1116ba32a50.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
//       "https://mufc-live.cdn.scayle.cloud/images/0410e2099b1d2ba812e40aba0a9719d5.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
//       "https://mufc-live.cdn.scayle.cloud/images/0dd8a9fe914d7bca2c29eb631fa44e96.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff"
//     ],
//     "rating": {
//       "rate": 4.7,
//       "count": 500
//     }
//   }
// ];
// //--------------------------









const panelIcons = document.querySelectorAll(".panel-icons");

panelIcons.forEach(function(icon) {
  icon.addEventListener("click", function () {
    const panelCard = document.getElementById("panel-aside-bar");
    displayCartItems();
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
    
    //----------------------------------------------------------------------------------------------------------------------------------
    function getCartFromLocalStorage() {
      return JSON.parse(localStorage.getItem('cart')) || [];
  }
  const carts=JSON.parse(localStorage.getItem('cart')) || [];
  // Tant que le tableau cart ne se lie pas avec les deux pages catalogue et détails produit , cette logique ne peut pas etre effectuée 
  
    // localStorage.setItem("carts", JSON.stringify(carts));

//     // Simuler l'importation des données depuis "cart" (tableau partagé entre les pages)
// let cart = JSON.parse(localStorage.getItem('carts')) || [];


// Afficher les produits dans le panier
function displayCartItems() {

  // const carts = getCartFromLocalStorage();

  const pagePannel = document.getElementById('page-panel');
  const cartItemsDiv = document.getElementById('aside-panel');
  const totalPriceDiv = document.getElementById('total-price');

  cartItemsDiv.innerHTML = '';
  pagePannel.innerHTML = '';
  let totalPrice = 0;
  console.log(carts);
  if (carts.length === 0) {
    cartItemsDiv.innerHTML = `
      <div class="flex w-full mx-2 mt-2 mb- 10">
        <div class="flex justify-center items-center">
          <h3>Votre Panier est vide !</h3>
        </div>
      </div>
    `; // à modifier le message de panier vide
    totalPriceDiv.innerHTML = '0,00 €';
    pagePannel.innerHTML = `
      <div class="item md:flex text-red-500 items-center justify-center" id="pannel">
        <h1 class="text-primary text-center mt-10 text-2xl">Ouups .. Le panier est vide</h1>
      </div>
    `;
    return;
  }

  // cart.forEach((item, index) => {
  carts.forEach((item) => {
    const productDiv = document.createElement('div');
    const pageProductDiv = document.createElement('div');
    productDiv.className = 'cart-item';
    pageProductDiv.className = 'pannel';
    productDiv.innerHTML = `
      <div class="flex bg-red-100 mb-4 p-4 rounded-lg justify-between">
        <div class="item-pic w-1/4">
          <div class="flex flex-col justify-center m-auto">
            <img class="h-full w-full rounded-lg" src="${item.images}" alt="${item.title}">
            <div class="flex rounded-md shadow-sm justify-around mt-2" role="group">
              <button type="button" class="bg-primary text-sm h-6 px-1 rounded-l-lg text-accent-2 "><i class="fa-solid fa-minus"></i></button>
              <button type="button" class="bg-primary text-sm h-6 px-4 text-accent-2 "><span>${item.quantity}</span></button>
              <button type="button" class="bg-primary text-sm h-6 px-1 rounded-r-lg text-accent-2 "><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
        <div class="infos bg-accent-2 w-[70%] flex flex-col justify-between rounded-lg">
          <div class="p-3">
            <div class="title-price flex justify-between ">
              <h3 class="text-lg">${item.title}</h3>
              <i class="fa-solid fa-trash text-secondary text-right cursor-pointer mt-1 sm:text-2xl sm:mt-0"></i>
            </div>
            <div class="title-price flex justify-between">
              <h5 class="text-sm">Livraison gratuite</h5>
            </div>
          </div>
          <div class="p-3">
            <h3 class="font-bold text-primary text-right"><span>${item.price}</span> MAD</h3>
          </div>
        </div>
      </div>
    `;
    totalPrice += item.price * item.quantity;
    cartItemsDiv.appendChild(productDiv);
    
    pageProductDiv.innerHTML = `
    <div id="pannel" class="pannel bg-red-100 p-2 m-2 rounded-lg">
      <div class="item md:flex">
        <a href="#"
          class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl bg-gray-100 p-4 m-3">
          <div class="flex md:w-full md:h-full">
            <img class="rounded-t-lg border border-primary border-b-0 md:border-0 md:cover" src="${item.images}"
              alt="${item.title}">
          </div>
          <div
            class=" md:w-full md:h-full flex flex-col w-full p-4 bg-accent-2 border border-t-0 border-primary md:border md:border-0 md:shadow-2xl rounded-b-lg md:rounded-lg">
            <div class="flex sm:justify-between items-center">
              <h5 class="mb-2 text-large font-bold text-primary">${item.title}</h5>
              <i class="fa-solid fa-trash text-secondary text-right cursor-pointer mt-1 sm:text-2xl sm:mt-0"></i>
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.description}</p>
            <h3 class="mb-2 text-sm font-bold tracking-tight text-primary">Livraison entre le 12 et 17 Novembre 2024
            </h3>
            <div class="flex justify-between sm:px-10 md:flex md:justify-between md:px-2">
              <div class="inline-flex rounded-md shadow-sm" role="group">
                <button type="button"
                  class="px-2 py-2 md:py-0 text-sm font-medium text-accent-2 bg-secondary border border-gray-200 rounded-s-lg hover:bg-pink-hover hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"><i
                    class="fa-solid fa-minus"></i></button>
                <button type="button"
                  class="px-4 py-2 text-sm font-medium text-accent-2 bg-secondary border-t border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 md:py-1">1</button>
                <button type="button"
                  class="px-2 py-2 text-sm font-medium text-accent-2 bg-secondary border border-gray-200 rounded-e-lg hover:bg-pink-hover hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"><i
                    class="fa-solid fa-plus"></i></button>
              </div>
              <div class="md:flex md:items-center">
                <h2 class="text-xl text-primary font-bold md:text-sm md:px-0">${item.price}</span> MAD</h2>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    `;
    pagePannel.appendChild(pageProductDiv);
  });

  totalPriceDiv.innerHTML = `<p>TOTAL PANIER : ${totalPrice} €</p>`;
}






// Générer un devis ----------------------------------------------------------------------------------
document.getElementById('devis-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const clientName = document.getElementById('client-name').value;
  const clientPhone = document.getElementById('client-phone').value;
  const clientAdress = document.getElementById('client-adress').value;

  const quoteDiv = document.getElementById('devis');
  const quoteContent = document.getElementById('devis-content');

  const today = new Date();
  console.log(today)
  const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

  quoteContent.innerHTML = `
      <div id="entete" class="flex justify-between mb-14 mt-6">
        <h1 class="text-lg font-bold">DEVIS N° <span>001</span>/<span>2024</span></h1>
        <img class="w-1/3" src="../assets/imgs/red-blue-logo.png" alt="sporteez logo">
      </div>
      <div id="infos" class="flex mb-8 justify-between">
        <div>
          <h2 class="font-bold">SPORTEEZ</h2>
          <p>3, Avenue Roches Noires <br>10 000, Casablanca, Maroc <br>Téléphone : +2126 66 66 66 66</p>
        </div>
        <div class="w-1/3">
          <h3 class="font-bold text-sm">Destinataire :</h3>
          <h5>${clientName}</h5>
          <h6>${clientAdress}</h6>
        </div>
      </div>
      <hr class="mb-4 border-1 border-primary color-primary">
      <div class="flex justify-between mb-8">
        <div>
          <h6>Date du devis :</h6>
          <h6>Référence du devis :</h6>
          <h6>Date de validité du devis :</h6>
          <h6>Emis par :</h6>
          <h6>Contact Client :</h6>
          <h6>Date de débit de la présentation :</h6>
        </div>
        <div class="mr-14">
          <h6>${formattedDate}</h6>
          <h6>001/2024</h6>
          <h6>02/12/2024</h6>
          <h6>Dadssi</h6>
          <h6>${clientPhone}</h6>
          <h6>25/11/2024</h6>
        </div>
      </div>
      <hr class="mb-4 border-1 border-primary color-primary">
      <div id="item-line-container" class="flex flex-col w-full mb-4">
      
      </div>
      <div class="flex w-full justify-end">
        <div id="totals">
          <h3 class="font-bold text-xs">TOTAL HT</h3>
          <h3 class="font-bold text-xs">TOTAL TVA</h3>
          <h3 class="font-bold text-xs">TOTAL TTC</h3>
        </div>
        <div class="ml-28 mr-6" id="totals-chiffres">
          <h3 class="font-bold text-xs">300.00</h3>
          <h3 class="font-bold text-xs">60.00</h3>
          <h3 class="font-bold text-xs">360.00</h3>
        </div>
      </div>
      <hr class="mb-14 mt-10 border-1 border-primary color-primary">
      <div class="flex justify-between" id="devis-footer">
        <div>
          <h4 class="font-bold text-xs mb-4">Siège Sociale</h4>
          <h6 class="text-xs">3, Avenue Roches Noires</h6>
          <h6 class="text-xs">10 000, Casablanca, Maroc</h6>
        </div>
        <div>
          <h4 class="font-bold text-xs mb-4">Cordonnées</h4>
          <h6 class="text-xs">Téléphone : +212 6 66 66 66 66</h6>
          <h6 class="text-xs">Email : client@sporteez.com</h6>
          <h6 class="text-xs">www.sporteez.com</h6>
        </div>
        <div>
          <h4 class="font-bold text-xs mb-4">Données bancaires</h4>
          <h6 class="text-xs">Banque : Bank of Africa</h6>
          <h6 class="text-xs">Code banque : 011 234</h6>
          <h6 class="text-xs">RIB : 001 234 45678905 432 345 6789</h6>
          <h6 class="text-xs">IBAN :4535 001 234 45678905 432 345 6789</h6>
        </div>
      </div>
  `;
  document.getElementById("download-devis-btn").style.display = "flex";
  
  const itemLineContainer = document.getElementById("item-line-container");

  if (!itemLineContainer){
    console.error('element with ID "item-line-container" not found');
    return;
  }

  carts.forEach((item) => {
    const itemLine = document.createElement('div');
    itemLine.className = 'item-line flex justify-between';
    itemLine.innerHTML = `
      <h3 class="w-1/5">${item.title}</h3>
      <h3 class="w-1/5">${item.price}</h3>
      <h3 class="w-1/5">${item.quantity}</h3>
      <h3 class="w-1/5">${item.price * item.quantity}</h3>
    `;
    
    itemLineContainer.appendChild(itemLine);
  });

  const total = carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("totals-chiffres").innerHTML = `
    <h3 class="font-bold text-xs">${total.toFixed(2)}</h3>
    <h3 class="font-bold text-xs">${(total * 0.2).toFixed(2)}</h3>
    <h3 class="font-bold text-xs">${(total * 1.2).toFixed(2)}</h3>
  `;

  quoteDiv.style.display = 'block';
});

// Télécharger le devis en PDF
document.getElementById('download-devis-btn').addEventListener('click', function () {
  const element = document.getElementById('devis-content');

  html2canvas(element).then((canvas) => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const imgData = canvas.toDataURL('image/png'); 
    const imgWidth = 190; 
    const imgHeight = (canvas.height * imgWidth) / canvas.width; 

    // Ajouter l'image au PDF
    doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
    doc.save('devis.pdf'); // Télécharger le PDF
  }).catch((error) => {
    console.error('Erreur lors de la génération du PDF :', error);
  });
});