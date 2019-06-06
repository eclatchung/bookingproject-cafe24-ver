module.exports = function(io){
    var room;
    io.on('connect',function(socket){
        console.log('socket.io is on,,,,,,,,')
        socket.emit('in',{msg : 'your in'});
        socket.on('store_id',function(data){
            socket.leave(room);
            room = data.store_id;
            socket.join(room);
        })
    });


    io.on('disconnect',function(socket){
        console.log('socket.io is disconnect')
    })

}