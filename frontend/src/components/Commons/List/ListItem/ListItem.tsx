import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useUserContext } from '../../../../contexts/UserContext';

export interface ListItemProps {
  id: number;
  name: string;
  /**
   * icon name -fill or -light exclusively
   */
  icon?: string;
}

function ListItem({ id, name, icon }: ListItemProps) {
  const {
    addToFavourites,
    removeFromFavourites,
    isFavouriteExercise,
  } = useUserContext();
  
  const [isClicked, setIsClicked] = useState(isFavouriteExercise(id));
  
  useEffect(() => {
    isFavouriteExercise(id)
  }, []);

  const handleClick = async () => {
    isClicked ? removeFromFavourites(id) : addToFavourites(id);
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
