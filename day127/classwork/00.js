function comp(){
            let random = Math.random()
            let computer = '';
            
            if(random >= 0 && random <=1/3){
                computer="rock"
            }
            else if(random > 1/3 && random <= 2/3){
                computer="paper"
            }
            else{computer="scissors"}

            return computer
        }

        function final (player_move, computer_move){
            let result = '';

            if (player_move === 'rock' && computer_move === 'rock') {
                result = 'Tie.';
                score.ties++;
            }
            else if (player_move === 'rock' && computer_move === 'paper') {
                result = 'You lose.';
                score.loses++;
            }
            else if (player_move === 'rock' && computer_move === 'scissors') {
                result = 'You win.';
                score.wins++; 
            }            
            else if (player_move === 'paper' && computer_move === 'rock') {
                result = 'You win.';
                score.wins++;
            }
            else if (player_move === 'paper' && computer_move === 'paper') {
                result = 'Tie.';
                score.ties++;
            }
            else if (player_move === 'paper' && computer_move === 'scissors') {
                result = 'You lose.';
                score.loses++;
            }
            else if (player_move === 'scissors' && computer_move === 'rock') {
                result = 'You lose.';
                score.loses++;
            }            
            else if (player_move === 'scissors' && computer_move === 'paper') {
                result = 'You win.';
                score.wins++;
            }
            else if (player_move === 'scissors' && computer_move === 'scissors') {
                result = 'Tie.';
                score.ties++;
            }
            
            if(result==='You win.'){
                document.querySelector('.result').style.color = "green"
            }else if(result==='You lose.'){
                document.querySelector('.result').style.color = "red"
            }else{document.querySelector('.result').style.color = "orange"}
            
            document.querySelector('.result').innerHTML=`you picked <img src="${player_move}-emoji.png" id="icon"> . computer picked <img src="${computer_move}-emoji.png" id="icon">. ${result}`
            let scorevalue = JSON.stringify(score);
            localStorage.setItem('score', scorevalue)
            document.querySelector('.final').innerHTML=  `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.ties}`
       
        }

        const score = JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            loses:0,
            ties:0
        }
        
        
        function fn_reset(){
            localStorage.removeItem('score')
            document.querySelector('.final').innerHTML= `wins: 0, loses: 0, ties: 0` 
            score.wins=0
            score.loses=0
            score.ties=0
            document.querySelector('.result').innerHTML= `loading result...`;
            document.querySelector('.result').style.color = 'black';
        }
        document.querySelector('.final').innerHTML= `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.ties}` 

