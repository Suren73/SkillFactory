const MENU_LINKS = document.querySelectorAll('.header__menu-link');
console.log(MENU_LINKS);

MENU_LINKS.forEach(link => link.addEventListener('click', event => {
	event.preventDefault();

	const id = link.getAttribute('href');
	document.querySelector(id).scrollIntoView({
		behavior: 'smooth',
	});
}));

const HERO_DOTS = document.querySelectorAll('.hero__dot');
const HERO_IMAGE = document.querySelector('.hero__image');
const HERO_TITLE = document.querySelector('.hero__title');
const HERO_SUBTITLE =document.querySelector('.hero__subtitle');

const HERO_TITLES = [
	"Разработано 2000+ приложений",
	"Бесплатные приложения",
	"Тысячи довольных клиентов"
];

const HERO_SUBTITLES = [
	"Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток",
	 "К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно",
	 "Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов"
];

HERO_DOTS.forEach((dot, index) => dot.addEventListener('click', event => {
	console.log(index);
	HERO_DOTS.forEach(el => {
		el.classList.remove('active');
	});
	dot.classList.add('active');
	HERO_IMAGE.src = `assets/hero_${index + 1}.jpg`;
	HERO_TITLE.textContent = HERO_TITLES[index];
	HERO_SUBTITLE.textContent = HERO_SUBTITLES[index];
}));

const FEATURE_NAVS = document.querySelectorAll('.features__nav-item');
const FEATURE_TABS = document.querySelectorAll('.features__item');
// console.log(FEATURE_TABS);
// console.log(FEATURE_NAVS);

FEATURE_NAVS.forEach((nav, index) => nav.addEventListener('click', event => {
	FEATURE_NAVS.forEach(el => el.classList.remove('active'));
	FEATURE_TABS.forEach(el => el.classList.remove('active'));
	nav.classList.add('active');
	FEATURE_TABS[index].classList.add('active');
}));