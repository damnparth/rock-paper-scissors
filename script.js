function getComputerChoice()
{
    let computerChoice;
    let randomInt=Math.floor(Math.random()*3);
    if(randomInt==0){
        computerChoice="rock"
    }
    else if(randomInt==1){
        computerChoice="paper"
    }
    else{
        computerChoice="scissors"
    }   
    return computerChoice;
}


function getHumanChoice()
{
    let humanChoice=prompt('enter your choice')
    return humanChoice
}

function playround(computerChoice,humanChoice){
    if(computerChoice===humanChoice){
        console.log("computer chose the same, play again")
    }
    else if(humanChoice==="rock"){
        if(computerChoice==="scissors"){
            console.log("you won, computer chose "+ computerChoice)
        }
        else{
            console.log("you lose, computer chose "+ computerChoice)
        }

    }
    else if(humanChoice==="paper"){
        if(computerChoice==="rock")
            {
                console.log("you won, you chose "+ computerChoice)
            }
            else{
                console.log("you lose, computer chose "+ computerChoice)
            }

    }
    else if(humanChoice==="scissors"){
        if(computerChoice==="paper")
            {
                console.log("you won, computer chose"+ computerChoice)
            }
            else{
                console.log("you lose, computer chose "+computerChoice)
            }
    }
    


    


    
}
for(i=0;i<=5;i++){
    playround(getComputerChoice(),getHumanChoice());
}
playround();
