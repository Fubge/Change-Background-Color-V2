const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// Get Elements from DOM
const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');
const bodyElement = document.body;

// Add event listener for btn 
btn.addEventListener('click', function() {
    let randomColor = getRandomNumber();
    bodyElement.style.backgroundColor = colors[randomColor];
    colorSpan.innerHTML = colors[randomColor];
});

// Generate random number between 0 and max of array
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    return randomNumber;
}