let r = document.getElementById("red");
let g = document.getElementById("green");
let b = document.getElementById("blue");

//document.body.style.background = 'rgb('+red+','+green+','+blue+')'

r.addEventListener("input", changeColor, false);
g.addEventListener("input", changeColor, false);
b.addEventListener("input", changeColor, false);


function changeColor() {

    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    document.body.style.background = `rgb(${red},${green}, ${blue})`;
    this.previousElementSibling.value = this.value;
}

function changeStyle(param, value) {
    let that = document.getElementById(param)
    let img = document.getElementById("myImage");
    switch (param) {
        case "margin":
            img.style.margin = value+"px";
            break;
        case "height":
            img.style.height = value+"vh";
            break;
        case "width":
            img.style.width = value+"%";
            break;
        case "radius":
            img.style.borderRadius = value+"px";
            break;
        case "rotate":
            img.style.transform = 'rotate('+value+'deg)';
            break;
    
    
        default:
            break;
    }
   ( that.previousElementSibling).previousElementSibling.value = that.value
}
document.getElementById("superBtn").addEventListener("click", superStyle, false)
function superStyle() {
    text = document.getElementsByTagName('p')[0];
    if (text.classList.contains("active"))
        text.classList.remove("active")
    else
        text.classList.add("active")
}

function dateTimeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let stringMin = mm.toString().padStart(2, "0");
    let stringSec = ss.toString().padStart(2, "0");
    let stringMs = ms.toString().padStart(2, "0");
  
    return `${stringMin}:${stringSec}:${stringMs}`;
  }
  

let startTime;
let elapsedTime = 0;
let timerInterval;
 
function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    document.getElementById("time").innerHTML = dateTimeToString(elapsedTime);
    }, 10);
    showButton("stop");
  }
  
function pause() {
    clearInterval(timerInterval);
    showButton("start");
}
  
function reset() {
    clearInterval(timerInterval);
    document.getElementById("time").innerHTML = "00:00:00";
    elapsedTime = 0;
    showButton("start");
}
  
  
function showButton(buttonKey) {
    let buttonToShow = buttonKey === "start" ? playButton : pauseButton;
    let buttonToHide = buttonKey === "start" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}
  
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");
  
playButton.addEventListener("click", start, false);
pauseButton.addEventListener("click", pause, false);
resetButton.addEventListener("click", reset, false);
  

function RegexTester(stringToTest, regex, result) {
    
    if (regex.test(stringToTest)) result.innerHTML = "Oui";
    else result.innerHTML = "Non";
}

let checkD = document.getElementById('regexD');
let dRegex = RegExp('^[A-D].*')
let result1 = document.getElementById('regexResult1');

let checkAt = document.getElementById('regexAt');
let mailRegex = RegExp('[a-z]*@{1,1}[a-z]*')
let result2 = document.getElementById('regexResult2');

let checkNum = document.getElementById('regexNum');
let numberRegex = RegExp('[0-9]')
let result3 = document.getElementById('regexResult3');
let num = /[0-9]/gi

function changeNumber(regex, strToApply, htmlElement ) {
    htmlElement.value = htmlElement.value.replace(regex, strToApply);
}

checkD.addEventListener('input', function() {RegexTester(checkD.value, dRegex, result1);}, false)
checkAt.addEventListener('input', function() {RegexTester(checkAt.value, mailRegex, result2);}, false)
checkNum.addEventListener('input', function() {RegexTester(checkNum.value, numberRegex, result3);}, false)
checkNum.addEventListener('input', function() {changeNumber(num, "*", checkNum);}, false)

let names = []
function setName() {
    let name = prompt("Entre un Nom : ")
    names.push(name);
}
let addName = document.getElementById("addName");
let getWinner = document.getElementById("getWinner");

addName.addEventListener("click", setName, false)
getWinner.addEventListener("click",chooseWinner, false)
function chooseWinner() {
    if (names.length === 0) setName();
    let random = Math.floor(Math.random() * names.length);
    alert(`le gagnant est ${names[random]}`);
}



//=======WIP=======WIP========WIP=======WIP========WIP=====WIP=======WIP========WIP=======WIP========WIP=======WIP========$

function getMultiplication(table) {

    result = document.getElementById('multiplicationResult')
    table = parseInt(table);

    if (isNaN(table)) {
        result.innerHTML = "Veuillez entrer un entier"
    } else {
        result.innerHTML = "";
        var newDiv = document.createElement("div");
        newDiv.classList.add("results")
        for (let i = 0; i < 10; i++) {
            
            res = `${i} x ${table} = ${i*table}`
            var newElem = document.createElement("p");
            newElem.classList.add("result");
            newElem.innerHTML = res
            newDiv.appendChild(newElem);
            
        }
        console.log(newDiv)
        document.body.insertBefore(newDiv, result);
    }
}