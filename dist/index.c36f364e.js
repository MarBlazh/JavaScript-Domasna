/**
 * Let's create a small script
 * where users can input two numbers,
 * choose an operation
 * (addition, subtraction, multiplication, or division),
 * and see the result.
 */ // Create a function to perform calculations based on user input.
// Add an event listener for the calculate button.
function onCLick() {
    let number1;
    let number2;
    let number3;
    let operations;
    let showmeresult;
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    number3 = document.getElementById("number3").value;
    operations = document.getElementById("operations").value;
    result = document.getElementById("showmeresult").value;
    if (operations == "addition") showmeresult = number1 + number2 + number3;
    else if (operations == "subtraction") showmeresult = number1 - number2 - number3;
    else if (operations == "multiplication") showmeresult = number1 * number2 * number3;
    else if (operations == "division") showmeresult = number1 / number2 / number3;
    console.log(showmeresult);
}
document.getElementById("showmeresult").innerHTML = "Result: " + result;
console.log(result);
let start = document.querySelector("#start").addEventListener("click", onCLick); /* za domasna- smeni so switch */ 

//# sourceMappingURL=index.c36f364e.js.map
