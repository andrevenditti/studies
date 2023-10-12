const form = document.querySelector(".form");
const input = document.querySelector(".input");
const peopleGroup = document.querySelector(".people");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

let page = 1;

function createPerson(person) {
  const personCard = document.createElement("div");
  const name = document.createElement("h3");
  const height = document.createElement("span");
  const mass = document.createElement("span");

  personCard.classList.add("person");

  height.style.display = "block";
  name.textContent = person.name;
  height.textContent = `${(parseInt(person.height) * 0.01).toFixed(2)}m`;
  mass.textContent = `${parseInt(person.mass)}kg`;

  personCard.appendChild(name);
  personCard.appendChild(height);
  personCard.appendChild(mass);
  peopleGroup.appendChild(personCard);
}

async function renderPeople(page) {
  peopleGroup.innerHTML = "";
  const people = await fetchPeople(page);
  people.slice(0, 10).forEach((person) => {
    createPerson(person);
  });
}

renderPeople(page);

btnNext.addEventListener("click", () => {
  page += 1;
  renderPeople(page);
});

btnPrev.addEventListener("click", () => {
  if (page === 1) {
    return;
  }
  page -= 1;
  renderPeople(page);
});
