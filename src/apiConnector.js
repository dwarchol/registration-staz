

function getAll(){
    var request = new XMLHttpRequest()
// Open a new connection, using the GET request on the URL endpoint
    request.open('GET', ``, false)
    request.send()
    return request.response; 
}