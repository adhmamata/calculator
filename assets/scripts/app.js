const defaultResult = 0;
let currentResult = defaultResult;


//gets inputs from user
function getUserNumberInput(){
return parseInt(userInput.value);
}

//generate outputs/result.
function creatAndWriteOutput(operator, resultBeforeCal, calcNumber){
        const calDiscription = `${resultBeforeCal} ${operator} ${calcNumber}`;
        outputResult (currentResult, calDiscription);

}
function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult + enteredNumber;
    creatAndWriteOutput('+',initialResult,enteredNumber);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    creatAndWriteOutput('-', initialResult, enteredNumber);

}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    creatAndWriteOutput('*', initialResult, enteredNumber);


}
function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    creatAndWriteOutput('/', initialResult, enteredNumber);

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click',divide)






