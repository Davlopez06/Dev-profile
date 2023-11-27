import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useWindowScrollResize from '../../utils/useWindowScrollResize';
import style from './Skill.module.scss';

const Skill = ({ skill }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const skillRef = useRef(null);

  const verificateVisibility = () => {
    if (skillRef.current) {
      const rect = skillRef.current.getBoundingClientRect();
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

  const getBarStyle = () => {
    if (!isVisible) return { background: skill.color };

    return { width: `${skill.value}%`, background: skill.color };
  };

  useWindowScrollResize(verificateVisibility, skillRef);

  useEffect(() => {
    if (isVisible) {
      const increment = Math.ceil(skill.value / 100);
      const timeout = setInterval(() => {
        setCount(prevCount => {
          if (prevCount >= skill.value) {
            clearInterval(timeout);

            return skill.value;
          } else {
            return prevCount + increment;
          }
        });
      }, 10);

      return () => clearInterval(timeout);
    } else {
      setCount(0);
    }
  }, [isVisible, skill.value]);

  return (
    <div className={style.skill} ref={skillRef}>
      <p className={style[getVisibleClass('skill-name')]}>{skill.name}</p>
      <div className={style['skill-percentage']}>
        <div className={style['skill-bar']}>
          <div style={getBarStyle()} />
        </div>
        <p className={style['skill-value']}>{count}%</p>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.object
};

export default Skill;
