const box = document.querySelectorAll(".grid-item");
const reset= document.querySelector("#reset");
let para= document.querySelector("p")
let turn = true;
box.forEach(element => {
    element.addEventListener("click",() =>{
        if(turn){
            element.innerHTML="X";
            turn=false;
            para.innerHTML="O turn";
        }
        else{
            element.innerHTML="O";
            turn=true;
            para.innerHTML="X turn";
        }
        element.disabled=true;
        result();
    })
});
const pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const result = () => {
    for(let p1 of pattern){
        let value1=box[p1[0]].innerHTML;
        let value2=box[p1[1]].innerHTML;
        let value3=box[p1[2]].innerHTML;

        if(value1===value2 && value2===value3 ){
            if(value1==="X"){
                para.innerHTML= "X Won";
                box.forEach(element => element.disabled=true);
                reset.innerHTML="New Game";
                return;
            }
            else if(value1==="O"){
                para.innerHTML= "O Won";
                box.forEach(element => element.disabled=true);
                reset.innerHTML="New Game";
                return;
            }
        }
    }
    let value;
    for(let x of box){
        value = x.innerHTML;
        if(value===""){
            break;
        }
    }
    if(value!=""){
        para.innerHTML= "Draw";
        reset.innerHTML="New Game";
    }
}

reset.addEventListener("click",() => {
    box.forEach(element => {
        element.innerHTML="";
        element.disabled=false;
    })
    para.innerHTML="Click to Start (X)";
    turn=true;
    reset.innerHTML="RESET";
});
result();
