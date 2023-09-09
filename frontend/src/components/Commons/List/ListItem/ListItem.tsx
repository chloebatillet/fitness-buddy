import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useUserContext } from '../../../../contexts/UserContext';
import IconButton from '../../IconButton/IconButton';

export interface ListItemProps {
  id: number;
  name: string;
  /**
   * icon name -fill or -light generally
   */
  icon?: {
    clicked: string;
    unclicked?: string;
  };
}

function ListItem({ id, name, icon }: ListItemProps) {
  const { addToFavourites, removeFromFavourites, isFavouriteExercise } =
    useUserContext();

  useEffect(() => {
    isFavouriteExercise(id);
  }, []);

  const handleClick = async (clicked: boolean) => {
    clicked ? removeFromFavourites(id) : addToFavourites(id);
  };
  return (
    <>
      <li className="list-item">
        <p className="list-item-name">{name}</p>
        {icon && (
          <IconButton
            icon={icon?.unclicked || icon.clicked}
            iconClicked={icon?.clicked}
            isClickedInitial={isFavouriteExercise(id)}
            handleClickFunction={handleClick}
          />
        )}
      </li>
    </>
  );
}

export default ListItem;
