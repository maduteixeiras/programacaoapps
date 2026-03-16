function GenerateTabuada() {
    const NumberInput = document.getElementById("NumberInput");
    let number = Number(NumberInput.value);

    const ResultDiv = document.getElementById("result");
    ResultDiv.innerHTML = "";

    if (isNaN(number) || number === null || number === "" || number <= 0) {
        ResultDiv.innerHTML = "<p>Por favor, insira um número válido.</p>";
        return;
    }

    ResultDiv.innerHTML += `<h2>Tabuada do ${number}</h2>`;

    for(let i = 1; i <= 10; i++) {
        let resultado = number * i;
        ResultDiv.innerHTML += `<p>${number} x ${i} = ${resultado}</p>`;
    }
}

const BtnGenerate = document.getElementById("BtnGenerate");
BtnGenerate.addEventListener("click", GenerateTabuada);