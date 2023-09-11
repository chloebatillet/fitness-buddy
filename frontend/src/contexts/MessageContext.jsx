// import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

export function useMessageContext() {
  return useContext(MessageContext);
}

export function MessageProvider({ children }) {
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const sendMessage = (message) => {
    setMessage(message);
    setDisplayMessage(true);

    setTimeout(() => {
      setDisplayMessage(false);
      setMessage('');
    }, 5000);
  };

  const putLoader = (message) => {
    setIsLoading(true);
    setLoadingMessage(message);
  };

  const removeLoader = () => {
    setIsLoading(false);
    setLoadingMessage('');
  };

  const messageContextValue = {
    message,
    sendMessage,
    isLoading,
    putLoader,
    removeLoader,
    loadingMessage,
  };

  return (
    <MessageContext.Provider value={messageContextValue}>
      {children}
    </MessageContext.Provider>
  );
}
