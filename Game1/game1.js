
var lesson = 0; 
const numberOfLessons = 5;
var check_subPoint = 0;
var trueAnswer = 0;// Nam test
var rightBalls = 0; // count the right balls
var numbers1_arr = ["359", "826", "274", "618", "487"]; // chưa tối ưu, nên cho array
var numbers2_arr = ["350", "820", "204", "18", "407"] ;
var numbers3_arr = ["59", "806", "74", "610", "480"];
var question1_arr = [
            "3 hundreds, 9 units, 5 tens:",
            "6 units, 8 hundreds, 2 tens:",
            "7 tens, 4 units, 2 hundreds:",
            "8 units, 1 ten, 6 hundreds:",
            "8 tens, 4 hundreds, 7 units:"
            ];
var question2_arr = [
            "5 tens and 3 hundreds:",
            "8 hundreds and 2 tens:",
            "4 units and 2 hundreds:",
            "1 ten and 8 units:",
            "4 hundreds and 7 units:"
            ];
var question3_arr = [
            "9 units and 5 tens:",
            "6 units and 8 hundreds:",
            "7 tens and 4 units:",
            "6 hundreds and 1 ten:",
            "8 tens and 4 hundreds:"
            ];

/*function check_1(x)    // Check the first answer
{
    var input_1 = document.getElementById("input_1"); 
    var message_1 = document.getElementById("message_1");
    var submit_1 = document.getElementById("submit_1");
    if(input_1.value == x)
    {    //True answer
        message_1.innerHTML = "Excellent!"; 
        message_1.style.color = "blue";
        trueAnswer++;
        if(input_2.value == "")input_2.focus();
        else if(input_3.value == "")input_3.focus();
        input_1.disabled = true;
        submit_1.disabled = true;
    }
    else if(input_1.value == "")
    { //No answer
        message_1.innerHTML = "Write your answer";
        message_1.style.color = "red";
    }
    else
    {  //Wrong answer
        message_1.innerHTML = "Wrong answer"; 
        message_1.style.color = "red";
        if(check_subPoint == 0 && rightBalls != 0)subPoint();
        check_subPoint++;
    }
}
function check_2(x) //Check the second answer
{
    var input_2 = document.getElementById("input_2");
    var message_2 = document.getElementById("message_2");
    var submit_2 = document.getElementById("submit_2");
    if(input_2.value == x)
    {
        message_2.innerHTML = "Excellent!";
        message_2.style.color = "blue";
        trueAnswer++;
        if(input_1.value == "")input_1.focus();
        else if(input_3.value == "")input_3.focus();
        input_2.disabled = true;
        submit_2.disabled = true;
    }
    else if(input_2.value == "")
    {
        message_2.innerHTML = "Write your answer";
        message_2.style.color = "red";
    }
    else
    {
        message_2.innerHTML = "Wrong answer";
        message_2.style.color = "red";
        if(check_subPoint == 0 && rightBalls != 0)subPoint();
        check_subPoint++;
    }
}
function check_3(x) //Check the third answer
{
    var input_3 = document.getElementById("input_3");
    var message_3 = document.getElementById("message_3");
    var submit_3 = document.getElementById("submit_3");
    if(input_3.value == x)
    {
        message_3.innerHTML = "Excellent!"; 
        message_3.style.color = "blue";
        trueAnswer++;
        if(input_1.value == "")input_1.focus();
        else if(input_2.value == "")input_2.focus();
        input_3.disabled = true;
        submit_3.disabled = true;
    }
    else if(input_3.value == "")
    {
        message_3.innerHTML = "Write your answer";
        message_3.style.color = "red";
    }
    else
    {
        message_3.innerHTML = "Wrong answer";
        message_3.style.color = "red";
        if(check_subPoint == 0 && rightBalls != 0)subPoint();
        check_subPoint++;
    }
}*/
function check_result(x, index){
    var input = document.getElementById("input_"+ index);
    var message = document.getElementById("message_" + index);
    var submit = document.getElementById("submit_"+ index);
    if(input.value == x)
    {
        message.innerHTML = "Excellent!"; 
        message.style.color = "blue";
        trueAnswer++;
        if(input_1.value == "")input_1.focus();
        else if(input_2.value == "")input_2.focus();
        else if(input_3.value == "")input_3.focus();
        

        input.disabled = true;
        submit.disabled = true;
    }
    else if(input.value == "")
    {
        message.innerHTML = "Write your answer";
        message.style.color = "red";
    }
    else
    {
        message.innerHTML = "Wrong answer";
        message.style.color = "red";
        if(check_subPoint == 0 && rightBalls != 0)subPoint();
        check_subPoint++;
    }
}
function next()
{ 
    if(lesson == (numberOfLessons - 1))
    { //Change to - 1 when finish
       // Display finish screen when finish
        finish_screen();

    }  //New 3 questions with blank inputs and they're unchecked.
    else
    { 
        var input_1 = document.getElementById("input_1");
        var input_2 = document.getElementById("input_2");
        var input_3 = document.getElementById("input_3");


        var question_1 = document.getElementById("question_1");
        var question_2 = document.getElementById("question_2");
        var question_3 = document.getElementById("question_3");


        var message_1 = document.getElementById("message_1");
        var message_2 = document.getElementById("message_2");
        var message_3 = document.getElementById("message_3");

        input_1.focus();

        input_1.value = "";
        input_2.value = "";
        input_3.value = ""; // clear inputs
        message_1.innerHTML = "";
        message_2.innerHTML = ""; // clear messages
        message_3.innerHTML = "";
        check_subPoint = 0 ;

        var inputs = document.getElementsByClassName("input");
        for(i = 0;i < inputs.length; i++){inputs[i].disabled = false;} //enable inputs

        var submits = document.getElementsByClassName("submit");
        for(i = 0;i < submits.length; i++){submits[i].disabled = false;} //enable submits
 
        var next_link = document.getElementById("next_link");

        next_link.style.visibility = "hidden";


        question_1.innerHTML = question1_arr[lesson+1];
        question_2.innerHTML = question2_arr[lesson+1];
        question_3.innerHTML = question3_arr[lesson+1];
        lesson++;
    }
}
function commit()
{  //When u give 3 true answers, the Next button appears 
    var next_link = document.getElementById("next_link");
    if(trueAnswer == 3 && lesson < numberOfLessons - 1)
    { //Change to - 1 when finish
        if(check_subPoint == 0){addPoint();check_subPoint++;}
        next_link.style.visibility = "visible";
        next_link.innerHTML = "Next";
        trueAnswer = 0;
    }
    if(lesson == (numberOfLessons - 1) && trueAnswer == 3)
    { // Finish all questions of lessons // Change to -1 
        next_link.style.visibility = "visible";
        next_link.innerHTML = "Finish";
        if(check_subPoint == 0){addPoint();check_subPoint++;}
        trueAnswer = 0;
    } 
}
        
