const {
    getRequestType,
    getIntentName,
    getSlotValue,
    getDialogState,
} = require('ask-sdk-core');

const launchRequest = {
    canHandle(handlerInput){
        //let number = handlerInput.requestEnvelope.request.intent.slots.number.value;
        console.log("Handler Input ");
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput){
        let myString = JSON.stringify(handlerInput.requestEnvelope);
         //console.log("Response Builder " + myString.toString() + " NUMMER: ");
        //let number = getSlotValue(handlerInput.requestEnvelope, 'number')
        //console.log("Response Builder " + myString.toString() + " NUMMER: " +number);
        console.log("Response Builder ");

        return handlerInput.responseBuilder
            .speak("Hallo Leon")
            .getResponse();
    }
}

module.exports = launchRequest;