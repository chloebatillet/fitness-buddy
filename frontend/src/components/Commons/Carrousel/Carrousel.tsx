import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { Icon } from '@iconify/react';

import './style.scss';
import { useState } from 'react';

interface Session {
  id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

interface CarrouselProps {
  list: Session[];
  emptyMessage?: string;
}

function Carrousel({ list, emptyMessage }: CarrouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselPosition, setCarouselPosition] = useState(10);

  const carouselItemWidth = 88;

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    setCarouselPosition((prevPosition) =>
      prevPosition === 10 ? prevPosition : prevPosition + carouselItemWidth
    );
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === list.length - 1 ? prevIndex : prevIndex + 1
    );
    setCarouselPosition((prevPosition) =>
      prevPosition === (list.length - 2) * -carouselItemWidth + 10 ||
      currentIndex === 0
        ? prevPosition
        : prevPosition - carouselItemWidth
    );
  };

  return (
    <div className="carrousel-container">
      {list.length === 0 ? (
        <p>{emptyMessage || 'This section is empty'}</p>
      ) : (
        <>
          <div
            className={
              currentIndex === 0 ? 'carrousel-btn is-disabled' : 'carrousel-btn'
            }
            onClick={handleLeftArrowClick}
          >
            <Icon icon="solar:alt-arrow-left-linear" />
          </div>

          <div className="carrousel-wrapper">
            <div
              className="carrousel-content"
              style={{ transform: `translateX(${carouselPosition}px)` }}
            >
              {list.map((e, index) => (
                <Link
                  key={e.created_at}
                  to={`/session/${e.id}`}
                  className={index === currentIndex ? `is-active` : ''}
                >
                  <Button
                    type={'button'}
                    value={e.created_at}
                    onClick={undefined}
                  ></Button>
                </Link>
              ))}
            </div>
          </div>

          <div
            className={
              currentIndex === list.length - 1 || list.length === 0
                ? 'carrousel-btn is-disabled'
                : 'carrousel-btn'
            }
            onClick={handleRightArrowClick}
          >
            <Icon icon="solar:alt-arrow-right-linear" />
          </div>
        </>
      )}
    </div>
  );
}

export default Carrousel;
