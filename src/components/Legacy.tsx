import LegacyCard from "./LegacyCard";

const legacies = [
    {
        heading : "48-Year Legacy",
        description : "Founded in 1976, our firm has stood as a pillar of Trivandrum's legal landscape."
    },
    {
        heading : "Strategic Counsel",
        description : "Businesses and individuals entrust us to navigate complex legal terrains."
    },
]

function Legacy() {
    return(
        <section className="legacy">

            <div className="legacy-left">
                <div className="legacy-header">
                    <h1>The Pre-eminent Choice <br/>in the Capital</h1>
                </div>

                <div className="legacy-line"></div>

                <div className="legacycards">
                    {legacies.map((legacy,index) => (
                        <LegacyCard
                            key={index}
                            heading = {legacy.heading}
                            description= {legacy.description}
                        />
                    ))}
                </div>
            </div>

            <div className="legacy-right">
                <div className="legacy-quote">
                    <p>"Lex Vanguard is more than a law firm; it is an institution of integrity. Their presence in Trivandrum is defined by a commitment to the sovereign archive of justice, ensuring every client feels the weight of authority on their side."</p>
                    
                    <div className="legacy-author">
                        <h4>Chief Legal Liaison</h4>
                        <p>Regional Regulatory Authority</p>
                    </div>

                </div>
            </div>




            
        </section>
    );
}

export default Legacy;