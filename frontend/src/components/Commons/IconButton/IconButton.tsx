import { Icon } from '@iconify/react';
import { MouseEventHandler, useEffect, useState } from 'react';

interface IconButtonProps {
  icon: string;
  iconClicked: string;
  isClickedInitial?: boolean;
  handleClickFunction?: any;
  // MouseEventHandler<SVGSVGElement>
}

function IconButton({
  icon,
  iconClicked,
  isClickedInitial,
  handleClickFunction,
}: IconButtonProps) {
  const [isClicked, setIsClicked] = useState(isClickedInitial);

  const handleClick = () => {
    if (handleClickFunction) {
      handleClickFunction(isClicked);
    }
    setIsClicked(!isClicked);
  };

  return (
    <>
      {isClicked ? (
        <Icon icon={iconClicked} onClick={handleClick} />
      ) : (
        <Icon icon={icon} onClick={handleClick} />
      )}
    </>
  );
}

export default IconButton;
