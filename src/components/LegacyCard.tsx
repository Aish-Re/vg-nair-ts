type LegacyCardProps = {
    heading : string,
    description : string
};

function LegacyCard(props : LegacyCardProps){
    return (
        <div className="legacycard">
            <p className="legacy-heading">{props.heading}</p>
            <p className="legacy-description">{props.description}</p>
        </div>
    )
}

export default LegacyCard;