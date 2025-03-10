async function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    try {
        const response = await fetch('http://localhost:8080/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ num1, num2, operation })
        });
        
        if (!response.ok) {
            throw new Error('Calculation failed');
        }
        
        const result = await response.json();
        document.getElementById("result").innerText = "Result: " + result.toFixed(2);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("result").innerText = "Error calculating result";
    }
}

function resetFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("result").innerText = "Result: ";
}
