const form = document.getElementById("form");
const field1 = document.getElementById("field1");
const field2 = document.getElementById("field2");
const field3 = document.getElementById("field3");
const box = document.getElementById("box");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const p1 = document.createElement("p");
    p1.textContent = field1.value;

    const p2 = document.createElement("p");
    p2.textContent = field2.value;

    const p3 = document.createElement("p");
    p3.textContent = field3.value;

    box.innerHTML = "";
    box.appendChild(p1, p2, p3);
    const fragment = document.createDocumentFragment();
    fragment.appendChild(p1);
    fragment.appendChild(p2);
    fragment.appendChild(p3);
    box.appendChild(fragment);

})