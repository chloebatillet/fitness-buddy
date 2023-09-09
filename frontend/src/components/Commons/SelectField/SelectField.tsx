import { Icon } from '@iconify/react';
import './style.scss';

interface ListElements {
  id: number;
  name: string;
  exercises?: ListElements[];
}

interface SelectFieldProps {
  list: ListElements[];
  selectName: string;
  selectId: string;
  placeholder: string;
  icon?: string;
  required?: boolean;
  autoFocus?: boolean;
}

function SelectField({
  list,
  selectName,
  selectId,
  placeholder,
  icon,
  required,
  autoFocus,
}: SelectFieldProps) {

  
  // LISTE DES PROPS
  const selectList = list.map((e) => {

    return !e.exercises?.length ? (
      <option key={e.name} value={e.id}>
        {e.name}
      </option>
    ) : (
      <optgroup key={e.name} label={e.name}>
        {e.exercises?.map((el) => (
          <option key={el.name} value={el.id} className="select-field-option">
            {el.name}
          </option>
        ))}
      </optgroup>
    );
  });

  return (
    <div className="select-field-group">
      <select
        className="select-field"
        name={selectName}
        id={selectId}
        required={required}
        autoFocus={autoFocus}
      >
        <option value={''} hidden>
          {/* -- Choose an exercise -- */}
          {placeholder}
        </option>
        {selectList}
      </select>
      {icon && <Icon icon={icon} className="select-field-icon" />}
    </div>
  );
}

export default SelectField;
