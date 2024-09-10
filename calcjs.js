let operandstr = "";
let displaystr = "";
const operatorarr = [];
const operandarr = [];
const nums = document.querySelectorAll("#number");
const ops = document.querySelectorAll("#operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const output = document.querySelector(".output");
const del = document.querySelector("#delete");
const dot = document.querySelector("#decimal");
var result;

function operate(a,b,op){
    if(op==='+'){
        return a+b;
    }
    else if(op==='-'){
        return a-b;
    }
    else if(op==='x'){
        return a*b;
    }
    else if(op==='÷'){
        if(b==0){
            return "divbyzero";
        }
        return a/b;
    }
}

nums.forEach((i)=>{
    i.addEventListener('click',(e)=>{
        operandstr = operandstr + e.target.value;
        displaystr = " " + displaystr + e.target.value;
        output.textContent = displaystr;
        console.log(displaystr);
        console.log(operandarr);
    });
});

ops.forEach((i)=>{
    i.addEventListener('click',(e)=>{
        operatorarr.push(e.target.value);
        displaystr = displaystr + " " + e.target.value + " ";
        if(operandstr!=""){
            operandarr.push(parseFloat(operandstr));
        }
        operandstr = "";
        output.textContent = displaystr;
    });
});

equals.addEventListener('click',()=>{
    operandarr.push(parseFloat(operandstr));
    console.log(displaystr);
    for(var i=1;i<operandarr.length;i++)
    {
        result = Math.round(operate(operandarr[i-1],operandarr[i],operatorarr[i-1])*1000)/1000;
        operandarr[i] = result;
    }
    output.textContent = result;
    while(operandarr.length!=0){
        operandarr.pop();
    }
    while(operatorarr.length!=0){
        operatorarr.pop();
    }
    operandarr.push(result);
    displaystr = result;
    operandstr = "";
    console.log(operandarr);    
    console.log(result);
});

clear.addEventListener('click',()=>{
    while(operandarr.length!=0){
        operandarr.pop();
    }
    while(operatorarr.length!=0){
        operatorarr.pop();
    }
    operandstr = "";
    displaystr = "0";
    output.textContent = displaystr;
    displaystr = "";
});

del.addEventListener('click',()=>{
    if(operandstr===""){
        displaystr = displaystr.trim();
        displaystr = displaystr.replace(displaystr[displaystr.length - 1],"");
        operatorarr.pop();
    }
    else{
        displaystr = displaystr.replace(displaystr[displaystr.length - 1],"");
        operandstr = operandstr.replace(operandstr[operandstr.length - 1],"");
    }
    output.textContent = displaystr;
});

dot.addEventListener('click', ()=>{
    if(operandstr.includes(".")){
        return;
    }
    operandstr = operandstr + ".";
    displaystr = displaystr + ".";
});
