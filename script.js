/*Theme Switch*/
const root = document.documentElement();
const toggle = document.getElementById("ThemeSwitch")

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
}

// Toggle between themes
toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save choice
});