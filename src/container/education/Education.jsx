import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Deck from '../../components/Deck';
import educationData from '../../datalist/educationData.json';
import getTimeWork from '../../utils/getTimeWork';
import style from './Education.module.scss';

const Education = () => {
  const { education, training } = educationData;

  const getDescription = (description, index) =>
    description.map((des, i) => (
      <Deck key={`education-${index}-description-${i}`} text={des} />
    ));

  const getEducation = () =>
    education.map((edu, i) => (
      <div className={style.education} key={`education-${i}`}>
        <Subtitle text={edu.subtitle} />
        <Deck
          text={`${edu.start} - ${edu.end}. ${getTimeWork(edu.start, edu.end)}`}
        />
        {getDescription(edu.deck, i)}
      </div>
    ));

  const getDescriptionTraining = (description, index) =>
    description.map((des, i) => (
      <Deck key={`training-${index}-description-${i}`} text={des} />
    ));

  const getTraining = () =>
    training.map((tra, i) => (
      <div className={style.training} key={`training-${i}`}>
        <Subtitle text={tra.subtitle} />
        <Deck
          text={`${tra.start} - ${tra.end}. ${getTimeWork(tra.start, tra.end)}`}
        />
        {getDescriptionTraining(tra.deck, i)}
      </div>
    ));

  return (
    <div id="Educación y Formación">
      <Title text="Esta es mi educacion" />
      <div className={style['education-container']}>{getEducation()}</div>
      <Title text="Estos son los cursos que he relizado" />
      <div className={style['training-container']}>{getTraining()}</div>
    </div>
  );
};

export default Education;
