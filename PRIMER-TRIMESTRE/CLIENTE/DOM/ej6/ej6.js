<<<<<<< HEAD
const text = document.getElementById("text");

const btnToggle = document.getElementById("btnToggle");


btnToggle.addEventListener("click", () => {
    if (text.style.display === "block") {
        text.style.display = "none"
    } else {
        text.style.display = "block"
    }
});


=======
const text = document.getElementById('text');
const btnToggle = document.getElementById('btnToggle');

btnToggle.addEventListener('click', function() {
    if (text.style.display === 'block') {
        text.style.display = 'none';
    } else {
        text.style.display = 'block';
    }
});
>>>>>>> 21781faab36c0edfccc60db735a6ad347b08e7ca
