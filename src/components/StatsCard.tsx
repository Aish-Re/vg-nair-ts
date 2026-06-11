type StatsCardProps = {
    number : string,
    about : string,
    color : string
};

function StatsCard(props : StatsCardProps) {
    return (
        <div className={`statscard ${props.color}`}>
            <h1>{props.number}</h1>
            <p>{props.about}</p>
        </div>
    );
}

export default StatsCard;