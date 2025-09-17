const filterBox = document.querySelector(".filter-box");
const resetBtn = document.getElementById("reset");
const jobCards = document.querySelectorAll(".container");

let activeFilters = [];

document.querySelectorAll(".sub-2-list li").forEach((tag) => {
  tag.addEventListener("click", () => {
    let skill = tag.textContent;

    if (!activeFilters.includes(skill)) {
      activeFilters.push(skill);
      addFilter(skill);
      filterJobs();
    }
  });
});

function addFilter(skill) {
  let span = document.createElement("span");
  span.textContent = skill;

  let btn = document.createElement("button");
  btn.textContent = "×";

  btn.addEventListener("click", () => {
    span.remove();
    activeFilters = activeFilters.filter((f) => f !== skill);
    filterJobs();
  });

  span.appendChild(btn);
  filterBox.appendChild(span);
}
function filterJobs() {
  jobCards.forEach((card) => {
    let tags = [...card.querySelectorAll(".sub-2-list li")].map(
      (li) => li.textContent
    );
    let match = activeFilters.every((f) => tags.includes(f));

    if (match || activeFilters.length === 0) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
resetBtn.addEventListener("click", () => {
  activeFilters = [];
  filterBox.innerHTML = "";
  filterJobs();
});
