<<<<<<< HEAD
const frame = document.getElementById("frame")
const btnCreate = document.getElementById("btnCreate")
const counter = document.getElementById("counter")
let boxesCreated = 0;
const maxBoxes = 8;

btnCreate.addEventListener("click", () => {
    if (boxesCreated < maxBoxes) {
        const box = document.createElement("div");
        box.className = 'box'
        frame.appendChild(box)
        boxesCreated++;
        counter.textContent = `Cajas creadas: ${boxesCreated}/${maxBoxes}`;
=======
const frame = document.getElementById('frame');
const btnCreate = document.getElementById('btnCreate');
const counter = document.getElementById('counter');
let boxesCreated = 0;
const maxBoxes = 5;

btnCreate.addEventListener('click', () => {
    if (boxesCreated < maxBoxes) {
        const box = document.createElement('div');
        box.className = 'box';
        frame.appendChild(box);
        boxesCreated++;
        counter.textContent = `Cajas creadas: ${boxesCreated}/${maxBoxes}`;

>>>>>>> 21781faab36c0edfccc60db735a6ad347b08e7ca
        if (boxesCreated === maxBoxes) {
            btnCreate.disabled = true;
        }
    }
<<<<<<< HEAD
})

=======
});
>>>>>>> 21781faab36c0edfccc60db735a6ad347b08e7ca
