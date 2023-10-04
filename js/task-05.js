const inp = document.querySelector(`#name-input`);
const helloName = document.querySelector(`#name-output`); 
inp.addEventListener("input", handler);
function handler(evt) {
    if (!evt.currentTarget.value) {
        helloName.textContent = "Anonymous";
    }
    else
    {helloName.textContent = evt.currentTarget.value}
}

