//carousel-images header
const slides = document.getElementById('carousel-images');
slides.addEventListener("wheel", (evnt) => {
  slides.scrollLeft += evnt.deltaX
})

//carousel-cards

let carousel_cards = document.getElementById('carousel-cards');
carousel_cards.addEventListener("wheel", (evnt) => {
  carousel_cards.scrollLeft += evnt.deltaX
})





//slide-images catgory

const carousel_cards1 = document.getElementById('carousel-cards1');
document.getElementById("1").style.background = "#608BC1"
document.getElementById("rightBtn").addEventListener("click", () => {

  carousel_cards1.style.scrollBehavior = "smooth"
  carousel_cards1.scrollLeft += 1500;


  if (carousel_cards1.scrollLeft < 1500) {
    document.getElementById("2").style.background = "#608BC1"
    document.getElementById("1").style.background = "none"

  } else if (carousel_cards1.scrollLeft >= 1500) {
    document.getElementById("2").style.background = "none"
    document.getElementById("3").style.background = "#608BC1"

  }


})


document.getElementById("leftBtn").addEventListener("click", () => {
  carousel_cards1.style.scrollBehavior = "smooth"
  carousel_cards1.scrollLeft -= 1500;

  if (carousel_cards1.scrollLeft > 1500) {
    document.getElementById("2").style.background = "#608BC1"
    document.getElementById("3").style.background = "none"

  } else if (carousel_cards1.scrollLeft <= 1500) {
    document.getElementById("2").style.background = "none"
    document.getElementById("1").style.background = "#608BC1"

  }

})



function slideNum(id) {

  if (id == "1") {
    document.getElementById("1").style.background = "#608BC1"
    carousel_cards1.style.scrollBehavior = "smooth"
    document.getElementById("2").style.background = "none"
    document.getElementById("3").style.background = "none"
  }

  if (id == "2") {
    document.getElementById("2").style.background = "#608BC1"
    carousel_cards1.style.scrollBehavior = "smooth"
    carousel_cards1.scrollLeft += 1500;
    document.getElementById("1").style.background = "none"
    document.getElementById("3").style.background = "none"


  }

  if (id == "3") {
    document.getElementById("3").style.background = "#608BC1"
    carousel_cards1.style.scrollBehavior = "smooth"
    carousel_cards1.scrollLeft += 3000;
    document.getElementById("1").style.background = "none"
    document.getElementById("2").style.background = "none"

  }

}

//request restApi get post delete patch put ..
//responce data array 
//option methode status:200 - 404 - 500 - 403
  fetch("https://mohamedmoustir.github.io/api/")
  .then(result => result.json())
  .then(function(data){
    for (let i = 0; i < data.Tshorts.length; i++) {
     let cloths = data.Tshorts
     carousel_cards.innerHTML +=`
        
     <div class=" mx-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow max-h-[600px]">
                 <a href="#">
                     <img class="p-8 w-[100%] max-h-[50%] rounded-t-lg" src="${cloths[i].images[2]}" alt="product image" />
                 </a>
                 <div class="px-8 pb-5 w-[300px]">
                     <a href="#">
                         <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${cloths[i].description.slice(0, 100)}</h5>
                     </a>
                     <div class="flex items-center mt-2.5 mb-5">
                         <div class="flex items-center space-x-1 rtl:space-x-reverse">
                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                 <path
                                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                             </svg>
                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                 <path
                                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                             </svg>
                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                 <path
                                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                             </svg>
                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                 <path
                                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                             </svg>
                             <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                 <path
                                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                             </svg>
                         </div>
                         <span
                             class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                     </div>
                     <div class="flex items-center justify-between">
                         <span class="text-3xl font-bold text-gray-900 dark:text-white">${cloths[i].price}</span>
                         <a href="#"
                             class="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Add
                             to cart</a>
                     </div>
                 </div>
             </div>
     
     `     
    }
  })
