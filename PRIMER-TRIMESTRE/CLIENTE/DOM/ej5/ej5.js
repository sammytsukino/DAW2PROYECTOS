<<<<<<< HEAD
const text = document.getElementById("text");

const btnToggle = document.getElementById("btnToggle");


btnToggle.addEventListener("click", () => {
    if (text.style.textDecoration === "underline") {
        text.style.textDecoration = "none"
    } else {
        text.style.textDecoration = "underline"
    }
});


=======
const text = document.getElementById('text');
const btnToggle = document.getElementById('btnToggle');

btnToggle.addEventListener('click', () => {
    if (text.style.textDecoration === 'underline') {
        text.style.textDecoration = 'none';
    } else {
        text.style.textDecoration = 'underline'
    }
});
>>>>>>> 21781faab36c0edfccc60db735a6ad347b08e7ca
