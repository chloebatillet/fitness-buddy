import { useEffect, useState } from 'react';
import Title from '../../../../Commons/Title/Title';
import axiosInstance from '../../../../../utils/axios';
import ExerciseBox from './ExerciseBox/ExerciseBox';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../../../../utils/formatDate';

function Session() {
  const {id} = useParams();
  
  const [exerciseList, setExerciseList] = useState([]);
  const [sessionDate, setSessionDate] = useState("")

  const fetchSession = async () => {
    const { data } = await axiosInstance.get(`/session/${id}`);
    setExerciseList(data.Exercises);
    setSessionDate(formatDate(data.created_at));
  };

  useEffect(() => {
    fetchSession();
  }, [setExerciseList]);

  return (
    <main style={{marginTop: '1rem'}}>
      <Title level={'1'} text={`Session ${sessionDate}`} icon="ph:barbell" />
      <div className="session-container">
        {exerciseList.map((e:any) => {
          return (
            <ExerciseBox key={e.name} name={e.name} exercise_details={e.exercise_details} />
          );
        })}
      </div>
    </main>
  );
}
export default Session;
