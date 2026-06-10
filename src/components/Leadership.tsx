import LeadershipCard from "./LeadershipCard";

const leaderships = [
    {
        name : "Adv. VG Nair",
        field : "Founder & Senior Advocate"
    },

    {
        name : "Senior Associate",
        field : "Corporate Law"
    },

    {
        name : "Legal Consultant",
        field : "Family Law"
    },

    {
        name : "Advisor",
        field : "Litigation"
    }
]

function Leadership() {
    return(
        <section className="leadership">
            <div className="leadership-content">
                <h1>Our Leadership</h1>
                <div className="leadership-line"></div>
                <div className="leadershipcards">
                    {leaderships.map((leadership,index) => (
                        <LeadershipCard 
                            key = {index}
                            name = {leadership.name}
                            field = {leadership.field}
                        />
                        ))}
                </div>
                
            </div>
        
        </section>
    );
}

export default Leadership;