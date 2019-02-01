
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




// description

const descriptionCites = [

	{
		header: 'Design agency <span>of the year 2012</span>',
		topArticle: `Quisque gravida felis eu massa consectetur 
				at malesuada nibh porttitor. Nam nunc nulla, tempus at viverra sit amet, 
				semper nec diam. Phasellus tellus elit, placerat sit amet convallis at, 
				bibendum vitae nisi. Phasellus vulputate consequat felis nec sagittis.
 				Sed eget lectus in elit pretium euismod feugiat quis felis.
 				`,
 		bottomArticle: `Fusce ornare nulla at quam commodo non venenatis odio blandit.
 				 Donec sit amet nunc justo. Fusce ullamcorper, lacus sed lacinia fringilla,
 				 massa urna vulputate ante, vitae pharetra enim nibh nec diam. Nunc vestibulum 
 				 convallis massa sit amet consectetur. Aenean porttitor velit a risus sodales 
 				 lobortis eu sed nibh. Vivamus at est felis. Praesent pharetra nunc id arcu
 				 vehicula quis vulputate diam rutrum. Integer lorem orci, vehicula eu pellentesque non,
 				 cursus sed tortor.
 				 Donec orci orci, condimentum vel bibendum sed, porta eget mi.`
	},

	{
		header: 'Lorem <span>Ipsum</span>',
		topArticle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
 				 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
 				 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
 				 voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
 		bottomArticle: `Excepteur sint occaecat cupidatat non proident,
 				 sunt in culpa qui officia deserunt mollit anim id est laborum.
 				 Nam nunc nulla, tempus at viverra sit amet, semper nec diam. Phasellus tellus elit, placerat sit amet convallis at, bibendum vitae nisi.`
	},

	{
		header: 'Sed ut perspiciatis <span>unde omnis</span>',
		topArticle: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
 				 sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
 		bottomArticle: `Phasellus vulputate consequat felis nec sagittis. Sed eget lectus in elit pretium euismod feugiat quis felis. Fusce ornare nulla at quam commodo non venenatis odio blandit. Donec sit amet nunc justo. Fusce ullamcorper,
 				 lacus sed lacinia fringilla, massa urna vulputate ante, vitae pharetra enim nibh nec diam.`
	}
];

const descriptionContainer = document.querySelector('.description-area'),
	citeContainer = document.createElement('div');

citeContainer.append(createCite(descriptionCites, 0));
descriptionContainer.prepend(citeContainer);


let i = 0;
function changeCite(e) {

	let ifElements = e.target.classList.contains('slider-button'),
		target = e.target,
		index = 0;

	if (!ifElements) {
		return;
	}
	citeContainer.innerText = '';
	
	if (target.classList.contains('slider-button__left-button')) {
		citeContainer.style.animation = 'left-switch 0.7s';
		i--;
	}
	else {
		citeContainer.style.animation = 'right-switch 0.7s';
		i++;
	}
	setTimeout( () => citeContainer.style.animation = '', 700);

	if (i >= descriptionCites.length)
		i = 0;
	if (i < 0)
		i = descriptionCites.length - 1;

	citeContainer.append(createCite(descriptionCites, i));	
}

descriptionContainer.addEventListener('click', changeCite);


function createCite(cites, index) {

	let {header, topArticle, bottomArticle} = cites[index];
		header = header.replace(/\s+/g, " ").trim();
		topArticle = topArticle.replace(/\s+/g, " ").trim()
		bottomArticle = bottomArticle.replace(/\s+/g, " ").trim()

	let cite = document.createElement('cite'),
		title = document.createElement('h2'),
		firstParagraph = document.createElement('p'),
		lastParagraph = document.createElement('p');

	cite.classList.add('description__cite');
	title.classList.add('cite__header');
	firstParagraph.classList.add('cite__top-article');
	lastParagraph.classList.add('cite__bottom-article');

	title.innerHTML = header;
	firstParagraph.innerText = topArticle;
	lastParagraph.innerText = bottomArticle;

	cite.append(title, firstParagraph, lastParagraph);

	return cite;
}



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