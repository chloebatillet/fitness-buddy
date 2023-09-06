// import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import axiosInstance from '../utils/axios';

const CurrentSessionContext = createContext();

export function useCurrentSessionContext() {
  return useContext(CurrentSessionContext);
}

export function CurrentSessionProvider({ children }) {
  const [isStarted, setIsStarted] = useState(false);
  const [sessionId, setSessionId] = useState(0);
  const [sessionExerciseId, setSessionExerciseId] = useState(0);
  // pour sauvegarder au refresh plus tard
  // const [exerciseForm, setExerciseForm] = useState({
  //   exercise_id: '',
  //   nb_reps: [],
  //   weight_lifted: [],
  // });
  const [allExercises, setAllExercises] = useState([]);

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
    localStorage.setItem('sessionIsStarted', false);
    localStorage.removeItem('sessionId');
  };

  const displayExercises = async () => {
    try {
      const id = localStorage.getItem('sessionId');
      console.log(id);
      const { data } = await axiosInstance.get(`/session/${id}`);
      // console.log(data);
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

      for (const key in objData) {
        if (key.includes('nb_reps')) {
          dataToSend['nb_reps'].push(objData[key]);
        }
        if (key.includes('weight_lifted')) {
          dataToSend['weight_lifted'].push(objData[key]);
        }
      }

      console.log(dataToSend);

      // Tout envoyer sur la route pour addExercise
      const { data } = await axiosInstance.post(
        `/session/${localStorage.getItem('sessionId')}/exercise`,
        dataToSend
      );
      console.log(data);
      //console.log(data.id);

      //setSessionExerciseId(data.id);
      //console.log(sessionExerciseId);

      displayExercises();
    } catch (error) {
      console.log(error);
    }
  };

  // const addSets = async (objData) => {
  //   try {
  //     const dataToSend = {
  //       exercise_id: objData.exercise_id,
  //       nb_reps: [],
  //       weight_lifted: [],
  //     };

  //     for (const key in objData) {
  //       if (key.includes('nb_reps')) {
  //         dataToSend['nb_reps'].push(objData[key]);
  //       }
  //       if (key.includes('weight_lifted')) {
  //         dataToSend['weight_lifted'].push(objData[key]);
  //       }
  //     }

  //     console.log(dataToSend);

  //     const { data } = await axiosInstance.post(
  //       `/session/session-exercise/${sessionExerciseId}/set`
  //     );
  //     console.log(data);

  //     await displayExercises();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
    // addSets,
  };

  return (
    <CurrentSessionContext.Provider value={currentSessionContextValue}>
      {children}
    </CurrentSessionContext.Provider>
  );
}
