//declare global variables 
let firstNum = ' ';
let secondNum = ' ';
let operator = ' ';
let newNum = true;

//use geElementById to get the value from the display box
let display = document.getElementById('display');

//funciton to capture numbers 
function addnumber(num){
    if(operator === ' '){
        firstNum += num;
        display.value=firstNum;
        console.log(firstNum);
    }
    else{
        secondNum += num;
        display.value=secondNum;
        console.log(secondNum);
    }
}
//function to capture our oppertatior

function addoperator(op){
    firstNum=display.value;
    console.log(firstNum);
    operator=op;
    console.log(operator);
   
}

//function to prefome calculations
function calculate(){
    let result=0;
    let num1= Number(firstNum);
    console.log(num1);
    let num2= Number(secondNum);
    console.log(num2);

    //check not a number
    if(isNaN(num1) || isNaN(num2)){
        display.value="error";
        return;
    }
    if(operator === '+'){
        result =  num1+num2;
    }
    else if( operator === '-'){
        result = num1 - num2;
    }
    else if( operator === '*'){
        result = num1 * num2;
    }    else if( operator === '/'){
        result = num2 !==0 ? num1/num2: 'Error';
    }
    else{
        return;
    }

    //update the display are with the result value
    display.value=result;
    console.log(result);
    firstNum=' ';
    secondNum=' ';
    operator=' ';
}




//function to clear the display with blank spaces
function clrdisplay(){
    document.getElementById('display').value='';
    firstNum='';
    secondNum='';
    operator='';
}
