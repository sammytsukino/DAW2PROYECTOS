<<<<<<< HEAD
const frame = document.getElementById("frame");
const btnCreate = document.getElementById("btnCreate");



btnCreate.addEventListener("click", () => {
        const box = document.createElement("div");
        box.className = 'box';
        frame.appendChild(box);
});

=======
const frame = document.getElementById('frame');
const btnCreate = document.getElementById('btnCreate');

btnCreate.addEventListener('click', function() {
    const box = document.createElement('div');
    box.className = 'box';
    frame.appendChild(box);
});
>>>>>>> 21781faab36c0edfccc60db735a6ad347b08e7ca
