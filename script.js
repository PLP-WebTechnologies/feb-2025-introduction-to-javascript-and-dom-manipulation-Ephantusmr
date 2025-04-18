// Function to change text content dynamically
function changeText() {
    document.getElementById("description").textContent = "Text changed! JavaScript is awesome!";
}

// Function to modify CSS styles via JavaScript
function changeStyle() {
    document.getElementById("title").classList.toggle("highlight");
}

// Function to add a new element when a button is clicked
function addElement() {
    let newElement = document.createElement("p");
    newElement.textContent = "New dynamic paragraph added!";
    newElement.style.color = "green";
    document.getElementById("dynamic-content").appendChild(newElement);
}

// Function to remove the last added element when a button is clicked
function removeElement() {
    let container = document.getElementById("dynamic-content");
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    } else {
        alert("No elements to remove!");
    }
}
