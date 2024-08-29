import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import NavBar from './NavBar';
import './TrainBookingChatbot.css';


const handleSubmit = async (event) => {
  // ... (rest of your code)

  // Scroll to the bottom after adding messages
  const messagesList = document.querySelector(".chat-messages");
  messagesList.scrollTop = messagesList.scrollHeight; 
};

export const TrainBookingChatbot = () => {
  return (
    <>
    <div className="container mx-auto p-4 mt-0 mb-0 bg-slate-800 flex flex-col h-screen">
    <NavBar/>
      <h1 className="text-3xl text-white font-bold ml-7 mb-7 mt-7">AI Powered - Train Booking Chatbot</h1>
      <div className="chat-container rounded-lg shadow-xl p-6 flex flex-col flex-grow">

        <ul className="chat-messages flex-grow overflow-y-auto rounded-xl mb-3 bg-slate-700 p-10 text-2xl">
          <li>
           
          </li>
          {/* {messages.map((message, index) => (
      <li key={index} className={'chat-message ${message.role === "user" ? "user" : "bot"}'}>
        <div className="message-content">{message.content}</div>
      </li>
    ))} */}
        </ul>

        <form className="flex items-center">
          {/* onSubmit={handleSubmit}  */}
          <input type="text"
            className="flex-grow px-4 py-2 min-h-16 text-xl rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Book your train..." />
          <button
            type="submit"
            className="px-8 py-6 ml-4 rounded-full bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
               <FontAwesomeIcon icon={faPaperPlane}/>
          </button>
        </form>
      </div>
    </div></>
);
}
export default TrainBookingChatbot;

// className="px-4 py-6 ml-4 w-36 rounded-full bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">