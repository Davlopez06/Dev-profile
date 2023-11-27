import Deck from '../../components/Deck';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import experenceData from '../../datalist/experenceData.json';
import getTimeWork from '../../utils/getTimeWork';
import style from './Experence.module.scss';

const Experence = () => {
  const { experence } = experenceData;

  const getDescription = (description, index) =>
    description.map((des, i) => (
      <Deck key={`experence-${index}-description-${i}`} text={des} />
    ));

  const getExperences = () =>
    experence.map((exp, i) => (
      <div className={style.experence} key={`experence-${i}`}>
        <Subtitle text={exp.subtitle} />
        <Deck
          text={`${exp.start} - ${exp.end}. ${getTimeWork(exp.start, exp.end)}`}
        />
        {getDescription(exp.deck, i)}
      </div>
    ));

  return (
    <div id="Experiencia">
      <Title text="Hablemos de un poco de mi experiencia" />
      <div className={style['experences-container']}>{getExperences()}</div>
    </div>
  );
};

export default Experence;
