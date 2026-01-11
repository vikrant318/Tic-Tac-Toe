let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBnt = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;



const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
        box.innerText = "O";
        box.classList.add("player1");
        box.classList.remove("player2");
        turnO = false;
        } else {
        box.innerText = "X";
        box.classList.add("player2");
        box.classList.remove("player1");
        turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("player1", "player2");
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let posFirst = boxes[pattern[0]].innerText;
        let posSecond = boxes[pattern[1]].innerText;
        let posThird = boxes[pattern[2]].innerText;

        if(posFirst != "" && posSecond != "" && posThird != ""){
            if(posFirst === posSecond && posSecond === posThird){
                showWinner(posFirst);
            }
        }
    }
};

newGameBnt.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

