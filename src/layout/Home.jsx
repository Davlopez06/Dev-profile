import Education from '../container/education';
import Experence from '../container/experence';
import Navbar from '../container/navbar';
import Profile from '../container/profile';
import Projects from '../container/projects';
import Skills from '../container/skills';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <Experence />
      <Education />
      <Skills />
      <Projects />
      Area dev david
    </div>
  );
};

export default Home;
