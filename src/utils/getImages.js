import Paso1 from '../asets/images/Paso1.png';
import Paso2 from '../asets/images/Paso2.png';
import Paso3 from '../asets/images/Paso3.png';
import Paso4 from '../asets/images/Paso4.png';
import General1 from '../asets/images/General1.png';
import General2 from '../asets/images/General2.png';
import Balotaje1 from '../asets/images/Balotaje1.png';
import Balotaje2 from '../asets/images/Balotaje2.png';
import Balotaje3 from '../asets/images/Balotaje3.png';
import StarWars from '../asets/images/Star-Wars.png';

export default function getImages(images = '') {
  if (images === '') return null;

  if (images === 'elections-paso')
    return [
      <img key="img-paso1" src={Paso1?.src} alt="Paso1" />,
      <img key="img-paso2" src={Paso2?.src} alt="Paso2" />,
      <img key="img-paso3" src={Paso3?.src} alt="Paso3" />,
      <img key="img-paso4" src={Paso4?.src} alt="Paso4" />,
    ];

  if (images === 'elections-general')
    return [
      <img key="img-general1" src={General1?.src} alt="General1" />,
      <img key="img-general2" src={General2?.src} alt="General2" />,
    ];

  if (images === 'elections-balotaje')
    return [
      <img key="img-balotaje1" src={Balotaje1?.src} alt="Balotaje1" />,
      <img key="img-balotaje2" src={Balotaje2?.src} alt="Balotaje2" />,
      <img key="img-balotaje3" src={Balotaje3?.src} alt="Balotaje3" />,
    ];

  if (images === 'Star-Wars')
    return [<img key="img-starwars" src={StarWars?.src} alt="StarWars" />];
}
