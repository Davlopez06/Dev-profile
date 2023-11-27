import PropTypes from 'prop-types';
import useWindowScrollResize from '../../utils/useWindowScrollResize';
import { useState, useRef } from 'react';
import style from './Deck.module.scss';

const Deck = ({ text = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const deck = useRef(null);

  const verificateVisibility = () => {
    if (deck.current) {
      const rect = deck.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      setIsVisible(
        (rect.top >= 0 || rect.bottom >= 0) &&
          (rect.top <= windowHeight || rect.bottom <= windowHeight),
      );
    }
  };

  const getVisibleClass = classVisble => {
    if (!isVisible) return 'no-visible';

    return classVisble;
  };

  useWindowScrollResize(verificateVisibility, deck);

  return (
    <p className={style[getVisibleClass('deck')]} ref={deck}>
      {text}
    </p>
  );
};

Deck.propTypes = {
  text: PropTypes.string,
};

export default Deck;
