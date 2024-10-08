const express=require("express");
const socket=require("socket.io");
const http=require("http");
const { Chess }=require("chess.js");
const path=require("path");

const app=express();
const server=http.createServer(app);
const io=socket(server);

const chess=new Chess();
let players={};
let currentPlayers="W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=>{
    res.render("hi there")
});

io.on("connection", function(uniqueSocket){
console.log("connection")
})
server.listen(5000, ()=>{
    console.log("server is running on port 5000");
})