import Project from '../../components/Project';
import PropTypes from 'prop-types';
import Title from '../../components/Title';
import projectsData from '../../datalist/projectsData.json';
import style from './Projects.module.scss';

const Projects = ({ setShowModal, setModalInfo }) => {
  const { title, projects } = projectsData;

  const getProjects = () =>
    projects.map((project, i) => (
      <Project
        key={`projects-${i}`}
        setModalInfo={setModalInfo}
        setShowModal={setShowModal}
        {...project}
      />
    ));

  return (
    <div className={style.projects} id="Proyectos">
      <Title text={title} />
      {getProjects()}
    </div>
  );
};

Projects.propTypes = {
  setModalInfo: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default Projects;
