import { useState, useRef } from 'react';
import myPhoto from '../../asets/images/Me.jpg';
import useWindowScrollResize from '../../utils/useWindowScrollResize';
import style from './Images.module.scss';

const Images = () => {
  const [isVisible, setIsVisible] = useState(false);
  const images = useRef(null);

  const verificateVisibility = () => {
    if (images.current) {
      const rect = images.current.getBoundingClientRect();
      setIsVisible(rect.top >= 0 || rect.bottom >= 0);
    }
  };

  const getScaleClass = classScale => {
    if (!isVisible) return 'no-visible';

    return classScale;
  };

  useWindowScrollResize(verificateVisibility, images);

  return (
    <div className={style.container} ref={images}>
      <div className={style[getScaleClass('red-gradiant')]} />
      <div className={style[getScaleClass('myPhoto')]}>
        <img src={myPhoto.src} alt="Me" />
      </div>
      <div className={style[getScaleClass('blue-gradiant')]} />
    </div>
  );
};

export default Images;
