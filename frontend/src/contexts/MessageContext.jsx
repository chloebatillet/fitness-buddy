// import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

export function useMessageContext() {
  return useContext(MessageContext);
}

export function MessageProvider({ children }) {
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState(false);

  const sendMessage = (message) => {
    setMessage(message);
    setDisplayMessage(true);

    setTimeout(() => {
      console.log('fini');
      setDisplayMessage(false);
      setMessage('');
    }, 5000);
  };

  const messageContextValue = {
    message,
    sendMessage
  };

  return (
    <MessageContext.Provider value={messageContextValue}>
      {children}
    </MessageContext.Provider>
  );
}