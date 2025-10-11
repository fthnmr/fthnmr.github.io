// Toggle dark mode with localStorage memory
const html = document.documentElement;
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") html.classList.add("dark");
if (storedTheme === "light") html.classList.remove("dark");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    html.classList.toggle("dark");
    const mode = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", mode);
  });
});
