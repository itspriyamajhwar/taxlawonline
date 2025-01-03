import React, { useState, useEffect } from 'react';
import './style.css'; // For styling

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { user: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to control the chat popup visibility
  const [conversationStep, setConversationStep] = useState(0); // Step in the conversation flow
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: '',
    problem: '',
  });

  // Automatically open the chatbot as a popup after the user visits the website
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Delay of 3 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  // Handle sending messages
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage = { user: 'user', text: inputMessage };
    setMessages((prev) => [...prev, newMessage]);

    // Process the input based on the current step
    processConversation(inputMessage);

    // Clear the input field
    setInputMessage('');
  };

  // Handle conversation flow
  const processConversation = (userInput) => {
    const updatedDetails = { ...userDetails };

    switch (conversationStep) {
      case 0:
        setMessages((prev) => [
          ...prev,
          { user: 'bot', text: 'May I know your name, please?' },
        ]);
        setConversationStep(1);
        break;
      case 1:
        updatedDetails.name = userInput;
        setUserDetails(updatedDetails);
        setMessages((prev) => [
          ...prev,
          { user: 'bot', text: 'Thank you! Can you provide your phone number?' },
        ]);
        setConversationStep(2);
        break;
      case 2:
        updatedDetails.phone = userInput;
        setUserDetails(updatedDetails);
        setMessages((prev) => [
          ...prev,
          { user: 'bot', text: 'Got it! Can you share your email address?' },
        ]);
        setConversationStep(3);
        break;
      case 3:
        updatedDetails.email = userInput;
        setUserDetails(updatedDetails);
        setMessages((prev) => [
          ...prev,
          { user: 'bot', text: 'Please describe your problem briefly.' },
        ]);
        setConversationStep(4);
        break;
      case 4:
        updatedDetails.problem = userInput;
        setUserDetails(updatedDetails);
        setMessages((prev) => [
          ...prev,
          {
            user: 'bot',
            text: `Thank you, ${updatedDetails.name}! We have received your details: 
- Phone: ${updatedDetails.phone} 
- Email: ${updatedDetails.email}
- Problem: "${updatedDetails.problem}" 
We will contact you soon.`,
          },
        ]);
        setConversationStep(5); // End of conversation
        break;
      default:
        setMessages((prev) => [
          ...prev,
          { user: 'bot', text: 'Thank you! Is there anything else I can help you with?' },
        ]);
    }
  };

  // Handle changes in the input field
  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  // Toggle the chat popup open/closed
  const toggleChat = () => {
    setIsOpen(!isOpen);
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
              placeholder="Type your response here..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
