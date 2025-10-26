const form = document.getElementById("form");
const field1 = document.getElementById("field1");
const box = document.getElementById("box");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    box.textContent = field1.value;
});
