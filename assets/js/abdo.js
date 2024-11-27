function toggleAnswer(answerId) {
  const answerElement = document.getElementById(answerId);
  const icon = answerElement.previousElementSibling.querySelector("svg");

  // Toggle the display of the answer
  answerElement.classList.toggle('hidden');
       
  // Rotate the icon when the answer is shown
  if (answerElement.classList.contains('hidden')) {
    icon.style.transform = "rotate(0deg)";
  } else {
    icon.style.transform = "rotate(90deg)";
  }
}



// ----------------------------------------------------------------------------------------------
// Fonction d'Afficher et cacher aside barre
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

    function getCartFromLocalStorage() {
      return JSON.parse(localStorage.getItem('cart')) || [];
  }


// Afficher les produits dans le panier
function displayCartItems() {

  const carts = getCartFromLocalStorage();


  const cartItemsDiv = document.getElementById('aside-panel');
  const totalPriceDiv = document.getElementById('total-price');

  cartItemsDiv.innerHTML = '';
  let totalPrice = 0;

  if (carts.length === 0) {
    cartItemsDiv.innerHTML =` 
      <div class="flex w-full mx-2 mt-2 mb- 10">
        <div class="flex justify-center items-center">
          <h3>Votre Panier est vide !</h3>
        </div>
      </div>
    `; // à modifier le message de panier vide
    totalPriceDiv.innerHTML = '0,00 MAD';
    return;
  }

  carts.forEach((item) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'cart-item';
    
    productDiv.innerHTML =` 
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
            <h3 class="font-bold text-primary text-right"><span>${item.price}</span> €</h3>
          </div>
        </div>
      </div>
    `;
    totalPrice += item.price * item.quantity;
    cartItemsDiv.appendChild(productDiv);
  });

  totalPriceDiv.innerHTML =` <p>TOTAL PANIER : ${totalPrice} MAD</p>`;
}
