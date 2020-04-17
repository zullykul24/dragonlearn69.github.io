
// còn thiếu part 2, chuyển động của column, màn hình chiến thắng, chỉnh câu hỏi và column cho cân đối, có thể thêm vài class vào cho nó hướng đối tượng

var canvas = document.getElementById("progressBar");        // tạo progress bar
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";


let question_tens = [           //  [previous column, added column]
    [5,0],
    [8,2],
    [8,3],
    [9,3],
    [9,1],
    [8,4],

]

let indexX=0;                      // [index của question_tens]
let indexY=0;

let check1=false;                   // [index câu hỏi 1]
let check2=false;                   // [index câu hỏi 2]

function start() {
    ctx.fillRect(0,0,560*(indexX/(question_tens.length-1)),40);     // vẽ progress bar
    ctx.strokeRect(0,0,560,40);
    if(indexY===0) {

        clearColumn();
    }
    addColumn(question_tens[indexX][indexY]);


    addQuestion(question_tens[indexX][indexY]);
}

function clearColumn() {                                            // xóa các column trên bản đồ
    var list = document.getElementById("column");
    while (list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }

}

function preload() {
    this.load.image("block","Picture/block.png");
}

function addColumn(number) {                                    // thêm column theo number


    for(var a=0;a<number;a++) {
        var img = document.createElement("img");
        img.src = "https://i.ibb.co/4S5Yw11/block.png";
        var src = document.getElementById("column");

        src.appendChild(img);

    }
    console.log('add '+number+' column');
}
function addQuestion(number){                                   // thêm câu hỏi nhưng cái này đã làm trên file html

    console.log('add '+number+' question');
}
function checkQuestion(index){                                  // check đáp án đúng chưa, nếu đúng rồi thì next màn
    var number;
    if(indexY===0){
        if(index===1) {
            number = question_tens[indexX][indexY];
        }
        else if(index===2){
            number = question_tens[indexX][indexY]*10;
        }
    }
    else if(indexY === 1){
        if(index===1){
            number = question_tens[indexX][0] + question_tens[indexX][1];
        }
        else if(index === 2){
            number = ( question_tens[indexX][0] + question_tens[indexX][1] )*10;
        }
    }





    if(index===1) {
        var answer1 = document.getElementById("inp1").value;
        if (answer1 == number) {
            console.log("dap an dung cau 1");

            check1=true;
        } else {
            console.log("dap an sai cau 1");

            console.log("dap an dung cau 1 bang: " + number);
            check1=false;
        }
    }
    else if(index===2) {
        var answer2 = document.getElementById("inp2").value;
        if (answer2 == number) {
            console.log("dap an dung cau 2");

            check2 = true;
        } else {
            console.log("dap an sai cau 2");

            console.log("dap an dung cau 2 bang: " + number);
            check2 = false;
        }
    }
        if(check1 && check2){
            document.getElementById("inp1").value='';
            document.getElementById("inp2").value='';

            check1=false;
            check2=false;
            next();
        }



}
function isOutOfQuestion(index){                                    // chuyển sang màn hình victory nhưng chưa làm
    if(index>indexY)
        return true;
    return false;
}

function next(){                                                    // next màn

    if(indexY===1) {
        indexX++;
        indexY = 0;
    }
    else if(indexY===0){
        indexY++;
    }

    if(question_tens[indexX][indexY]===0){
        indexX++;
        indexY = 0;
    }

    start();
}




start();                                                        // start trước

