import { createContext, useContext, useState } from 'react';

import axiosInstance from '../utils/axios';
import { useMessageContext } from './MessageContext';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [favouriteExercises, setFavouritesExercises] = useState([]);
  const [code, setCode] = useState('');

  const { sendMessage } = useMessageContext();

  /**
   * TS : item: 'id' | 'firstname' | 'lastname' | 'email'
   */
  const getUserInfo = (item) => {
    return JSON.parse(user).user[item];
  };

  const generateCode = () => {
    let c = [];
    for (let index = 0; index < 6; index++) {
      //setCode([...code, Math.floor(Math.random() * 10)]);
      c.push(Math.floor(Math.random() * 10));
    }
    //setCode(c.join(''));
    return c.join('');
  };

  const getACode = () => {
    const code = setInterval(() => {
      generateCode();
    }, 60000);
    clearInterval(code);
  };

  const editInfo = async (objData) => {
    try {
      const { data } = await axiosInstance.patch('/account/edit', objData);

      const user = data.user;
      localStorage.setItem('user', JSON.stringify({ user }));
      setUser(localStorage.getItem('user'));

      sendMessage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const changePwd = async (objData) => {
    try {
      if (objData.new_password !== objData.confirm_password) {
        sendMessage('Please confirm your password.');
      }
      const { data } = await axiosInstance.patch(
        '/account/change-password',
        objData
      );
      sendMessage(data.message);
    } catch (error) {
      sendMessage(error.response.data.error);
      console.log(error);
    }
  };

  const deleteAccount = async (objData) => {
    try {
      // if (objData.code !== code) {
      //   sendMessage('Invalid code.');
      // }
      const { data } = await axiosInstance.delete('/account/delete', objData);
      sendMessage(data.message);
    } catch (error) {
      sendMessage(error.response.data.error);
      console.log(error);
    }
  };

  const isFavouriteExercise = (id) => {
    return favouriteExercises.some((e) => e.id == id);
  };

  const getFavourites = async () => {
    try {
      const { data } = await axiosInstance.get('/exercises/favourites');
      setFavouritesExercises(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavourites = async (id) => {
    try {
      await axiosInstance.post(`/exercise/${id}/favourites`);
      //? getFavourites(); -> pas besoin, ça se fera au refresh de la page ?
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFavourites = async (id) => {
    try {
      await axiosInstance.delete(`/exercise/${id}/favourites`);
      //? getFavourites(); -> pas besoin, ça se fera au refresh de la page ?
    } catch (error) {
      console.log(error);
    }
  };

  const userContextValue = {
    user,
    setUser,
    getUserInfo,
    editInfo,
    changePwd,
    deleteAccount,
    generateCode,
    getACode,
    getFavourites,
    isFavouriteExercise,
    favouriteExercises,
    addToFavourites,
    removeFromFavourites,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
