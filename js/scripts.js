//Business Logic
function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("java").setAttribute("class", "hidden");
}
window.onload = function() {
  hideResultsAndError();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const answer1 = parseInt(document.querySelector("input#answer1").value);
    const answer2 = parseInt(document.querySelector("input#answer2").value);
    const answer3 = parseInt(document.querySelector("input#answer3").value);
    const answer4 = parseInt(document.querySelector("input#answer4").value);
    const answer5 = parseInt(document.querySelector("input#answer5").value);
  
  if ( answer1 && answer2 && answer3 && answer4 && answer5) {
    if (answer1 <= 2000 && answer4 === 101) {
      document.getElementById("ruby").removeAttribute("class");
    } else if (answer2 === 1 && answer5 >100) {
      document.getElementById("python").removeAttribute("class");
    } else if (answer3 >= 10 || answer5 <= 1000000000000 && answer4 === 101) {
    document.getElementById("java").removeAttribute("class");
    } 
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
  }; 
}; 