let boxes = document.querySelectorAll(".box");
let msgcon = document.querySelector(".msgcon");
let msg = document.querySelector(".msg");
let rbtn = document.querySelector("#rbtn");
let nbtn = document.querySelector("#nbtn");

let turn0 = true;
let count = 0;
const winpattren=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
           box.disabled=true;
           gamewinner();
            count++;

            let iswinner= gamewinner();
            if(count=== 9 && !iswinner)
            {
                drawgame();

            }
    });
});
const gamewinner=()=>{
   
    for(let pattren of winpattren){
        let pos1 = boxes[pattren[0]].innerText;
        let pos2 = boxes[pattren[1]].innerText;
        let pos3 = boxes[pattren[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
        }
    }
}
};
const showwinner = (winer)=>{
    
    msg.innerText=`Congratulation the winner is ${winer}`;
    msgcon.classList.remove("hide");
     disblock();
};
const disblock =()=>{
    for(let box of boxes){
        box.disabled=true;
    }

};
const block=()=>{
for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}
};

const reset=()=>{
    turn0=true;
    count=0;
 block();
 msgcon.classList.add("hide");
};
rbtn.addEventListener("click",()=>reset());
nbtn.addEventListener("click" , ()=>reset());

const drawgame=()=>{
    msg.innerText="Game Draw";
    msgcon.classList.remove("hide");
    disblock();

};