async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/3")
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getData();


fetch ("https://jsonplaceholder.typicode.com/todos/3")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


fetch ("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        if(!response.ok) {
            throw new Error("Error en la solicitud")
        }
        return response.json()
    })
    .then(data => {
        console.log("Datos recibidos", data)
    })
    .catch (error => {
        console.log("Error", error)
    })
