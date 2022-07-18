let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let color3 = document.querySelector('#color3');
let color4 = document.querySelector('#color4');
let image = document.querySelector('#imageRemove');

color1.addEventListener('click', () => {
	image.src = "Images/l1.png";
});

color2.addEventListener('click', () => {
	image.src = "Images/l2.png";
});

color3.addEventListener('click', () => {
	image.src = "Images/l3.png";
});

color4.addEventListener('click', () => {
	image.src = "Images/l4.png";
});


