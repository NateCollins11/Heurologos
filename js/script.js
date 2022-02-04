
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



function HandleInit(msg){
    console.log(msg);

}

function HandleBoardGeneration(){

    console.log('genbo')
    var board = CreateBoard(boardSize)
    // DrawBoard(board, boardSize);

    socket.emit('generateBoard', board)

}

function RecieveBoard(board){
    DrawBoard(board, boardSize);

}

function HandleGetBoard(){

    socket.emit('requestBoard')

}