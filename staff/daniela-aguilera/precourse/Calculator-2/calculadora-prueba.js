
    const sendButton = document.querySelector(".sendButton");
    const firstNumber = document.querySelector("#firstParameter");
    const secondNumber = document.querySelector("#secondParameter");
    const mathResults = document.querySelector(".instructions");
    //console.log(sendButton);
    sendButton.addEventListener("click", function(){
        const firstNum = Number.parseInt(firstNumber.value)
        const secondNum = Number.parseInt(secondNumber.value) 
       // console.log(mathResults); 
        const result = calculator(firstNum, secondNum);
        mathResults.innerHTML = result;
    })




function checkIfThereIsAMistake (firstNum, secondNum) {
    if (isNaN(firstNum) && isNaN(secondNum)){
        return "You are making a mistake. Try again"
    }
}



function multipleOperations (firstNum, secondNum) {
    let suma;
    let resta;
    let multiplicacion;
    let division;
    let results = [];
    if (typeof firstNum === 'number' && typeof secondNum === 'number' && !isNaN(firstNum) && !isNaN(secondNum)){
    suma = firstNum + secondNum;
    resta = firstNum - secondNum;
    multiplicacion = firstNum * secondNum;
    division = firstNum / secondNum;

    if (!Number.isInteger(suma)){
        suma = suma.toFixed(3)
    }
    results.push(firstNum + ' + ' + secondNum + ' = ' + suma)

    if (!Number.isInteger(resta)){
        resta = resta.toFixed(3)
    }  
    results.push(firstNum + ' - ' + secondNum + ' = ' + resta)
    
    if (!Number.isInteger(multiplicacion)){
       multiplicacion = multiplicacion.toFixed(3)
    } 
    results.push(firstNum + ' * ' + secondNum + ' = ' + multiplicacion)

    if (!Number.isInteger(division)){
       division = division.toFixed(3)
    }
    results.push(firstNum + ' / ' + secondNum + ' = ' + division)
    return ('Los resultados son: <br> ' + results.join("<br>"))
    
    }
}

function squareRoot (firstNum, secondNum){
    let raizCuadrada;
    if (!isNaN(firstNum)){
        raizCuadrada = Math.sqrt(firstNum);
        return 'La raiz cuadrada de ese número es ' + raizCuadrada.toFixed(3)
    }

    if (!isNaN(secondNum)){
        raizCuadrada = Math.sqrt(secondNum);
        return 'La raiz cuadrada de ese número es ' + raizCuadrada.toFixed(3)
    } 
}



const calculator = function (firstNum, secondNum) {
 
    let wrongParamerters = checkIfThereIsAMistake(firstNum, secondNum)

    if (wrongParamerters){
        return wrongParamerters
    }

    let resultOfMultipleOperations = multipleOperations(firstNum, secondNum)
    
    if (resultOfMultipleOperations){
        return resultOfMultipleOperations
    }
    let squareRootResult = squareRoot (firstNum, secondNum)
    if(squareRootResult){
        return squareRootResult
    }
}
