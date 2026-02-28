const boxes = document.querySelectorAll('.box');
// console.log(box);
const resetBtn = document.querySelector('#reset-btn');
// console.log(resetBtn)

let turnX = true;

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

boxes.forEach((box) => {
    box.addEventListener('click', ()=> {
        // console.log('kledsa');
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }

    })
})