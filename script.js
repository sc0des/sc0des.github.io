// Mobile Menu
let menulines = document.querySelector(".menu-lines");
let navBar = document.querySelector(".nav-menu");

menulines.addEventListener("click", () => {
	menulines.classList.toggle("active");
	navBar.classList.toggle("active");
});

document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () => {
	menulines.classList.remove("active");
	navBar.classList.remove("active");

}));