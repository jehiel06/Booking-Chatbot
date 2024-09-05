import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from 'react';
import NavBar from "./NavBar";
import "./TrainBookingChatbot.css";

export const TrainBookingChatbot = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const endOfMessagesRef = useRef(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (input.trim() === '') return;

    // Add user message to the chat
    const userMessage = { text: input, sender: 'You' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    // Send user message to the Java server
    try {
      const response = await fetch('http://localhost:8080/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const botResponse = await response.text();
      const botMessage = { text: botResponse, sender: 'Bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {text: 'Error communicating with server.', sender: 'Bot'};
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="container mx-auto mt-0 mb-0 bg-slate-800 flex flex-col h-screen">

      <NavBar />

      <h1 className="text-3xl text-white font-bold ml-7 mb-7 mt-7">AI Powered - Ticket Booking Chatbot</h1>

      <div className="chat-container rounded-lg shadow-xl p-2 flex flex-col flex-grow min-h-2.5">
        <div className="chat-messages flex-grow overflow-y-auto rounded-xl mb-3 bg-slate-700 p-10 text-2xl">
          {messages.map((msg, index) => (
              <div key={index}>
                {msg.sender}: {msg.text}
              </div>
          ))}
          <div ref={endOfMessagesRef}/>
        </div>

        <form onSubmit={handleSendMessage} className="flex items-center mb-7">
          <input
            type="text"  value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-4 py-2 min-h-16 text-xl rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Book your ticket..."
          />
          <button
            type="submit"
            className="px-8 py-6 ml-4 rounded-full bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
};
export default TrainBookingChatbot;