let operandstr = "";
let displaystr = "";
var operator;
let operand1 = 0;
let operand2 = 0;
const operandarr = [];
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");


// function operators(x){
//     operator = x.value;
//     if(operand1===0){
//         operand1 = parseInt(operandstr);
//     }
//     else{
//         operand2 = parseInt(operandstr);
//     }
//     operandstr = "";
//     display(x);
// }

// function operands(x){
//     operandstr = operandstr + x.value;
//     console.log(operandstr);
//     display(x);
// }

// function display(x){
//     if(x.value==='+'){
//         displaystr = displaystr + ' + ';
//     }
//     else if(x.value==='-'){
//         displaystr = displaystr + ' - ';
//     }
//     else if(x.value==='*'){
//         displaystr = displaystr + ' x ';
//     }
//     else if(x.value==='/'){
//         displaystr = displaystr + ' ÷ ';
//     }
//     else{
//         displaystr = displaystr + x.value;
//     }
//     console.log(displaystr);
// }

function operate(a,b,op){
    if(op==='plus'){
        return a+b;
    }
    else if(op==='minus'){
        return a-b;
    }
    else if(op==='multiply'){
        return a*b;
    }
    else if(op==='divide'){
        return a/b;
    }
}



one.addEventListener('click', ()=>{
    operandstr = operandstr + "1";
});
two.addEventListener('click', ()=>{
    operandstr = operandstr + "2";
});
three.addEventListener('click', ()=>{
    operandstr = operandstr + "3";
});
four.addEventListener('click', ()=>{
    operandstr = operandstr + "4";
});
five.addEventListener('click', ()=>{
    operandstr = operandstr + "5";
});
six.addEventListener('click', ()=>{
    operandstr = operandstr + "6";
});
seven.addEventListener('click', ()=>{
    operandstr = operandstr + "7";
});
eight.addEventListener('click', ()=>{
    operandstr = operandstr + "8";
});
nine.addEventListener('click', ()=>{
    operandstr = operandstr + "9";
});
zero.addEventListener('click', ()=>{
    operandstr = operandstr + "0";
});

plus.addEventListener('click', ()=>{
    operator = "plus";
    operandarr.push(parseInt(operandstr));
    operandstr = "";

});
minus.addEventListener('click', ()=>{
    operator = "minus";
    operandarr.push(parseInt(operandstr));
    operandstr = "";

});
multiply.addEventListener('click', ()=>{
    operator = "multiply";
    operandarr.push(parseInt(operandstr));
    operandstr = "";

});
divide.addEventListener('click', ()=>{
    operator = "divide";
    operandarr.push(parseInt(operandstr));
    operandstr = "";

});


equals.addEventListener('click',()=>{
    operandarr.push(parseInt(operandstr));
    console.log(operate(operandarr[0],operandarr[1],operator));
});
