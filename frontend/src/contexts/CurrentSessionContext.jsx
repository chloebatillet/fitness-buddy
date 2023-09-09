// import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import axiosInstance from '../utils/axios';
import { useMessageContext } from './MessageContext';

const CurrentSessionContext = createContext();

export function useCurrentSessionContext() {
  return useContext(CurrentSessionContext);
}

export function CurrentSessionProvider({ children }) {
  const [isStarted, setIsStarted] = useState(false);
  const [sessionId, setSessionId] = useState(0);
  // pour sauvegarder au refresh plus tard
  // const [exerciseForm, setExerciseForm] = useState({
  //   exercise_id: '',
  //   nb_reps: [],
  //   weight_lifted: [],
  // });
  const [allExercises, setAllExercises] = useState([]);

  const { sendMessage } = useMessageContext();

  const createSession = async () => {
    try {
      await axiosInstance.post('/session').then((response) => {
        setSessionId(response.data.id);
        localStorage.setItem('sessionId', response.data.id);

        setIsStarted(true);
        localStorage.setItem('sessionIsStarted', true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const endSession = () => {
    setIsStarted(false);
    setAllExercises([]);
    setSessionId(0); // juste pour être sûre mais pas très utile
    localStorage.setItem('sessionIsStarted', false);
    localStorage.removeItem('sessionId');
  };

  const displayExercises = async () => {
    try {
      const id = localStorage.getItem('sessionId');
      console.log(id);
      const { data } = await axiosInstance.get(`/session/${id}`);
      setAllExercises(data.Exercises);
    } catch (error) {
      console.log(error);
    }
  };

  const addExercise = async (objData) => {
    try {
      // Adapter le formdata
      const dataToSend = {
        exercise_id: objData.exercise_id,
        nb_reps: [],
        weight_lifted: [],
      };

      console.log('OBJDATA ------------------', objData);

      for (const key in objData) {
        if (key.includes('nb_reps') && objData[key].trim().length !== 0) {
          dataToSend['nb_reps'].push(objData[key]);
        }
        if (key.includes('weight_lifted') && objData[key].trim().length !== 0) {
          dataToSend['weight_lifted'].push(objData[key]);
        }
      }

      if (
        dataToSend.nb_reps.length === 0 ||
        dataToSend.weight_lifted.length === 0
      ) {
        sendMessage('You cannot add empty fields.');
        return;
      }

      // Tout envoyer sur la route pour addExercise
      await axiosInstance.post(
        `/session/${localStorage.getItem('sessionId')}/exercise`,
        dataToSend
      );

      displayExercises();
    } catch (error) {
      console.log(error);
      sendMessage(error.response.data.error);
    }
  };

  const currentSessionContextValue = {
    isStarted,
    setIsStarted,
    sessionId,
    setSessionId,
    allExercises,
    displayExercises,
    createSession,
    endSession,
    addExercise,
  };

  return (
    <CurrentSessionContext.Provider value={currentSessionContextValue}>
      {children}
    </CurrentSessionContext.Provider>
  );
}
