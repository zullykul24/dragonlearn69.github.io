
        var lesson = 0; 
        const numberOfLessons = 5;
        var check_subPoint = 0;
        var trueAnswer = 0;
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
        
        function start(){
            var mess = document.getElementById("message_1");
            mess.innerHTML = "Start";
        }
        //start();
        function check_1(x)    // Check the first answer
        {
            var input1 = document.getElementById("input_1").value;
            var message = document.getElementById("message_1");
            if(input1 == x){    //True answer
               message.innerHTML = "Excellent!"; 
               message.style.color = "blue";
               trueAnswer++;
            }
            else if(input1 == ""){ //No answer
                message.innerHTML = "Write your answer";
                message.style.color = "red";
                }
            else{  //Wrong answer
                message.innerHTML = "Wrong answer"; 
                message.style.color = "red";
                if(check_subPoint == 0 && rightBalls != 0)subPoint();
                check_subPoint++;
            }
        }
        function check_2(x) //Check the second answer
        {
            var input2 = document.getElementById("input_2").value;
            var message = document.getElementById("message_2");
            if(input2 == x){
               message.innerHTML = "Excellent!";
               message.style.color = "blue";
               trueAnswer++;
            }
            else if(input2 == ""){
                message.innerHTML = "Write your answer";
                message.style.color = "red";
                }
            else{
                message.innerHTML = "Wrong answer";
                message.style.color = "red";
                if(check_subPoint == 0 && rightBalls != 0)subPoint();
                check_subPoint++;
            }
        }
        function check_3(x) //Check the third answer
        {
            var input3 = document.getElementById("input_3").value;
            var message = document.getElementById("message_3");
            if(input3 == x){
               message.innerHTML = "Excellent!"; 
               message.style.color = "blue";
               trueAnswer++;
            }
            else if(input3 == ""){
                message.innerHTML = "Write your answer";
                message.style.color = "red";
                }
            else{
                message.innerHTML = "Wrong answer";
                message.style.color = "red";
                if(check_subPoint == 0 && rightBalls != 0)subPoint();
                check_subPoint++;
            }
            console.log(check_subPoint);
        }
        function next(){   //New 3 questions with blank inputs and they're unchecked.
            var input_1 = document.getElementById("input_1");
            var input_2 = document.getElementById("input_2");
            var input_3 = document.getElementById("input_3");


            var question_1 = document.getElementById("question_1");
            var question_2 = document.getElementById("question_2");
            var question_3 = document.getElementById("question_3");


            var message_1 = document.getElementById("message_1");
            var message_2 = document.getElementById("message_2");
            var message_3 = document.getElementById("message_3");

            input_1.value = "";
            input_2.value = "";
            input_3.value = ""; // clear inputs
            message_1.innerHTML = "";
            message_2.innerHTML = ""; // clear messages
            message_3.innerHTML = "";
            check_subPoint = 0 ;

            
            var next_link = document.getElementById("next_link");
            next_link.innerHTML = ""; // Next button disappears 
            next_link.style.display = "none";


            question_1.innerHTML = question1_arr[lesson+1] + numbers1_arr[lesson+1];
            question_2.innerHTML = question2_arr[lesson+1] + numbers2_arr[lesson+1];;
            question_3.innerHTML = question3_arr[lesson+1] + numbers3_arr[lesson+1];;
            lesson++;
        }
        function commit(){  //When u give 3 true answers, the Next button appears 
            
           var next_link = document.getElementById("next_link");
            if(trueAnswer == 3 && lesson < numberOfLessons - 4){ //-1
                if(check_subPoint == 0)addPoint();
                next_link.style.display = "block";
                next_link.innerHTML = "Next";
                trueAnswer = 0;
            }
            if(lesson == (numberOfLessons - 4) && trueAnswer == 3){ // Finish all questions of lessons // -1
                next_link.style.display = "block";
                next_link.innerHTML = "Finish";
                if(check_subPoint == 0)addPoint();
                trueAnswer = 0;
            } 
        }
        function check_finish(){  //Check when u finish all lessons
        var next_link = document.getElementById("next_link");
        if(next_link.innerHTML == "Finish"){ //Finish
              
                next_link.onclick = hide();

            }
        }
