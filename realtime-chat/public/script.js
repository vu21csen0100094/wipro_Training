const socket = io();  // connect to server

const messages = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// When YOU send a message (outgoing bubble)
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {

        // Show outgoing bubble immediately
        const myMsg = document.createElement('div');
        myMsg.classList.add("outgoing");
        myMsg.textContent = message;
        messages.appendChild(myMsg);

        // Send message + sender ID to server
        socket.emit('message', {
            message: message,
            senderId: socket.id
        });

        messageInput.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
});

// Press Enter to send
messageInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") sendButton.click();
});

// When server sends a message (incoming bubble)
socket.on('message', (data) => {

    // Ignore if message belongs to the same sender
    if (data.senderId === socket.id) return;

    const msg = document.createElement('div');
    msg.classList.add("incoming");
    msg.textContent = data.message;
    messages.appendChild(msg);

    messages.scrollTop = messages.scrollHeight;
});
