let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let newBtn=document.querySelector(".new");
let resetBtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".newGame");
let turnO = true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O"
            turnO = false;
            box.disabled= true;
        }else{
            box.innerText = "X"
            turnO = true;
            box.disabled = true;
        }
        checkWinner();
    });
});
function checkWinner(){
    for(let pattern of winPatterns){
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != ""&& pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                disableBoxes();
            }
        }
    }
};

function showWinner(winner){
    msgContainer.classList.remove("hide");
    msg.innerText = `Winner is ${winner}`;

};
function newGamebtn(){
    enableBoxes();
    msgContainer.classList.add("hide");
};

function enableBoxes(){
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText ="";
        turnO = true ;
    });    
};
function disableBoxes(){
    boxes.forEach((box)=>{
        box.disabled = true ;
    });
};

newBtn.addEventListener("click",newGamebtn);
resetBtn.addEventListener("click",enableBoxes);
