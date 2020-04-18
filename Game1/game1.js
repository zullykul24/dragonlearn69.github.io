        var count = 0; ///count the completed questions
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
            "1 ten and 8 units",
            "4 hundreds and 7 units"
            ];
        var question3_arr = [
            "9 units and 5 tens:",
            "6 units and 8 hundreds:",
            "7 tens and 4 units:",
            "6 hundreds and 1 ten",
            "8 tens and 4 hundreds"
            ];
        
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
            var input1 = document.getElementById("input_1");
            var input2 = document.getElementById("input_2");
            var input3 = document.getElementById("input_3");


            var question1 = document.getElementById("question1");
            var question2 = document.getElementById("question2");
            var question3 = document.getElementById("question3");


            var message_1 = document.getElementById("message_1");
            var message_2 = document.getElementById("message_2");
            var message_3 = document.getElementById("message_3");

            input1.value = "";
            input2.value = "";
            input3.value = ""; // clear inputs
            message_1.innerHTML = "";
            message_2.innerHTML = ""; // clear messages
            message_3.innerHTML = "";
            check_subPoint = 0 ;

            
            var next_link = document.getElementById("next_link");
            next_link.innerHTML = ""; // Next button disappears 


            question1.innerHTML = question1_arr[lesson+1];
            question2.innerHTML = question2_arr[lesson+1];
            question3.innerHTML = question3_arr[lesson+1];
            lesson++;
        }
        function commit(){  //When u give 3 true answers, the Next button appears 
            
            var next_link = document.getElementById("next_link");
            if(trueAnswer == 3 && lesson < numberOfLessons - 1){
                if(check_subPoint == 0)addPoint();
                next_link.innerHTML = "Next";
                trueAnswer = 0;
            }
            if(lesson == (numberOfLessons - 1) && trueAnswer == 3)next_link.innerHTML = "Finish"; // Finish all questions of lessons
        }
        function check_finish(){  //Check when u finish all lessons
        var next_link = document.getElementById("next_link");
        if(next_link.innerHTML == "Finish"){
                next_link.onclick = function(){
                    location.href = "menu.html"; //Click finish to go to menu
                }
            }
        }
// balls movement
var ball_arr = ["ball_1", "ball_2", "ball_3", "ball_4", "ball_5"];
var pos = 0;
var point = 0;
const numberOfBalls = 5;
function addPoint (){
    rightBalls++;
    var ele = document.getElementById(ball_arr[numberOfBalls - 1 - point]);
    var id = setInterval(frame, 5);
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
        