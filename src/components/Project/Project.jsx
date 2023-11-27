import PropTypes from 'prop-types';
// import style from './Project.module.scss';
import Subtitle from '../Subtitle';
import Carousel from '../Carousel';

const Project = ({ subtitle = '', project = '' }) => {
  const getCarousel = () => <Carousel project={project} subtitle={subtitle} />;

  return (
    <div>
      <Subtitle text={subtitle} />
      {getCarousel()}
    </div>
  );
};

Project.propTypes = {
  subtitle: PropTypes.string,
  project: PropTypes.array,
};

export default Project;
