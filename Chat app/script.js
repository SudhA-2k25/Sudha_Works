// Function to handle sending a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    const chatMessages = document.querySelector('.chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    messageInput.value = '';

    // Triggering smooth animation on message send
    setTimeout(() => {
      messageElement.style.opacity = '1';
      messageElement.style.transform = 'translateY(0)';
    }, 100);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Event listener
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

// Function to handle sending a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    const chatMessages = document.querySelector('.chat-messages');
    const userMessageElement = createUserMessageElement(message);
    chatMessages.appendChild(userMessageElement);
    messageInput.value = '';

    // Triggering smooth animation on user message send
    animateMessage(userMessageElement);

    // Handle AI interaction
    handleAIResponse(message);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Function to create a user message element
function createUserMessageElement(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'user-message');
  messageElement.textContent = message;
  return messageElement;
}

// Function to create a bot message element
function createBotMessageElement(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'bot-message');
  messageElement.textContent = message;
  return messageElement;
}

// Function to animate message
function animateMessage(messageElement) {
  messageElement.style.opacity = '0';
  messageElement.style.transform = 'translateY(20px)';
  setTimeout(() => {
    messageElement.style.opacity = '1';
    messageElement.style.transform = 'translateY(0)';
  }, 100);
}

// Function to handle AI responses
function handleAIResponse(userMessage) {
  const botResponse = getBotResponse(userMessage);
  const chatMessages = document.querySelector('.chat-messages');
  const botMessageElement = createBotMessageElement(botResponse);
  
  // Append bot message to the chat window
  chatMessages.appendChild(botMessageElement);
  
  // Trigger animation for bot response
  animateMessage(botMessageElement);
  
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to get predefined bot response based on user input
function getBotResponse(userMessage) {
  const lowerCaseMessage = userMessage.toLowerCase();
  const currentDate = new Date().toDateString();
  const currentTime = new Date().toLocaleTimeString();

  if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
    return "How can I help you today?";
  } else if (lowerCaseMessage.includes('date')) {
    return `Today's date is ${currentDate}.`;
  } else if (lowerCaseMessage.includes('time')) {
    return `The current time is ${currentTime}.`;
  } else if (lowerCaseMessage.includes('bye')) {
    return "Goodbye!";
  } else {
    return "I'm not sure how to respond to that.";
  }
}

// Event listener for sending messages
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

// Your existing JavaScript code

// Function to handle sending a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    const chatMessages = document.querySelector('.chat-messages');
    const userMessageElement = createUserMessageElement(message);
    chatMessages.appendChild(userMessageElement);
    messageInput.value = '';

    // Triggering smooth animation on user message send
    animateMessage(userMessageElement);

    // Handle AI interaction
    handleAIResponse(message);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Function to create a user message element
function createUserMessageElement(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'user-message');
  messageElement.textContent = message;
  return messageElement;
}

// Function to create a bot message element
function createBotMessageElement(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'bot-message');
  messageElement.textContent = message;
  return messageElement;
}

// Function to animate message
function animateMessage(messageElement) {
  messageElement.style.opacity = '0';
  messageElement.style.transform = 'translateY(20px)';
  setTimeout(() => {
    messageElement.style.opacity = '1';
    messageElement.style.transform = 'translateY(0)';
  }, 100);
}

// Your existing JavaScript code

// Function to handle sending a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    const chatMessages = document.querySelector('.chat-messages');
    const userMessageElement = createUserMessageElement(message);
    chatMessages.appendChild(userMessageElement);
    messageInput.value = '';

    // Triggering smooth animation on user message send
    animateMessage(userMessageElement);

    // Handle AI interaction
    handleAIResponse(message);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Function to create a user message element
function createUserMessageElement(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'user-message');
  messageElement.textContent = message;
  return messageElement;
}

// Function to create a bot message element
function createBotMessageElement(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'bot-message');
  messageElement.textContent = message;
  return messageElement;
}

// Function to animate message
function animateMessage(messageElement) {
  messageElement.style.opacity = '0';
  messageElement.style.transform = 'translateY(20px)';
  setTimeout(() => {
    messageElement.style.opacity = '1';
    messageElement.style.transform = 'translateY(0)';
  }, 100);
}

// Function to handle AI responses
function handleAIResponse(userMessage) {
  const botResponse = getBotResponse(userMessage);
  const chatMessages = document.querySelector('.chat-messages');
  const botMessageElement = createBotMessageElement(botResponse);
  
  // Append bot message to the chat window
  chatMessages.appendChild(botMessageElement);
  
  // Trigger animation for bot response
  animateMessage(botMessageElement);
  
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to get predefined bot response based on user input
function getBotResponse(userMessage) {
  // Your existing bot response logic
  // Add code here to handle specific responses like date, time, etc.
}

// Event listener for sending messages
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

// Your existing JavaScript code

// ...

// Function to handle AI responses
function handleAIResponse(userMessage) {
  const botResponse = getBotResponse(userMessage);
  const chatMessages = document.querySelector('.chat-messages');
  const botMessageElement = createBotMessageElement(botResponse);
  
  // Append bot message to the chat window
  chatMessages.appendChild(botMessageElement);
  
  // Trigger animation for bot response
  animateMessage(botMessageElement);
  
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to get predefined bot response based on user input
function getBotResponse(userMessage) {
  const lowerCaseMessage = userMessage.toLowerCase();
  const currentDate = new Date().toDateString();
  const currentTime = new Date().toLocaleTimeString();

  if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
    return "How can I help you today?";
  } else if (lowerCaseMessage.includes('date')) {
    return `Today's date is ${currentDate}.`;
  } else if (lowerCaseMessage.includes('time')) {
    return `The current time is ${currentTime}.`;
  } else if (lowerCaseMessage.includes('bye')) {
    return "Goodbye!";
  } else {
    return "I'm not sure how to respond to that.";
  }
}

// Event listener for sending messages
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});
