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
    document.getElementById("question").innerHTML = "The term 'Pentium' is related to";
    document.getElementById("button1").textContent = "Keyboard";
    document.getElementById("button2").textContent = "Microprocessor";
    document.getElementById("button3").textContent = "DVD";
    document.getElementById("button4").textContent = "Hard Disk";
    document.getElementById("button2").setAttribute("onclick", "rightanswer2()");
    document.getElementById("button4").setAttribute("onclick", "wronganswer2()");

}
function rightanswer1(){
    answer1 = true;
    document.getElementById("qno").innerHTML = "Second Question";
    document.getElementById("question").innerHTML = "The term 'Pentium' is related to";
    document.getElementById("button1").textContent = "Keyboard";
    document.getElementById("button2").textContent = "Microprocessor";
    document.getElementById("button3").textContent = "DVD";
    document.getElementById("button4").textContent = "Hard Disk";
    document.getElementById("button2").setAttribute("onclick", "rightanswer2()");
    document.getElementById("button4").setAttribute("onclick", "wronganswer2()");

}
function wronganswer2(){
    answer2 = false;
    document.getElementById("qno").innerHTML = "Third Question";
    document.getElementById("question").innerHTML = "What does HTTP stands for?";
    document.getElementById("button1").textContent = "Head Tail Transfer";
    document.getElementById("button2").textContent = "Hypertext Transfer Protocol";
    document.getElementById("button3").textContent = "Hypertext Transfer Plotter";
    document.getElementById("button4").textContent = "Hypertext Transfer Plot";
    document.getElementById("button2").setAttribute("onclick", "rightanswer3()");
    //document.getElementById("button2").setAttribute("onclick", "wronganswer3()");
}
function rightanswer2(){

    answer2 = true;
    document.getElementById("qno").innerHTML = "Third Question";
    document.getElementById("question").innerHTML = "What does HTTP stands for?";
    document.getElementById("button1").textContent = "Head Tail Transfer";
    document.getElementById("button2").textContent = "Hypertext Transfer Protocol";
    document.getElementById("button3").textContent = "Hypertext Transfer Plotter";
    document.getElementById("button4").textContent = "Hypertext Transfer Plot";
    document.getElementById("button2").setAttribute("onclick", "rightanswer3()");

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
    var filepath = path.join(__dirname,'2lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
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

    var filepath = path.join(__dirname,'2lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
var content = x.toString();


fs.writeFile(filepath, content, (err) => {
    if (err) {
        alert("حدث خطأ" + err.message);
        console.log(err);
        return;
    }

    
});
}
function end(){
var filepath = path.join(__dirname,'2lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
var content = x.toString();

fs.writeFile(filepath, content, (err) => {
    if (err) {
        alert("حدث خطأ" + err.message);
        console.log(err);
        return;
    }

    
});

}
