const wordToGuess = "Developer"
var guessesLeft = 6
var letters = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
var guessed = [ '_', '_', '_', '_', '_', '_', '_', '_', '_']

//for ( var i = 0; wordToGuess.length - 1; i++) {
//    letters[i] = wordToGuess.slice(i,1)
//}

function guess( userGuess ) {
    if (userGuess.length > 1){
        
    }
    var output = '';
    for (var i = 0; i < letters.length; i++) {
        if ( userGuess === letters[i] ) {
            guessed[i] = letters[i];
        }
        output = output + guessed[i] + ' ';
    }
    guessesLeft = guessesLeft - 1;
    output = output + ' ' + guessesLeft + ' guesses left';
    return output
}

