document.addEventListener("DOMContentLoaded", () => {
	//card options
	const cardArray = [
		{
			name: "a",
			img: "images/a.png",
		},
		{
			name: "a",
			img: "images/a.png",
		},
		{
			name: "e",
			img: "images/e.png",
		},
		{
			name: "e",
			img: "images/e.png",
		},
		{
			name: "i",
			img: "images/i.png",
		},
		{
			name: "i",
			img: "images/i.png",
		},
		{
			name: "o",
			img: "images/o.png",
		},
		{
			name: "o",
			img: "images/o.png",
		},
		{
			name: "u",
			img: "images/u.png",
		},
		{
			name: "u",
			img: "images/u.png",
		},
		{
			name: "r",
			img: "images/r.png",
		},
		{
			name: "r",
			img: "images/r.png",
		},
		/*{
			name: "p",
			img: "images/p.png",
		},
		{
			name: "p",
			img: "images/p.png",
		},
		{
			name: "c",
			img: "images/c.png",
		},
		{
			name: "c",
			img: "images/c.png",
		},
		{
			name: "z",
			img: "images/z.png",
		},
		{
			name: "z",
			img: "images/z.png",
		},
		{
			name: "m",
			img: "images/m.png",
		},
		{
			name: "m",
			img: "images/m.png",
		},
		{
			name: "b",
			img: "images/b.png",
		},
		{
			name: "b",
			img: "images/b.png",
		},
		{
			name: "l",
			img: "images/l.png",
		},
		{
			name: "l",
			img: "images/l.png",
		},*/
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector(".grid");
	const resultDisplay = document.querySelector("#result");
	const headlinerDisplay = document.querySelector("#headliner");
	var cardsChosen = [];
	var cardsChosenId = [];
	var cardsWon = [];
	//create your board

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement("img");
			card.setAttribute("src", "images/blank.png");
			card.setAttribute("id", i);
			card.addEventListener("click", flipCard);
			grid.appendChild(card);
		}
	}

	//check for matches
	function checkForMatch() {
		let images = document.getElementById("0");
		images.removeEventListener("click", flipCard, true);
		var cards = document.querySelectorAll("img");
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		console.log(cardsChosen);
		if (cardsChosen.length === 2) {
			if (cardsChosen[0] === cardsChosen[1]) {
				cards[optionOneId].setAttribute("src", "images/white.png");
				cards[optionTwoId].setAttribute("src", "images/white.png");
				cardsWon.push(cardsChosen);
			} else {
				cards[optionOneId].setAttribute("src", "images/blank.png");
				cards[optionTwoId].setAttribute("src", "images/blank.png");
			}
		} else if (cardsChosen.length === 1) {
			cards[optionOneId].setAttribute("src", "images/blank.png");
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length == cardArray.length / 2) {
			headlinerDisplay.textContent =
				"Congratulations! You found them all!";
		}
	}
	//flip your card
	function flipCard() {
		var cardID = this.getAttribute("id");
		if (
			this.getAttribute("src") !== "images/white.png" &&
			this.getAttribute("src") === "images/blank.png" &&
			cardsChosenId.length <= 1
		) {
			this.setAttribute("src", cardArray[cardID].img);
			cardsChosen.push(cardArray[cardID].name);
			cardsChosenId.push(cardID);
			if (cardsChosenId.length === 2) {
				//if (cardsChosenId[0] != cardsChosenId[1]) {
					setTimeout(checkForMatch, 1000);
				/*} else {
					this.setAttribute("src", "images/blank.png");
					cardsChosen = [];
					cardsChosenId = [];
				}*/
			}
		}
	}

	/*function flipCard() {
		var cardID = this.getAttribute("id");
		if (this.getAttribute("src") !== "images/white.png") {
			this.setAttribute("src", cardArray[cardID].img);
			cardsChosen.push(cardArray[cardID].name);
			cardsChosenId.push(cardID);
				console.log(cardsChosenId[0], cardsChosenId[1]);
			if (
				cardsChosenId[0] != cardsChosenId[1] &&
				cardsChosenId[0] &&
				cardsChosenId[1]
			) {
				setTimeout(checkForMatch, 500);
			} else if (cardsChosenId[2]){
				this.setAttribute("src", "images/blank.png");
				console.log(cardsChosenId[0], cardsChosenId[1]);
				cardsChosen = [];
				cardsChosenId = [];
			}
		}
	}*/

	createBoard();
});
