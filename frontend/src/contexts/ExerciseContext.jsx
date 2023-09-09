import { createContext, useContext, useState } from 'react';
import axiosInstance from '../utils/axios';

import { useUserContext } from './UserContext';

const ExerciseContext = createContext();

export function useExerciseContext() {
  return useContext(ExerciseContext);
}

export function ExerciseProvider({ children }) {
  // const [favouriteExercises, setFavouritesExercises] = useState([]);

  // const isFavouriteExercise = (id) => {
  //   return favouriteExercises.some((e) => e.id == id);
  // };

  // const getFavourites = async () => {
  //   try {
  //     const { data } = await axiosInstance.get('/exercises/favourites');
  //     setFavouritesExercises(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const addToFavourites = async (id) => {
  //   try {
  //     await axiosInstance.post(`/exercise/${id}/favourites`);
  //     //? getFavourites(); -> pas besoin, ça se fera au refresh de la page ?
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const removeFromFavourites = async (id) => {
  //   try {
  //     await axiosInstance.delete(`/exercise/${id}/favourites`);
  //     //? getFavourites(); -> pas besoin, ça se fera au refresh de la page ?
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [exerciseList, setExerciseList] = useState([]);
  const [bodypartList, setBodypartList] = useState([]);

  const { getFavourites } = useUserContext();

  const getExerciseList = async () => {
    try {
      getFavourites();

      const { data } = await axiosInstance.get('/exercise-list');

      setExerciseList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addNewExercise = async (formData) => {
    try {
      const data = Object.fromEntries(formData)
      await axiosInstance.post('/exercise-list', data);

      getExerciseList();
    } catch (error) {
      console.error(error);
    }
  };

  const getBodypartList = async () => {
    try {
      const { data } = await axiosInstance('/exercise-categories');
      setBodypartList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const exerciseContextValue = {
    getExerciseList,
    exerciseList,
    addNewExercise,
    getBodypartList,
    bodypartList,
    // getFavourites,
    // isFavouriteExercise,
    // favouriteExercises,
    // addToFavourites,
    // removeFromFavourites,
  };

  return (
    <ExerciseContext.Provider value={exerciseContextValue}>
      {children}
    </ExerciseContext.Provider>
  );
}
