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
    document.getElementById("question").innerHTML = "The primary goal of a computer system is to turn data into";
    document.getElementById("button1").textContent = "Information";
    document.getElementById("button2").textContent = "Reports";
    document.getElementById("button3").textContent = "Code";
    document.getElementById("button4").textContent = "Binary Code";
    document.getElementById("button1").setAttribute("onclick", "rightanswer2()");
    document.getElementById("button4").setAttribute("onclick", "wronganswer2()");

}
function rightanswer1(){
    answer1 = true;
    document.getElementById("qno").innerHTML = "Second Question";
    document.getElementById("question").innerHTML = "The primary goal of a computer system is to turn data into";
    document.getElementById("button1").textContent = "Information";
    document.getElementById("button2").textContent = "Reports";
    document.getElementById("button3").textContent = "Code";
    document.getElementById("button4").textContent = "Binary Code";
    document.getElementById("button1").setAttribute("onclick", "rightanswer2()");
    document.getElementById("button4").setAttribute("onclick", "wronganswer2()");

}
function wronganswer2(){
    answer2 = false;
    document.getElementById("qno").innerHTML = "Third Question";
    document.getElementById("question").innerHTML = "Word processing, spreadsheet, and photo-editing are examples of :";
    document.getElementById("button1").textContent = "Operating System";
    document.getElementById("button2").textContent = "Aplication Software";
    document.getElementById("button3").textContent = "Platforms";
    document.getElementById("button4").textContent = "Social Media";
    document.getElementById("button2").setAttribute("onclick", "rightanswer3()");
    document.getElementById("button1").setAttribute("onclick", "wronganswer3()");
}
function rightanswer2(){
    answer2 = true;
    document.getElementById("qno").innerHTML = "Third Question";
    document.getElementById("question").innerHTML = "Word processing, spreadsheet, and photo-editing are examples of :";
    document.getElementById("button1").textContent = "Operating System";
    document.getElementById("button2").textContent = "Aplication Software";
    document.getElementById("button3").textContent = "Platforms";
    document.getElementById("button4").textContent = "Social Media";
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
    
    var filepath = path.join(__dirname,'9lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
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
    var filepath = path.join(__dirname,'9lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
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
var filepath = path.join(__dirname,'9lev.txt');// you need to save the filepath when you open the file to update without use the filechooser dialog againg
var content = x.toString();

fs.writeFile(filepath, content, (err) => {
    if (err) {
        alert("حدث خطأ" + err.message);
        console.log(err);
        return;
    }

    
});

}
