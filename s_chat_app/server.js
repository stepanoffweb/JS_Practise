const io = require('socket.io')(3000)
const users = {}
  // let count = 0

io.on('connection', socket => {
  // console.log('New User', count++);
  // socket.emit('chat-message', 'Hello, friend!')
  socket.on('new-user', name => {
    // console.log('socket ID ', socket.id)// socket ID  Ed_8dzEf0ifmsAL_AAAC | socket ID  vnXtXcfRKkESaeGDAAAD

    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', {message, name: users[socket.id]})
  })
    socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })

})
