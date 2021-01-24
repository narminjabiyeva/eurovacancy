
Burger = () => {
	let menu = document.querySelector('.nav-col-2');
	menu.classList.toggle('nav-col-2-active')

}


DropDown = () => {
	let menu = document.querySelector('.nav-dropdown-menu');
	menu.classList.toggle('dropdown')
}



const Scroll = () => {
	'use strict';
	window.addEventListener("scroll", () => {
		var header = document.querySelector(".nav-container-fluid");
		header.classList.toggle("sticky", window.scrollY > 30)
	});
};
Scroll();



const BurgerMenu = () => {
	'use strict';
	window.addEventListener("scroll", () => {
		var header = document.querySelector(".nav-col-2");
		header.classList.toggle("nav-col-2-bg", window.scrollY > 20)
	});
};
BurgerMenu();