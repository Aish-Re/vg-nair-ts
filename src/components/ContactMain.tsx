function ContactMain(){
    return(
        <section className="contact-content">
            <div className="contact-form">
                <h2>Request a Private Consultation</h2>
                <p>Your narrative deserves the utmost discretion and expert attention. Detail your requirements below; our partners will review your file personally.</p>

                <form>
                    <label>FULL NAME</label>
                    <input type="text"
                           placeholder="Enter your name"
                    />

                    <label>PROFESSIONAL EMAIL</label>
                    <input type="email"
                           placeholder="Enter your email"
                    />

                    <label>AREA OF INQUIRY</label>
                    <select>
                        <option>Select Inquiry</option>
                        <option>Corporate Law</option>
                        <option>Family Law</option>
                        <option>Property Law</option>
                    </select>

                    <label>STRATEGIC MESSAGE</label>
                    <textarea placeholder="Briefly describe the legal landscape"></textarea>

                    <button className="submit">Submit Inquiry →</button>

                </form>
            </div>

            <div className="contact-address">
                <p className="contact-address-tagline">FOUNDATION & HERITAGE</p>
                <h2>Trivandrum Headquarters</h2>
                <p className="contact-address-description">Celebrating a 48-year legacy of legal excellence in the heart of Kerala. Our founding chambers remain the spiritual and intellectual core of Lex Vanguard.</p>
                <p className="contact-address-head">Ramanamadom Buildings,3rd Block,<br/> Vadakkenada,Vasudeva Vilasam Rd, East Fort,<br/>Pazhavandadi,Thiruvananthapuram,Kerala,695023<br/>+91 8606845454</p>
            </div>
        </section>
    );
}

export default ContactMain;