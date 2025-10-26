const form = document.getElementById("form");
const number = document.getElementById("number");
const table = document.getElementById("table");
const tbody = document.getElementById("tbody");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numValue = number.value;

    const tr = document.createElement("tr");
    const td = document.createElement("td");
    
    td.textContent = numValue;

    tr.appendChild(td);

    tbody.appendChild(tr);

    form.reset();

})