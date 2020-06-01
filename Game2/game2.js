
// còn thiếu part 2, chuyển động của column, màn hình chiến thắng, chỉnh câu hỏi và column cho cân đối, có thể thêm vài class vào cho nó hướng đối tượng

let questionVariable = [           //  [previous column, added column]
    [5, 0],
    [8, 2],
    [8, 3],
    [9, 3],
    [6, "tens"],                            // giai đoạn part 2,
    [8, "units"],                            //"tens" tượng trưng cho __ tens is the same as ___ units
    [10, "tens"],                           //"units" tượng trưng cho __ units is the same as ___ tens
    [16, "units"],
    [13, "tens"],
    [18, "tens"]
];
let indexX = 0;                      // [index của questionVariable]
let indexY = 0;

let check1_1 = false;                   // [index câu hỏi 1]
let check1_2 = false;                   // [index câu hỏi 2]


/*
var canvas = document.getElementById("progressBar");        // tạo progress bar
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
*/

let ballIndex = 9;
let addPoint = true;

var pos = 0;

function ballGoRight() {
    var ele = document.getElementById("ball_" + ballIndex);
    console.log("goi bong so" + ballIndex);
    var id = setInterval(frame, 1);
    function frame() {
        if (pos >= 560 - 30 * 10) {
            clearInterval(id);
        }
        else {
            ele.style.left = pos + "px";
            pos += 4;
        }

    }
    ballIndex--;
    pos = 0;

}
function ballGoLeft() {
    ballIndex++;
    var ele = document.getElementById("ball_" + ballIndex);
    console.log("goi bong so" + ballIndex);
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            ele.style.left = pos + "px";
            pos -= 4;
        }
    }

    console.log("pos = " + pos);
    // console.log(ele.offsetLeft);
    pos = 560 - 30 * 10;

}



//////////////////////////////////////////////////////////////////////////////////////////////
// thuộc diện nghi vấn để làm gọn
function addColumn1(number) {                                                    // thêm column theo number
    var indexAdded;
    if (indexY === 0) {
        indexAdded = 0;
    }
    else {
        indexAdded = questionVariable[indexX][0];
    }


    for (var a = 0; a < number; a++) {
        var img = document.createElement("img");
        img.src = "https://i.ibb.co/4S5Yw11/block.png";
        var src = document.getElementById("column");
        if (((a + indexAdded) % 5) === 0 && a !== 0)
            img.style.marginLeft = "10px";
        src.appendChild(img);
    }
}

function addColumn2(number) {
    var src = document.getElementById("column2");
    if (!src.hasChildNodes()) {
        for (var a = 0; a < number; a++) {
            var img = document.createElement("img");
            img.src = "https://i.ibb.co/4S5Yw11/block.png";
            if ((a % 5) === 0 && a !== 0)
                img.style.marginLeft = "10px";
            src.appendChild(img);
        }
    }
}

function unShowSuggestion1() {
    document.getElementById("suggest1units").style.display = "none";
    document.getElementById("suggest1tens").style.display = "none";
}

