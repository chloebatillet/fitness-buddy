import { createContext, useContext, useState } from 'react';

import axiosInstance from '../utils/axios';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [favouriteExercises, setFavouritesExercises] = useState([]);

  const isFavouriteExercise = (id) => {
    return favouriteExercises.some((e) => e.id == id);
  };

  const getFavourites = async () => {
    try {
      const { data } = await axiosInstance.get('/exercises/favourites');
      setFavouritesExercises(data);
      console.log(data);
      // isFavouriteExercise();
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
