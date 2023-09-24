const inp = document.querySelector(`#name-input`);
const helloName = document.querySelector(`#name-output`); 
inp.addEventListener("input", handler);
function handler(evt) {
    helloName.textContent = evt.currentTarget.value
}

