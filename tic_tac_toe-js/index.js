const Reset = document.getElementById("reset-el");
const boxes = Array.from(document.getElementsByClassName('contain'));
const messageEl = document.getElementById("message-el");
const modalEl = document.getElementById("modal-el");
const endEl = document.getElementById("end-modal");
const winnerEl = document.getElementById("winner");
const playerO = "O";
const playerX = "X";
let currntPlayer = playerO;
let playerSelect = Array(9).fill(false);
const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
modalEl.addEventListener("click", startGame);
endEl.addEventListener("click", ResetBtn)
function startGame() {
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", addText);
    }
    modalEl.style.display = "none";
    endEl.style.display = "none";
}
function addText(e) {
    const id = e.target.id;
    if (!playerSelect[id]) {
        playerSelect[id] = currntPlayer;
        e.target.textContent = currntPlayer;
        boxes[id].removeEventListener("click", addText);
        if (checkWinner() !== false) {
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].removeEventListener("click", addText);
            }
            winnerEl.textContent = `${playerSelect[id]} win!`;
            endEl.style.display = "flex";
        }
    }
    currntPlayer = currntPlayer === playerX ? playerO : playerX;
}

Reset.addEventListener("click", ResetBtn)
function ResetBtn() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", addText);
        playerSelect.fill(false);
        boxes[i].textContent = "";
    }
    messageEl.textContent = "tic-tac-toe";
    currntPlayer = playerO;
    endEl.style.display = "none"
}

function checkWinner() {
    for (const condition of winning) {
        let [a,b,c] = condition;
        
        if (playerSelect[a] && playerSelect[a] === playerSelect[b] && playerSelect[a] === playerSelect[c]) {
            return [a,b,c];
        }
    }
    return false;
}
