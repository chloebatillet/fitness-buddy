import { useState } from 'react';

import './style.scss';
import { Icon } from '@iconify/react';

interface StyleProps {
  group?: {};
  input?: {};
  label?: {};
}

interface FormFieldProps {
  type: string;
  name: string;
  placeholder: string;
  icon?: string;
  required?: boolean;
  autoFocus?: boolean;
  style?: StyleProps;
}

const FormField = ({
  type,
  name,
  placeholder,
  icon,
  required,
  autoFocus,
  style,
}: FormFieldProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="group" style={style?.group}>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        autoFocus={autoFocus}
        style={style?.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      ></input>
      <Icon icon={icon} className='input-icon'/>

      <span className="highlight"></span>
      <span className="bar"></span>

      <label htmlFor={name} style={style?.label}>
        {placeholder}
      </label>
    </div>
  );
};

export default FormField;
