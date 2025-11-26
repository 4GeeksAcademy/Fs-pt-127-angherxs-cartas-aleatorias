const numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const suits = ["diamonds","hearts","spades","clubs"];
// lo copie del generador de excusas 
function generarCarta() {
    const n = numbers[Math.floor(Math.random() * numbers.length)];
    const s = suits[Math.floor(Math.random() * suits.length)];

    const card = document.getElementById("card");

    card.className = "card " + s;
    card.querySelector(".number").textContent = n;
}
// e probado varios y no me funciona 
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("newCard").addEventListener("click", generarCarta);
  generarCarta();
});