const fields = require('./fields');

let timeArray = []

function minutesFields(min){
    // Ausgabe von Fuenf, Zehn, Viertel, Zwanzig und halb
    if(min >= 5 && min <= 9 || min >= 25 && min <= 29 || min >= 35 && min <=39 || min >= 55 && min <= 59){
        timeArray = timeArray.concat(fields.m_five) //Uhr
    } else if (min >= 10 && min <= 14 || min >= 50 && min <= 54) {
        timeArray = timeArray.concat(fields.m_ten) //Uhr
    } else if (min >= 15 && min <= 19 || min >= 45 && min <= 49){
        timeArray = timeArray.concat(fields._quarter) //Uhr
    } else if (min >= 20 && min <= 25 || min >= 40 && min <= 44){
        timeArray = timeArray.concat(fields.m_twenty) //Uhr
    }
    if (min <= 4){
        timeArray = timeArray.concat(fields.clock) //Uhr
    }
    if (min >= 25 && min <= 39 ){
        timeArray = timeArray.concat(fields.half) //Uhr
    }
}


function beforeOrAfterFields(min){
    if (min >= 5 && min <= 24 || min >= 35 && min <= 39){
        timeArray = timeArray.concat(fields.after) //Uhr
    } else if (min >= 25 && min <= 29 || min >= 40 && min <= 59){
        timeArray = timeArray.concat(fields.before) //Uhr
    }
}


function hourFields(min, h) {
    if (min > 24) {
        h = h + 1
    }
    if (h > 12){
        h -= 12
    }
    switch (h) {
        case 0:
            timeArray = timeArray.concat(fields.h_twelve) //Uhr
            break;
        case 1:
            if (min <= 4 ){// Wenn min unter 5 dann "ein" statt "eins" anzeigen
                timeArray = timeArray.concat(fields.h_one) //ein
            } else {
                timeArray = timeArray.concat(fields.h_ones) //eins
            }
            break;
        case 2:
            timeArray = timeArray.concat(fields.h_two) //Uhr
            break;
        case 3:
            timeArray = timeArray.concat(fields.h_three) //Uhr
            break;
        case 4:
            timeArray = timeArray.concat(fields.h_four) //Uhr
            break;
        case 5:
            timeArray = timeArray.concat(fields.h_five) //Uhr
            break;
        case 6:
            timeArray = timeArray.concat(fields.h_six) //Uhr
            break;
        case 7:
            timeArray = timeArray.concat(fields.h_seven) //Uhr
            break;
        case 8:
            timeArray = timeArray.concat(fields.h_eight) //Uhr
            break;
        case 9:
            timeArray = timeArray.concat(fields.h_nine) //Uhr
            break;
        case 10:
            timeArray = timeArray.concat(fields.h_ten) //Uhr
            break;
        case 11:
            timeArray = timeArray.concat(fields.h_eleven) //Uhr
            break;
        case 12:
            timeArray = timeArray.concat(fields.h_twelve) //Uhr
            break;
    }
}

function getTimeFields(){
    timeArray = []
    const time = new Date()
    let min = time.getMinutes();
    let h = time.getHours();

    timeArray = timeArray.concat(fields.es_ist) //es ist

    minutesFields(min)
    beforeOrAfterFields(min)
    hourFields(min,h)

    //console.log("Time: " + h + ":" + min)
    //console.log("TimeArray: " + timeArray)
    return timeArray
}


module.exports = {
    getTimeFields: getTimeFields,
};
