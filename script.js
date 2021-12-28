'use strict';

let number=Math.trunc(Math.random()*20)+1


console.log(number);
let score=20;
let highscore=0;

document.querySelector(".check").addEventListener("click",()=>{
    const guess=Number(document.querySelector(".guess").value);
//     console.log(guess,typeof(guess));
      if(!guess){
        document.querySelector(".message").textContent="no number";

      }

        else if(guess===number){
          document.querySelector(".message").textContent="guessed it right 🎉🎉";
          document.querySelector("body").style.backgroundColor="green";
          document.querySelector(".number").style.width="30rem";
          document.querySelector(".number").textContent=number;
          if(score>highscore){
            document.querySelector(".highscore").textContent=score;
          }
        

         }
         else if(guess!==number){
          if (score>0) {
            score--;
            document.querySelector(".message").textContent= guess>number?"too high📈📈":"too low📉📉";
            document.querySelector(".score").textContent=score;
            
          }else{
           document.querySelector(".message").textContent="gameee overr☹️☹️";
          }
          

         }




        //  else if(guess>number){
          
             
        //  }
        //  else if(guess<number){
        //   if (score>0) {
        //     score--;
        //     document.querySelector(".message").textContent="too low📉📉";
        //     document.querySelector(".score").textContent=score;
            
        //   }else{
        //    document.querySelector(".message").textContent="gameee overr☹️☹️";
        //   }
        //  }
});
 
 


document.querySelector(".again").addEventListener("click",()=>{
  score=20;
  document.querySelector("body").style.backgroundColor="black";
  number=Math.trunc(Math.random()*20)+1
  document.querySelector(".number").textContent="?";
  document.querySelector(".score").textContent=score;
  document.querySelector(".message").textContent="start Guessing...";
  document.querySelector(".number").style.width="15rem";
  document.querySelector(".guess").value=" ";



})

