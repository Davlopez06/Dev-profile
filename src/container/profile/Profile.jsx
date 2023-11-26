/* eslint-disable max-len */
import Deck from '../../components/Deck';
import Images from '../../components/Images';
import Title from '../../components/Title';
import style from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={style.profile} id="Profile">
      <Images />
      <Title text="Maestro en Código: Desarrollador Full Stack" />
      <Deck text="Soy un apasionado Desarrollador Full Stack con experiencia sólida en tecnologías clave como React, Node.js, Express, Redux, Sequelize, PostgreSQL, TypeScript, Docker, Figma, Google Cloud (GCloud), Sass y Next.js. Mi enfoque integral y habilidades versátiles me permiten crear soluciones completas y eficientes para aplicaciones web." />
      <Deck text="Mi perspectiva analítica se combina con un enfoque carismático y una capacidad observadora, lo que me permite comprender las necesidades del usuario y desarrollar interfaces intuitivas y atractivas. Además, mi sinceridad y atención a los detalles garantizan la entrega de productos de alta calidad." />
      <Deck text="Soy una persona profundamente comprometida con el aprendizaje continuo. Constantemente busco oportunidades para mejorar mis habilidades técnicas y expandir mi conocimiento en nuevas tecnologías. Considero que la curiosidad y el deseo de crecimiento son fundamentales en un campo tan dinámico como la tecnología." />
      <Deck text="Mi ética laboral se basa en la dedicación y la perseverancia. Me enorgullezco de ser un estudiante constante, siempre dispuesto a sumergirme en nuevos desafíos y trabajar arduamente para alcanzar los objetivos planteados. Disfruto colaborando en equipos multidisciplinarios, donde mi compromiso y pasión por lo que hago se ven reflejados en los resultados obtenidos." />
      <Deck text="Estoy entusiasmado por continuar mi trayectoria profesional en un entorno que fomente la innovación y el crecimiento. Busco oportunidades que me desafíen a aplicar mis habilidades técnicas mientras colaboro con equipos dinámicos y creativos." />
    </div>
  );
};

export default Profile;
