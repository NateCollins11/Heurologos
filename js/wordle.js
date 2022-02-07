// const { listen } = require("express/lib/application");

function WordleSetUp(wordLength){

    wordleRunning = true;

    var word = 'farts';

    
    var currentLine = 0;

    var previousGuesses = []

    var currentGuess = '';

    drawWordle(currentLine, currentGuess, previousGuesses);

    document.addEventListener('keydown', logKey);

    function logKey(e){

        // console.log(e.key);

        if ('abcdefghijklmnopqrstuvwxyz'.includes(e.key)){
            if (currentGuess.length < 5){
                currentGuess = currentGuess + e.key;
            
                // console.log(currentGuess);
            }
        }
        if (e.key == 'Backspace'){
            currentGuess = currentGuess.slice(0, -1);
            // console.log(currentGuess);
        }

        if (e.key == 'Enter'){
            
            if (currentGuess.length == 5 && IsWord(currentGuess)){

            
            HandleSubmitGuess(currentGuess)
            }


        }

        drawWordle(currentLine, currentGuess, previousGuesses);
    }

    function HandleSubmitGuess(){

        previousGuesses.push(currentGuess)
        currentLine ++;
        currentGuess = '';
        console.log(currentLine)

    }



function drawWordle(currentLine, currentGuess, previousGuesses){

    c.clearRect(0, 0, canvas.width, canvas.height);
        
    for (let y = 0; y < 7; y ++){
        c.beginPath()
        c.moveTo(250, 70 * y+ 50);
        c.lineTo(650, 70 * y+ 50);
        c.stroke();
        
    }

    for (let x = 0; x < 6; x ++){
        c.beginPath()
        c.moveTo(250 + x * 80, 50);
        c.lineTo(250 + x * 80, 470);
        c.stroke();
        
    }

    
    c.font = "40px Arial";

    // draw current letters
    currentGuess.split('').forEach((char, index) => {
        
        c.fillText(char, 250 + 30 + 80 * index, 100 + 70 * currentLine)

    });

    //draw previousGuesses
    previousGuesses.forEach((guess, lineNumber) => {

        guess.split('').forEach((char, index) => {
        
            if (char == word.split('')[index]){
            
            c.fillStyle='#00AA00';
            c.fillRect(250 + index * 80, 50 + lineNumber * 70, 80, 70);
            }
            else if (word.includes(char)){
            
                c.fillStyle='#888800';
                c.fillRect(250 + index * 80, 50 + lineNumber * 70, 80, 70);
            }

            c.fillStyle = '#000000';

            c.fillText(char, 250 + 30 + 80 * index, 100 + 70 * lineNumber)
    
        });

    });


    // console.log(currentGuess);



}
}





function IsWord(guess){

    //this will check whether the word is a word
    return true;



}