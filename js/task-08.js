const form = document.querySelector(`.login-form`)
const inpMail = form.firstElementChild.lastElementChild;
const inpPass = form.firstElementChild.nextElementSibling.lastElementChild;
const formBtn = form.lastElementChild;

form.addEventListener(`submit`, handlerSubmit);


function handlerSubmit(evt) {
    evt.preventDefault();
    if (!inpMail.value || !inpPass.value) {
        alert(`Попередження про те, що всі поля повинні бути заповнені.`);
        return;
    }
    const {email, password} = evt.currentTarget.elements;
    const result = {
        email: email.value,
        password: password.value,
    }
    console.dir(result);
    evt.currentTarget.reset();
}
