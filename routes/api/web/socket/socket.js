module.exports = function(io){
    io.on('connection',function(socket){
        console.log('socket.io is on,,,,,,,,')
    });


    io.on('disconnect',function(socket){
        console.log('socket.io is disconnect')
    })
}