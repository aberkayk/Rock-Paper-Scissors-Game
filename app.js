let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Computer choice function
function randomComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = (Math.floor((Math.random() * 3)));
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors"

}

function glow(user, color){
    const choiceUser = document.getElementById(user);
    choiceUser.classList.add(color+"-glow");
    setTimeout(() => {
        choiceUser.classList.remove(color+"-glow");
    }, 500)
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You WİN! 🔥`;
    glow(user, "green");
}



function lose(user, computer){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. You LOST...💩`;
    glow(user, "red");
}

function draw(user, computer){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} to ${convertToWord(computer)}${smallCompWord}. It's DRAW! 😐`;
    glow(user, "gray");
}

function game(userChoice){
    const computerChoice = randomComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    // Event listeners for buttons
    rock_div.addEventListener('click', ()=> game("r"))
    paper_div.addEventListener('click', ()=> game("p"))
    scissors_div.addEventListener('click', ()=> game("s"))
}

main();