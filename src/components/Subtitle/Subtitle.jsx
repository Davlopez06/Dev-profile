import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useWindowScrollResize from '../../utils/useWindowScrollResize';
import style from './Subtitle.module.scss';

const Subtitle = ({ text = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const title = useRef(null);

  const verificateVisibility = () => {
    if (title.current) {
      const rect = title.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      setIsVisible(
        (rect.top >= 0 || rect.bottom >= 0) &&
          (rect.top <= windowHeight || rect.bottom <= windowHeight)
      );
    }
  };

  const getVisibleClass = classVisble => {
    if (!isVisible) return 'no-visible';

    return classVisble;
  };

  useWindowScrollResize(verificateVisibility, title);

  return (
    <h2 className={style[getVisibleClass('subtitle')]} ref={title}>
      {text}
    </h2>
  );
};

Subtitle.propTypes = {
  text: PropTypes.string
};

export default Subtitle;
