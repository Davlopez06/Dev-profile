import close from '../../asets/images/close.png';
import PropTypes from 'prop-types';
import style from './Modal.module.scss';
import Title from '../../components/Title';
import Deck from '../../components/Deck';
import getImages from '../../utils/getImages';
import getVideo from '../../utils/getVideo';
import github from '../../asets/images/github.png';

const Modal = ({
  description = [],
  images = '',
  name = '',
  repositorio = '',
  setShowModal,
  url = '',
  video = '',
}) => {
  const getTitle = () => {
    if (name === '') return null;

    return <Title text={name} />;
  };

  const getDescription = () => {
    if (description.length === 0) return null;

    return description.map((des, i) => (
      <Deck key={`modal-descriotion-${i}`} text={des} />
    ));
  };

  const getImagesModal = () => {
    if (images === '') return null;

    const getImg = getImages(images).map(img => img);

    return <div className={style['modal-images']}>{getImg}</div>;
  };

  const getVideoModal = () => {
    if (video === '') return null;

    return <div className={style['modal-video']}>{getVideo(video)}</div>;
  };

  const getUrl = () => {
    if (url === '') return null;

    return (
      <a className={style['modal-url']} href={url}>
        Miralo aquí
      </a>
    );
  };

  const getRepositorio = () => {
    if (repositorio === '') return null;

    return (
      <a className={style['modal-repo']} href={repositorio}>
        <p>Miralo el codigo</p>
        <img src={github?.src} alt="github" />
      </a>
    );
  };

  return (
    <div className={style.modal}>
      <div className={style['modal-content']}>
        <img
          className={style.close}
          src={close?.src}
          alt="close"
          onClick={() => setShowModal(false)}
        />
        {getTitle()}
        {getDescription()}
        {getImagesModal()}
        {getVideoModal()}
        <div className={style['modal-links']}>
          {getUrl()}
          {getRepositorio()}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  color: PropTypes.string,
  description: PropTypes.array,
  images: PropTypes.string,
  name: PropTypes.string,
  repositorio: PropTypes.string,
  setShowModal: PropTypes.func.isRequired,
  url: PropTypes.string,
  video: PropTypes.string,
};

export default Modal;
