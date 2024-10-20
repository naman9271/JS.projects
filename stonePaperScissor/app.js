let choices=document.querySelectorAll(".choice");
let userScore=document.querySelector(".user-score");
let compScore=document.querySelector(".comp-score");
let msg=document.querySelector(".msg");
let choice = ["rock","paper","scissor"];
userScore.innerText = 0;
compScore.innerText = 0;
function drawGame(user,comp){
    if(user === comp){
        msg.innerText = "Game is draw"
        return true;
        
    }else{
        return false;
    }
}
function mainGame(user,comp){
    if(user === "rock"){
        return comp === "paper" ? true:false;
    }else if(user ==="paper"){
        return comp === "scissor" ? true:false;
    }else{
        return comp === "rock" ? true:false;
    }
}

function updateScore(mainGame){
    if(mainGame){
        compScore.innerText++;
        msg.innerText = "Comp won !"
    }else{
        userScore.innerText++;
        msg.innerText = "You Won !"
    }
}

choices.forEach((userchoice)=>{
      userchoice.addEventListener("click",()=>{
        let user = userchoice.getAttribute("id");
        let comp = choice[Math.floor(Math.random()*3)];
        console.log(`user choice is ${user}\ncomp choice is ${comp}`);
        if(drawGame(user,comp) === false){
            updateScore(mainGame(user,comp));
          };
      });
});