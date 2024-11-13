const apiUrl = 'https://mohamedmoustir.github.io/api/';
const produitContainer = document.getElementById('produit-cartes');
const paginationContainer = document.getElementById('pagination');

let currentPage = 1;
const itemsPerPage = 6;

// Fonction pour récupérer les produits depuis l'API et les afficher
async function AfficherProduits(page = 1) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Calculer les indices pour la pagination
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const produitsPagine = data.Tshorts.slice(start, end);

    // Effacer les produits actuels
    produitContainer.innerHTML = '';
    
    // Ajouter les produits pour la page actuelle
    produitsPagine.forEach(produit => {
      const produitCard = `
        <div class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden group relative">
          <div class="relative">
            <img src="${produit.images[0]}" alt="${produit.title}" class="w-full">
            <span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">-50%</span>
          </div>
          
          <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button class="bg-white text-orange-500 font-semibold py-2 px-4 rounded-md mb-4 justify-between">
              Ajouter au panier
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <button class="bg-white text-orange-500 font-semibold py-2 px-4 rounded-md mb-4">Plus....</button>
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

    // Mettre à jour la pagination
    updatePagination(data.Tshorts.length);
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
  }
}

// Fonction pour mettre à jour les boutons de pagination
function updatePagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  paginationContainer.innerHTML = ''; // Vider la pagination existante

  // Bouton Précédent
  if (currentPage > 1) {
    const prevButton = `<a href="#" onclick="goToPage(${currentPage - 1})" class="px-3 h-8">Précédent</a>`;
    paginationContainer.insertAdjacentHTML('beforeend', prevButton);
  }

  // Pages numérotées
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = `
      <a href="#" onclick="goToPage(${i})" class="px-3 h-8 ${i === currentPage ? 'text-blue-600' : 'text-gray-500'}">${i}</a>
    `;
    paginationContainer.insertAdjacentHTML('beforeend', pageButton);
  }

  // Bouton Suivant
  if (currentPage < totalPages) {
    const nextButton = `<a href="#" onclick="goToPage(${currentPage + 1})" class="px-3 h-8">Suivant</a>`;
    paginationContainer.insertAdjacentHTML('beforeend', nextButton);
  }
}

// Fonction pour changer de page
function goToPage(page) {
  currentPage = page;
  AfficherProduits(currentPage);
}

// Charger la première page
AfficherProduits();
