import PropTypes from 'prop-types';
import Arrow from '../../asets/icons/Arror';
import { useEffect, useRef, useState } from 'react';
import useWindowScrollResize from '../../utils/useWindowScrollResize';
import Deck from '../Deck';
// import useWindowSize from '../../utils/useWindowSize';
import style from './Carousel.module.scss';

const Carousel = ({ project = [], subtitle = '' }) => {
  const [itemWidth, setItemWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  // const { isMobile, isTablet } = useWindowSize();
  const content = useRef(null);
  const carousel = useRef(null);

  const getWidthItem = () => {
    return `${itemWidth}px`;
  };

  const getStyleItem = () => ({
    width: getWidthItem(),
    minWidth: getWidthItem(),
    maxWidth: getWidthItem()
  });

  const getVisibleClass = (classVisble, extraclass = '') => {
    if (!isVisible) return `no-visible${extraclass}`;

    return classVisble;
  };

  const getItems = () =>
    project.map((pro, i) => {
      return (
        <div
          key={`${subtitle}-${i}`}
          className={style['carousel-item']}
          style={getStyleItem()}
        >
          <Deck text={pro.name} />
          <p
            className={
              style[
                getVisibleClass('carousel-item-description', '-description')
              ]
            }
          >
            {pro.description[0]}
          </p>
          <button
            className={
              style[getVisibleClass('carousel-item-button', '-button')]
            }
          >
            Ver
          </button>
        </div>
      );
    });

  const getResizeWidth = () => {
    if (carousel.current) {
      const rect = carousel.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      setIsVisible(
        (rect.top >= 0 || rect.bottom >= 0) &&
          (rect.top <= windowHeight || rect.bottom <= windowHeight)
      );
    }
    setItemWidth(content?.current?.clientWidth);
  };

  useEffect(() => {
    setItemWidth(content?.current?.clientWidth);
  }, [content]);

  useWindowScrollResize(getResizeWidth, content);

  return (
    <div className={style[getVisibleClass('carousel')]} ref={carousel}>
      <div className={style.arrow}>
        <Arrow direction="left" />
      </div>
      <div className={style['carousel-content']} ref={content}>
        <div className={style['carousel-slider']}>{getItems()}</div>
      </div>
      <div className={style.arrow}>
        <Arrow direction="rigth" />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  project: PropTypes.array,
  subtitle: PropTypes.string
};

export default Carousel;
