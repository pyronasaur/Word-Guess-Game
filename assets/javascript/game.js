

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

        //iterate through chosen word 
        for(var i = 0; i < choiceArray.length; i++)
        {
            blanksArray.push("_ ");
            document.write("_ ");
        }
    }

    


setup();
//game.js end    
});