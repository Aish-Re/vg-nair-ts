import InternshipImage from "../assets/eagle.jpg";

function Internship(){
    return(
        <section className="internship">
            <div className="internship-content">
                <h3>FUTURE LEADERS ARCHIVE</h3>
                <h1>The VG Nair <br/> Internship Program</h1>
                <p className="internship-description">We offer a prestigious gateway for law students to immerse themselves in high-stakes litigation and strategic advisory. Our interns don't just observe—they research, write, and contribute to cases that define regional law.</p>
                <ul className="internship-benefits">
                    <li>Rigorous Mentorship</li>
                    <li>Critical Experience</li>
                </ul>
                <button className="internship-apply">
                    <h3>Apply for Intake 2024</h3>
                </button>
            </div>

            <div className="internship-img">
                <img src={InternshipImage}/>
            </div>

        </section>
    );
}

export default Internship;