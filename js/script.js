// Selecting Elements;
const form = document.querySelector("form");
const input = document.querySelector("form input");
const addBtn = document.querySelector("form button");
const ul = document.querySelector("main ul");

// Creat li tag;
const creatLi = function () {
  const li = document.createElement("li");

  li.innerHTML = `
      <div class="done__wrapper">
        <span>Done</span>
        <input type="checkbox">
       </div>

      <div class="chores__wrapper">
        <span id="task">${input.value}</span>
        <div class="btn__wrapper">
          <button class="edit__btn bx bx-edit"></button>
          <button class="trash__btn bx bx-trash"></button>
        </div>
      </div>
    `;

  return li;
};

// Submiting form;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input.value) {
    form.style.border = "1px dashed red";
  } else {
    form.style.border = "";
    const li = creatLi();
    ul.appendChild(li);
  }
  form.reset();
});

// Is Done Or Not;
ul.addEventListener("change", (e) => {
  const checkbox = e.target;
  const checked = checkbox.checked;
  const li = checkbox.parentNode.parentNode;

  if (checked) {
    li.classList.add("checked");
  } else {
    li.classList.remove("checked");
  }
});

// Actions;
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    const li = button.closest("li");

    // Delete;
    if (button.classList.contains("trash__btn")) {
      ul.removeChild(li);
    }

    // Edit;
    if (button.classList.contains("edit__btn")) {
      const choresWrapper = li.querySelector(".chores__wrapper");
      const span = choresWrapper.firstElementChild;

      const input = document.createElement("input");
      input.value = span.textContent;

      choresWrapper.insertBefore(input, span);
      choresWrapper.removeChild(span);

      button.className = "check__btn bx bx-check ";

      // Save;
    } else if (button.classList.contains("check__btn")) {
      const span = document.createElement("span");
      const choresWrapper = li.querySelector(".chores__wrapper");
      const input = choresWrapper.firstElementChild;
      input.type = "text";
      console.log(input);

      span.textContent = input.value;
      choresWrapper.insertBefore(span, input);
      choresWrapper.removeChild(input);

      button.className = "edit__btn bx bx-edit";
    }
  }
});
