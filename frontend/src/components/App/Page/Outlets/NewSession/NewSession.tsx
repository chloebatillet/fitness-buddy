import { useEffect, useState } from 'react';
import FormField from '../../../../Commons/FormField/FormField';
import axiosInstance from '../../../../../utils/axios';
import SelectField from '../../../../Commons/SelectField/SelectField';

import './style.scss';
import AddExercise from './AddExercise/AddExercise';
import Button from '../../../../Commons/Button/Button';
import Timer from './Timer/Timer';

function NewSession() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <AddExercise />
      <Button type={'button'} value={'+ add one'} onClick={undefined} style={{backgroundColor: '#efefef', color: '#222'}}/>
      <Timer />
    </main>
  );
}

export default NewSession;
