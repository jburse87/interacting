// Interacting

var image = document.getElementById('image')

function newPicture () {
	image.src="pikachu.jpg";
}

function oldPicture () {
	image.src="deadpool.jpg";
}

image.addEventListener('mouseenter', newPicture)
image.addEventListener('mouseleave', oldPicture)
