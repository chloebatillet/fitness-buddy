import { useEffect, useState } from 'react';
import Carrousel from '../../../../../Commons/Carrousel/Carrousel';
import axiosInstance from '../../../../../../utils/axios';

function LastSessions() {
  const [sessionList, setSessionList] = useState([]);

  const fetchSessionList = async () => {
    try {
      await axiosInstance
        .get('/sessions')
        .then(function (response) {
          setSessionList(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSessionList();
  }, []);

  return (
    <Carrousel
      list={sessionList}
      emptyMessage="You haven't saved any session yet."
    />
  );
}

export default LastSessions;
