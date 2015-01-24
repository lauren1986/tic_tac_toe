// This is the Javascript required for the simple game logic behind Tic Tac Toe.

// This is a reaction to a click on any of the squares within the board grid.

	// Assign variables to each square within the board grid.
	var squareOne = document.getElementById("square1");
	var squareTwo = document.getElementById("square2");
	var squareThree = document.getElementById("square3");
	var squareFour = document.getElementById("square4");
	var squareFive = document.getElementById("square5");
	var squareSix = document.getElementById("square6");
	var squareSeven = document.getElementById("square7");
	var squareEight = document.getElementById("square8");
	var squareNine = document.getElementById("square9");

	// images

	images = document.getElementsByTagName("i");
	// image2 = document.getElementsByTagName("i")[1];
	// image3 = document.getElementsByTagName("i")[2];

	// Start to see if we can add behavior to squareOne on click.

	var playerOne = true;

	// squareOne.onclick = setSquare;
	// squareTwo.onclick = setSquare;
	// squareThree.onclick = setSquare;
	// squareFour.onclick = setSquare;
	// squareFive.onclick = setSquare;
	// squareSix.onclick = setSquare;
	// squareSeven.onclick = setSquare;
	// squareEight.onclick = setSquare;
	// squareNine.onclick = setSquare;

	function setSquare(num){
		console.log(this.firstChild);
		if (playerOne == true) {
			console.log(images[num]);
			images[num].style.visibility = "visible";
			// this.firstChild.class+= " " + xClass;
			// this.image1.style.visibility = "visible";
		}
		else {
			images[num+1].style.visibility = "visible";
			// this.firstChild.class+= " " + oClass;
			// this.firstChild.style.visibility = "visible";
		}
		playerOne = ! playerOne;
	}


// This section focuses on alternating turns and alternating icons.

	// Here we start to create alternating turns for Player 1 and Player 2.
	var count = 1;
	var xClass = document.getElementsByClassName("fa-diamond");
	var oClass = document.getElementsByClassName("fa-user-secret");


	while (count < 10) {
		console.log(count);
		count++;
	}

	//if (count % 2 == 0) {
		//console.log(PlayerOne);
	//}
	//else (count % 2 != 0) {
		//console.log(PlayerTwo);
	//}

// This allows you to define the win conditions in an array, based on assigning numbers to each square in the grid.

//win = [["squareOne","squareTwo","squareThree"],["squareFour","squareFive","squareSix"],["squareSeven","squareEight","squareNine"],["squareOne","squareFour","squareSeven"],["squareTwo","squareFive","squareEight"],["squareThree","squareSeven","squareNine"],["squareOne","squareFive","squareNine"],["squareThree","squareFive","squareSeven"]]
