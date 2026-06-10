import StatsCard from "./StatsCard";

const  stats = [
    {
        number : "1500+",
        about : "Cases Handled",
        color : ""
    },

    {
        number : "25+",
        about : "Years Experience",
        color : ""
    },

    {
        number : "98%",
        about : "Success Rate",
        color : ""
    },

    {
        number : "3",
        about : "Office Locations",
        color : ""
    }
]

function Stats() {
    return(
        <section className="stats">
            <div className="statscards">

            </div>
        </section>
    );
}

export default Stats;