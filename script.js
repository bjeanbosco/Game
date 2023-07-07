//this is the function generate the player which comptuter selected to play
function getComputerChoice(){
const player=Math.floor(Math.random()*3)+1;
let text='';
player==1?text +='Rock':player==2?text +='Paper':player==3?text +='Scissors':null;
return text;
}

let x=0;
let y=0;

function playRound(playerSelection, computerSelection) {
 

    if(computerSelection==playerSelection){
       console.log('Draw Match!');
        }
    else if(computerSelection=='ROCK'&&playerSelection=='PAPER'){
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    x++;
    }

    else if(computerSelection=='PAPER'&&playerSelection=='SCISSORS'){
       console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
       x++
}
 else if(computerSelection=='SCISSORS'&&playerSelection=='ROCK'){
  console.log(`You Lose! ${computerSelection} beats ${playerSelection} `);
  x++
 
}
else{
console.log(`You Win! ${playerSelection} beats ${computerSelection} `);
   y++;
}
  }
   

  function game(){
  const regex=/rock|paper|scissors/
const playerChoice=prompt(`Select Your player among: Rock, Paper and Scissors`)
 const condition=regex.test(playerChoice)
for(let i=0;i<=4;i++){
   if(condition){
playRound(playerChoice.toUpperCase(),getComputerChoice().toUpperCase())
}
else{
   alert('The player You choose Not Available. Choose The one available and play again! ')
}
}
console.log(x>y?'Results: Sorry, computer win The Match!':x<y?'Results:  You win the Match!!'
:x==0&&y==0?'':'Results: No, winner You have the same score better to play again')
}
  

game()
