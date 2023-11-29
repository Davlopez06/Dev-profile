import { useRef, useState } from 'react';
import style from './ContactMe.module.scss';
import whatsapp from '../../asets/images/whatsapp.png';
import linkedIn from '../../asets/images/linkedIn.png';
import github from '../../asets/images/github.png';
import email from '../../asets/images/email.png';
import useWindowScrollResize from '../../utils/useWindowScrollResize';

const ContactMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const links = useRef(null);

  const verificateVisibility = () => {
    if (links.current) {
      const rect = links.current.getBoundingClientRect();
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

  useWindowScrollResize(verificateVisibility, links);

  return (
    <div
      className={style[getVisibleClass('contactme')]}
      id="Contactame"
      ref={links}
    >
      <div className={style.links}>
        <a href="mailto:davidlopezvaldes@gmail.com">
          <img src={email?.src} alt="mail" />
        </a>
        <a href="https://github.com/Davlopez06">
          <img src={github?.src} alt="mail" />
        </a>
        <a href="https://www.linkedin.com/in/david-lopez-valdes-310630233/">
          <img src={linkedIn?.src} alt="mail" />
        </a>
        <a href="https://wa.me/+573147148353">
          <img src={whatsapp?.src} alt="mail" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
