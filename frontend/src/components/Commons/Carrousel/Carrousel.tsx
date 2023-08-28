import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { Icon } from '@iconify/react';

import './style.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Carrousel() {
  const [sessionList, setSessionList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselPosition, setCarouselPosition] = useState(10);

  const carouselItemWidth = 88;

  const fetchSessionList = async () => {
    var options = {
      method: 'GET',
      url: 'http://localhost:3000/sessions',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY5MzIyMzUzMywiZXhwIjoxNjkzMjI3MTMzfQ.RNW3vNit_ObP4Oy6e5D6WYr87exzCLJGb-_euzcHxso',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSessionList(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchSessionList();
  }, [setSessionList]);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    setCarouselPosition((prevPosition) =>
      prevPosition === 10 ? prevPosition : prevPosition + carouselItemWidth
    );
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sessionList.length - 1 ? prevIndex : prevIndex + 1
    );
    setCarouselPosition((prevPosition) =>
      prevPosition === (sessionList.length -2 ) * -carouselItemWidth + 10 || currentIndex === 0
        ? prevPosition
        : prevPosition - carouselItemWidth
    );
  };

  return (
    <div className="carrousel-container">
      <div className="carrousel-btn" onClick={handleLeftArrowClick}>
        <Icon icon="solar:alt-arrow-left-linear" />
      </div>

      <div className="carrousel-wrapper">
        <div
          className="carrousel-content"
          style={{ transform: `translateX(${carouselPosition}px)` }}
        >
          {sessionList.map((e, index) => (
            <Link
              key={e.created_at}
              to={`/session/${e.id}`}
              className={index === currentIndex ? `is-active` : ''}
            >
              <Button type={'button'} value={e.id} onClick={undefined}></Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="carrousel-btn" onClick={handleRightArrowClick}>
        <Icon icon="solar:alt-arrow-right-linear" />
      </div>
    </div>
  );
}

export default Carrousel;