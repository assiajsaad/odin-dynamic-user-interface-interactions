function dropdown() {
  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");

  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");

  const btn = document.createElement("button");
  btn.textContent = "Dropdown";

  const choice1 = document.createElement("a");
  choice1.textContent = "Choice 1";
  choice1.href = "#";

  const choice2 = document.createElement("a");
  choice2.textContent = "Choice 2";
  choice2.href = "#";

  const choice3 = document.createElement("a");
  choice3.textContent = "Choice 2";
  choice3.href = "#";

  dropdownContent.appendChild(choice1);
  dropdownContent.appendChild(choice2);
  dropdownContent.appendChild(choice3);

  dropdown.appendChild(btn);
  dropdown.appendChild(dropdownContent);

  return dropdown;
}

export { dropdown };
