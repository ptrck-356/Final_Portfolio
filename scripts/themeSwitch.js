const html = document.documentElement;

function toggleThem(){
    html.dataset.theme = html.dataset.theme === "light" ? "dark" : "light";
}

toggleTheme();