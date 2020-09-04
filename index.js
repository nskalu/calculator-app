let ac = document.getElementById("back");
let postive = document.getElementById("posneg");
let perc = document.getElementById("percentage");
let equalto = document.getElementById("equal");
let output = document.getElementById("displayarea");
let nums = document.getElementsByClassName("nums");
let operators = document.getElementsByClassName("operators");
let val = "-";
let display=0;
let calcAnswer =0;
let operator = "";
let isEqaulto = false;
postive.onclick = function(){
    if (val==="-"){
        output.innerText= -output.innerText;
        val = "+";
    }
    else {
        output.innerText= -output.innerText;
        val = "-"
    }
}
ac.onclick = function(){
  
    output.innerText= 0;
    display = 0;

}
perc.onclick = function(){
    display = Number(output.innerText)/100;
    output.innerText = display;
    calcAnswer = display;

}

equalto.onclick = function(){
    debugger;
    let a = Number(calcAnswer);
    let b = Number(output.innerText);
    if (operator === "X") {
        display = Number(a) * Number(b);
        output.innerText = display;
        calcAnswer = display;
        operator = ""
    }
    else if (operator === "/"){
        display = Number(a) / Number(b);
        output.innerText = display;
        calcAnswer = display;
        operator = ""
    }
    else if (operator==="+"){
        display = Number(a) +  Number(b);
        output.innerText = display;
        calcAnswer = display;
        operator = ""
    }
    else if (operator==="-"){
        display = Number(a) - Number(b);
        output.innerText = display;
        calcAnswer = display;
        operator = ""
    }
    else{
        display = calcAnswer;
    }
    isEqaulto = true;
}

for (let i = 0; i < nums.length; i++){
    nums[i].addEventListener("click", function(obj) {numbersF(obj)} );
}
 function numbersF(obj){
    debugger;
    if (isEqaulto) display = 0;
    isEqaulto=false;
    if (display===0){
        output.value = obj.toElement.innerText
        display = output.value
    }      
    else{
        output.value = display + obj.toElement.innerText
        display = output.value
     }
}

for (i=0; i< operators.length; i++){
    operators[i].addEventListener("click", function(obj){ setOperator(obj)})
}
function setOperator(obj){
    calcAnswer = output.innerText;
    output.innerText=0;
    display = 0;
    operator = obj.toElement.innerText;
}

