
// còn thiếu part 2, chuyển động của column, màn hình chiến thắng, chỉnh câu hỏi và column cho cân đối, có thể thêm vài class vào cho nó hướng đối tượng

let questionVariable = [           //  [previous column, added column]
    [5,0],
    [8,2],
    [8,3],
    [9,3],
    [6,"tens"],                            // giai đoạn part 2,
    [8,"units"],                            //"tens" tượng trưng cho __ tens is the same as ___ units
    [10,"tens"],                           //"units" tượng trưng cho __ units is the same as ___ tens
    [16,"units"],
    [13,"tens"],
    [18,"tens"]
];
let indexX=0;                      // [index của questionVariable]
let indexY=0;

let check1_1=false;                   // [index câu hỏi 1]
let check1_2=false;                   // [index câu hỏi 2]

var canvas = document.getElementById("progressBar");        // tạo progress bar
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";

function start() {
    ctx.fillRect(0,0,560*(indexX/(questionVariable.length-1)),40);     // vẽ progress bar
    ctx.strokeRect(0,0,560,40);
    if(indexY===0) {
        clearColumn();
    }
    addColumn(questionVariable[indexX][indexY]);
    addQuestion1(questionVariable[indexX][indexY]);
}

function addQuestion2() {
    if(questionVariable[indexX][1]==="tens"){
        document.getElementById("question2_2tens").style.display="block";
        document.getElementById("question2_2units").style.display="none";

        document.getElementById("tens").innerHTML=questionVariable[indexX][0];
    }
    else{
        document.getElementById("question2_2tens").style.display="none";
        document.getElementById("question2_2units").style.display="block";

        document.getElementById("units").innerHTML= questionVariable[indexX][0]*10;
    }
}


function start2() {
    ctx.fillRect(0,0,560*(indexX/(questionVariable.length-1)),40);     // vẽ progress bar
    ctx.strokeRect(0,0,560,40);

    if(indexX===4){
        deletePlatform1();
    }
    addQuestion2();
}

function clearColumn() {                                            // xóa các column trên bản đồ
    var list = document.getElementById("column");
    while (list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }
}

function addColumn(number) {                                    // thêm column theo number
    for(var a=0;a<number;a++) {
        var img = document.createElement("img");
        img.src = "https://i.ibb.co/4S5Yw11/block.png";
        var src = document.getElementById("column");

        src.appendChild(img);
    }
}
function addQuestion1(number){                                   // thêm câu hỏi nhưng cái này đã làm trên file html

}

async function checkQuestion2(index) {
    let number;

    if (index === 'tens') {
        number = questionVariable[indexX][0] * 10;

        if (number == document.getElementById("inputTens").value) {
            console.log("tra loi dung roi");
            await transition();
            document.getElementById("inputTens").value = '';
            next2();
        } else {
            console.log("sai roi dap an la " + number);
        }
    } else if (index === 'units') {
        number = questionVariable[indexX][0];

        if (number == document.getElementById("inputUnits").value) {
            console.log("tra loi dung roi");
            await transition();
            document.getElementById("inputUnits").value = '';
            next2();
        } else {
            console.log("sai roi dap an la " + number);
        }
    }
}

async function checkQuestion1(index) {                                  // check đáp án đúng chưa, nếu đúng rồi thì next màn
    var number;
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
            check1_1 = true;
        } else {
            check1_1 = false;
        }
    } else if (index === 2) {
        var answer2 = document.getElementById("input2").value;
        if (answer2 == number) {
            check1_2 = true;
        } else {
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
function isOutOfQuestion(index){                                    // chuyển sang màn hình victory nhưng chưa làm
    if(indexX>questionVariable.length)
        return true;
    return false;
}

function deletePlatform1() {
    document.getElementById("columnSpace").style.display="none";
    document.getElementById("question2_1Space").style.display="none";
    document.getElementById("question2_2Space").style.display="block";
}

function transition() {
        return new Promise(resolve => setTimeout(resolve, 2000));
}

function goOut() {
}

function next2() {
    indexX++;

    if(isOutOfQuestion()){
        goOut();
    }
    else {
        start2();
    }
}

function next1(){                                                    // next màn

    if(indexX>3){
        next2();
    }
    else {
        if (indexY === 1) {
            indexX++;
            indexY = 0;
        }
        else if (indexY === 0) {
            indexY++;
        }

        if (questionVariable[indexX][indexY] === 0) {
            indexX++;
            indexY = 0;
        }

        if(indexX<=3){
            start();
        }
        else {
            start2();
        }
    }
}

start();                                                        // start trước


