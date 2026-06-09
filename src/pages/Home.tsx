import "../App.css"
import Hero from "../components/Hero";
import Domain from "../components/Domain";
import Guardians from "../components/Guardian";
import Associates from "../components/Associate";
import Internship from "../components/Internship";
import Legacy from "../components/Legacy";
import ContactCard from "../components/ContactCard";

function Home() {
  return(
    <>
      <Hero />
      <Domain />
      <Guardians />
      <Associates />
      <Internship />
      <Legacy />
      <ContactCard />
    </>
  )
}

export default Home;