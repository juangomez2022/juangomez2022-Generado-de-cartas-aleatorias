
window.onload = function() {

	let palos = ["diamond", "heart", "spade", "club"];
	let simbols = {
		diamond: "♦",
		heart: "♥",
		spade: "♠",
		club: "♣"
	};

	let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

	let paloRandom = palos[Math.floor(Math.random() * palos.length)];
	let valorRandom = values[Math.floor(Math.random() * values.length)];

	let top = document.getElementById("topSuit");
	let number = document.getElementById("number");
	let bottom = document.getElementById("bottomSuit");

	top.innerHTML = simbols[paloRandom];
	bottom.innerHTML = simbols[paloRandom];
	number.innerHTML = valorRandom;

	let colorRandom = Math.random() < 0.5 ? "red" : "black";

	top.style.color = colorRandom;
	bottom.style.color = colorRandom;

	number.style.color = "black";
};