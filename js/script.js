const navegacaoNav = document.querySelector('.navegacao-nav')

const btnMenu = document.querySelector('.btn-hamburger').addEventListener('click', ()=> {
	navegacaoNav.classList.toggle('active')
});

const btnSubMenu = document.querySelectorAll('.btn-sub-menu');
const subMenu = document.querySelectorAll('.sub-menu');

btnSubMenu.forEach((item, indice)=> {
	item.addEventListener('click', ()=> {
		subMenu.forEach((item)=> {
			item.classList.remove('active');
		});

		subMenu[indice].classList.add('active');
	})
});

const navMenuDrop = document.querySelectorAll('.nav-menu-item-drop')
console.log(navMenuDrop)

navMenuDrop.forEach((item, indice)=> {
	item.addEventListener('mouseenter', ()=> {
		subMenu.forEach((item, indice)=> {
			item.classList.remove('active');
		});

		subMenu[indice].classList.add('active');
	})

	item.addEventListener('mouseleave', ()=> {
		subMenu.forEach((item, indice)=> {
			item.classList.remove('active');
		});
		
	})
})
