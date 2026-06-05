import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Domain from "./components/Domain";
import Guardians from "./components/Guardian";
import Associates from "./components/Associate";
import Internship from "./components/Internship";

function App() {
  return(
    <>
      <Navbar />
      <Hero />
      <Domain />
      <Guardians />
      <Associates />
      <Internship />
    </>
  )
}

export default App;