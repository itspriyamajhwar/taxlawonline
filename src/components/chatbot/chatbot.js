import React, { useState, useEffect } from 'react';
import './style.css'; // For styling

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { user: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to control the chat popup visibility

  // Automatically open the chatbot as a popup after the user visits the website
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Delay of 3 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  // Handle sending messages
  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessage = { user: 'user', text: inputMessage };
    setMessages([...messages, newMessage]);

    // Call the AI service
    const botResponse = await getBotResponse(inputMessage);

    // Update the messages array with the bot's response
    setMessages((prevMessages) => [
      ...prevMessages,
      { user: 'bot', text: botResponse },
    ]);

    // Clear the input field
    setInputMessage('');
  };

  // Handle changes in the input field
  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  // Toggle the chat popup open/closed
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Function to fetch AI response using your API key
  const getBotResponse = async (userMessage) => {
    try {
      const response = await fetch(
        `https://api.agimani.ai/v1/chat?key=AIzaSyBI360CYS8Atz2pFrTlsND1jktB24bALC0`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: userMessage,
            max_tokens: 150, // Adjust based on your requirements
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();
      return data.response || 'Sorry, I could not process that.';
    } catch (error) {
      console.error('Error fetching bot response:', error);
      return 'Sorry, I am unable to assist at the moment.';
    }
  };

  return (
    <>
      {/* Floating Chatbot Icon */}
      <div className="chatbot-icon" onClick={toggleChat}>
        <img 
          src="https://cdn4.iconfinder.com/data/icons/chatbot-robot-1/100/chatbot_01_01_03_bot_chat_robot_app_artificial_chatbot_dialog-1024.png" 
          alt="Chat Icon" 
        />
      </div>

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>LegalEase</h3>
            <button onClick={toggleChat} className="close-chat">X</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.user}`}>
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={handleChange}
              placeholder="Ask a question or request help..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
