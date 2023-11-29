import PropTypes from 'prop-types';
// import style from './Project.module.scss';
import Subtitle from '../Subtitle';
import Carousel from '../Carousel';

const Project = ({
  project = '',
  setModalInfo,
  setShowModal,
  subtitle = '',
}) => {
  const getCarousel = () => (
    <Carousel
      project={project}
      setModalInfo={setModalInfo}
      setShowModal={setShowModal}
      subtitle={subtitle}
    />
  );

  return (
    <div>
      <Subtitle text={subtitle} />
      {getCarousel()}
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.array,
  setModalInfo: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
};

export default Project;
