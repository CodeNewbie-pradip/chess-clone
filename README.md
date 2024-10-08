# chess-clone
using the Node.js ,Express.js, socket.io, chess engine
1> Node.js - Server part
2> Express.js - Routing, taking data and connect user
3> socket.io - real time data, socket event handling

# client side variable
socket => connection to the server using socket.io

chess => An instance of the chess class

boardElement => DOM element with the ID "chessboard"

draggedPiece => The piece being dragged during a Drag-And-Drop Action

sourceSquare => stores the Starting square of the dragged piece

player Role => Holds the role of the player(Eg., "W" for white, "B" for black or NULL for spectactor)