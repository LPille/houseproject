const fields = require("./fields");

function splitCountdown(num){
    const digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    digits.reverse();
    return digits.reverse()
}

function getSmallFields(s,num){
    if(s === 0){
        return fields.smallNumbersLeftArr[num]
    } else {
        return fields.smallNumbersRightArr[num]
    }
}

function getBigFields(num){
    return fields.bigNumbersArr[num]
}


function buildTimerPackage(num){
    let timerArray = []
    let digits = splitCountdown(num)
    let me = digits[0]
    let mr = digits[1]

    for(let i = me; i >= 1; i--){
        for(let j = mr; j >= 0; j--){
            let arrObj = getSmallFields(0,i) // 0 ist linke seite
            let arrObj2 = getSmallFields(1,j) //1 ist rechte Seite
            let arrObj3 = arrObj.concat(arrObj2)
            console.log(i+""+j+" = " + arrObj3)
            timerArray.push(arrObj3)
        }
        mr = 9;
    }

    for(let h = 9; h>=0; h--){
        let arrObj = getBigFields(h)
        console.log(h+" = " + arrObj)
        timerArray.push(arrObj)
    }
    return timerArray
}


module.exports = {
    buildTimerPackage: buildTimerPackage,
};
