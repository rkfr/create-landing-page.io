
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