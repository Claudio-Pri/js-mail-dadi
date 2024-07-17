
// Generazione di un numero casuale

let playerScore = Math.floor(Math.random() * 6) + 1;
console.log("Punteggio Giocatore:", playerScore);

let computerScore = Math.floor(Math.random() * 6) + 1;
console.log("Punteggio Computer:", computerScore);

// Determino il vincitore

let winner;
if (playerScore > computerScore) {
    winner = "Giocatore";
} else if (computerScore > playerScore) {
    winner = "Computer";
} else {
    winner = "Pareggio";
}

console.log("Vincitore:" + winner);



