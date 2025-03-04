"use strict";

const liConSubmenu = document.querySelectorAll("li");
const botonMenu = document.getElementById("botonMenu");
const menuP = document.getElementById("menuPrincipal");

botonMenu.addEventListener("click", menu);

liConSubmenu.forEach(li => {
  li.addEventListener("mouseenter", mostrarSubmenu);
  li.addEventListener("mouseleave", ocultarSubmenu);
});

function menu() {
  menuP.classList.toggle("hidden");
}

function mostrarSubmenu(event) {
  const submenu = event.currentTarget.querySelector("div");
  if (submenu) {
    submenu.classList.remove("lg:opacity-0","pointer-events-none");
    submenu.classList.add("lg:opacity-100","lg:translate-x-[0%]","lg:grid");
  }
}

function ocultarSubmenu(event) {
  const submenu = event.currentTarget.querySelector("div");
  if (submenu) {
    submenu.classList.remove("lg:opacity-100","lg:translate-x-[0%]","lg:grid");
    submenu.classList.add("lg:opacity-0","pointer-events-none");
  }
}

//dark mode
document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
  
  localStorage.theme = "light";
  
  localStorage.theme = "dark";
  
  localStorage.removeItem("theme");

//slider

const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;

next.addEventListener("click", () => {
    index = (index + 1) % 3; // Cambia según el número de imágenes
    updateSlider();
});

prev.addEventListener("click", () => {
    index = (index - 1 + 3) % 3;
    updateSlider();
});

function updateSlider() {
    const translateX = -index * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}