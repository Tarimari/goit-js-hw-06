const inp = document.querySelector("#validation-input");
inp.addEventListener(`blur`, handleBlur);

function handleBlur(evt) {
    console.log(evt.currentTarget.selectionEnd);
    console.log(Number(inp.dataset.length));
    console.log(evt.currentTarget.selectionEnd === Number(inp.dataset.length));
    if (evt.currentTarget.selectionEnd === Number(inp.dataset.length)) {
        // evt.currentTarget.style.borderColor = `#f44336`;
        evt.currentTarget.classList.add("valid");
        evt.currentTarget.classList.remove("invalid");
    }
    else {
        // evt.currentTarget.style.borderColor = `#4caf5`;
        evt.currentTarget.classList.add("invalid");
        evt.currentTarget.classList.remove("valid");
    }
}


