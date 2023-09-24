let counterValue = 0;
const val = document.querySelector("span");

const decrementBtn = val.previousElementSibling;
const incrementBtn = val.nextElementSibling;
decrementBtn.addEventListener(`click`, () => {
    counterValue--;
    val.textContent = counterValue;
});
incrementBtn.addEventListener(`click`, () => {
    counterValue++;
    val.textContent = counterValue;
});
val.textContent = counterValue;
console.log(counterValue)