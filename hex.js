const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Get Elements from DOM 
const btn = document.getElementById('btn');
const colorText = document.querySelector('.color');
const bodyElement = document.body

// Event Listener for Btn 
btn.addEventListener('click', function() {
    bodyElement.style.backgroundColor = createHexColor();
    colorText.innerHTML = createHexColor(); 
})
// Create Hex Color based on random index
function createHexColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++)     
        hexColor += hex[getrandomIndex()];
    return hexColor;
}
// Create random Index for array
function getrandomIndex() {
    return Math.floor(Math.random() * hex.length);
}




