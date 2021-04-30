let userMove = document.querySelectorAll('.moves')[0];
let compMove = document.querySelectorAll('.moves-comp i');
let refresh = document.querySelector('.refresh i');
let userChoice = document.querySelectorAll('.choice')[0];
let cpuChoice = document.querySelectorAll('.choice')[1];
let result = document.querySelector('.refresh span');
let userScore = document.querySelectorAll('.score')[0];
let cpuScore = document.querySelectorAll('.score')[1];
let userCount = 0;
let cpuCount = 0;
let reset = document.querySelector('.refresh i');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
userMove.addEventListener('click', usereventHandle);
function usereventHandle( event)
{   
    let computersDecision = "";
    let yourChoice = event.target.dataset.hand;
    console.dir(`Your choice is ${yourChoice}`);
    let compChoice = getRandomInt(3);
    compMove.forEach((cpu)=>{
        if(Number(cpu.dataset.num)===compChoice)
        {
            computersDecision = cpu.dataset.hand;
        }
    });
    console.log(`Computer's Choice is ${computersDecision}`);
   
   switch(yourChoice)
   {
       case 'Paper' : userChoice.innerText = '→Paper';
                      cpuChoice.innerText = `→${computersDecision}`
                      if(computersDecision=== 'Scissors'){result.innerText = 'You Lost!'
                      cpuCount += 1;
                      cpuScore.innerText = cpuCount;}
                      else if(computersDecision=== 'Rock')
                      {result.innerText = 'You Won!';
                      userCount += 1;
                      userScore.innerText = userCount}
                      else{result.innerText = 'Its a Tie!'}; 
                      
                      break;

      
       case 'Scissors': userChoice.innerText = '→Scissors';
                        cpuChoice.innerText = `→${computersDecision}`;
                        if(computersDecision=== 'Rock'){result.innerText = 'You Lost!'
                        cpuCount += 1;
                        cpuScore.innerText = cpuCount;}
                        else if(computersDecision=== 'Paper'){result.innerText = 'You Won!';
                        userCount += 1;
                        userScore.innerText = userCount}
                        else{result.innerText = 'Its a Tie!'}; break;

        case 'Rock': userChoice.innerText = '→Rock';
                     cpuChoice.innerText = `→${computersDecision}`;
                     if(computersDecision=== 'Paper'){result.innerText = 'You Lost!'
                     cpuCount += 1;
                     cpuScore.innerText = cpuCount;}
                     else if(computersDecision=== 'Scissors'){result.innerText = 'You Won!'
                      userCount += 1;
                      userScore.innerText = userCount}
                     else{result.innerText = 'Its a Tie!'}; break;
                        
    }

reset.addEventListener('click', handleReset);
function handleReset(event){
    result.innerText = "";
    userScore.innerText = "";
    cpuScore.innerText = "";
    userChoice.innerText = "";
    cpuChoice.innerText = "";
    userCount = 0;
    cpuCount =0;
    return;
}
}

