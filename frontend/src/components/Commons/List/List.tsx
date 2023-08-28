import './style.scss';
import ListItem, { ListItemProps } from './ListItem/ListItem';
import { Icon } from '@iconify/react';

export interface ListProps {
  name: string;
  items: ListItemProps[];
  icon?: string;
}

function List({ name, items, icon }: ListProps) {
  return (
    <ul>
      <div className="list-title-container">
        {icon && <Icon icon={icon} />}
        {name && <p className="list-title">{name}</p>}
      </div>

      {items.map((e) => {
        return <ListItem key={e.name} id={e.id} name={e.name} icon="ph:star" />;
      })}
    </ul>
  );
}

export default List;
