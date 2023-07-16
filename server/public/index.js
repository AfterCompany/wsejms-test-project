import io from 'socket.io';

const socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

const messages = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  socket.emit('message', message);
});

socket.on('message', (message) => {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messages.appendChild(messageElement);
});
