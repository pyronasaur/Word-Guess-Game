

$(document).ready(function() {

    //array for possible hangman word choices
    var wordChoices = ["longword", "shortword"];

    //random word chosen to play
    var chosenWord;

    //array for word choice split into chars, may not be needed
    var choiceArray;

    //blank space array for holding blank spaces
    var blanksArray = new Array;

    //var to hold number of characters in the chosen hangman string array
    var charCount = 0;

    function setup(){
        //choose a word
        chosenWord = wordChoices[ Math.floor( Math.random() * wordChoices.length ) ];
        console.log("chosen word is: " + chosenWord);

        //turn word into an array of characters
        choiceArray = chosenWord.split('');
        console.log("chosen word split: " + choiceArray);

        //store char array size
        charCount = choiceArray.length;

        //register space to deliver blanks and letters
        var blankSpace = document.getElementById("wordContainer");

        //iterate through chosen word 
        for(var i = 0; i < choiceArray.length; i++)
        {
            blanksArray.push("_ ");
            blankSpace.innerHTML += ("_ ");
        }
    }
    
    //array with acceptable key presses
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    //variable to store key guess
    var keyPress;

    //get key press for the document and ignore non-alphabet selection
    document.onkeyup = function(event) {
        //console.log(event.key.toLowerCase());

        for(var i = 0; i < letters.length; i++)
        {
            var letter = letters[i];
            if(event.key === letter.toLowerCase()){
                keyPress = event.key;
                //console.log(letters[i]);
                //console.log(letter.toLowerCase());
                return;
            }
        }
    }



setup();
//game.js end    
});