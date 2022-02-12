const express = require('express')
const app = express()
const port = 3000
const request = require('request');

app.get('/', (req, res) => {
    res.json({"value1":2.3, "value2":22.4, "value3":121212996.5})
})

app.get('/sendData', (req, res) => {
    res.send('Hello World!')
    test();
})
const myJSONObject = {"1":2, "2":22, "3":121212996};

//Tetst
function test(){
    request({
        url: "192.168.178.199/custom",
        method: "POST",
        json: true,   // <--Very important!!!
        body: myJSONObject
    }, function (error, response, body){
        console.log(response);
    });
}


/*
request.post(
    '192.168.178.199',
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
