const socket = io ('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageContainer = document.getElementById('message-container')
const messageInput = document.getElementById('message-input')
const name = prompt ('What is your name?')

addMessage('You joined')
socket.emit('new-user', name)

socket.on('chat-message', data => {
  addMessage(`${data.name}: ${data.message}`)
})
socket.on('user-connected', name => {
  addMessage(`${name} connected`)
})
socket.on('user-disconnected', name => {
  addMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  addMessage(`You: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function addMessage (message) {
  const messageBlock = document.createElement('div')
  messageBlock.innerText = message
  messageContainer.append(messageBlock)
}
