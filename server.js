const timer = require('./utils/timer')
const port = process.env.PORT || 3000
const express = require('express');
const times = require('./utils/times');
const fields = require("./utils/fields");
const http = require("http")
const socketIo = require("socket.io")


const app = express()


//Routes
const index = require("./routes/index");
app.use(index);


const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
    socket.on("message", message => {
        socket.broadcast.emit("message", message)
    })
})

let makeTimeout = function (timeoutInMiliseconds) {
    return window.setTimeout(function() {
        // do stuff
    }, timeoutInMiliseconds)
};

let i = 0
let timerFields = []
let myInt = setInterval;

io.on("connection", (socket) => {
    console.log("New client connected");


    socket.on("stopTimer", (msg) => {
        console.log("Stoppe Timer")
        clearInterval(myInt)
    });

    socket.on("setTimer", (msg) => {
        console.log("Erstelle Timer: " + msg );
        timerFields = timer.buildTimerPackage(msg);
        i = 0;
        //if (interval) {
          //  clearInterval(interval);
        //}
        // Send to Everyone
       // sendFields(fields[0])

        myInt = setInterval(function () {
            sendFields()
        }, 1000);


        //let xyz = setInterval(sendFields,1000,fields[0]);
        //clearInterval(xyz);
        /*for(let i = fields.length; i > 0; i--) {

        setTimeout(sendFields,3000,fields[0])


        }*/

    });
    //interval = setInterval(() => getApiAndEmit(socket), 1000);


    socket.on("disconnect", () => {
        console.log("Client disconnected");
      //  clearInterval(interval);
    });
});

const sendFields = () =>{
    console.log("Send "+timerFields[i] );
    io.emit("sendTimerFields", timerFields[i])
    i++;
    if (i >= timerFields.length){
        clearInterval(myInt)
    }
}

//const getApiAndEmit = socket => {
  //  const response = new Date();
    // Emitting a new message. Will be consumed by the client
  //  socket.emit("FromAPI", response);
//};

server.listen(port, () => console.log(`Listening on port ${port}`));

//websockets(server);

