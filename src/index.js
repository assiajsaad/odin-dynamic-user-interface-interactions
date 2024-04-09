import "./style.css";
import { dropdown } from "./dropdown";

const drop = dropdown();
const nav = document.querySelector(".navbar");

nav.appendChild(drop);

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");

  dropdown.addEventListener("mouseover", function () {
    this.querySelector(".dropdown-content").style.display = "block";
  });

  dropdown.addEventListener("mouseout", function () {
    this.querySelector(".dropdown-content").style.display = "none";
  });
});
