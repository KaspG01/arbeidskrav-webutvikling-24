const goldCount = document.getElementById("gold-count");
const metalCount = document.getElementById("metal-count");
const woodCount = document.getElementById("wood-count");
const mine = document.getElementById("mine");
const woods = document.getElementById("woods");

// Henter ressurser fra localStorage eller starter på 0
let gold = parseInt(localStorage.getItem('gold')) || 0;
let metal = parseInt(localStorage.getItem('metal')) || 0;
let wood = parseInt(localStorage.getItem('wood')) || 0;


function updateResourceDisplay() {
  goldCount.innerHTML = ` ${gold}`;
  metalCount.innerHTML = ` ${metal}`;
  woodCount.innerHTML = ` ${wood}`;
}


updateResourceDisplay();

// Funksjon for å få tilfeldig mengde metall eller gull fra gruven
function mineResources() {
  const randomAmount = Math.floor(Math.random() * 10) + 1;
  const randomChance = Math.random();
  
  if (randomChance < 0.75) { 
    metal += randomAmount;
  } else { 
    gold += randomAmount;
  }

  // Oppdaterer visning og lagrer til localStorage
  localStorage.setItem('gold', gold);
  localStorage.setItem('metal', metal);
  updateResourceDisplay();
}

// Funksjon for å få tilfeldig mengde tre fra skogen
function gatherWood() {
  const randomAmount = Math.floor(Math.random() * 10) + 1; // Tilfeldig mengde mellom 1 og 10
  wood += randomAmount;

  // Oppdaterer visning og lagrer til localStorage
  localStorage.setItem('wood', wood);
  updateResourceDisplay();
}

// Event Listeners for gruve- og skogbilder
mine.addEventListener('click', mineResources);
woods.addEventListener('click', gatherWood);


mine.addEventListener('mouseover', () => {
  mine.style.cursor = "url('images/pickaxe-cursor.png'), auto";
});
woods.addEventListener('mouseover', () => {
  woods.style.cursor = "url('images/axe-cursor.png'), auto";
});
