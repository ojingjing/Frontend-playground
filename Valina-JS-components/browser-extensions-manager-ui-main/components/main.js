import { data } from "./data.js";

const container = document.querySelector(".main_grid");

const renderCards = (filter = "all") => {
  console.log(filter);
  container.innerHTML = "";
  const filtered = data.filter((item) => {
    if (filter === "active") return item.check === true;
    if (filter === "inactive") return item.check === false;
    return true;
  });
  console.log(filtered);
  filtered.forEach((item, index) => {
    container.innerHTML += `
          <div class="card">
          <div class="card_header">
            <img src="${item.img}" alt="" />
            <div>
              <h3>${item.title}</h3>
              <span>${item.description}
                </span
              >
            </div>
          </div>
          <div class="card_footer">
           
            <label class="switch">
              <input class="checked_input" type="checkbox" data-index =${index} ${
      item.check ? "checked" : ""
    }/>
              <div class="slider round"></div>
            </label>
          </div>
        </div>
      
        `;
  });
};
{
  /* <button>Remove</button> */
}
renderCards();
const filterButtons = document.querySelectorAll(".filter-btn");
console.log(filterButtons);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterButtons.forEach((c) => c.classList.remove("clicked"));
    btn.classList.add("clicked");
    console.log(btn);
    const filter = btn.dataset.filter;
    renderCards(filter);
  });
});

const checked_input = document.querySelectorAll(".checked_input");
checked_input.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    const idx = Number(e.target.dataset.index);
    const checked = e.target.checked;

    data[idx].check = checked;

    console.log(data[idx].check, idx);
  });
});
console.log(checked_input);

const darkbtn = document.querySelector(".darkmodeBtn");

darkbtn.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
});
