const html = document.documentElement;

function toggleTheme(){
    html.dataset.theme = html.dataset.theme === "light" ? "dark" : "light";
}

toggleTheme();