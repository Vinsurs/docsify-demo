/// [demo]
const result = fetch(`${URL}:${PORT}`)
.then(function (response) {
return response.json()
})
.then(function (myJson) {
console.log(JSON.stringify(myJson))
})
/// [demo]
console.log('这是其他代码')