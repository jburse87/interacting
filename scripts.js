// Interacting

var image = document.getElementById('image')

function newPicture () {
	image.src="images/pikachu.jpg";
}

function oldPicture () {
	image.src="images/deadpool.jpg";
}

image.addEventListener('mouseenter', newPicture)
image.addEventListener('mouseleave', oldPicture)