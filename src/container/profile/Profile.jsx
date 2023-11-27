import Deck from '../../components/Deck';
import Images from '../../components/Images';
import Title from '../../components/Title';
import profileData from '../../datalist/profileData.json';
import style from './Profile.module.scss';

const Profile = () => {
  const { title, deck } = profileData;

  const getDeck = () =>
    deck.map((paragraph, i) => (
      <Deck key={`proflie-deck${i}`} text={paragraph} />
    ));

  return (
    <div className={style.profile} id="Perfil">
      <Images />
      <Title text={title} />
      {getDeck()}
    </div>
  );
};

export default Profile;
