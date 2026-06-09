import AssociateCard from "./AssociateCard";

const associates = [
    {
        name : "Adv. V. Sivakumarr",
        about : "He completed LLB from Kerala Law Academy. He is our expert in Document verification and Legal opinions" 
    },

    {
        name : "Adv.M.S.Udayakumar",
        about : "Did his MA from Kerala University and LLB from Kerala Law Academy. He is our expert in Tribunal matters, Rent Control Law and Civil Procedure Code" 
    },

    {
        name : "Adv. Sanoj S.S.",
        about : "Did his BA LLB Hons from School of Indian Legal Thought, M.G.University, Kottayam and LLM in Crimes from St. Paul's College, Ernakulum.He practices in Criminal cases involving Indian Penal Code." 
    },

    {
        name : "Mr Abhilash P.V.",
        about : "Mr. Abhilash P. V. is our expert in Intellectual property Right Registration, and he is also a management consultant" 
    }
]

function Associates(){
    return (
        <section className="associates">
            <div className="associates-header">
                <h2>Associate Advocates</h2>
            </div>

            <div className="associatecards">
                {associates.map((associate,index) => (
                    <AssociateCard 
                        key={index}
                        name = {associate.name}
                        about = {associate.about}
                    />
                ))}
            </div>

        </section>
    );
}

export default Associates;