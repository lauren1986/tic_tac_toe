// This is the Javascript required for the simple game logic behind Tic Tac Toe.

// This allows you to determine who's turn it is
count = 1;
count % 2 == 0 // Player 1's turn;
count % 2 != 0 // Player 2's turn;

// This allows you to define the win conditions in an array, based on assigning numbers to each square in the grid.

win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
