import { useState } from 'react';
import ChatInput from '../ChatInput/ChatInput';
import ChatMessage from '../ChatMessage/ChatMessage';
import Header from '../Header/Header';
import styles from './ChatContainer.module.css';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hola! Soy el asistente de Ithaka, ¿en qué puedo ayudarte hoy?',
      isUser: false
    },
    {
      id: 2,
      text: 'Hola :)',
      isUser: true
    }
  ]);

  const handleSendMessage = (messageText) => {
    const newMessage = {
      id: messages.length + 1,
      text: messageText,
      isUser: true
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className={styles.chatContainer}>
      <Header />
      
      <div className={styles.messagesArea}>
        {messages.map((message) => (
          <div key={message.id}>
            <ChatMessage message={message.text} isUser={message.isUser} />
          </div>
        ))}
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
