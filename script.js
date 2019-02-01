
// menu

const menuContainer = document.querySelector('.header__items-wrapper'),
	menuButton = document.createElement('input'),
	menu = document.createElement('ul'),
	pointNames = ['home', 'products', 'services', 'our work', 'contact'];

menuButton.setAttribute('type', 'button');
menuButton.setAttribute('value', 'Menu');
menuButton.classList.add('header__menu-low');
menu.classList.add('header__menu__wrapper-low');

function createMenuItems(pointNames) {

	for (let i = 0; i < pointNames.length; i++) {
		let menuItem = document.createElement('li'),
			menuItemLink = document.createElement('a');
			menuItemLink.setAttribute('href', '#');
			menuItem.classList.add('menu__item-low');
			menuItemLink.classList.add('menu__item__link-low');
			menuItemLink.innerText = pointNames[i];
			menuItem.append(menuItemLink);
			menu.append(menuItem);
	}
}

menuContainer.append(menuButton);
menuContainer.append(menu);
menuButton.addEventListener('click', function() {

	menu.classList.toggle('menu-open');
})

createMenuItems(pointNames);

// news-line

let pointIndex = 0;
showStroke();

function showStroke() {

	let points = document.querySelectorAll('.image-indicator__point');
	for (let i = 0; i < points.length; i++) {
		points[i].classList.remove('checked-point');
	}

	pointIndex++;
	if (pointIndex > points.length)
		pointIndex = 1;
	points[pointIndex - 1].classList.add('checked-point');
	setTimeout(showStroke, 3500);

}

function showNews(arr) {

	let news = document.querySelector('.news-line__message'),
	i = 0;

	setInterval( function() {
		news.innerText = arr[i];
		i++;
		if (i >= arr.length)
			i = 0;
	}, 3500);
}

let arr = ['Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
		   'Design agency of the year 2012',
		   'Fusce ornare nulla at quam commodo non venenatis odio blandit.'];
showNews(arr);

// end news-line