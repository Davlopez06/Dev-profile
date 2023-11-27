import Deck from '../../components/Deck';
import Skill from '../../components/Skill';
import Title from '../../components/Title';
import skillsData from '../../datalist/skillsData.json';
import style from './Skills.module.scss';

const Skills = () => {
  const { title, deck, skills } = skillsData;

  const getDeck = () =>
    deck.map((des, i) => <Deck key={`skills-deck-${i}`} text={des} />);

  const getSkills = () => {
    const orderSkills = skills.sort((a, b) => b.value - a.value);

    return orderSkills.map((skill, i) => (
      <Skill key={`skill-${i}}`} skill={skill} />
    ));
  };

  return (
    <div id="Habilidades">
      <Title text={title} />
      {getDeck()}
      <div className={style['skills-container']}>{getSkills()}</div>
    </div>
  );
};

export default Skills;
