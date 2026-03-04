const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset-btn');

let turnX = true;
//  const popupMsg = alert();

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

const resetGame = ()=> {
    turnX = true;
    enableBoxes();

}


boxes.forEach((box) => {
    box.addEventListener('click', ()=> {
        // console.log('kledsa');
        if(turnX){
            box.innerText = "X";
            turnX = false;
            box.disabled = true;
        }else{
            box.innerText = "O";
            turnX = true;
            box.disabled = true;
        }

        checkWin();
    })
})

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

function checkWin(){
    for(let Patterns of winPatterns){
        const pos1Val = boxes[Patterns[0]].innerText;
        const pos2Val = boxes[Patterns[1]].innerText;
        const pos3Val = boxes[Patterns[2]].innerText;
        // console.log(pos1Val, pos2Val, pos3Val)
         
        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                disableBoxes();
                popup();
            }
        }

        function popup (){
        setTimeout(() =>{
                   alert(`Congratulations. 
                    Player ${pos1Val} Win The Game.`);
                }, 100);
             }
    }
}


resetBtn.addEventListener("click", resetGame);
