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

function dropDown() {
	navMenuDrop.forEach((item, indice)=> {
		item.addEventListener('mouseenter', ()=> {
			subMenu.forEach((item, indice)=> {
				item.classList.remove('drop');
			});

			subMenu[indice].classList.add('drop');
		})

		item.addEventListener('mouseleave', ()=> {
			subMenu.forEach((item, indice)=> {
				item.classList.remove('drop');
			});
			
		})
	})
}

let w =  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (w >= 992) {
	dropDown();
}

window.onresize = function() {
    let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w >= 992) {
        dropDown();
    }
};

const btnAoTopo = document.querySelector('.btn-ao-topo').addEventListener('click', (event)=> {
	event.preventDefault();
	window.scroll(0, 0);
});

const header = document.querySelector('.header');

document.addEventListener('scroll', function() {
	var posicaoy = window.pageYOffset;

	if(posicaoy >= 100) {
		header.classList.add('nav-fixa');
	} if(posicaoy == 0) {
		header.classList.remove('nav-fixa');
	}
});
