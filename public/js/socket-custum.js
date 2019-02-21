var socket = io();
socket.on('connect', function(){
    console.log("Conectado al Servidor")
})

socket.on('disconnect', function(){
    console.log("Perdimos conexión con el servidor")
})

// hablandole al servidor 
socket.emit('sendMessage', {
    name: "Leydy", 
    mensaje: "HOLA"
}, function(resp){
    console.log("respuesta",resp)
})

//Escuchando al servidor
socket.on('sendMessage', function(mensaje){
    console.log("Servidor", mensaje)
})