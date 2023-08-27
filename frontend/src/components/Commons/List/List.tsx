import './style.scss';
import ListItem, { ListItemProps } from './ListItem/ListItem';
import { Icon } from '@iconify/react';

interface ListProps {
  list: {
    name: string;
    items: ListItemProps[];
  };
  icon?: string;
}

function List({ list, icon }: ListProps) {
  return (
    <ul>
      <div className="list-title-container">
        {icon && <Icon icon={icon} />}
        {list.name && <p className="list-title">{list.name}</p>}
      </div>

      <ListItem id={2} name="bloblo" icon="ph:star" />
    </ul>
  );
}

export default List;
