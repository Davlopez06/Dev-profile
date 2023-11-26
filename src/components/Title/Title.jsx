import PropTypes from 'prop-types';
import useWindowScrollResize from '../../utils/useWindowScrollResize';
import { useRef, useState } from 'react';
import style from './Title.module.scss';

const Title = ({ text = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const title = useRef(null);

  const verificateVisibility = () => {
    if (title.current) {
      const rect = title.current.getBoundingClientRect();
      setIsVisible(rect.top >= 0 || rect.bottom >= 0);
    }
  };

  const getVisibleClass = classVisble => {
    if (!isVisible) return 'no-visible';

    return classVisble;
  };

  useWindowScrollResize(verificateVisibility, title);

  return (
    <h2 className={style[getVisibleClass('title')]} ref={title}>
      {text}
    </h2>
  );
};

Title.propTypes = {
  text: PropTypes.string
};

export default Title;
