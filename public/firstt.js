let game=document.querySelectorAll(".p");
let res=document.querySelector("#res");
let turn0=true;
let winner=document.querySelector("#win");

let winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

 let c=0;
 let moves=0
game.forEach((u)=>{
 
    u.addEventListener("click",() =>{
    if (u.innerText !== "") return;
      moves++;
        if(turn0){
          u.innerText="X";
          turn0=false;
        }
        else{
          u.innerText="O";
          turn0=true;
        }
        console.dir(u.innerText)
        for(let i of winpat){
          let p1=game[i[0]].innerText;
          let p2= game[i[1]].innerText;
          let p3=game[i[2]].innerText;
          if(p1!='' && p2!='' && p3!='' && p1==p2 && p2==p3){
              winner.innerText=`winner is ${p1}`
              c=1
          }
   }
   if(c==0 && moves==9)
     winner.innerText=`match draw`
   
   


    })
   
})

res.addEventListener("click",()=>{
    game.forEach((u)=>{
        u.innerText=null;
    })
})


   
