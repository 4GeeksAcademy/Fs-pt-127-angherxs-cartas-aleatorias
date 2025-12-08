let cardWidth = 180;
let cardHeight = 260;
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["diamonds", "hearts", "spades", "clubs"];
// lo copie del generador de excusas 
function generarCarta() {
  const n = numbers[Math.floor(Math.random() * numbers.length)];
  const s = suits[Math.floor(Math.random() * suits.length)];

  const card = document.getElementById("card");

  card.className = "card " + s;
  card.querySelector(".number").textContent = n;
}
function aumentar() {
  cardWidth += 20;
  cardHeight += 30;
  aplicarTamano();
}
//  DISMINUIR TAMAÑO 
function disminuir() {
  cardWidth -= 20;
  cardHeight -= 30;

  if (cardWidth < 80) cardWidth = 80;
  if (cardHeight < 120) cardHeight = 120;

  aplicarTamano();
}

// APLICAR TAMAÑO A LA CARTA 
function aplicarTamano() {
  const card = document.getElementById("card");
  card.style.width = cardWidth + "px";
  card.style.height = cardHeight + "px";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("newCard").addEventListener("click", generarCarta);
  generarCarta();
  document.getElementById("biggerBtn").addEventListener("click", aumentar);
  document.getElementById("smallerBtn").addEventListener("click", disminuir);
});
