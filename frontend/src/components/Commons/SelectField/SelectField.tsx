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
  icon: string;
}

function SelectField({ list, selectName, selectId, icon }: SelectFieldProps) {

  const selectList = list.map((e) => {
    return e.exercises?.length !== 0 ? (
      <optgroup key={e.name} label={e.name}>
        {e.exercises?.map((el) => (
          <option key={el.name} value={el.id} className="select-field-option">
            {el.name}
          </option>
        ))}
      </optgroup>
    ) : (
      <option key={e.name} value={e.id}>
        {e.name}
      </option>
    );
  });

  return (
    <div className="select-field-group">
      <select className="select-field" name={selectName} id={selectId}>
        <option value={''}>-- Select an exercise --</option>
        {selectList}
      </select>
      <Icon icon={icon} className="select-field-icon" />
    </div>
  );
}

export default SelectField;
