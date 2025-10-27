const form = document.getElementById("form")
const name = document.getElementById("name")
const lastname = document.getElementById("lastname")
const color = document.getElementById("color")
const box = document.getElementById("box")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const contentDiv = document.createElement("div")
    contentDiv.className = "content"

    const pName = document.createElement("p")
    pName.textContent = `Name: ${name.value}`

    const pLastName = document.createElement("p")
    pLastName.textContent = `Last name: ${lastname.value}`

    const colorDisplay = document.createElement("div")
    colorDisplay.className = "color-display"
    

    const pColor = document.createElement("p")
    pColor.textContent = "Favorite color"

    const colorSquare = document.createElement("div");
    colorSquare.className = "color-square";
    colorSquare.style.backgroundColor = color.value;

    colorDisplay.append(pColor, colorSquare);
    contentDiv.append(pName, pLastName, colorDisplay);

    box.innerHTML = "";
    box.appendChild(contentDiv);
})




