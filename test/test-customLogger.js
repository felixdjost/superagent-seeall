let test = require('tape')

let reqLogOutput = null
let respLogOutput = null
let customReqLogger = req => { reqLogOutput = req }
let customRespLogger = resp => { respLogOutput = resp }

const request = require('../superagent-seeall')(require('superagent'), customReqLogger, customRespLogger)

test('log must be written to custom logger', t => {
  request.get('http://www.google.ch?q=superagent-seeall').end((err, res) => {
    if (err) { t.fail() }
    // console.log("req:::"+reqLogOutput)
    // console.log("req method:::"+reqLogOutput.method)
    t.assert(reqLogOutput.method === 'GET', 'http method is get')
    t.assert(respLogOutput.statusCode === 200, 'statuscode is 200')
    t.end()
  })
})
