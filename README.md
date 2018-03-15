# superagent-seeall
logs request and response details (http headers and body) of your superagent calls (with a one-line monkey patching)

## installation

```
npm install superagent-seeall
```

## usage

see index.js - simply wrap superagent by using
```js
const request = require('superagent-seeall')(require('superagent'))
```
and use superagent without any modifications as usual:
```
function logDemo () {
  request.put('https://postman-echo.com/put?foo1=bar1&foo2=bar2').send('this is the body').end((err, res) => {
    if (err) throw err
    console.log('done')
  })
}
```

the output is as follows
```
==================== superagent log ======================
:::::: superagent request :::: 
{
  "method": "PUT",
  "url": "https://postman-echo.com/put?foo1=bar1&foo2=bar2",
  "data": "this is the body",
  "headers": {
    "user-agent": "node-superagent/3.8.2",
    "content-type": "application/x-www-form-urlencoded"
  }
}
:::::: superagent response :::: 200
{
  "args": {
    "foo1": "bar1",
    "foo2": "bar2"
  },
  "data": "",
  "files": {},
  "form": {
    "this is the body": ""
  },
  "headers": {
    "host": "postman-echo.com",
    "content-length": "16",
    "accept-encoding": "gzip, deflate",
    "content-type": "application/x-www-form-urlencoded",
    "user-agent": "node-superagent/3.8.2",
    "x-forwarded-port": "443",
    "x-forwarded-proto": "https"
  },
  "json": {
    "this is the body": ""
  },
  "url": "https://postman-echo.com/put?foo1=bar1&foo2=bar2"
}
done
```

## License

MIT

