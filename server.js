const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const express = require('express')

const server = express()
    // .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
    .use(express.static(__dirname ))


    .listen(PORT, () => console.log(`Listening on ${PORT}`));






const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        credentials: true
    },
    allowEIO3: true
})

var savedBoard;


io.on('connection', client => {




    client.emit('init', {data: 'hello world'})

    client.on('generateBoard', HandleBoardReception)


     
    function HandleBoardReception(board){
        savedBoard = board
        io.sockets.emit('distributeBoard', board)
    
    }

    client.on('requestBoard', HandleBoardRequest)

    function HandleBoardRequest(){
        client.emit('distributeBoard', savedBoard)
    }

});





// io.listen(PORT);