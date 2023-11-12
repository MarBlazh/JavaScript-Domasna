function onCLick() {
    let number1;
    let number2;
    let number3;
    let operations;
    let result;
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    number3 = document.getElementById("number3").value;
    operations = document.getElementById("operations").value;
    result = document.getElementById("showmeresult").value;
    switch(operations){
        case "addition":
            showmeresult = number1 + number2 + number3;
            break;
        case "subtraction":
            showmeresult = number1 - number2 - number3;
            break;
        case "multiplication":
            showmeresult = number1 * number2 * number3;
            break;
        case "division":
            showmeresult = number1 / number2 / number3;
            break;
        default:
            showmeresult = "Invalid operation";
    }
    console.log(showmeresult);
}
document.getElementById("showmeresult").innerHTML.value;
let start = document.querySelector("#start").addEventListener("click", onCLick);

//# sourceMappingURL=index.a6fb229d.js.map
