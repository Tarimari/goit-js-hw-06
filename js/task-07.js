const inp = document.querySelector(`#font-size-control`);
const dir = inp.nextElementSibling.nextElementSibling;
console.dir(inp);
inp.addEventListener(`input`, hendInput);


function hendInput(evt) {
    // console.dir(evt.currentTarget.valueAsNumber)
    dir.style.fontSize = `${evt.currentTarget.valueAsNumber}px`;
}


