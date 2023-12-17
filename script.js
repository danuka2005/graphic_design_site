const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	header.classList.toggle("sticky",window.scrollY > 80)
});

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');

};

const sr = ScrollReveal({
	origin:'top',
	distance:'85px',
	duration: 2500,
	reset:true
})

sr.reveal ('.home-text' ,{delay:300});
sr.reveal ('.home-text' ,{delay:300});
sr.reveal ('.container' ,{delay:300});