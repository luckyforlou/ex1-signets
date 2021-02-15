import './Appli.scss';
import Entete from './composants/Entete';
import GrilleSignets from './composants/GrilleSignets';

export default function Appli() {
  return (
    <div className="Appli">
       <Entete/>
       <GrilleSignets/>
    </div>
  );
}
