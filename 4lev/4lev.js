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
    document.getElementById("question").innerHTML = "Which of the following is used for close a tab on a browser?";
    document.getElementById("button1").textContent = "CTRL + W";
    document.getElementById("button2").textContent = "CTRL + Y";
    document.getElementById("button3").textContent = "CTRL + A";
    document.getElementById("button4").textContent = "CTRL + T";
    document.getElementById("button1").setAttribute("onclick", "rightanswer2()");
    document.getElementById("button4").setAttribute("onclick", "wronganswer2()");

}
function rightanswer1(){
    answer1 = true;
    document.getElementById("qno").innerHTML = "Second Question";
    document.getElementById("question").innerHTML = "Which of the following is used for close a tab on a browser?";
    document.getElementById("button1").textContent = "CTRL + W";
    document.getElementById("button2").textContent = "CTRL + Y";
    document.getElementById("button3").textContent = "CTRL + A";
    document.getElementById("button4").textContent = "CTRL + T";
    document.getElementById("button1").setAttribute("onclick", "rightanswer2()");
    document.getElementById("button4").setAttribute("onclick", "wronganswer2()");

}
function wronganswer2(){
    answer2 = false;
    document.getElementById("qno").innerHTML = "Third Question";
    document.getElementById("question").innerHTML = "________ controls the way in which the computer system functions and provides a means by which users can interact with the computer.";
    document.getElementById("button1").textContent = "Motherboard";
    document.getElementById("button2").textContent = "Operating System";
    document.getElementById("button3").textContent = "The Platform";
    document.getElementById("button4").textContent = "Application Software";
    document.getElementById("button2").setAttribute("onclick", "rightanswer3()");
    document.getElementById("button1").setAttribute("onclick", "wronganswer3()");
}
function rightanswer2(){
    answer2 = true;
    document.getElementById("qno").innerHTML = "Third Question";
    document.getElementById("question").innerHTML = "________ controls the way in which the computer system functions and provides a means by which users can interact with the computer.";
    document.getElementById("button1").textContent = "Motherboard";
    document.getElementById("button2").textContent = "Operating System";
    document.getElementById("button3").textContent = "The Platform";
    document.getElementById("button4").textContent = "Application Software";
    document.getElementById("button2").setAttribute("onclick", "rightanswer3()");
    document.getElementById("button1").setAttribute("onclick", "wronganswer3()");

}
var x = 0;

function wronganswer3(){
    answer3 = false;
    
    if(answer1 = true){
        x++;
    }
    if(answer2 = true){
        x++;
    }
    var filepath = path.join(__dirname,'4lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
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
    x++;

    if(answer1 = true){
        x++;
    }
    if(answer2 = true){
        x++;
    }
    
    var filepath = path.join(__dirname,'4lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
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
var filepath = path.join(__dirname,'4lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
var content = x.toString();

fs.writeFile(filepath, content, (err) => {
    if (err) {
        alert("حدث خطأ" + err.message);
        console.log(err);
        return;
    }

    
});

}
