import Signet from "./Signet";
import listeSignets from "./data/listeSignets.json";

export default function GrilleSignets(props){
    return(
        <div>
            {listeSignets.map(signet=>
            <Signet id={signet.id} nom={signet.nom} couleur={signet.couleur} dateMod={signet.dateMod}/>
            )}
        
        </div>
        
    );
}