
const isDebug = true
const request = isDebug ? require('./superagent-seeall')(require('superagent')) : require('superagent')
// or provide customLoggers, see test-customLogger.js
// const request = require('./superagent-seeall')(require('superagent'), customReqLogger, customRespLogger)
function logDemo () {
  request.put('https://postman-echo.com/put?foo1=bar1&foo2=bar2').send('this is the body').end((err, res) => {
    if (err) throw err
    console.log('done')
  })
}

logDemo()
