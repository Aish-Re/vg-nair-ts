import AboutLegacyImage from "../assets/about-legacy.jpg"

function AboutLeagcy(){
    return(
        <section className="about-legacy">
            <div className="about-legacy-img">
                <img src={AboutLegacyImage}/>
            </div>

            <div className="about-legacy-content">
                <h1>A Legacy of Legal Excellence</h1>
                <div className="about-legacy-line"></div>
                <p>VG Nair & Associates was founded with a commitment to justice, transparency, and client-centered advocacy.</p>
                <p>From humble beginnings to becoming one of the trusted legal firms in Trivandrum, our journey reflects dedication and professionalism.</p>
                <div className="about-legacy-quote">
                    <p>"Justice is not just a service — it is our responsibility."</p>
                </div>
            </div>
        </section>
    );
}

export default AboutLeagcy;