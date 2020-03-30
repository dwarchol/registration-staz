function getAll(){
    var request = new XMLHttpRequest()
// Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `'localhost:5000/showRegistered`, false)
    request.send()
    return request.response; 
}