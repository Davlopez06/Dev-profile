import Project from '../../components/Project';
import Title from '../../components/Title';
import projectsData from '../../datalist/projectsData.json';

const Projects = () => {
  const { title, projects } = projectsData;

  const getProjects = () =>
    projects.map((project, i) => (
      <Project key={`projects-${i}`} {...project} />
    ));

  return (
    <div id="Proyectos">
      <Title text={title} />
      {getProjects()}
    </div>
  );
};

export default Projects;
