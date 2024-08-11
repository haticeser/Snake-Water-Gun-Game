let container = document.querySelector(".container");
let myScoreTxt = document.querySelector(".container .my_score");
let computerScoreTxt = document.querySelector(".container .computer_score");
let choicesBox = document.querySelector(".container .choices");
let myChoiceTxt = document.querySelector(".container .choices .your_choice");
let computerChoiceTxt = document.querySelector(".container .choices .computer_choice");
let matchResult = document.querySelector(".container .choices .match-result");

let computer_score = 0;
let my_score = 0;

let check =(input)=>{
    /* console.log(input); */

    let choices_object = {
        'snake':{
            'snake':'draw',
            'water':'win',
            'gun':'lose'
        },
        'water':{
            'snake':'lose',
            'water':'draw',
            'gun':'win'
        },
        'gun':{
            'snake':'win',
            'water':'lose',
            'gun':'draw'
        }
    }

    let choices = ['snake','water','gun'];
    let randomChoice = Math.floor(Math.random() * 3);
    /* console.log(input , choices[randomChoice]); */

    computerChoiceTxt.innerHTML = `Computer choice <strong>${choices[randomChoice]}</strong></span>`;
    myChoiceTxt.innerHTML = `You Choose <strong>${input}</strong></span>`;

    let computer_choice = choices[randomChoice];

    switch(choices_object[input][computer_choice]){
        case 'win':
            matchResult.innerHTML = "YOU WIN";
            matchResult.style.cssText = "background:#32cd32";
            my_score++;
        break;
        case 'lose':
            matchResult.innerHTML = "YOU LOSE";
            matchResult.style.cssText = "background:red";
            computer_score++;
        break;
        default:
            matchResult.innerHTML = "MATCH DRAW";
            matchResult.style.cssText = "background:gray";
        break;
    }
    myScoreTxt.innerHTML = `You: <strong>${my_score}</strong></span>`;
    computerScoreTxt.innerHTML = `Computer: <strong>${computer_score}</strong></span>`;
    container.style.height = "305px";
    choicesBox.style.display ="block";
}