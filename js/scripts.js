//Business Logic
function hideResults() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("java").setAttribute("class", "hidden");
}

window.onload = function() {
  let form = document.querySelector("form")
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const answer1 = parseInt(document.querySelector("input#answer1").value);
    const answer2 = parseInt(document.querySelector("input#answer2").value);
    const answer3 = parseInt(document.querySelector("input#answer3").value);
    const answer4 = parseInt(document.querySelector("input#answer4").value);
    const answer5 = parseInt(document.querySelector("input#answer5").value);
  
  if ( answer1 && answer2 && answer3 && answer4 && answer5) {
    if (answer1 >= 20 && answer4 > 100) {
      document.getElementById("ruby").removeAttribute("class");
    } else if (answer2 === 1 && answer5 >100 && answer1 <= 19) {
      document.getElementById("python").removeAttribute("class");
    } else if (answer3 >= 50 || answer4 <= 100) {
    document.getElementById("java").removeAttribute("class");
    } else if (answer1 <= 3 || answer2 <= 3 || answer3 <= 50 || answer4 >= 100 || answer5 <= 3) {
      document.getElementById("python").removeAttribute("class");
    } 
    } else {
        document.getElementById("error-message").removeAttribute("class");
    }  
  }; 
}; 