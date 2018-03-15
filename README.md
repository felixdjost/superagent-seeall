# superagent-seeall
logs request and response details (http headers and body) of your superagent calls (with a one-line monkey patching)

## installation

```
npm install superagent-seeall
```

## usage

simply wrap superagent by using
```js
const request = require('superagent-seeall')(require('superagent'))
```
and use superagent without any modifications as usual:
```
request.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2').end((err, res) => {
  console.log('done')
})
```

## License

MIT

