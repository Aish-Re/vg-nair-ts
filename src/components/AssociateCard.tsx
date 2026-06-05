type AssociateCardProps = {
    name : string,
    about : string
};

function AssociateCard(props : AssociateCardProps){
    return(
        <div className="associatecard">
            <p className="associate-name">{props.name}</p>
            <p className="associate-about">{props.about}</p>
        </div>
    )
}

export default AssociateCard;