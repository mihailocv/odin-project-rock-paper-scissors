const buttons = document.querySelectorAll(".button");
const opcije = document.querySelector("#opcije");
const poruka = document.querySelector('#poruka');
let porukaParagraf = document.createElement('p');
poruka.appendChild(porukaParagraf);

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
  let target = event.target
  return target.value;
}

function playRound(human, computer) {
  let result = "";
  if (human === "kamen" && computer === "makaze") {
    result = "Pobjeda! Kamen je jaci od makaza!";
  } else if (human === "papir" && computer === "kamen") {
    result = "Pobjeda! Papir je jaci od kamena!";
  } else if (human === "makaze" && computer === "papir") {
    result = "Pobjeda! Makaze su jace od papira!";
  } else if (human === "makaze" && computer === "kamen") {
    result = "Izgubili ste! Kamen je jaci od makaza!";
  } else if (human === "kamen" && computer === "papir") {
    result = "Izgubili ste! Papir je jaci od kamena!";
  } else if (human === "papir" && computer === "makaze") {
    result = "Izgubili ste! Makaze su jace od papira!";
  } else if (
    (human === "kamen" && computer === "kamen") ||
    (human === "papir" && computer === "papir") ||
    (human === "makaze" && computer === "makaze")
  ) {
    result = "Nerjeseno je! Racunar je odabrao isto kao i Vi.";
  } else {
    result = "Doslo je do greske! Pokusajte ponovo!";
  }

  return result;
}

opcije.addEventListener('click', function(e){
  let comp = getComputerChoise();
  let human = getHumanChoise(e);

  porukaParagraf.textContent = playRound(human, comp);

  console.log(playRound(human, comp));
})

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   do {
//     let humanChoise = getHumanChoise();
//     let computerChoise = getComputerChoise();
//     let rezultat = playRound(humanChoise, computerChoise);
//     console.log(rezultat);
//     if (
//       rezultat == "Pobjeda! Kamen je jaci od makaza!" ||
//       rezultat == "Pobjeda! Papir je jaci od kamena!" ||
//       rezultat == "Pobjeda! Makaze su jace od papira!"
//     ) {
//       humanScore++;
//     } else if (
//       rezultat == "Izgubili ste! Kamen je jaci od makaza!" ||
//       rezultat == "Izgubili ste! Papir je jaci od kamena!" ||
//       rezultat == "Izgubili ste! Makaze su jace od papira!"
//     ) {
//       computerScore++;
//     }
//     console.log();
//     console.log(`Rezultat: ${humanScore}:${computerScore}`);
//   } while (humanScore < 5 && computerScore < 5);

//   if(humanScore === 5){
//     console.log();
//     console.log("CESTITAM! POBJEDILI STE!!!");
//   } else {
//     console.log();
//     console.log("Na zalost izgubili ste :(");
//   }
// }



// playGame();
