type OfficeCardProps = {
    location : string;
    address : string;
    phone : string;
};

function OfficeCard (props : OfficeCardProps) {
    return(
        <section className="officecard">
            <h3 className="contact-office-location">{props.location}</h3>
            <p className="contact-office-address">{props.address}</p>
            <p className="contact-office-phone">{props.phone}</p>
        </section>
    );
}

export default OfficeCard;