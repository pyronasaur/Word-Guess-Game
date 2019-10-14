

$(document).ready(function() {

    //array for possible hangman word choices
    var wordChoices = ["bumfuzzle", 
    "cattywampus", 
    "gardyloo",
    "taradiddle",
    "snickersnee",
    "widdershins",
    "collywobbles",
    "gubbins",
    "abibliophobia",
    "bumbershoot",
    "lollygag",
    "flibbertigibbet",
    "malarkey",
    "pandiculation",
    "sialoquent",
    "wabbit",
    "snollygoster",
    "erinaceous",
    "bibble",
    "impignorate",
    "nudiustertian",
    "quire",
    "ratoon",
    "yarborough",
    "xertz",
    "zoanthropy",
    "pauciloquent",
    "bloviate",
    "borborygm",
    "brouhaha",
    "absquatulate",
    "comeuppance",
    "donnybrook",
    "nincompoop"];

    //random word chosen to play
    var chosenWord;

    //array for word choice split into chars, may not be needed
    var choiceArray;

    //blank space array for holding blank spaces
    var blanksArray = new Array;

    //var to hold number of characters in the chosen hangman string array
    var charCount = 0;

    //register space to deliver blanks and letters
    var blankSpace = document.getElementById("wordContainer");

    //hold number of guesses
    var numOfGuesses;

    //array with acceptable key presses
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    //variable to store key guess
    var keyPress;

    //register space to deliver blanks and letters
    var winCounter = document.getElementById("winCounter");

    //starting winCount
    var winCount = 0;

    //register space to deliver blanks and letters
    var guessCounter = document.getElementById("guessCounter");

    //starting guessCount
    var guessCount = 7;


    
    function setup(){
        //choose a word
        chosenWord = wordChoices[ Math.floor( Math.random() * wordChoices.length ) ];
        console.log("chosen word is: " + chosenWord);

        //turn word into an array of characters
        choiceArray = chosenWord.split('');
        console.log("chosen word split: " + choiceArray);

        //store char array size
        charCount = choiceArray.length;
        guessCount = 7;
        winCounter.innerHTML = "Wins: " + winCount;
        guessCounter.innerHTML = "Guesses Left: " + guessCount;

        //clear blank spaces
        blanksArray = [];
        blankSpace.innerHTML = "";
        //iterate through chosen word and build blanks + empty space for player char visibility
        for(var i = 0; i < choiceArray.length; i++)
        {
            blanksArray.push("_ ");
            blankSpace.innerHTML += ("_ ");
        }
    }
    

    
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

                //capture existing keypresses and print to screen, maybe don't check them a second time
                //blankSpace.innerHTML += keyPress;
                break;
            }
        }

        //check keyPress against choiceArray and change blanksArray[i] to letter if correct, rewrite word display
        function play(){
            blankSpace.innerHTML = "";
            var gotit = false;
            for(var i = 0; i < choiceArray.length; i++){
                if(keyPress == choiceArray[i]){
                    blanksArray[i] = keyPress.toUpperCase() + " ";
                    blankSpace.innerHTML += blanksArray[i];
                    gotit = true;
                }
                else{
                    blankSpace.innerHTML += blanksArray[i];
                }                
            }
            if(!gotit) {
                guessCount--;
                guessCounter.innerHTML = "Guesses Left: " + guessCount;
                
                if(guessCount <= 0){
                    setup();
                }
            }
        }
        if(checkWin()){
            winCount++;
            winCounter.innerHTML = "Wins: " + winCount;
            setup();
        }
        else{
            play();
        }
    }


    //generate number of guesses and 
    //TODO --show count on screen
    function generateGuesses(){
        return (Math.ceil( Math.random() * 10) + 10);
    }

    function checkWin() {
        if (blankSpace.innerHTML.indexOf('_') > -1)
        {
            return false;
        }
        else {
            return true;
        }
    }

setup();
//game.js end    
});