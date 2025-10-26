const form = document.getElementById('form');
const field1 = document.getElementById('field1');
const field2 = document.getElementById('field2');
const field3 = document.getElementById('field3');
const box = document.getElementById('box');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const frame1 = document.createElement('fieldset');
    const frame2 = document.createElement('fieldset');
    const frame3 = document.createElement('fieldset');
    frame1.className = 'frame1';
    frame2.className = 'frame2';
    frame3.className = 'frame3';

    const p1 = document.createElement('p');
    p1.textContent = field1.value;
    const p2 = document.createElement('p');
    p2.textContent = field2.value;
    const p3 = document.createElement('p');
    p3.textContent = field3.value;
    frame1.appendChild(p1);
    frame2.appendChild(p2);
    frame3.appendChild(p3);

    box.innerHTML = '';
    box.append(frame1, frame2, frame3);
});