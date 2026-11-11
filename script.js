
// ===== THEME TOGGLE =====

const themeToggle = document.getElementById("theme-toggle");

// Check saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

// Toggle theme on click
themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }

});
// Mobile Hamburger Menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});

// Close Menu After Clicking a Link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});