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

# fuctions client side
Render Board
handleMove
GetPieceUnicode(design make on the help of the function)

# socket client side 
socketOn("playerRole")
socketOn("Spectator")
socketOn("BoardState")
socketOn("Move")

# SERVER JS CODE

- Import: express, http, socket.io, chess.js

- Create Express app instance
- Initialize HTTP server with Express
- Instantiate Socket.io on HTTP server

- Create Chess object instance (chess.js)

- Initialize:
    - Players object: track socket IDs, roles (white/black)
    - CurrentPlayer: track current turn

- Configure Express app:
    - Use EJS templating engine
    - Serve static files from 'public' directory

- Define route for root URL
- Render EJS template "index"
- Title: "Custom Chess Game"

- Socket.io handles connection event
- Callback executed on client connect
- Server assigns role based on availability:
    - If slots empty:
        - Assign role (white/black)
        - Inform player
    - If slots full:
        - Designate as spectator

- Client connection:
    - Assign role based on game state:
        - If no white player, assign white role
        - If no black player, assign black role
        - Emit "playerRole" event with assigned role
        - If both slots filled, designate as spectator
        - Emit "spectatorRole" event
    - Send initial board state using FEN notation
f
- Client disconnection:
    - Remove assigned role from players object

- Listen for "move" events:
    - Validate correct player's turn
    - If valid:
        - Update game state
        - Broadcast move via "move" event
        - Send updated board state via "boardState" event
    - If invalid:
        - Log error message

- Ensure smooth gameplay and real-time updates for all connected clients.