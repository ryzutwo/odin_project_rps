// function getComputerChoice to randomly return rock,paper or 
// scisor

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 ) + 1;
    console.log(num === 1 ? 'computer: rock':
    num === 2 ? 'computer: paper':
    'computer: scissors');
    return num === 1 ? 'rock':
    num === 2 ? 'paper':
    'scissors'
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    let resultWin = `You Win! You played ${playerSelection.toLowerCase()}, which beats ${computerSelection}`
    let resultLose = `You Lose! Computer played ${computerSelection}, which beats ${playerSelection.toLowerCase()}`
    let resultTie = `You Tied! Both played ${computerSelection}. Please go again!`
    
    return (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') || 
           (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') || 
           (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') 
           ? resultWin : 
           playerSelection.toLowerCase() === computerSelection 
           ? resultTie :
           resultLose;
}

// console.log(playRound('RoCK', getComputerChoice()))

function game(){
    let roundsWin = 0;
    let roundsLose = 0;


    for(let i =0; i < 5; i++) {
        let input = prompt('Please enter rps');
        if (input == null) {
            return 'invalid input';
        } 
        
        let ans = playRound(input,getComputerChoice()).substring(4,5);

        ans === 'W' ? roundsWin++ :
        ans === 'L' ? roundsLose++ :
        console.log('you tied.');
        

    }
    return roundsWin == roundsLose ? 'You have Tied.' :
            roundsWin > roundsLose ? `You have won by ${roundsWin}!`:
            `You have lost by ${roundsLose}`
}
console.log(game());