function backToMenu()
{
    location.href = "../menu.html";
}
// balls movement
var ball_arr = ["ball_1", "ball_2", "ball_3", "ball_4", "ball_5"];
var pos = 0;
var point = 0;
const numberOfBalls = 5;
function addPoint()
{
    rightBalls++;
    var ele = document.getElementById(ball_arr[numberOfBalls - 1 - point]);
    var id = setInterval(frame, 5); //set higher to see balls move more slowly
    function frame()
    {
        if (pos == 360)
        { // 560 - 40*5 = progressWidth - numberOfBalls * ballWidth
            clearInterval(id);
        }else 
        {
            ele.style.left = pos + "px";
            pos++;
        }
    }
    point++;
    pos = 0;
}
function subPoint()
{
    if(rightBalls > 0)rightBalls--;
    var ele = document.getElementById(ball_arr[numberOfBalls - point]);
    var id = setInterval(frame, 5);
    function frame()
    {
        if(pos == 0)
        {
            clearInterval(id);
        }else 
        {
            ele.style.left = pos + "px";
            pos--;
        }
    }
    point--;
    pos = 360;
}
    /// finish screen
function finish_screen()
{
    var cap = document.getElementById("caption");

    var answer = document.getElementsByClassName("answer");
    for(i = 0;i < answer.length; i++){answer[i].style.display = "none";}


    var question_1 = document.getElementById("question_1");
    var question_2 = document.getElementById("question_2");
    var question_3 = document.getElementById("question_3");

    var lines = document.getElementsByClassName("line");


    cap.innerHTML = "You've completed the game! Congratulations!" ;
    cap.style = "font-size: 30px";

    question_1.innerHTML = "Your score: "+rightBalls;
    question_1.style = " font-size: 40px; text-align: center; line-height: 50px; width: 960px";

    if(rightBalls == 5)question_1.innerHTML +="<br>Perfect!";
    else question_1.innerHTML +="<br>Try better next time!";

    question_2.style = " font-size: 40px; text-align: center; width: 960px;"; 
    question_2.innerHTML = "<input type='submit' value='Restart' onclick= 'startButton()';>";// Click button to restart
    question_3.style = " font-size: 40px; text-align: center; width: 960px;";
    question_3.innerHTML = "<input type='submit' value='Back to menu' onclick = 'backToMenu()'>";//Click to go back to menu

    var next_link = document.getElementById("next_link");
    next_link.innerHTML = ""; // Next button disappears 
    next_link.style.display = "none";

}
function restart()
{
    //reset the variables;
    lesson = 0; 
    check_subPoint = 0;
    trueAnswer = 0;
    rightBalls = 0;

    var cap = document.getElementById("caption");
    cap.hidden = false;
    cap.innerHTML = "Type the number which has" ;
    cap.style = "width: 960px; position: relative; height: 70px; text-align: center; line-height: 69px; font-size: 50px;";

    var questions = document.getElementsByClassName("question");
    for(i = 0; i < questions.length ;i++){questions[i].style = "float: left;width: 500px;height: 140px;"; } 

    var answer = document.getElementsByClassName("answer");
    for(i = 0;i < answer.length; i++){answer[i].style.display = "block";}

    var input_1 = document.getElementById("input_1");
    var input_2 = document.getElementById("input_2");
    var input_3 = document.getElementById("input_3");


    var question_1 = document.getElementById("question_1");
    var question_2 = document.getElementById("question_2");
    var question_3 = document.getElementById("question_3");

    question_1.hidden = false;
    question_2.hidden = false;
    question_3.hidden = false;
    


    var message_1 = document.getElementById("message_1");
    var message_2 = document.getElementById("message_2");
    var message_3 = document.getElementById("message_3");

    var inputs = document.getElementsByClassName("input");
    for(i = 0;i < inputs.length; i++){inputs[i].disabled = false;} //enable inputs

    var submits = document.getElementsByClassName("submit");
    for(i = 0;i < submits.length; i++){submits[i].disabled = false;} //enable submits



    input_1.focus();
    

  /*  var inputs = document.getElementsByClassName("input");
    for(i = 0;i < inputs.length; i++){inputs[i].disabled = "disabled";}

    var submits = document.getElementsByClassName("submit");
    for(i = 0;i < submits.length; i++){submits[i].disabled = "disabled";}
    */


    

    input_1.value = "";
    input_2.value = "";
    input_3.value = ""; // clear inputs

    message_1.innerHTML = "";
    message_2.innerHTML = ""; // clear messages
    message_3.innerHTML = "";

    var next_link = document.getElementById("next_link");         
    next_link.style.visibility = "hidden";
    question_1.innerHTML = question1_arr[lesson];
    question_2.innerHTML = question2_arr[lesson];
    question_3.innerHTML = question3_arr[lesson];


    var img = document.getElementById("startButton");
    img.hidden = true;

}
function startButton(){
    var cap = document.getElementById("caption");
    var img = document.getElementById("startButton");

    var answer = document.getElementsByClassName("answer");
    for(i = 0;i < answer.length; i++){answer[i].style.display = "none";}


    var question_1 = document.getElementById("question_1");
    var question_2 = document.getElementById("question_2");
    var question_3 = document.getElementById("question_3");
    question_1.hidden = true;
    question_2.hidden = true;
    question_3.hidden = true;

    cap.hidden = true;
    img.hidden = false;
    img.style = "z-index: 1; margin-left: 345px; cursor: pointer;";
    question_2.style = "width: 400px";

    while(point > 0)subPoint();// reset the balls and points

}

//// Write test cases

        