function getRPS(){
    const rps = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random()*3);
    return rps[choice];
}

function outputRPS(choice){
    cpuText.innerHTML = getRPS();
    playerText.innerHTML = choice;
}


let cpuText = document.getElementById('cpuText');
let playerText = document.getElementById('playerText');
let rockb = document.getElementById('rockb');
let paperb = document.getElementById('paperb');
let scissorsb = document.getElementById('scissorsb');

rockb.addEventListener('click', function(){
    outputRPS("rock");
});
paperb.addEventListener('click', function(){
    outputRPS("paper");
});
scissorsb.addEventListener('click', function(){
    outputRPS("scissors");
});