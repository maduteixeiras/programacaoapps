function Calculate () {

    let number1 = parseFloat(document.getElementById("NumberInput1").value);
    let number2 = parseFloat(document.getElementById("NumberInput2").value);

    const ResultDiv = document.getElementById("Result");

    if (isNaN(number1) || isNaN(number2)) {
        ResultDiv.innerHTML = "<p>Por favor, insira números válidos.</p>";
        return;
    }

    ResultDiv.innerHTML = "<h2>Cálculos:</h2>";

    let sum = number1 + number2;
    let product = number1 * number2;
    let min = Math.min(number1, number2);
    let med = (number1 + number2) / 2

    ResultDiv.innerHTML += `<p>Soma: ${sum}</p>`;
    ResultDiv.innerHTML += `<p>Produto: ${product}</p>`;
    ResultDiv.innerHTML += `<p>Média: ${med}</p>`;
    ResultDiv.innerHTML += `<p>Menor número: ${min}</p>`;
}

const BntCalculate = document.getElementById("BntCalculate");
BntCalculate.addEventListener("click", Calculate);