import Card from "./Card";

const foundations = [
    {
        title : "Legal Expertise",
        description : "Delivering professional and strategic legal solutions.",
        color : "blue"
    },

    {
        title : "Client First",
        description : "We prioritize transparency and client trust above all.",
        color : "white"
    },

    {
        title : "Integrity",
        description : "Ethical practice and responsible legal representation.",
        color : "blue"
    }
]

function Foundation(){
    return(
        <section className="foundation">
            <h1>Foundation of Excellence</h1>
            <div className="foundation-line"></div>

            <div className="foundationcards">
                {foundations.map((foundation,index) => (
                    <Card 
                        key={index}
                        title={foundation.title}
                        description={foundation.description}
                        color={foundation.color}
                    />
                ))}
            </div>

        </section>
    );
}

export default Foundation;