function backToMenu(){
    location.href = "../menu.html";

}
// balls movement
var ball_arr = ["ball_1", "ball_2", "ball_3", "ball_4", "ball_5"];
var pos = 0;
var point = 0;
const numberOfBalls = 5;
function addPoint (){
    rightBalls++;
    var ele = document.getElementById(ball_arr[numberOfBalls - 1 - point]);
    var id = setInterval(frame, 5); //set higher to see balls move more slowly
    function frame(){
        if (pos == 360){ // 560 - 40*5 = progressWidth - numberOfBalls * ballWidth
            clearInterval(id);
          } else {
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
        function frame(){
            if(pos == 0){
                clearInterval(id);
            } else {
                ele.style.left = pos + "px";
                pos--;
            }
        }
        point--;
        pos = 360;
    }
    function hide(){
       var cap = document.getElementById("caption");
       var lines = document.getElementsByClassName("line");
       for(i = 0; i < lines.length ;i++){lines[i].style.display = 'none'; } 
        
       // cap.style.display = "block";
        cap.innerHTML = "You've completed the game! Congratulations!" ;
        cap.style = "font-size: 30px";
       
        lines[0].style = "display: block; font-size: 40px; text-align: center; line-height: 50px;";
        lines[0].innerHTML = "Your score: "+rightBalls;
       // lines[0].style = "line-height: 50px;"


        if(rightBalls == 5)lines[0].innerHTML +="<br>Perfect!";
        else lines[0].innerHTML +="<br>Try better next time!";


        lines[1].style = "display: block; font-size: 40px; text-align: center";
        lines[1].innerHTML = "<input type='submit' value='Restart' onclick= 'restart()';>";
       // lines[1].innerHTML.onclick = restart();
        lines[2].style = "display: block; font-size: 40px; text-align: center";
        lines[2].innerHTML = "<input type='submit' value='Back to menu' onclick = 'backToMenu()'>";

        var next_link = document.getElementById("next_link");
            next_link.innerHTML = ""; // Next button disappears 
            next_link.style.display = "none";

    }
    function restart(){
        //reset the variables;
        lesson = 0; 
        check_subPoint = 0;
        trueAnswer = 0;
        rightBalls = 0;

        var cap = document.getElementById("caption");
        cap.innerHTML = "Type the number which has" ;
        cap.style = "width: 960px; position: relative; height: 70px; text-align: center; line-height: 69px; font-size: 50px;";
        var lines = document.getElementsByClassName("line");



       for(i = 0; i < lines.length ;i++){lines[i].style.display = 'block'; } 
            var input_1 = document.getElementById("input_1");
            var input_2 = document.getElementById("input_2");
            var input_3 = document.getElementById("input_3");


            var question_1 = document.getElementById("question_1");
            var question_2 = document.getElementById("question_2");
            var question_3 = document.getElementById("question_3");


            var message_1 = document.getElementById("message_1");
            var message_2 = document.getElementById("message_2");
            var message_3 = document.getElementById("message_3");

            input_1.value = "";
            input_2.value = "";
            input_3.value = ""; // clear inputs

            message_1.innerHTML = "";
            message_2.innerHTML = ""; // clear messages
            message_3.innerHTML = "";

            
            var next_link = document.getElementById("next_link");
            next_link.innerHTML = ""; // Next button disappears 
            next_link.style.display = "none";


            question_1.innerHTML = question1_arr[lesson+1] + numbers1_arr[0];
            question_2.innerHTML = question2_arr[lesson+1] + numbers2_arr[0];;
            question_3.innerHTML = question3_arr[lesson+1] + numbers3_arr[0];;

    
    }
        