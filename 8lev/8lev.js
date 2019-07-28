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
    document.getElementById("question").innerHTML = "These are the instructions that tell the computer what to do, another name for software.";
    document.getElementById("button1").textContent = "Programs";
    document.getElementById("button2").textContent = "CPU";
    document.getElementById("button3").textContent = "Network";
    document.getElementById("button4").textContent = "Folder";
    document.getElementById("button1").setAttribute("onclick", "rightanswer2()");
    document.getElementById("button3").setAttribute("onclick", "wronganswer2()");

}
function rightanswer1(){
    answer1 = true;
    document.getElementById("qno").innerHTML = "Second Question";
    document.getElementById("question").innerHTML = "These are the instructions that tell the computer what to do, another name for software.";
    document.getElementById("button1").textContent = "Programs";
    document.getElementById("button2").textContent = "CPU";
    document.getElementById("button3").textContent = "Network";
    document.getElementById("button4").textContent = "Folder";
    document.getElementById("button1").setAttribute("onclick", "rightanswer2()");
    document.getElementById("button3").setAttribute("onclick", "wronganswer2()");

}
function wronganswer2(){
    answer2 = false;
    document.getElementById("qno").innerHTML = "Third Question";
    document.getElementById("question").innerHTML = "Starting or restarting the computer is called";
    document.getElementById("button1").textContent = "Boot";
    document.getElementById("button2").textContent = "Kick";
    document.getElementById("button3").textContent = "Kickstart";
    document.getElementById("button4").textContent = "Exit";
    document.getElementById("button1").setAttribute("onclick", "rightanswer3()");
    //document.getElementById("button1").setAttribute("onclick", "wronganswer3()");
}
function rightanswer2(){
    answer2 = true;
    document.getElementById("qno").innerHTML = "Third Question";
    document.getElementById("question").innerHTML = "Starting or restarting the computer is called";
    document.getElementById("button1").textContent = "Boot";
    document.getElementById("button2").textContent = "Kick";
    document.getElementById("button3").textContent = "Kickstart";
    document.getElementById("button4").textContent = "Exit";
    document.getElementById("button1").setAttribute("onclick", "rightanswer3()");
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
    document.getElementById("submit").innerHTML = x;

}
function rightanswer3(){
    x++;

    if(answer1 = true){
        x++;
    }
    if(answer2 = true){
        x++;
    }
    var filepath = path.join(__dirname,'8lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
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
var filepath = path.join(__dirname,'8lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
var content = x.toString();

fs.writeFile(filepath, content, (err) => {
    if (err) {
        alert("حدث خطأ" + err.message);
        console.log(err);
        return;
    }

    
});

}
