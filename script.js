function getComputerChoice()
{ rps = ['Rock','Paper', 'Scissors'];

let random = Math.floor(Math.random()*rps.length);
return console.log ("Computer Choice : " + rps[random]);

}
getComputerChoice();

function getHumanChoice()
{
  let humanChoice = prompt ("Enter your choice of the game ?");
  return console.log ("Human Choice:" + humanChoice);
}
getHumanChoice();