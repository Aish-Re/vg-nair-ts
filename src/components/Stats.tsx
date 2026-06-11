import StatsCard from "./StatsCard";

const  stats = [
    {
        number : "1500+",
        about : "Cases Handled",
        color : "blue"
    },

    {
        number : "25+",
        about : "Years Experience",
        color : "white"
    },

    {
        number : "98%",
        about : "Success Rate",
        color : "blue"
    },

    {
        number : "3",
        about : "Office Locations",
        color : "white"
    }
]

function Stats() {
    return(
        <section className="stats">
            <div className="statscards">
                {stats.map((stat,index) => (
                    <StatsCard
                        key={index}
                        number={stat.number}
                        about={stat.about}
                        color={stat.color}
                    />
                ))}
            </div>
        </section>
    );
}

export default Stats;