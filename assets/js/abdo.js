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
