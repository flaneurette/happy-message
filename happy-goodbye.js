var goodbye = {
	
	getMessage: function () {
		var  data = [
		'See you later, Gator',
		'In a while, Crocodile',
		'See you soon, Raccoon',
		'Gotta go, Buffalo',
		'Bye-bye, Butterfly',
		'Adios, Hippos',
		'In an hour, Sunflower',
		'Maybe two, Kangaroo',
		'Chow, chow, Brown Cow',
		'See you soon, Baboon',
		'Adieu, Cockatoo',
		'Better swish, Jellyfish',
		'Chop, chop, Lollipop',
		'Gotta run, Skeleton',
		'Better shake, Rattle Snake',
		'Be sweet, Parakeet',
		'Take care, Polar Bear',
		'Hit the road, Happy Toad',
		'Can\'t stay, Blue Jay',
		'Give me a hug, Ladybug',
		'Toodle-loo, Kangaroo',
		'Till then, Penguin',
		'Hasta manana, Iguana',
		'Give me a kiss, Goldfish',
		'Get in line, Porcupine',
		'Out the door, Dinosaur',
		'On the bus, Octopus',
		'To your house, Quiet mouse'
		];
		
		return data[Math.floor(data.length * Math.random())];
	},
	
	showMessage: function () {
		var message = this.getMessage();
		document.write(message);
	}
};
