const buttons = document.querySelectorAll(".button");
const opcije = document.querySelector("#opcije");

const poruka = document.querySelector("#poruka");
let porukaParagraf = document.createElement("p");
poruka.appendChild(porukaParagraf);

const humanScoreNum = document.querySelector("#human-score");
const computerScoreNum = document.querySelector("#computer-score");
const rezultat = document.querySelector('#rezultat');
const final = document.querySelector('#final');

let humanResult = 0;
let computerResult = 0;

function getComputerChoise() {
  let broj = Math.floor(Math.random() * 3);
  if (broj === 0) {
    return "kamen";
  } else if (broj === 1) {
    return "papir";
  } else {
    return "makaze";
  }
}

function getHumanChoise(event) {
  return event.target.value;
}

function playRound(human, computer) {
  let result = "";
  let finalResult ='';
  if (human === "kamen" && computer === "makaze") {
    result = "Pobjeda! Kamen je jaci od makaza!";
    humanResult++;
  } else if (human === "papir" && computer === "kamen") {
    result = "Pobjeda! Papir je jaci od kamena!";
    humanResult++;
  } else if (human === "makaze" && computer === "papir") {
    result = "Pobjeda! Makaze su jace od papira!";
    humanResult++;
  } else if (human === "makaze" && computer === "kamen") {
    result = "Izgubili ste! Kamen je jaci od makaza!";
    computerResult++;
  } else if (human === "kamen" && computer === "papir") {
    result = "Izgubili ste! Papir je jaci od kamena!";
    computerResult++;
  } else if (human === "papir" && computer === "makaze") {
    result = "Izgubili ste! Makaze su jace od papira!";
    computerResult++;
  } else if (
    (human === "kamen" && computer === "kamen") ||
    (human === "papir" && computer === "papir") ||
    (human === "makaze" && computer === "makaze")
  ) {
    result = "Nerjeseno je! Racunar je odabrao isto kao i Vi.";
  } else {
    result = "Doslo je do greske! Pokusajte ponovo!";
  }
  porukaParagraf.textContent = result;
  if(humanResult === 5){
    finalResult = "POBJEDA! CESTITAMO!";
    humanResult = 0;
    computerResult = 0;
    final.textContent = finalResult;
  } else if (computerResult === 5) {
    finalResult = "Izgubili ste :(";
    humanResult = 0;
    computerResult = 0;
    final.textContent = finalResult;
  }
    humanScoreNum.textContent = humanResult;
    computerScoreNum.textContent = computerResult;
}

opcije.addEventListener("click", function (e) {
   let comp = getComputerChoise();
   let human = getHumanChoise(e);
   playRound(human, comp);
});
