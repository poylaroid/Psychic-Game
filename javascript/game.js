// Alphabet letters that the computer can pick from
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Set variables for wins losses and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// array to hold each guess
var guessesSoFar = [];
// User's picks by pressing a key
var userGuess = null;
// Have computer pick a letter and store it in letterToBeGuessed
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

document.onkeyup = function(event) {

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode)