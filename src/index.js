// ES6
// import sdk from 'six-sdk'
// import Population from 'six-population-widget'

// SIX uses ES6 modules, so if we want the default exports within a CommonJS
// environment we need to extract the module.default property.
const sdk = window.sdk = require('six-sdk').default
const Population = require("six-population-widget").default

// token from the API or sdk._internal.authenticateWithCredentials(client_id, client_secret, function(token) {})
const token = 'OikKAfqHY2xpZW50SURCc2l4i2NyZWF0aW9uVGltZVwyMDE2LTEyLTE0VDE1OjQ2OjM0LjE4NSswMTowMPs=.a7dfd1b0f77e7ddb26eb281310b915a0c72754e4'

// create a SDK session
const session = sdk.connect(token)

// find an element to mount widget at
const target = document.getElementById('target')

// mount widget
Population(session, target, {populationId: "OMX_STOCKHOLM_LARGE_CAP_STOCKS"})
