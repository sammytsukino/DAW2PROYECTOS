const form = document.getElementById("form");
const field1 = document.getElementById("field1");
const field2 = document.getElementById("field2");
const tbody = document.getElementById("tbody")
let currentId = 1;

form.addEventListener("submit", 
(e) => {
    e.preventDefault();

    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = currentId;

    const td1 = document.createElement("td");
    td1.textContent = field1.value;

    const td2 = document.createElement("td");
    td2.textContent = field2.value;

    const tdActions = document.createElement("td");

    const actionsDiv= document.createElement("div");

    actionsDiv.className = "actions-buttons";

    const btnEdit = document.createElement("button")

    btnEdit.textContent = "Edit";
    btnEdit.className = "btn-edit";
    btnEdit.addEventListener("click", (e) => {

        const newValue1 = prompt("Editar campo 1", td1.textContent);

        const newValue2 = prompt("Editar campo 2", td2.textContent);

        if (newValue1 !== null && newValue1.trim() !== "") {
            td1.textContent = newValue1;
        }

        if (newValue2 !== null && newValue2.trim() !== "") {
            td2.textContent = newValue2;
        }
    });


    const btnDelete = document.createElement("button");

    btnDelete.textContent = "Delete";
    btnDelete.className = "btn-delete"

    btnDelete.addEventListener("click", (e) => {
        tbody.removeChild(tr);
    });

    actionsDiv.append(btnEdit, btnDelete);
    tdActions.appendChild(actionsDiv);

    tr.append(tdId, td1, td2, tdActions);
    
    tbody.appendChild(tr);

    currentId++;
    form.reset();

});