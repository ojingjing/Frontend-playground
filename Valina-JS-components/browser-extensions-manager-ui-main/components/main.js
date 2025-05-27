import { data } from "./data.js";

let filtered = [];
const container = document.querySelector(".main_grid");

const renderCards = (filter = "all") => {
  container.innerHTML = "";

  filtered = data
    .map((item, index) => ({ ...item, _index: index }))
    .filter((item) => {
      if (filter === "active") return item.check === true;
      if (filter === "inactive") return item.check === false;
      return true;
    });

  filtered.forEach((item, index) => {
    container.innerHTML += `
      <div class="card">
        <div class="card_header">
          <img src="${item.img}" alt="" />
          <div>
            <h3>${item.title}</h3>
            <span>${item.description}</span>
          </div>
        </div>
        <div class="card_footer">
          <label class="switch">
            <input class="checked_input" type="checkbox" data-index="${index}" ${
      item.check ? "checked" : ""
    } />
            <div class="slider round"></div>
          </label>
        </div>
      </div>
    `;
  });
  const checked_input = document.querySelectorAll(".checked_input");
  checked_input.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const idx = Number(e.target.dataset.index);
      const checked = e.target.checked;

      // filtered만 수정
      filtered[idx].check = checked;
    });
  });
};

const syncToData = () => {
  filtered.forEach((item) => {
    data[item._index].check = item.check;
  });
};

renderCards();

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterButtons.forEach((c) => c.classList.remove("clicked"));
    btn.classList.add("clicked");

    const filter = btn.dataset.filter;

    syncToData();
    renderCards(filter);
  });
});

// 🌙 다크모드 버튼
const darkbtn = document.querySelector(".darkmodeBtn");
darkbtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
