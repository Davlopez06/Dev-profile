import { useEffect, useState } from 'react';
import AboutMe from '../container/aboutMe';
import ContactMe from '../container/contactMe';
import Education from '../container/education';
import Experence from '../container/experence';
import Modal from '../container/modal';
import Navbar from '../container/navbar';
import Profile from '../container/profile';
import Projects from '../container/projects';
import Skills from '../container/skills';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    name: '',
    color: '',
    description: [],
    images: '',
    video: '',
    url: '',
    repositorio: '',
  });

  const getModal = () => {
    if (!showModal) return false;

    return <Modal {...modalInfo} setShowModal={setShowModal} />;
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (showModal) {
        document.documentElement.style.overflowY = 'hidden';
        document.body.style.overflowY = 'hidden';
      } else {
        document.documentElement.style.overflowY = '';
        document.body.style.overflowY = '';
      }
    }
  }, [showModal]);

  return (
    <div>
      <Navbar />
      <Profile />
      <Experence />
      <Education />
      <Skills />
      <Projects setShowModal={setShowModal} setModalInfo={setModalInfo} />
      <AboutMe />
      <ContactMe />
      {getModal()}
    </div>
  );
};

export default Home;
