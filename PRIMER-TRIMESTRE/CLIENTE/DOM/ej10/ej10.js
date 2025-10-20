const frame = document.getElementById('frame');
const btnCreate = document.getElementById('btnCreate');
const btnDelete = document.getElementById('btnDelete');

btnCreate.addEventListener('click', function() {
    const box = document.createElement('div');
    box.className = 'box';
    frame.appendChild(box);
});

btnDelete.addEventListener('click', () => {
    const boxes = frame.querySelectorAll('.box');
    if (boxes.length > 0) {
        frame.removeChild(boxes[boxes.length - 1]);
    }
});
const frame = document.getElementById("frame")
const btnCreate = document.getElementById("btnCreate")
const btnDelete = document.getElementById("btnDelete")
let boxesCreated = 0;
const maxBoxes =8;

btnCreate.addEventListener("click", () => {
        const box = document.createElement("div");
        box.className = 'box'
        frame.appendChild(box)
});

btnDelete.addEventListener("click", () => {
    const boxes = frame.querySelectorAll('.box');
    if (boxes.length > 0 ) {
        frame.removeChild(boxes[boxes.length-1])
    }
})

