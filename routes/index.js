const express = require("express");
const timer = require("../utils/timer");
const times = require("../utils/times");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ response: "I am alive" }).status(200);
});


router.get('/getTimerFields', (req, res) => {
    console.log("Starte Timer" + req.query.number)
    let timerObj = timer.buildTimerPackage(req.query.number)
    //let timerJSON = JSON.stringify(baueTimerPaket(req.query.number))
    res.json("Schicke Daten per WebSocket")
})

/*router.get('/', (req, res) => {
    res.json({"value1":2.3, "value2":22.4, "value3":121212996.5})
})*/

router.get('/getAlexaTimer', (req, res) => {
    console.log("Zahl: " + req.query.zahl)
    res.json()
})

router.get('/getTime', (req, res) => {
    let timeArray = times.getTimeFields();
    console.log("GET TIMES" + timeArray.toString())
    res.json(timeArray)
})


module.exports = router;