import Deck from '../../components/Deck';
import Title from '../../components/Title';
import style from './AboutMe.module.scss';
import aboutMeData from '../../datalist/aboutMeData.json';

const AboutMe = () => {
  return (
    <div className={style.aboutme} id="Más sobre mí">
      <Title text={aboutMeData.title} />
      <Deck text={aboutMeData.deck} />
    </div>
  );
};

export default AboutMe;
