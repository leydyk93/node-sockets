
const {io} = require('../server')

//saber cuando se conecta un cliente 
io.on('connection', (client)=>{
    console.log('Usuario conectado');

    //enviarle información al cliente luego de una conexión exitosa
    client.emit('sendMessage', {
        user:"Admin", 
        message:"Bienvenido a la app"
    })

    client.on('disconnect', ()=>{
        console.log('usuario desconectado');
    })

    //Escuchando al cliente
    client.on('sendMessage', (message, callback)=>{

        client.broadcast.emit('sendMessage', message)
        // if(message.name){
        //     console.log('mensaje', message)
        //     callback({
        //         resp: 'todo salio bien'
        //     })
            
        // }else{
        //     callback({
        //         resp: 'todo salio mall!!!!'
        //     })
        // }
        
    })
})
