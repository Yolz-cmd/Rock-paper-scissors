function getComputerChoice()
{ rps = ['Rock','Paper', 'Scissors'];

let random = Math.floor(Math.random()*rps.length);
return console.log (rps[random]);

}
getComputerChoice();