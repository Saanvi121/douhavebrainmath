player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML= player1_name + " : ";
document.getElementById("player2_name").innerHTML= player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML= "Question Turn - " + player1_name
document.getElementById("player_answer").innerHTML= "Answer Turn - " + player2_name

function send()
{
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    question  = "<h4>" + number1 + " x " + number2 + "</h4>"
    answer_input = "<br>Answer: <input type='number' id='input_check_box'> ";
    check_button = "<br><br><button class= 'btn-btn info' onclick='check()'>Check</button>";
    full_question_print = question + answer_input + check_button ;
    document.getElementById("output").innerHTML=full_question_print;
}