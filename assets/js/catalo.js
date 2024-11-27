const apiUrl = 'https://mohamedmoustir.github.io/api/';
const produitContainer = document.getElementById('produit-cartes');
const paginationContainer = document.getElementById('pagination');
const applyFiltersBtn = document.getElementById('applyFiltersBtn');
const minPriceInput = document.querySelector('input[placeholder="Min"]');
const maxPriceInput = document.querySelector('input[placeholder="Max"]');
const categoryInputs = document.querySelectorAll('input[name="category"]');

let currentPage = 1;
const itemsPerPage = 6;
let produits = [];
let currentSort = 'default';

async function fetchProduits() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    produits = data.Tshorts;
    afficherProduits(currentPage);
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
  }
}

function afficherProduits(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

 
  let produitsAffiches = [...produits];
  if (currentSort === 'lowToHigh') {
    produitsAffiches.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'highToLow') {
    produitsAffiches.sort((a, b) => b.price - a.price);
  }

  const produitsPagine = produitsAffiches.slice(start, end);

  produitContainer.innerHTML = ''; 
  produitsPagine.forEach(produit => {
    const produitCard = `
      <div class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden group relative z-10">
        <div class="relative w-full">
          <img src="${produit.images[2]}"  alt="${produit.title}" class="w-full objevt-fill">
          <span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">-50%</span>
        </div>
        
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button class="bg-white text-orange-500 font-semibold py-2 px-4 rounded-md mb-4 justify-between" onclick="ajouteraupanier('${produit.id}','${produit.title}','${produit.images[2]}')">
            Ajouter au panier
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <button class="bg-white text-orange-500 font-semibold py-2 px-4 rounded-md mb-4"><a href="../vues/details.html?id=${produit.id}" >View Details</a></button>
        </div>

        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800">${produit.title}</h3>
          <p class="text-sm text-gray-500">${produit.description}</p>
          
          <div class="flex items-center space-x-2 mt-2">
            <span class="text-lg font-bold text-gray-900">${produit.price} MAD</span>
            <span class="text-sm text-gray-400 line-through">${(produit.price * 2).toFixed(2)} MAD</span>
          </div>
        </div>
      </div>
    `;
    produitContainer.insertAdjacentHTML('beforeend', produitCard);
  });

  updatePagination(produitsAffiches.length); 
}
// Fonction pour mettre à jour les boutons de pagination
function updatePagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  paginationContainer.innerHTML = ''; 

  if (currentPage > 1) {
    const prevButton = `<a href="#" onclick="goToPage(${currentPage - 1})" class="px-3 h-8">Précédent</a>`;
    paginationContainer.insertAdjacentHTML('beforeend', prevButton);
  }

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = `
      <a href="#" onclick="goToPage(${i})" class="px-3 h-8 ${i === currentPage ? 'text-blue-600' : 'text-gray-500'}">${i}</a>
    `;
    paginationContainer.insertAdjacentHTML('beforeend', pageButton);
  }

  if (currentPage < totalPages) {
    const nextButton = `<a href="#" onclick="goToPage(${currentPage + 1})" class="px-3 h-8">Suivant</a>`;
    paginationContainer.insertAdjacentHTML('beforeend', nextButton);
  }
}

function goToPage(page) {
  currentPage = page;
  afficherProduits(currentPage);
}
function trierProduits(option) {
  currentSort = option;
  currentPage = 1;
  afficherProduits(currentPage);
}

fetchProduits();

function toggleSidebar1(show) {
    document.getElementById("filterSidebar").style.transform = show ? "translateX(0)" : "translateX(-100%)";
  }



// Ajouter au panier
function ajouteraupanier(id,title,images) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === id);
    let L ='large';
    let couleur ='Domicile';
    let price=50;
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ id,title,couleur,images, quantity: 1,taille:L,price });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${title} ajouté au panier!`);
  }

  function applyFilters() {
    // Récupération des valeurs des filtres
    const selectedCategory = document.querySelector('input[name="category"]:checked')?.value;
    const minPrice = document.querySelector('input[placeholder="Min"]').value;
    const maxPrice = document.querySelector('input[placeholder="Max"]').value;

    // Filtrage des produits en mémoire
    const filteredProducts = produits.filter(product => {
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchesPrice =
        (!minPrice || product.price >= parseFloat(minPrice)) &&
        (!maxPrice || product.price <= parseFloat(maxPrice));

      return matchesCategory && matchesPrice;
    });

    // Mise à jour de l'affichage avec les produits filtrés
    produitContainer.innerHTML = ''; 
    filteredProducts.forEach(produit => {
      const produitCard = `
        <div class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden group relative z-10">
          <div class="relative">
            <img src="${produit.images[2]}" alt="${produit.title}" class="w-full">
            <span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">-50%</span>
          </div>
          <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button class="bg-white text-orange-500 font-semibold py-2 px-4 rounded-md mb-4" onclick="ajouteraupanier('${produit.id}','${produit.title}')">
              Ajouter au panier
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <button class="bg-white text-orange-500 font-semibold py-2 px-4 rounded-md mb-4">
              <a href="../vues/details.html?id=${produit.id}">View Details</a>
            </button>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">${produit.title}</h3>
            <p class="text-sm text-gray-500">${produit.description}</p>
            <div class="flex items-center space-x-2 mt-2">
              <span class="text-lg font-bold text-gray-900">${produit.price} MAD</span>
              <span class="text-sm text-gray-400 line-through">${(produit.price * 2).toFixed(2)} MAD</span>
            </div>
          </div>
        </div>
      `;
      produitContainer.insertAdjacentHTML('beforeend', produitCard);
    });
  }





async function fetchAndSearchProduits(title) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const produits = data.Tshorts;

    // Filtrer les produits par titre (insensible à la casse)
    const produitsFiltres = produits.filter(produit =>
      produit.title.toLowerCase().includes(title.toLowerCase())
    );

    if (produitsFiltres.length > 0) {
      afficherProduitsFiltres(produitsFiltres);
    } else {
      produitContainer.innerHTML = `<p class="text-gray-700 text-center mt-4">Aucun produit trouvé pour "${title}".</p>`;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
  }
}

function afficherProduitsFiltres(produits) {
   
  produitContainer.innerHTML = '';
  produits.forEach(produit => {
    const produitCard = `
      <div class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden group relative z-10">
          <div class="relative">
            <img src="${produit.images[2]}" alt="${produit.title}" class="w-full">
            <span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">-50%</span>
          </div>
          <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button class="bg-white text-orange-500 font-semibold py-2 px-4 rounded-md mb-4" onclick="ajouteraupanier('${produit.id}','${produit.title}')">
              Ajouter au panier
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <button class="bg-white text-orange-500 font-semibold py-2 px-4 rounded-md mb-4">
              <a href="../vues/details.html?id=${produit.id}">View Details</a>
            </button>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">${produit.title}</h3>
            <p class="text-sm text-gray-500">${produit.description}</p>
            <div class="flex items-center space-x-2 mt-2">
              <span class="text-lg font-bold text-gray-900">${produit.price} MAD</span>
              <span class="text-sm text-gray-400 line-through">${(produit.price * 2).toFixed(2)} MAD</span>
            </div>
          </div>
        </div>
    `;
    produitContainer.insertAdjacentHTML('beforeend', produitCard);
  });
}

// Ajout de l'événement de recherche
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchAndSearchProduits(query);
  } else {
    produitContainer.innerHTML = `<p class="text-gray-700 text-center mt-4">Veuillez entrer un terme de recherche.</p>`;
  }
});




