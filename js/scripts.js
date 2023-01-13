//Business Logic
function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='hor']:checked").value;
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);

  if ( romance && winter && pizza && pie && dog) {
    if (romance === winter && winter === dog && dog === pie && pizza === cake) {
      document.getElementById("python").removeAttribute("class");
});