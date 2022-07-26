var score = 10;
var scoretmp=0;
var historyarray =[];
var i = 0;
var Hscore;
let reset = document.getElementById("Reset");
let tryagain1 = document.getElementById("TryAgain1");
let tryagain2 = document.getElementById("TryAgain2");
let gamebox = document.getElementById("boxGame");
let winbox  = document.getElementById("boxWin");
let lostbox = document.getElementById("boxLost");
const history = document.getElementById("scorehistory");
const validation = /^[0-9]/gm;
reset.addEventListener('click',function(){
    location.reload()
})


let number = Math.floor(Math.random()*100)+1;
// let number = 10;

let Btn = document.getElementById("Check");

Btn.addEventListener('click',function(){
    let input = document.getElementById("inputvalue").value;    

    if(input<1 && input > 100 || !validation.test(input) || input=="" ){
        document.getElementById("p1").innerHTML= "You can only enter numbers between 1 and 100";
        }else{
            if(input == number){
                winbox.style.display = "block";
                gamebox.style.display = "none";
                lostbox.style.display = "none";
                if(scoretmp <= score ){
                Hscore = score;
                scoretmp = score;
                }else{
                    Hscore = scoretmp;
                }
                document.getElementById("number2").innerHTML = number;
                document.getElementById("score1").innerHTML=score;
                document.getElementById("Hscore").innerHTML=Hscore;
                document.getElementById("Hscore2").innerHTML=Hscore;
                document.getElementById("Hscore").innerHTML=Hscore;
            } else{
                if(input < number){
                    document.getElementById("p1").innerHTML= "Your Guess is too low";
                   score = score-1
                }else{
                    document.getElementById("p1").innerHTML= "Your Guess is too high";
                    score = score-1
                    
                };
            if(score<1){
                winbox.style.display = "none";
                gamebox.style.display = "none";
                lostbox.style.display = "block";
                document.getElementById("guessnumber").innerHTML = number;
                };
            document.getElementById("score").innerHTML = score;
            };
            
            history.innerHTML += "<li> "+input+" </li>";
            
                    
        }
    }
    );


tryagain1.addEventListener('click',function(){
            winbox.style.display = "none";
            gamebox.style.display = "block";
            lostbox.style.display = "none";
            score = 10;
            document.getElementById("score").innerHTML=score;
            number = Math.floor(Math.random()*100)+1;
            document.getElementById("scorehistory").innerHTML = '';
});
tryagain2.addEventListener('click',function(){
    winbox.style.display = "none";
    gamebox.style.display = "block";
    lostbox.style.display = "none";
    score = 10;
    document.getElementById("score").innerHTML=score;
    number = Math.floor(Math.random()*100)+1;
    document.getElementById("scorehistory").innerHTML = '';
});