function computerPlay(){

    
    let movimientoMaquina = Math.floor(Math.random()*3);
    let deNumAPalabra

    if (movimientoMaquina === 0) {
        deNumAPalabra='Rock'
        console.log(deNumAPalabra)
    } else if (movimientoMaquina === 1){
        deNumAPalabra='Paper'
        console.log(deNumAPalabra)
    } else {
        deNumAPalabra='Scissors'
        console.log(deNumAPalabra)
    }
    
    return deNumAPalabra;



}

let playerSelection= 'Rock';

function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === 'ROCK'){
        if (computerSelection === 'SCISSORS'){
        return 'Rock Wins! Player Wins'
        } else if (computerSelection === 'ROCK') {
        return 'Tie marker! No one wins!'
        } else if (computerSelection === 'PAPER') {
            return 'Paper wins! You lose!'
        }
    }
    



}

console.log(playRound(playerSelection,computerPlay()))

function game(){
    let marcadorJugador
    let marcadorMaquina
    for(let i=0;i<5;++i){
        if(playRound() === 'Rock Wins! Player Wins'){
            marcadorJugador++;
        } else if (playRound() === 'Paper wins! You lose!') {
            marcadorMaquina++;    
        }
    }
}