import React, { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your educational AI assistant for learning about homeopathy. I can help you understand homeopathic principles, remedies, and their traditional uses. Remember, I provide educational information only - not medical advice. What would you like to learn about?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('arnica') || lowerMessage.includes('bruise')) {
      return 'Arnica montana is a well-known homeopathic remedy traditionally used for bruises, trauma, and shock. It\'s prepared from the mountain arnica plant and is commonly used in 6C, 12C, or 30C potencies. Remember, this is educational information only - always consult a qualified practitioner for treatment.';
    } else if (lowerMessage.includes('belladonna') || lowerMessage.includes('fever')) {
      return 'Belladonna (Atropa belladonna) is traditionally used for conditions with sudden onset, fever, and inflammation. It\'s particularly associated with symptoms that come on quickly and intensely. This information is for educational purposes only.';
    } else if (lowerMessage.includes('homeopathy') || lowerMessage.includes('principle')) {
      return 'Homeopathy is based on the principle of "like cures like" - a substance that causes symptoms in a healthy person can treat similar symptoms in a sick person when prepared in very dilute, potentized form. This is educational information only.';
    } else {
      return 'I can help you learn about homeopathic remedies and principles. You can ask me about specific remedies like Arnica, Belladonna, or general homeopathic concepts. Remember, this is educational information only - not medical advice.';
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-text-primary">AI Educational Assistant</h3>
        <p className="text-sm text-text-secondary">Ask questions about homeopathic principles and remedies</p>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-primary-green text-white'
                  : 'bg-gray-100 text-text-primary'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-text-primary px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about homeopathic remedies or principles..."
            className="flex-1 input-field resize-none"
            rows="2"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="btn-primary px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-xs text-text-secondary mt-2">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  );
};

export default AIChat;
