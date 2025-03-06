function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    const result = num1 + num2;
    
    document.getElementById("result").innerText = "Result: " + result.toFixed(2);
}

function subtract() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    const result = num1 - num2;
    
    document.getElementById("result").innerText = "Result: " + result.toFixed(2);
}

function resetFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("result").innerText = "Result: ";
}
