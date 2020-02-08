function getRPS(){
    const rps = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random()*3);
    return rps[choice];
}

function outputRPS(choice){
    let gen = getRPS();

    cpuText.innerHTML = gen;
    playerText.innerHTML = choice;
    playerImage.src = "img/"+choice+".png";
    cpuImage.src = "img/"+gen+".png";
}

function displayWinner(){
    cpu = cpuText.innerHTML;
    player = playerText.innerHTML;

    if(cpu === player){
        alert("tie!");
    } else if ((cpu === 'rock' && player === 'scissors') || (cpu === 'paper' && player === 'rock') || (cpu === 'scissors' && player === 'paper')) {
        alert("cpu wins!");
    } else {
        alert("player wins!");
    }

}

let cpuText = document.getElementById('cpuText');
let cpuImage = document.getElementById('cpuImage');
let playerText = document.getElementById('playerText');
let playerImage = document.getElementById('playerImage');

let rockb = document.getElementById('rockb');
let paperb = document.getElementById('paperb');
let scissorsb = document.getElementById('scissorsb');

rockb.addEventListener('click', function(){
    outputRPS("rock");
    displayWinner();
});
paperb.addEventListener('click', function(){
    outputRPS("paper");
    displayWinner();
});
scissorsb.addEventListener('click', function(){
    outputRPS("scissors");
    displayWinner();
});