export default function Signet(props){
    return(
        <div className="signet">
            <h2>{props.nom}</h2>
            <p>{props.dateMod}</p>
            <img src={'img/' + props.id + '.jpg'} alt="image article"/>
        </div>
    )
}