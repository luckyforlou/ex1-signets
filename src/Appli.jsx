import './Appli.scss';
import BtnAjoutSignet from './composants/BtnAjoutSignet';
import Entete from './composants/Entete';
import GrilleSignets from './composants/GrilleSignets';

export default function Appli() {
  return (
    <div className="Appli">
       <Entete/>
       <GrilleSignets/>
       <BtnAjoutSignet></BtnAjoutSignet>
    </div>
  );
}
