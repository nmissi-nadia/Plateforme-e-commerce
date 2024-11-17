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



