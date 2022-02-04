function CreateBoard(boardSize){

    board = [];
    // console.log(cubeLetters)

    cubesCopy = [...cubeLetters]
    cubes = randomOrder(cubesCopy);
    // console.log(cubes);
    for(let rowIndex = 0; rowIndex < boardSize; rowIndex++){
        row = [];
        
        for(let tile = 0; tile < boardSize; tile ++){
            cubeIndex = (rowIndex * boardSize + tile);

            
            randomCubeSide = (Math.floor(Math.random() * 6));
            // console.log(cubeIndex, randomCubeSide);
            cube = cubes[cubeIndex];
            // console.log(cube)
            letter = cube[0][randomCubeSide];
            // console.log(letter);
            
            row.push(letter);
        }

        board.push(row);


    }
    return(board)


}


function randomOrder(cubeList){

    randomizedList = []

    while(cubeList.length > 0){
        randomIndex = Math.floor(Math.random() * cubeList.length)
        // console.log(cubeList.length, randomIndex)
        randomizedList.push(cubeList.splice(randomIndex, 1))

        



    }

// console.log(randomizedList);

return(randomizedList);


}

function DrawBoard(board, boardSize){
    var canvas = document.getElementById("gameCanvas");
    canvas.height = 500;
    canvas.width = 900;

    var c = canvas.getContext("2d");
    c.font = "30px Arial";

    for (let y = 0; y < boardSize; y ++){

        for (let x = 0; x < boardSize; x ++){

            c.fillText(board[y][x], 50 * (x + 7), 50 * (y + 4));

        }

    }


}



const boardSize = 4

var board = CreateBoard(boardSize);
DrawBoard(board, boardSize);