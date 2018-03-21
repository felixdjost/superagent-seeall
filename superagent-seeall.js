module.exports = function settings (superagent, reqLogger, respLogger) {
  console.log('==================== superagent log ======================')
  let request = superagent
  // monkey-patch superagent to dump all http calls
  let reqProto = request.Request.prototype
  let oldEnd = reqProto.end
  let oldEndResp = reqProto.callback
  reqProto.end = function (cb) {
    let debugreq = this.toJSON()
    if (reqLogger) {
      reqLogger(debugreq)
    } else {
      let h = formatHeaders(debugreq.headers)
      console.log(':::::: superagent request :::: \n' + h + '\n' + JSON.stringify(debugreq, null, 2))
    }
    oldEnd.call(this, cb)
  }

  reqProto.callback = function (err, res) {
    if (err) throw err
    let isjson = /^application\/json/.test(res.headers['content-type'])
    if (respLogger) {
      respLogger(res)
    } else {
      let h = formatHeaders(res.headers)
      console.log(':::::: superagent response :::: ' + res.statusCode + '\n' + h + '\n' + (isjson === true ? JSON.stringify(res.body, null, 2) : res.text))
    }
    oldEndResp.call(this, err, res)
  }
  // end monkey-patch
  return superagent

  function formatHeaders (p) {
    let hdrs = ''
    for (var key in p) {
      if (p.hasOwnProperty(key)) {
        hdrs += 'header: ' + key + ' -> ' + p[key] + '\n'
      }
    }
    return hdrs
  }
}
