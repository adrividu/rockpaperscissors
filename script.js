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

//let playerSelection= 'Rock';
function playerSelection(){
    let seleccionUsuario = prompt('Rock, paper or scissors?')

    return seleccionUsuario
}

function playRound (eleccionJugador, computerSelection) {

   // console.log(eleccionJugador + 'aqui');
    eleccionJugador = eleccionJugador.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (eleccionJugador === 'ROCK'){
        if (computerSelection === 'SCISSORS'){
        return 'You Win! Player Wins'
        } else if (computerSelection === 'ROCK') {
        return 'Tie marker! No one wins!'
        } else if (computerSelection === 'PAPER') {
            return 'Machine wins! You lose!'
        } 
    }

    if (eleccionJugador === 'SCISSORS'){
        if (computerSelection === 'ROCK'){
        return 'Machine wins! You lose!'
        } else if (computerSelection === 'SCISSORS') {
        return 'Tie marker! No one wins!'
        } else if (computerSelection === 'PAPER') {
            return 'You Win! Player Wins'
        } 
    }

    if (eleccionJugador === 'PAPER'){
        if (computerSelection === 'SCISSORS'){
        return 'Machine wins! You lose!'
        } else if (computerSelection === 'ROCK') {
        return 'You Win! Player Wins'
        } else if (computerSelection === 'PAPER') {
            return 'Tie marker! No one wins!'
        } 
    }
    



}

//console.log(playRound(playerSelection,computerPlay()))

function game(){
    let marcadorJugador = 0;
    let marcadorMaquina = 0;
    for(let i=0;i<5;i++){
        let jugada=playRound(playerSelection(),computerPlay());
        if(jugada === 'You Win! Player Wins'){
            marcadorJugador++;
        } else if (jugada === 'Machine wins! You lose!') {
            marcadorMaquina++;    
        }
    }

    console.log('The final score: Player ' + marcadorJugador + '  Machine ' + marcadorMaquina)
}


game();