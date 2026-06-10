import LeadershipImage from "../assets/about-legacy.jpg"

type LeadershipCardProps = {
    name : string,
    field : string
};

function LeadershipCard(props : LeadershipCardProps) {
    return(
        <div className="leadershipcard">
            <img src={LeadershipImage} />
            <h2>{props.name}</h2>
            <p>{props.field}</p>
        </div>
    );
}

export default LeadershipCard;