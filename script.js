function getComputerChoice()
{ const rps = ['Rock','Paper', 'Scissors'];

const random = Math.floor(Math.random()*rps.length);
return  rps[random];

}


function getHumanChoice()
{
  let human = prompt ("Enter your choice of the game ?");
  return human;
}
function playGame()
{
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
let output;
  if (humanChoice === computerChoice)
  {
 output = "Its a draw";
}
else if 
  ((humanChoice==='rock'&& computerChoice==='scissors')||
(humanChoice==='scissors'&& computerChoice==='paper')
 ||(humanChoice==='paper'&& computerChoice==='rock'))
{

humanScore++;
output = "You win this round";
}
else
{
 
 computerScore++;
 output = "Computer won this round"
}
console.log(output);
}
for (let i = 1; i<=5;i++)
  {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    playRound(humanSelection,computerSelection);
 console.log ("Human Score: "+ humanScore);
  console.log ("Computer Score: "+ computerScore);
  console.log("----------------------------------------------");
  }
  if (humanScore > computerScore)
  {
    console.log('YOU BEAT THE COMPUTER');
  }
  else { console.log ('the computer won')}



}
 playGame();

  

