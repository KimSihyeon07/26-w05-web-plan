const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

function setMenuOpen(isOpen) {
	menuToggle.setAttribute("aria-expanded", String(isOpen));
	menuToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
	navigation.classList.toggle("is-open", isOpen);
}

menuToggle.addEventListener("click", () => {
	setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
	if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
		setMenuOpen(false);
		menuToggle.focus();
	}
});

window.addEventListener("resize", () => {
	if (window.matchMedia("(min-width: 761px)").matches) setMenuOpen(false);
});
