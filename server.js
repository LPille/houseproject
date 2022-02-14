const port = process.env.PORT || 3000
const express = require('express')

const app = express()

let h_five = ['51','52','53','54']
let h_one = ['65','64','63']
let h_two = ["58","57","56","55"]
let h_three = ['66','67','68','69']
let h_ones = ['65','64','63','62']
let h_four = ['73','74','75','76']
const h_six = ['87','86','85','84','83']
const h_eight = ['80','79','78','77']
const h_seven = ['88','89','90','91','92']
const h_twelf = ['94','95','96','97','98']
const h_ten = ['109','108','107','106']
const h_nine = ['106','105','104','103']
const h_eleven = ['49','50','51']

let timeString = ""
let timeArray = [""]


function fuenfMinutenTakt(min, h){
    // Ausgabe von Fuenf, Zehn, Viertel, Zwanzig und halb
    if(min >= 5 && min <= 9 || min >= 25 && min <= 29 || min >= 35 && min <=39 || min >= 55 && min <= 59){
        timeArray.push('7','8','9','10') //Fuenf
        timeString += " fuenf " //Fuenf
    } else if (min >= 10 && min <= 14 || min >= 50 && min <= 54) {
        timeArray.push('21','20','19','18') //Zehn
        timeString += " zehn " //zehn
    } else if (min >= 15 && min <= 19 || min >= 45 && min <= 49){
        timeArray.push('26','27','28','29','30','31','32') //viertel
        timeString += " viertel " //viertel
    } else if (min >= 20 && min <= 25 || min >= 40 && min <= 44){
        timeArray.push('11','12','13','14','15','16') //zwanzig
        timeString += " zwanzig "
    }
    if (min <= 4){
        timeArray.push('99','100','101') //Uhr
        timeString += " Uhr " //Uhr
    }
    if (min >= 25 && min <= 39 ){
        timeString += " halb " //Uhr
        timeArray.push('44','45','46','47') //halb
    }
}


function vorOderNachAusgabe(min,h){
    if (min >= 5 && min <= 24 || min >= 35 && min <= 39){
        timeString += "nach "
        timeArray.push('34','35','36','33') //nach
    } else if (min >= 25 && min <= 29 || min >= 40 && min <= 59){
        timeString += " vor  "
        timeArray.push('43','42','41') //vor
    }
}

function getHours(min, h) {
    if (min > 24) {
        h = h + 1
    }
    if (h > 12){
        h -= 12
    }

    switch (h) {
        case 1:
            if (min <= 4 ){// Wenn min unter 5 dann "ein" statt "eins" anzeigen
                timeString += " ein " //Fuenf
                timeArray = timeArray.concat(h_one) //ein
            } else {
                timeString += " eins " //Fuenf
                timeArray = timeArray.concat(h_ones) //eins
            }
            break;
        case 2:
            timeString += " zwei + " //Fuenf
            timeString +=  h_two //Fuenf
            timeArray = timeArray.concat(h_two) //Uhr
            break;
        case 3:
            timeString += " drei " //Fuenf
            timeArray = timeArray.concat(h_three) //Uhr
            break;
        case 4:
            timeString += " vier " //Fuenf
            timeArray = timeArray.concat(h_four) //Uhr
            break;
        case 5:
            timeString += " fuenf " //Fuenf
            timeArray = timeArray.concat(h_five) //Uhr
            break;
        case 6:
            timeString += " sechs " //Fuenf
            timeArray = timeArray.concat(h_six) //Uhr
            break;
        case 7:
            timeString += " sieben " //Fuenf
            timeArray = timeArray.push(h_seven) //Uhr
            break;
        case 8:
            timeString += " acht " //Fuenf
            timeArray = timeArray.concat(h_eight) //Uhr
            break;
        case 9:
            timeString += " neun " //Fuenf
            timeArray = timeArray.concat(h_nine) //Uhr
            break;
        case 10:
            timeString += " zehn " //Fuenf
            timeArray = timeArray.push(h_ten) //Uhr
            break;
        case 11:
            timeArray = timeArray.concat(h_eleven) //Uhr
            break;
        case 12:
            timeString += " zwoelf " //Fuenf
            timeArray = timeArray.concat(h_twelf) //Uhr
            break;
    }
}


function getTimeLED(){

    timeArray = ["0","1","3","4"] //Time Array erstellen mit Es Ist LED#s
    const time = new Date()
    let min = time.getMinutes();
    let h = time.getHours();
    timeString = "Es ist "

    fuenfMinutenTakt(min,h)
    vorOderNachAusgabe(min,h)
    getHours(min,h)
    console.log("HOUR: " + h +" Minuten "+ min)
    console.log("TimeArray: " + timeArray)
    console.log("ZEIT IN STRING: " + timeString)
}



app.get('/', (req, res) => {
    res.json({"value1":2.3, "value2":22.4, "value3":121212996.5})
})


app.get('/getTime', (req, res) => {
    getTimeLED()
    res.json({timeArray})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


