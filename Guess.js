// var msg = document.getElementById("output")
// let number =  Math.floor((Math.random() * 10))+1;
// let chances = 0;

// function newGuess(){
//     let guess = document.getElementsByClassName("in").value;
//     if(guess != null){
//         chances +=1;
//     //guess = Number.parseInt(guess); // this converts string value in integer
//             if(guess > number){
//                 msg.textContent = "Wrong!! The Number you guessed is larger than the answer."
//                 //document.getElementById('output').innerHTML = "Wrong!! The Number you guessed is larger than the answer."
//                 //document.getElementById('output').style.backgroundColor = "#f49480"
//             }
            
//             else if(guess < number){
//                 msg.textContent = "Wrong!! The Number you guessed is smaller than the answer."
//                 //document.getElementById('output').innerHTML = "Wrong!! The Number you guessed is smaller than the answer."
//                 //document.getElementById('output').style.backgroundColor = "#f49480"
//             }

//             else if(guess < number){
//                 let score = 100-chances;
//                 msg.textContent = "\nCongratulations!! You Guessed It." + "<br>" + "You took " + chances + " guessess. The number was " + number +"." + "<br>" + "Your Score is " + (100-chances) + "."  
//                 //document.getElementById('output').innerHTML = "\nCongratulations!! You Guessed It." + "<br>" + "You took " + chances + " guessess. The number was " + number +"." + "<br>" + "Your Score is " + (100-chances) + "."  
//                 //document.getElementById('output').style.backgroundColor = "#8ce78c"
//             }
//     }
    
 
// }

var msg = document.getElementById("output");

var answer = Math.floor(Math.random()*100) + 1;
var guesses = 0;

function newGuess(){
    var user_guess = document.getElementById("in").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        guesses+= 1;

        if(user_guess < answer){
            msg.textContent = "Your guess is smaller.";
            document.getElementById('output').style.backgroundColor = "#f49480"
        }
        else if(user_guess > answer){
            msg.textContent = "Your guess is large.";
            document.getElementById('output').style.backgroundColor = "#f49480"
        }
        else if(user_guess == answer){
            msg.textContent = "Yippie You Win!!" + "\n" +"The number was: " + answer + "\n" + "You guessed it in "+ guesses + " guesses";
            document.getElementById('output').style.backgroundColor = "#8ce78c"
            document.getElementById("btn").disabled = true;
        }
    }
}
