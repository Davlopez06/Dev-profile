/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import Arrow from '../../asets/icons/Arror';
import { useEffect, useRef, useState } from 'react';
import useWindowScrollResize from '../../utils/useWindowScrollResize';
import useWindowSize from '../../utils/useWindowSize';
import style from './Carousel.module.scss';

const Carousel = ({
  project = [],
  setModalInfo,
  setShowModal,
  subtitle = '',
}) => {
  const [itemWidth, setItemWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [showItems, setShowItems] = useState(1);
  const { isDesktop, isTablet } = useWindowSize();
  const content = useRef(null);
  const carousel = useRef(null);

  const getWidthItem = () => {
    return `${itemWidth}px`;
  };

  const getStyleItem = color => ({
    background: color,
    border: `1px solid ${color.replace('b2', '')}`,
    maxWidth: getWidthItem(),
    minWidth: getWidthItem(),
    width: getWidthItem(),
  });

  const getVisibleClass = (classVisble, extraclass = '') => {
    if (!isVisible) return `no-visible${extraclass}`;

    return classVisble;
  };

  const handleBurron = project => {
    setShowModal(true);
    setModalInfo({ ...project });
  };

  const getItems = () =>
    project.map((pro, i) => {
      return (
        <div
          key={`${subtitle}-${i}`}
          className={style['carousel-item']}
          style={getStyleItem(pro.color)}
        >
          <p className={style[getVisibleClass('carousel-item-name', '-name')]}>
            {pro.name}
          </p>
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
            className={style[getVisibleClass('carousel-item-button', '-button')]} style={{background: pro.color.replace('b2', ''), border: `1px solid ${pro.color.replace('b2', '')}` }} onClick={() => handleBurron(pro)}
          >
            Ver
          </button>
        </div>
      );
    });

  const getArrowStyle = (direction = 'left') => {
    if (direction === 'left') {
      if (activeIndex <= 0)
        return {
          opacity: 0.5,
          pointerEvents: 'none',
        };

      return {};
    }

    if (activeIndex >= project.length - showItems)
      return {
        opacity: 0.5,
        pointerEvents: 'none',
      };

    return {};
  };

  const handleArrow = (direction = 'left') => {
    if (direction === 'left') {
      setTranslate(prevValue => prevValue + itemWidth + 20);
      setActiveIndex(prevIndex => prevIndex - 1);
    } else {
      setTranslate(prevValue => prevValue - itemWidth - 20);
      setActiveIndex(prevIndex => prevIndex + 1);
    }
  };

  const getStyleSlider = () => ({
    transform: `translateX(${translate}px)`,
  });

  const getItemWidth = width => {
    if (isDesktop) return (width - 40) / 3 ?? 0;
    if (isTablet) return (width - 20) / 2 ?? 0;

    return width ?? 0;
  };

  const getResizeWidth = () => {
    if (carousel.current) {
      const rect = carousel.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      setIsVisible(
        (rect.top >= 0 || rect.bottom >= 0) &&
          (rect.top <= windowHeight || rect.bottom <= windowHeight),
      );
    }
    setItemWidth(getItemWidth(content?.current?.clientWidth));
  };

  useEffect(() => {
    const getNumberItems = () => {
      if (!isDesktop && !isTablet) return 1;
      if (isTablet) return 2;

      return 3;
    };

    setShowItems(getNumberItems);
    setActiveIndex(0);
    setTranslate(0);
  }, [isDesktop, isTablet]);

  useEffect(() => {
    setItemWidth(getItemWidth(content?.current?.clientWidth));
  }, [content, getItemWidth]);

  useWindowScrollResize(getResizeWidth, content);

  return (
    <div className={style[getVisibleClass('carousel')]} ref={carousel}>
      <div
        className={style.arrowLeft}
        style={getArrowStyle()}
        onClick={() => handleArrow()}
      >
        <Arrow />
      </div>
      <div className={style['carousel-content']} ref={content}>
        <div className={style['carousel-slider']} style={getStyleSlider()}>
          {getItems()}
        </div>
      </div>
      <div
        className={style.arrowRigth}
        style={getArrowStyle('rigth')}
        onClick={() => handleArrow('rigth')}
      >
        <Arrow />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  project: PropTypes.array,
  setModalInfo: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
};

export default Carousel;
