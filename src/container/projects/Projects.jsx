import Project from '../../components/Project';
import Title from '../../components/Title';
import projectsData from '../../datalist/projectsData.json';
import style from './Projects.module.scss';

const Projects = () => {
  const { title, projects } = projectsData;

  const getProjects = () =>
    projects.map((project, i) => (
      <Project key={`projects-${i}`} {...project} />
    ));

  return (
    <div className={style.projects} id="Proyectos">
      <Title text={title} />
      {getProjects()}
    </div>
  );
};

export default Projects;
