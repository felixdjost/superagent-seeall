
const isDebug = true
const request = isDebug ? require('./superagent-seeall')(require('superagent')) : require('superagent')
// or provide customLoggers, see test-customLogger.js
// const request = require('./superagent-seeall')(require('superagent'), customReqLogger, customRespLogger)

function logDemo () {
  request.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2').end((err, res) => {
    if (err) throw err
    console.log('done')
  })
}

logDemo()
