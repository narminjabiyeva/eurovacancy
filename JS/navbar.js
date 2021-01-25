
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



$(document).ready(function () {
	$('.claimedRight-2').each(function (f) {
		var newstr = $(this).text().substring(0, 89);
		$(this).text(newstr);
	});
})


$(document).ready(function () {
	$('.claimedRight-3').each(function (f) {
		var newp = $(this).text().substring(0, 35);
		$(this).text(newp);
	});
})



$(document).ready(function () {
	$(document).on('click', '.heart-right', function () {
		$(this).toggleClass('heart-fav');
	})
	$(document).on('click', '.heart-second-1', function () {
		$(this).toggleClass('heart-first');
	})
})