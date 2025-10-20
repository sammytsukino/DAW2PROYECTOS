<<<<<<< HEAD
const frame = document.getElementById("frame");
const btnCreate = document.getElementById("btnCreate");

let boxCreated = false;

btnCreate.addEventListener("click", () => {
    if (!boxCreated) {
        const box = document.createElement("div");
=======
const frame = document.getElementById('frame');
const btnCreate = document.getElementById('btnCreate');

let boxCreated = false;

btnCreate.addEventListener('click', () => {
    if (!boxCreated) {
        const box = document.createElement('div');
>>>>>>> 21781faab36c0edfccc60db735a6ad347b08e7ca
        box.className = 'box';
        frame.appendChild(box);
        boxCreated = true;
        btnCreate.disabled = true;
    }
<<<<<<< HEAD
});

=======
});
>>>>>>> 21781faab36c0edfccc60db735a6ad347b08e7ca
