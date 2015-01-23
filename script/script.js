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

	// Start to see if we can add behavior to squareOne on click.

	squareOne.onclick = function(){
		document.getElementById("square1").innerHTML="<i class='fa fa-diamond fa-5x fa-pulse'></i>";
	}

	squareTwo.onclick = function(){
		document.getElementById("square2").innerHTML="<i class='fa fa-heartbeat fa-5x fa-pulse'></i>";
	}

	squareThree.onclick = function(){
		document.getElementById("square3").innerHTML="<i class='fa fa-forumbee fa-5x fa-pulse'></i>";
	}

	squareFour.onclick = function(){
		document.getElementById("square4").innerHTML="<i class='fa fa-user-secret fa-5x fa-pulse'></i>";
	}

	squareFive.onclick = function(){
		document.getElementById("square5").innerHTML="<i class='fa fa-motorcycle fa-5x fa-pulse'></i>";
	}

	squareSix.onclick = function(){
		document.getElementById("square6").innerHTML="<i class='fa fa-pied-piper-alt fa-5x fa-pulse'></i>";
	}

	squareSeven.onclick = function(){
		document.getElementById("square7").innerHTML="<i class='fa fa-pagelines fa-5x fa-pulse'></i>";
	}
	squareEight.onclick = function(){
		document.getElementById("square8").innerHTML="<i class='fa fa-paw fa-5x fa-pulse'></i>";
	}
	squareNine.onclick = function(){
		document.getElementById("square9").innerHTML="<i class='fa fa-rocket fa-5x fa-pulse'></i>";
	}









// This allows you to determine whose turn it is
count = 1;
count % 2 == 0 // Player 1's turn;
count % 2 != 0 // Player 2's turn;

// This allows you to define the win conditions in an array, based on assigning numbers to each square in the grid.

win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
