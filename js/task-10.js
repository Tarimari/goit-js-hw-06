const form = document.querySelector(`#controls`);
const inp = document.querySelector(`input`);
const createBtn = inp.nextElementSibling;
const destroyBtn = createBtn.nextElementSibling;
const box = document.querySelector(`#boxes`);

createBtn.addEventListener(`click`, hendlerClick);
destroyBtn.addEventListener(`click`, destroyBoxes);

function hendlerClick() {
  createBoxes(inp.value);
}

function createBoxes(amount) {
  const arr = [];
  let lastId = 0;
  if (!box.lastElementChild) { lastId = 0 }
  else { lastId = Number(box.lastElementChild.id) };

  for (let i = 1; i <= amount; i++) {
    arr.push(`<div class="boxes" id="${i + lastId}"></div>`)
  };
console.dir(typeof(arr.join("")));

  box.insertAdjacentHTML("beforeend", arr.join(""));
  const cubs = document.querySelectorAll(`.boxes`);

  cubs.forEach((cub) => {
    cub.style.width = `${Number(cub.id) + 10}px`;
    cub.style.height = `${Number(cub.id) + 10}px`;
    cub.style.backgroundColor = getRandomHexColor();
  });
  console.dir(document.querySelectorAll(`.boxes`));
}

function destroyBoxes() {
  box.innerHTML = "";
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
