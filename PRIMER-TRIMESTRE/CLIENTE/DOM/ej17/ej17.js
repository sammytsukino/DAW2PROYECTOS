const form = document.getElementById("form");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const table = document.getElementById("table");
const tbody = document.getElementById("tbody");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    const sum = num1 + num2;

    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = num1;

    const td2 = document.createElement("td");
    td2.textContent = num2;

    const td3 = document.createElement("td");
    td3.textContent = sum;

    tr.append(td1, td2, td3);
    tbody.appendChild(tr);

    form.reset();
})