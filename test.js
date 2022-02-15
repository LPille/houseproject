const Alexa = require('ask-sdk-core')
const express = require('express')
const {ExpressAdapter} = require ("ask-sdk-express-adapter");
const launchRequest = require('./launchRequest')


const skill = Alexa.SkillBuilders.custom(
).addRequestHandlers(
    launchRequest
).create();


const app = express()

const adapter = new ExpressAdapter(skill, true, true);

app.post('/', adapter.getRequestHandlers());

app.listen(3000);

