(function() {

	angular
		.module('rpsApp')
		.controller('rpsCtrl', rpsCtrl);

		rpsCtrl.$inject = ['$scope', '$firebaseArray', '$firebaseObject'];

		function rpsCtrl($scope, $firebaseArray, $firebaseObject) {

			var rps = this;

			rps.player1Moves = ['rock', 'paper', 'scissors'];
			rps.player2Moves = ['rock', 'paper', 'scissors'];

			// methods
			rps.player1Move = player1Move;
			rps.player2Move = player2Move;
			rps.resetGame = resetGame;

			rps.player1win = false;
			rps.player2win = false;
			rps.tie = false;
			rps.gameOver = false;

			function player1Move(moves) {
				if (!rps.gameOver) {
					rps.player1 = moves;
					console.log(rps.player1);
					checkMoves();
				}
			}

			function player2Move(moves) {
				if (!rps.gameOver) {
					rps.player2 = moves;
					console.log(rps.player2);
					checkMoves();
				}
			}

			function checkMoves() {
				if (rps.player1 === null || rps.player2 === null) {
					// do nothing
				} else if (rps.player1 && rps.player2) {
					determineOutcome();
				}
			}

			function resetGame() {
				rps.player1 = null;
				rps.player2 = null;
				rps.tie = false;
				rps.player1win = false;
				rps.player2win = false;
				rps.gameOver = false;
			}

			function determineOutcome() {
				if (rps.player1 == rps.player2) {
					rps.tie = true;
					rps.gameOver = true;
					return "Tie Game!";
				} else if (rps.player1 == "paper" && rps.player2 == "rock") {
					console.log('1');
					rps.player1win = true;
					rps.gameOver = true;
					return "Player 1 Wins";
				} else if (rps.player1 == "rock" && rps.player2 == "scissors") {
					console.log('1');
					rps.player1win = true;
					rps.gameOver = true;
					return "Player 1 Wins";
				} else if (rps.player1 == "scissors" && rps.player2 == "paper") {
					console.log('1');
					rps.player1win = true;		
					rps.gameOver = true;
					return "Player 1 Wins";
				} else {
					console.log('2');
					rps.player2win = true;	
					rps.gameOver = true;
					return "Player 2 Wins";
				}
			}

		}

})();