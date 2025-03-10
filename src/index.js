function calculate(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    let result;
    result = Number(num1) + Number(num2);

    document.getElementById("result").innerText = "result: " + result;
}
function add(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    let result;
    result = Number(num1) + Number(num2);

    document.getElementById("result").innerText = "result: " + result;
}
function sub(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    let result;
    result = Number(num1) - Number(num2);

    document.getElementById("result").innerText = "result: " + result;
}
function resetFields(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("result").value = "result: ";
}