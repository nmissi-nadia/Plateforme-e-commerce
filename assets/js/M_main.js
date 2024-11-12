      //carousel-images header
      const slides = document.getElementById('carousel-images');
      slides.addEventListener("wheel",(evnt)=>{
          slides.scrollLeft += evnt.deltaX
      })
      
            //carousel-cards
      
      const carousel_cards = document.getElementById('carousel-cards');
      carousel_cards.addEventListener("wheel",(evnt)=>{
          carousel_cards.scrollLeft += evnt.deltaX
      })
      
      
      
      
      
            //slide-images catgory
      
      const carousel_cards1 = document.getElementById('carousel-cards1');
      document.getElementById("1").style.background="#608BC1" 
      document.getElementById("rightBtn").addEventListener("click",()=>{

      carousel_cards1.style.scrollBehavior="smooth"
      carousel_cards1.scrollLeft += 1500;


      if (carousel_cards1.scrollLeft < 1500){
        document.getElementById("2").style.background="#608BC1" 
        document.getElementById("1").style.background="none" 

      }else if(carousel_cards1.scrollLeft >= 1500){
        document.getElementById("2").style.background="none"
        document.getElementById("3").style.background="#608BC1" 
        
      }


      })
      
      
      document.getElementById("leftBtn").addEventListener("click",()=>{
          carousel_cards1.style.scrollBehavior="smooth"
          carousel_cards1.scrollLeft -= 1500;

          if (carousel_cards1.scrollLeft > 1500){
            document.getElementById("2").style.background="#608BC1" 
            document.getElementById("3").style.background="none" 
    
          }else if(carousel_cards1.scrollLeft <= 1500){
            document.getElementById("2").style.background="none"
            document.getElementById("1").style.background="#608BC1" 
            
          }

      })
      


      function slideNum(id){
          
          if(id=="1"){
           document.getElementById("1").style.background="#608BC1" 
          carousel_cards1.style.scrollBehavior="smooth"
       document.getElementById("2").style.background="none"
        document.getElementById("3").style.background="none"
          }
      
          if(id=="2"){
           document.getElementById("2").style.background="#608BC1" 
           carousel_cards1.style.scrollBehavior="smooth"  
              carousel_cards1.scrollLeft += 1500;
         document.getElementById("1").style.background="none"
         document.getElementById("3").style.background="none"

        
          }
          
          if(id=="3"){
              document.getElementById("3").style.background="#608BC1"   
              carousel_cards1.style.scrollBehavior="smooth"
              carousel_cards1.scrollLeft += 3000;
              document.getElementById("1").style.background="none"
              document.getElementById("2").style.background="none"
      
          }
          
      }
