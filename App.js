let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetbtn");
let new_1 = document.querySelector(".newbtn");
let msg1_container = document.querySelector(".msg_winner")
let msg_2 = document.querySelector(".msg")

//reset
const resetgame=()=>{
    turn0=true;
    enablebtn();
    msg1_container.classList.add("hide");
}

//buttons
let turn0 = true; //playerX , playerO
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      //player O
      box.innerText = "0";
      turn0 = false; //so that its turn was not again
    } else {
      //player X
      box.innerText = "X";
      turn0 = true; //so that its turn
    }
    box.disabled = true; //it is uesd to turn-off :- not able to change O->X,X->O

    checkwinner();   //function call

  });
});

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


const checkwinner = ()=>{
    for(let pattern of winpatterns){

         // only for idea :-
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );  

        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if (pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val)
            showwinner(pos1val);
            }
        }
    }
};

const showwinner =(winner)=>{
    msg_2.innerText =`Congratulations , Winner is ${winner}`
    msg1_container.classList.remove("hide");
    disablebtn();
}


const disablebtn =()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enablebtn =()=>{
    for (let box of boxes){
        box.disabled=false;  //go to reset ,,called by resetgame
        box.innerText="";
    }
}

new_1.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);