const inp = document.querySelector("#validation-input");
inp.addEventListener(`blur`, handleBlur);

function handleBlur(evt) {

    if (evt.currentTarget.selectionEnd < Number(inp.dataset.length)) {
        // evt.currentTarget.style.borderColor = `#f44336`;
        evt.currentTarget.classList.add("invalid");
        evt.currentTarget.classList.remove("valid");
    }
    else {
        // evt.currentTarget.style.borderColor = `#4caf5`;
        evt.currentTarget.classList.add("valid");
        evt.currentTarget.classList.remove("invalid");
    }
}


