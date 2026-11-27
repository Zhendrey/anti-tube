//formatting function
const formatText = (s) => s.trim().replace(/\s+/g, ' ');


//normalizing function
const normalizeText = (s) => s.toLowerCase();


//implementation - 
// delcare the variable that return the result of both functions
// and make sure the output 
// for each function matches what is expected
const searchInput = document.querySelector(".search__input input");
searchInput.addEventListener("input", function(e){
    const value = e.target.value;
    const formatedValue = formatText(value);
    const normalizedValue = normalizeText(value);
    const finalValue = formatText(normalizedValue);
    console.log("Formated: " + formatedValue);
    console.log("Normalized: " + normalizedValue);
    console.log("Formated + Normalized: " + finalValue);
});