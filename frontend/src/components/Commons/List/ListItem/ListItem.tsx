import { Icon } from '@iconify/react';
import { useState } from 'react';

export interface ListItemProps {
  id: number;
  name: string;
  /**
   * icon name -fill or -light exclusively
   */
  icon?: string;
}

function ListItem({ name, icon }: ListItemProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // appel axios
    setIsClicked(!isClicked);
  };
  return (
    <>
      <li className="list-item">
        <p className="list-item-name">{name}</p>
        {icon &&
          (isClicked ? (
            <Icon icon={`${icon}-fill`} onClick={handleClick} />
          ) : (
            <Icon icon={`${icon}-light`} onClick={handleClick} />
          ))}
      </li>
    </>
  );
}

export default ListItem;
