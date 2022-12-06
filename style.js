//Dark mode button
let button = document.getElementById("dark-button");
button.addEventListener("click", onClick());

function onClick() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//Form submission
const valSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);


    fetch('/contac.html', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(data).toString(),
    }).then(() => console.log("Successfully submitted")).catch((error) => alert(error));

};
document.querySelector("form").addEventListener("submit", valSubmit);

