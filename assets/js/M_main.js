      
const slides = document.getElementById('carousel-images');
slides.addEventListener("wheel",(evnt)=>{
    slides.scrollLeft += evnt.deltaX
})

const carousel_cards = document.getElementById('carousel-cards');
carousel_cards.addEventListener("wheel",(evnt)=>{
    carousel_cards.scrollLeft += evnt.deltaX
})






const carousel_cards1 = document.getElementById('carousel-cards1');

document.getElementById("rightBtn").addEventListener("click",()=>{
carousel_cards1.style.scrollBehavior="smooth"
carousel_cards1.scrollLeft += 1500;
})


document.getElementById("leftBtn").addEventListener("click",()=>{
    carousel_cards1.style.scrollBehavior="smooth"
    carousel_cards1.scrollLeft -= 1500;
})