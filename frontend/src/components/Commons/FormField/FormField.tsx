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
  /**
   * Set value + disabled to display only
   */
  value?: string | number;
  placeholder: string;
  icon?: string;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  autoComplete?: 'off';
  style?: StyleProps;
}

const FormField = ({
  type,
  name,
  value,
  placeholder,
  icon,
  required,
  disabled,
  autoFocus,
  autoComplete,
  style,
}: FormFieldProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="group" style={style?.group}>
      <input
        type={type}
        name={name}
        //id={name}
        required={required}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        style={style?.input}
        value={inputValue || value}
        disabled={disabled}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      ></input>
      {icon && <Icon icon={icon} className="input-icon" />}

      <span className="highlight"></span>
      <span className="bar"></span>

      <label htmlFor={name} style={style?.label}>
        {placeholder}
      </label>
    </div>
  );
};

export default FormField;
