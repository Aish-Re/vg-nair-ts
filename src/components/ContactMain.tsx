import { useState } from "react";
import OfficeCard from "./OfficeCard";

const offices = [
    {
        location : "Kottayam",
        address : `Logos Centre, 1st floor, Railway Station Road,
Near Collectorate, Kottayam, Pin:- 686001.`,
        phone : "+91 8606845454"
    },

    {
        location : "Cochin",
        address : `Chamber No. 103, KHCAA, Chamber Complex,
Near High Court of Kerala, Ernakulam, Pin:- 682031.`,
        phone : "+91 8606845454"
    },

    {
        location : "Thiruvananthapuram",
        address : `Ramanamadom Buildings,3rd Block,
Vadakkenada,Vasudeva Vilasam Rd, East Fort,
Pazhavandadi,Thiruvananthapuram,Kerala,695023`,
        phone : "+91 8606845454"
    }
]

const maps = [
    {
        location : "Kottayam",
        mapLink : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2316.782947142662!2d76.53060673399521!3d9.591776579381852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062bb48829a835%3A0xd8c123cccee187b8!2sVG%20Nair%20and%20Associates%20(Kottayam)!5e0!3m2!1sen!2sin!4v1781251548279!5m2!1sen!2sin"
    },

    {
        location : "Cochin",
        mapLink : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2022.2584115527907!2d76.27144349970757!3d9.985564644948305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d27ada158cb%3A0x42723a6d19405b39!2sVG%20Nair%20and%20Associates%20(Cochin)!5e0!3m2!1sen!2sin!4v1781259816978!5m2!1sen!2sin" 
    },

    {
        location : "Thiruvananthapuram",
        mapLink : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4647.72855042237!2d76.93938825876181!3d8.49305714294276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bba2b81e510d%3A0x1d05f12081cd7043!2sVG%20Nair%20%26%20Associates!5e0!3m2!1sen!2sin!4v1781251392837!5m2!1sen!2sin"
    }
]

interface ContactFormData{
    fullName : string;
    email : string;
    inquiry : string;
    message : string
}

function ContactMain(){
    const [selectedMap, setSelectedMap] = useState(2);

    const [formData, setFormData] = useState<ContactFormData> ({
        fullName : "",
        email : "",
        inquiry : "",
        message : ""
    })
    
    const [isSubmitted, setISubmitted] = useState(false);

    function handleSubmit(e : React.SubmitEvent) {
        e.preventDefault();
        if (formData.fullName.trim() === "" ) {
            alert("Enter the full name")
            return
        }

        if (formData.email.trim() === "") {
            alert("Enter the email")
            return
        }
        
        if (formData.inquiry === "") {
            alert("Select your inquiry type")
            return
        }

        if (formData.message.trim() === "") {
            alert("Enter your inquiry message")
            return
        }

        console.log(formData);

        setISubmitted(true);


    }

    function handleChange(e:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement | HTMLSelectElement>){
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    function handleFieldCick() {
        setISubmitted(false);
    }


    return(
        <section className="contact-content">
            <div className="contact-form">
                <h2>Request a Private Consultation</h2>
                <p>Your narrative deserves the utmost discretion and expert attention. Detail your requirements below; our partners will review your file personally.</p>

                <form onSubmit= {handleSubmit}>
                    <label>FULL NAME</label>
                    <input type="text"
                           name="fullName"
                           placeholder="Enter your name"
                           value={formData.fullName}
                           onChange={handleChange}
                           onClick={handleFieldCick}
                    />

                    <label>PROFESSIONAL EMAIL</label>
                    <input type="email"
                           name="email"
                           placeholder="Enter your email"
                           value={formData.email}
                           onChange={handleChange}
                           onClick={handleFieldCick}
                    />

                    <label>AREA OF INQUIRY</label>
                    <select 
                            name="inquiry"
                            value={formData.inquiry}
                            onChange={handleChange}
                            onClick={handleFieldCick}
                    >
                        <option value="">Select Inquiry</option>
                        <option>Corporate Law</option>
                        <option>Family Law</option>
                        <option>Property Law</option>
                    </select>

                    <label>STRATEGIC MESSAGE</label>
                    <textarea placeholder="Briefly describe the legal landscape"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              onClick={handleFieldCick}
                    ></textarea>

                    <button className="submit">Submit Inquiry → </button>
                    
                    {isSubmitted && (
                        <p>Your inquiry has been submitted successfully.</p>
                    )}



                </form>
            </div>

            <div className="contact-address">
                <p className="contact-address-header">FOUNDATION & HERITAGE</p>
                <h2>Trivandrum Headquarters</h2>
                <p className="contact-address-description">Celebrating a 48-year legacy of legal excellence in the heart of Kerala. Our founding chambers remain the spiritual and intellectual core of Lex Vanguard.</p>
                <p className="contact-office-address">Ramanamadom Buildings,3rd Block,<br/> Vadakkenada,Vasudeva Vilasam Rd, East Fort,<br/>Pazhavandadi,Thiruvananthapuram,Kerala,695023</p>
                <p className="contact-office-phone">+91 8606845454</p>
                <p className="contact-address-header">GLOBAL FOOTPRINT</p>

                {offices.map((office,index) => (
                    <OfficeCard 
                        key={index}
                        location={office.location}
                        address={office.address}
                        phone={office.phone}
                    />
                ))}


                <iframe className="map-display" src={maps[selectedMap].mapLink} />
                <div className="mapname-display">
                    <button className="prev-button" 
                        onClick={() => setSelectedMap(selectedMap===0 ? maps.length - 1 : selectedMap-1)}>Prev</button>
                    {maps[selectedMap].location}
                    <button className="next-button" 
                        onClick={() => setSelectedMap(selectedMap === maps.length-1 ? 0 : selectedMap+1)}>Next</button>
                </div>

            </div>
        </section>
    );
}

export default ContactMain;