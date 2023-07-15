
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
            msg.textContent = "Yippie You Win!!" + "<br>" +"The number was: " + answer + "<br>" + "Your score is "+ (100 - guesses) + ".";
            document.getElementById('output').style.backgroundColor = "#8ce78c"
            document.getElementById("btn").disabled = true;
        }
    }
}
