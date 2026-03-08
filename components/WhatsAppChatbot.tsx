'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Message,
  ChatbotState,
  WELCOME_MESSAGE,
  MENU_OPTIONS,
  generateBotResponse,
  getMenuMessage,
  WHATSAPP_LINK,
} from '@/lib/chatbotLogic';
import './chatbot.css';

export const WhatsAppChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatbotState, setChatbotState] = useState<ChatbotState>('welcome');
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg: Message = {
        id: Date.now().toString(),
        text: WELCOME_MESSAGE,
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
      };
      setMessages([welcomeMsg]);

      // Send menu after a short delay
      setTimeout(() => {
        const menuMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: getMenuMessage(),
          sender: 'bot',
          timestamp: new Date(),
          type: 'options',
        };
        setMessages((prev) => [...prev, menuMsg]);
        setChatbotState('menu');
      }, 800);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showTypingIndicator]);

  // Handle sending message
  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Create user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: userInput,
      sender: 'user',
      timestamp: new Date(),
      type: 'text',
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput('');
    setIsLoading(true);
    setShowTypingIndicator(true);

    // Simulate typing delay
    setTimeout(() => {
      // Check if user wants to talk to attendant
      if (
        chatbotState === 'menu' &&
        (userInput.toLowerCase() === '5' || userInput.toLowerCase().includes('atendente'))
      ) {
        // Redirect to WhatsApp
        setShowTypingIndicator(false);
        window.open(WHATSAPP_LINK, '_blank');
        
        // Send goodbye message
        const goodbyeMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: '👋 Você será redirecionado para o WhatsApp. Muito obrigado!',
          sender: 'bot',
          timestamp: new Date(),
          type: 'text',
        };

        const restartMsg: Message = {
          id: (Date.now() + 2).toString(),
          text: getMenuMessage(),
          sender: 'bot',
          timestamp: new Date(),
          type: 'options',
        };

        setMessages((prev) => [...prev, goodbyeMsg, restartMsg]);
        setChatbotState('menu');
        setIsLoading(false);
        return;
      }

      // Generate bot response
      const { response, newState } = generateBotResponse(userInput, chatbotState);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
        type:
          newState === 'menu' ||
          newState === 'product-questions' ||
          newState === 'track-order-input'
            ? 'text'
            : 'text',
      };

      setChatbotState(newState);
      setMessages((prev) => [...prev, botMessage]);
      setShowTypingIndicator(false);

      // If user is back at menu, add menu options
      if (newState === 'menu') {
        setTimeout(() => {
          const menuMsg: Message = {
            id: (Date.now() + 2).toString(),
            text: getMenuMessage(),
            sender: 'bot',
            timestamp: new Date(),
            type: 'options',
          };
          setMessages((prev) => [...prev, menuMsg]);
        }, 600);
      }

      setIsLoading(false);
    }, 1000);
  };

  // Handle quick option click
  const handleOptionClick = (optionId: string) => {
    setUserInput(optionId);
    // Trigger send after state update
    setTimeout(() => {
      handleSendMessage();
    }, 0);
  };

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  // Toggle chatbot
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Close chatbot
  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="whatsapp-floating-button"
        onClick={toggleChatbot}
        aria-label="Open WhatsApp Chat"
        title="Chat com a gente!"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.6915026,2.50159406 C14.6141157,-.490837259 10.0151657,-.490837259 7.01750702,2.50159406 C4.51850335,5.04730512 3.93232702,8.60097706 5.38696407,11.5619803 L2.12580258,20.0151496 L11.0332232,16.8285151 C13.8451336,17.9286827 17.0668392,17.2340233 19.2121957,15.0924342 C22.1315161,12.1760066 22.1315161,8.10395153 19.2121957,5.18752392 L17.6915026,2.50159406 Z M16.3043893,13.7138577 C15.7063313,14.3123098 14.8019264,14.3123098 14.2038684,13.7138577 L12.7069301,12.2211711 C12.109872,11.6227189 11.2054672,11.6227189 10.6074091,12.2211711 L9.11047081,13.7138577 C8.51241275,14.3123098 8.51241275,15.2171841 9.11047081,15.8156362 C9.70852886,16.4140883 10.6129338,16.4140883 11.2109918,15.8156362 L12.7069301,14.3229495 L14.2038684,15.8156362 C14.8019264,16.4140883 15.7063313,16.4140883 16.3043893,15.8156362 C16.9024474,15.2171841 16.9024474,14.3123098 16.3043893,13.7138577 Z" />
        </svg>
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="chatbot-container">
          {/* Header */}
          <div className="chatbot-header">
            <div>
              <p className="chatbot-header-title">💬 Atendimento</p>
              <p className="chatbot-header-subtitle">Geralmente respondemos em minutos</p>
            </div>
            <button
              className="chatbot-close-button"
              onClick={closeChatbot}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-message message-${msg.sender}`}>
                <div className="message-content">
                  {msg.type === 'options' ? (
                    <div className="chatbot-options">
                      {msg.text.split('\n').map((line, index) => {
                        const match = line.match(/^(\d+)️⃣\s+(.*)/);
                        if (match) {
                          return (
                            <button
                              key={index}
                              className="chatbot-option-button"
                              onClick={() => handleOptionClick(match[1])}
                              disabled={isLoading}
                            >
                              {match[1]}️⃣ {match[2]}
                            </button>
                          );
                        }
                        return null;
                      })}
                    </div>
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {showTypingIndicator && (
              <div className="chatbot-message message-bot">
                <div className="message-content chatbot-typing">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input-field"
              placeholder="Digite sua mensagem..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              aria-label="Message input"
            />
            <button
              className="chatbot-send-button"
              onClick={handleSendMessage}
              disabled={isLoading || !userInput.trim()}
              aria-label="Send message"
              title="Enviar"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

/**
 * Format text with markdown-like syntax
 * Converts **text** to <strong></strong> and \n to <br />
 */
function formatText(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<em>$1</em>')
    .replace(/\n/g, '<br />');
}
