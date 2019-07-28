const electron = require('electron')
const path = require('path')
var answer1;
var answer2;
var answer3;
var app = electron.remote; 
const fs = require('fs')

function wronganswer1(){
    answer1 = false;
    document.getElementById("qno").innerHTML = "Second Question";
    document.getElementById("question").innerHTML = "_______ are software which is used to do particular task.";
    document.getElementById("button1").textContent = "Program";
    document.getElementById("button2").textContent = "Operating System";
    document.getElementById("button3").textContent = "Software";
    document.getElementById("button4").textContent = "Data";
    document.getElementById("button1").setAttribute("onclick", "rightanswer2()");
    document.getElementById("button3").setAttribute("onclick", "wronganswer2()");

}
function rightanswer1(){
    answer1 = true;
    document.getElementById("qno").innerHTML = "Second Question";
    document.getElementById("question").innerHTML = "_______ are software which is used to do particular task.";
    document.getElementById("button1").textContent = "Program";
    document.getElementById("button2").textContent = "Operating System";
    document.getElementById("button3").textContent = "Software";
    document.getElementById("button4").textContent = "Data";
    document.getElementById("button1").setAttribute("onclick", "rightanswer2()");
    document.getElementById("button3").setAttribute("onclick", "wronganswer2()");

}
function wronganswer2(){
    answer2 = false;
    document.getElementById("qno").innerHTML = "Third Question";
    document.getElementById("question").innerHTML = "How many generations of computers we have?";
    document.getElementById("button1").textContent = "6";
    document.getElementById("button2").textContent = "5";
    document.getElementById("button3").textContent = "7";
    document.getElementById("button4").textContent = "10";
    document.getElementById("button2").setAttribute("onclick", "rightanswer3()");
    document.getElementById("button1").setAttribute("onclick", "wronganswer3()");
}
function rightanswer2(){
    answer2 = true;
    document.getElementById("qno").innerHTML = "Third Question";
    document.getElementById("question").innerHTML = "How many generations of computers we have?";
    document.getElementById("button1").textContent = "6";
    document.getElementById("button2").textContent = "5";
    document.getElementById("button3").textContent = "7";
    document.getElementById("button4").textContent = "10";
    document.getElementById("button2").setAttribute("onclick", "rightanswer3()");
    document.getElementById("button1").setAttribute("onclick", "wronganswer3()");

}


function wronganswer3(){
    var x = 0;
    answer3 = false;
    
    if(answer1 = true){
        x++;
    }
    if(answer2 = true){
        x++;
    }
    var filepath = path.join(__dirname,'1lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
var content = x.toString();

fs.writeFile(filepath, content, (err) => {
    if (err) {
        alert("حدث خطأ" + err.message);
        console.log(err);
        return;
    }

    
});

    

}
function rightanswer3(){
    var x = 0;
    x++;

    if(answer1 = true){
        x++;
    }
    if(answer2 = true){
        x++;
    }
    var filepath = path.join(__dirname,'1lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
var content = x.toString();

fs.writeFile(filepath, content, (err) => {
    if (err) {
        alert("حدث خطأ" + err.message);
        console.log(err);
        return;
    }

    
});


    

}

