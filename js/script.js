
const socket = io();

let el;

socket.on('time', (timeString) => {
  el = document.getElementById('server-time');
  el.innerHTML = 'Server time: ' + timeString;
}); 

socket.on('init', HandleInit);
socket.on('distributeBoard', RecieveBoard);
socket.on()

var gameContainer = document.getElementById("game-container");

var canv = document.createElement("canvas");
canv.id = "gameCanvas"

gameContainer.appendChild(canv)

var wordleRunning = false;


var boardSize = 4


var canvas = document.getElementById("gameCanvas");
canvas.height = 500;
canvas.width = 900;

var c = canvas.getContext("2d");
c.font = "30px Arial";

var ticking = false
var timerCount;




function HandleInit(msg){
    console.log(msg);

}

function HandleBoardGeneration4(){

    boardSize = 4;

    console.log('genbo')
    var board = CreateBoard(boardSize)
    // DrawBoard(board, boardSize);

    socket.emit('generateBoard', board)

}

function HandleBoardGeneration5(){

    boardSize = 5;

    console.log('genbo')
    var board = CreateBoard(boardSize)
    // DrawBoard(board, boardSize);

    socket.emit('generateBoard', board)

}

function RecieveBoard(board){
    if (wordleRunning == false){
        boardSize = board.length
        DrawBoard(board, boardSize);

        timerCount = 180

        if (ticking == false){

            TickCycle(timerCount)
        
        }
    }
}

function HandleGetBoard(){

    socket.emit('requestBoard')

}

function InitWordle(){

    if (wordleRunning == false){
    WordleSetUp(6);
    }
}