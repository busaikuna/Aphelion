const root = document.documentElement;
const theme = document.querySelector(".theme");
let themeLS = localStorage.getItem("theme");

window.addEventListener("resize", changeTheme);

if (!themeLS) {
    localStorage.setItem("theme", "dark");
    themeLS = "dark";
}

changeTheme();

theme.addEventListener("click", () => {
    themeLS = localStorage.getItem("theme");
    if (themeLS === "dark") {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
    themeLS = localStorage.getItem("theme");
    changeTheme();
});

function changeTheme() {
    if (themeLS) {
        if (themeLS === "dark") {
            root.style.setProperty("--dark", "#101010");
            root.style.setProperty("--light-dark", "#646464");
            root.style.setProperty("--light", "#B2BEBF");
            document.querySelector(".input").style.color = "var(--light)";
            root.style.setProperty("--dark-light", "#3B3936");
            root.style.setProperty("--logo", "#DEE0DC");
            theme.style.filter = "brightness(10) grayscale()";
        } else if (themeLS === "light") {
            root.style.setProperty("--dark", "#fff");
            root.style.setProperty("--light-dark", "#000");
            root.style.setProperty("--light", "#000");
            document.querySelector(".input").style.color = "#fff";
            root.style.setProperty("--dark-light", "#dee0dc");
            root.style.setProperty("--logo", "#1d1d31");
            if (window.innerWidth < 750) {
                theme.style.filter = "brightness(0) grayscale(100%)"; // Ícone branco em telas pequenas
            } else {
                theme.style.filter = "brightness(10) grayscale()"; // Ícone preto em telas grandes
            }
        }
    }
}
