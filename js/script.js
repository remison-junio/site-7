const navegacaoNav = document.querySelector('.navegacao-nav')

const btnMenu = document.querySelector('.btn-hamburger').addEventListener('click', ()=> {
	navegacaoNav.classList.toggle('active')
});

const btnSubMenu = document.querySelectorAll('.btn-sub-menu');
const subMenu = document.querySelectorAll('.sub-menu');

btnSubMenu.forEach((item, indice)=> {
	item.addEventListener('click', () => {
		subMenu.forEach((item)=> {
			item.classList.remove('active');
		});

		subMenu[indice].classList.add('active');
	});
});