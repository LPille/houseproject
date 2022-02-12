const port = process.env.PORT || 3000
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({"value1":2.3, "value2":22.4, "value3":121212996.5})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