function unShowSuggestion2() {
    document.getElementById("suggest2tens").style.display = "none";
    document.getElementById("suggest2units").style.display = "none";
    clearColumn("column2");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function clearColumn1() {                                            // xóa các column trên bản đồ
    var list = document.getElementById("column");
    while (list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }
}
function clearColumn2() {                                            // xóa các column trên bản đồ
    var list = document.getElementById("column2");
    while (list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }
}
*/
function clearColumn(id) {                                            // xóa các column trên bản đồ
    var list = document.getElementById(id);
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////
function start1() {
    /*    ctx.fillRect(0,0,560*(indexX/(questionVariable.length-1)),40);     // vẽ progress bar
        ctx.strokeRect(0,0,560,40);
    */
    if (indexY === 0) {
        clearColumn("column");
    }
    addColumn1(questionVariable[indexX][indexY]);
    addQuestion1(questionVariable[indexX][indexY]);
    movetoNextCursor("input1");
}


function addQuestion1(number) {                                   // thêm câu hỏi nhưng cái này đã làm trên file html

}

function showSuggestion1(index) {
    if (ballIndex < 8 && addPoint === true) {
        ballGoLeft();

    }/////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (index === 1) {
        document.getElementById("suggest1units").style.display = "none";
        document.getElementById("suggest1tens").style.display = "block";
    }
    else {
        if (indexY === 0)
            document.getElementById("tens1").innerHTML = questionVariable[indexX][0];
        else
            document.getElementById("tens1").innerHTML = questionVariable[indexX][0] + questionVariable[indexX][1];

        document.getElementById("suggest1units").style.display = "block";
        document.getElementById("suggest1tens").style.display = "none";
    }
}



async function checkQuestion1(index) {                                  // check đáp án đúng chưa, nếu đúng rồi thì next màn
    let number;                                        // đáp án
    if (indexY === 0) {
        if (index === 1) {
            number = questionVariable[indexX][indexY];
        } else if (index === 2) {
            number = questionVariable[indexX][indexY] * 10;
        }
    } else if (indexY === 1) {
        if (index === 1) {
            number = questionVariable[indexX][0] + questionVariable[indexX][1];
        } else if (index === 2) {
            number = (questionVariable[indexX][0] + questionVariable[indexX][1]) * 10;
        }
    }


    if (index === 1) {
        var answer1 = document.getElementById("input1").value;
        if (answer1 == number) {
            unShowSuggestion1();
            check1_1 = true;
            movetoNextCursor("input2");
        } else {
            if (answer1.length === number.toString().length) {
                console.log("chua dung 1");
                showSuggestion1(index);
                addPoint = false;
            }
            check1_1 = false;
        }
    } else if (index === 2) {
        var answer2 = document.getElementById("input2").value;
        if (answer2 == number) {
            unShowSuggestion1();
            check1_2 = true;
        } else {
            if (answer2.length === number.toString().length) {
                console.log("chua dung 2");
                showSuggestion1(index);
                addPoint = false;
            }
            check1_2 = false;
        }
    }
    if (check1_1 && check1_2) {
        await transition();
        document.getElementById("input1").value = '';
        document.getElementById("input2").value = '';
        check1_1 = false;
        check1_2 = false;
        next1();
    }
}
function next1() {                                                    // next màn
    if (indexX > 3) {
        next2();
    }
    else {
        if (indexY === 1) {
            indexX++;
            if (addPoint === true) {
                ballGoRight();
            }
            indexY = 0;
            addPoint = true;
        }
        else if (indexY === 0) {
            indexY++;
        }

        if (questionVariable[indexX][indexY] === 0) {
            indexX++;
            if (addPoint === true) {
                ballGoRight();
            }
            indexY = 0;
            addPoint = true;
        }

        console.log("ballIndex = " + ballIndex);

        if (ballIndex === 5) {
            indexX = 4;
            start2();
        }
        if (indexX === 4 && ballIndex !== 5) {
            indexX = 1;
            indexY = 0;
            console.log("doi lai cau hoi");
        }

        if (indexX <= 3) {
            start1();
        }
        else {
            start2();
        }
    }
}

function next2() {
    indexX++;
    if (addPoint === true) {
        ballGoRight();
    }
    addPoint = true;
    if (ballIndex === -1) victory();
    if (isOutOfQuestion()) {
        if (ballIndex === -1)
            victory();
        else {
            indexX = 4;
            start2();
        }
    }
    else {
        start2();
    }
}
function start2() {
    /*   ctx.fillRect(0,0,560*(indexX/(questionVariable.length-1)),40);     // vẽ progress bar
       ctx.strokeRect(0,0,560,40);
   */
    if (indexX === 4) {
        deletePlatform1();
    }
    addQuestion2();
    movetoNextCursor("inputTens");
    movetoNextCursor("inputUnits");
}

function addQuestion2() {
    if (questionVariable[indexX][1] === "tens") {
        document.getElementById("question2tens").style.display = "block";
        document.getElementById("question2units").style.display = "none";
        document.getElementById("tens").innerHTML = questionVariable[indexX][0];
    }
    else {
        document.getElementById("question2tens").style.display = "none";
        document.getElementById("question2units").style.display = "block";
        document.getElementById("units").innerHTML = questionVariable[indexX][0] * 10;
    }
}

async function checkQuestion2(index) {
    let number;
    if (index === 'tens') {
        number = questionVariable[indexX][0] * 10;
        if (number == document.getElementById("inputTens").value) {
            console.log("tra loi dung roi");
            unShowSuggestion2();
            await transition();
            document.getElementById("inputTens").value = '';
            next2();
        } else {
            if (number.toString().length === document.getElementById("inputTens").value.length) {
                console.log("sai roi dap an la " + number);
                showSuggestion2(index);
                addPoint = false;
            }
        }
    }
    else if (index === 'units') {
        number = questionVariable[indexX][0];
        if (number == document.getElementById("inputUnits").value) {
            console.log("tra loi dung roi");
            unShowSuggestion2();
            await transition();
            document.getElementById("inputUnits").value = '';
            next2();
        } else {
            if (number.toString().length === document.getElementById("inputUnits").value.length) {
                console.log("sai roi dap an la " + number);
                showSuggestion2(index);
                addPoint = false;
            }

        }
    }
}

function showSuggestion2(index) {

    if (ballIndex < 5 && addPoint === true) {
        ballGoLeft();
    }
    if (index === 'tens') {
        document.getElementById("suggest2tens").style.display = "none";
        document.getElementById("suggest2units").style.display = "block";
        addColumn2(questionVariable[indexX][0]);
    }
    else if (index === 'units') {
        document.getElementById("suggest2tens").style.display = "block";
        document.getElementById("suggest2units").style.display = "none";
        addColumn2(questionVariable[indexX][0]);
    }
}

function deletePlatform1() {
    document.getElementById("columnSpace").style.display = "none";
    document.getElementById("question1Space").style.display = "none";
    document.getElementById("suggest1Space").style.display = "none";
    document.getElementById("suggest2Space").style.display = "block";
    document.getElementById("column2Space").style.display = "block";
    document.getElementById("question2Space").style.display = "block";
}

function transition() {
    return new Promise(resolve => setTimeout(resolve, 500));
}




function movetoNextCursor(nextFieldID) {

    document.getElementById(nextFieldID).focus();

}


function isOutOfQuestion(index) {                                    // chuyển sang màn hình victory nhưng chưa làm
    if (indexX >= questionVariable.length)
        return true;
    return false;
}

function victory() {
    console.log("chuyen trang");
    window.location.replace("../victory.html");
}

function firstStart() {
    document.getElementById("startSpace").style.display = "none";
    document.getElementById("content").style.display = "block";
    start1();
}





        //start1();                                                        // start1 trước

